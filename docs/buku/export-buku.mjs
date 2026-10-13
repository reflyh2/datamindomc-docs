// Menyusun manual ValasPro menjadi satu buku PDF (Pandoc → Typst).
//
// Urutan dan isi buku diambil dari sidebar di docs/.vitepress/config.ts:
// setiap grup teratas menjadi satu bab, setiap halaman menjadi subbab.
//
// Pemakaian:
//   node docs/buku/export-buku.mjs                        semua bab
//   node docs/buku/export-buku.mjs --bab "Mulai,Shift"    hanya bab tertentu
//   node docs/buku/export-buku.mjs --out nama.pdf
//
// Butuh `pandoc` dan `typst` di PATH, atau tunjuk lewat env PANDOC / TYPST.

import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import config from '../.vitepress/config.ts'

const BUKU = dirname(fileURLToPath(import.meta.url))
const ROOT = join(BUKU, '..', '..')
const SRC = join(ROOT, 'docs', 'src')
const BUILD = join(BUKU, '.build')
const PANDOC = process.env.PANDOC || 'pandoc'
const TYPST = process.env.TYPST || 'typst'

const args = process.argv.slice(2)
const opt = name => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}
const pilihBab = opt('bab')?.split(',').map(s => s.trim().toLowerCase())
const outFile = join(ROOT, 'pdf-vitepress', opt('out') || 'panduan-valaspro-buku.pdf')

// --- Sidebar → daftar bab dan halaman --------------------------------------

function kumpulkanHalaman(items, out = []) {
  for (const item of items) {
    if (item.items) kumpulkanHalaman(item.items, out)
    else if (item.link) out.push(item.link)
  }
  return out
}

const bab = config.themeConfig.sidebar
  .map(grup => ({ judul: grup.text, halaman: kumpulkanHalaman(grup.items) }))
  .filter(b => !pilihBab || pilihBab.includes(b.judul.toLowerCase()))

if (!bab.length) {
  console.error(`Tidak ada bab yang cocok dengan --bab "${opt('bab')}".`)
  process.exit(1)
}

// --- Markdown VitePress → Markdown Pandoc ----------------------------------

const idHalaman = link => 'hal' + link.replace(/[^a-z0-9]+/gi, '-').replace(/-$/, '')

// <Alur judul="..." :langkah="[...]" /> → blok Typst yang memanggil #alur()
function ubahAlur(md) {
  return md.replace(/<Alur\b([\s\S]*?)\/>/g, (_, attrs) => {
    const judul = attrs.match(/\bjudul="([^"]*)"/)?.[1] ?? ''
    const langkahSrc = attrs.match(/:langkah="([\s\S]*)"/)?.[1]
    // Isinya literal array JavaScript (kutip tunggal), bukan JSON.
    const langkah = new Function(`return ${langkahSrc}`)()
    const data = JSON.stringify({ judul, langkah })
    return '\n```{=typst}\n#alur(json(bytes(' + JSON.stringify(data) + ')))\n```\n'
  })
}

// ::: warning Judul → ::: {.callout .warning title="Judul"}
function ubahCallout(md) {
  return md.replace(/^::: *(info|tip|warning|danger|details)\b *(.*)$/gm, (_, jenis, judul) => {
    const t = judul.trim().replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    return `::: {.callout .${jenis}${t ? ` title="${t}"` : ''}}`
  })
}

// Lebar cetak gambar: tangkapan layar selebar ~1800 px memenuhi lebar teks,
// yang lebih kecil diperkecil sebanding, dan tingginya dibatasi.
const LEBAR_TEKS_CM = 16.6
const TINGGI_MAKS_CM = 11
function lebarGambar(path) {
  const buf = readFileSync(path)
  if (buf.toString('ascii', 1, 4) !== 'PNG') return ''
  const w = buf.readUInt32BE(16)
  const h = buf.readUInt32BE(20)
  const cm = Math.min(LEBAR_TEKS_CM, (w * LEBAR_TEKS_CM) / 1800, (TINGGI_MAKS_CM * w) / h)
  return `{width=${cm.toFixed(1)}cm}`
}

function ubahHalaman(link) {
  let md = readFileSync(join(SRC, `${link}.md`), 'utf8')
  md = md.replace(/^---\n[\s\S]*?\n---\n/, '')
  md = ubahAlur(md)
  md = ubahCallout(md)
  // Gambar dari public/ dirujuk dari akar proyek Typst (--root), dengan lebar
  // yang dihitung dari ukuran piksel supaya dialog kecil tidak ikut melebar.
  md = md.replace(/(!\[[^\]]*\]\()\/([^)\s]+)\)/g, (_, awal, file) =>
    `${awal}/docs/src/public/${file})${lebarGambar(join(SRC, 'public', file))}`)
  // Judul halaman (H1) menjadi subbab: geser semua heading satu tingkat.
  md = md.replace(/^(#{1,5}) /gm, '#$1 ')
  // Beri id pada judul halaman supaya tautan antarhalaman bisa diarahkan ke sini.
  md = md.replace(/^## (.+)$/m, (_, judul) => `## ${judul} {#${idHalaman(link)}}`)
  return `::: {.halaman data-link="${link}"}\n${md}\n:::\n`
}

let markdown = ''
for (const b of bab) {
  markdown += `\n# ${b.judul} {.bab}\n\n`
  for (const link of b.halaman) markdown += ubahHalaman(link) + '\n'
}

// --- Pandoc → Typst → PDF ---------------------------------------------------

mkdirSync(BUILD, { recursive: true })
mkdirSync(dirname(outFile), { recursive: true })
const mdFile = join(BUILD, 'buku.md')
const bodyFile = join(BUILD, 'isi.typ')
writeFileSync(mdFile, markdown)

execFileSync(PANDOC, [
  mdFile,
  '-f', 'markdown',
  '-t', 'typst',
  '--lua-filter', join(BUKU, 'vitepress.lua'),
  '--wrap=none',
  '-o', bodyFile,
], { stdio: 'inherit' })

// isi.typ dievaluasi dalam lingkupnya sendiri, jadi komponen perlu diimpor.
// Pandoc memusatkan tabel (dan isi selnya); buku ini memakai rata kiri.
const isi = readFileSync(bodyFile, 'utf8').replaceAll('align(center)[#table(', '[#table(')
writeFileSync(bodyFile, '#import "../komponen.typ": *\n\n' + isi)

const tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
execFileSync(TYPST, [
  'compile',
  '--root', ROOT,
  '--font-path', join(BUKU, 'fonts'),
  '--ignore-system-fonts',
  '--input', `tanggal=${tanggal}`,
  join(BUKU, 'buku.typ'),
  outFile,
], { stdio: 'inherit' })

console.log(`Buku tersimpan di ${relative(ROOT, outFile)} (${bab.map(b => b.judul).join(', ')})`)
