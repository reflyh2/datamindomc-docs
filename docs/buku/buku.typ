// Tata letak buku panduan ValasPro. Isi bab dibuat oleh export-buku.mjs
// ke .build/isi.typ; jangan jalankan file ini langsung.

#import "komponen.typ": *

#let judul-buku = "Panduan Penggunaan ValasPro"
#let tanggal = sys.inputs.at("tanggal", default: "")

#set document(title: judul-buku, author: "ValasPro")
#set text(font: "Plus Jakarta Sans", size: 9.5pt, lang: "id", fill: warna.tinta)
#set par(leading: 0.72em, spacing: 1.15em)
#show raw: set text(font: "DejaVu Sans Mono", size: 0.9em)
#show strong: set text(weight: "bold")

// --- Sampul -----------------------------------------------------------------

#page(margin: 0pt, header: none, footer: none)[
  #place(top, block(width: 100%, height: 64%, fill: warna.hutan, inset: (x: 2.4cm, top: 3cm))[
    #text(size: 10pt, weight: "bold", fill: warna.mint, tracking: 0.15em)[MANUAL PENGGUNA]
    #v(0.6cm)
    #text(size: 38pt, weight: "extrabold", fill: white, hyphenate: false)[
      #set par(leading: 0.35em)
      Panduan Penggunaan ValasPro
    ]
    #v(0.8cm)
    #block(width: 75%, text(size: 13pt, fill: white.transparentize(15%))[
      Langkah kerja harian di usaha penukaran valas, dari buka hari, transaksi, sampai laporan ke regulator.
    ])
  ])
  #place(top + left, dy: 64%, rect(width: 100%, height: 6pt, fill: warna.daun, stroke: none))
  #place(bottom + left, dx: 2.4cm, dy: -2.4cm)[
    #image("/docs/src/public/logo-wordmark.png", width: 5.5cm)
    #v(0.5cm)
    #text(size: 9pt, fill: warna.redup)[
      #if tanggal != "" [Diperbarui #tanggal \ ]
      mc-docs.datamindo.com
    ]
  ]
]

// --- Halaman isi --------------------------------------------------------------

#let bab-di-halaman-ini() = {
  let h = here().page()
  query(heading.where(level: 1, outlined: true)).any(it => it.location().page() == h)
}

#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2.3cm, x: 2.2cm),
  header: context {
    if bab-di-halaman-ini() { return }
    let sebelum = query(heading.where(level: 1, outlined: true).before(here()))
    set text(size: 7.5pt, fill: warna.redup)
    grid(
      columns: (1fr, auto),
      if sebelum.len() > 0 {
        let b = sebelum.last()
        [Bab #counter(heading).at(b.location()).first() · #b.body]
      },
      judul-buku,
    )
    v(-4pt)
    line(length: 100%, stroke: 0.5pt + warna.garis)
  },
  footer: context {
    set text(size: 8pt, fill: warna.redup)
    let n = counter(page).display()
    align(if calc.odd(here().page()) { right } else { left }, text(weight: "bold", fill: warna.hutan, n))
  },
)

// Judul: bab (H1), halaman manual (H2), lalu subjudul tanpa nomor.
#set heading(numbering: (..n) => {
  let n = n.pos()
  if n.len() <= 2 { n.map(str).join(".") }
})

#show heading.where(level: 1, outlined: true): it => {
  pagebreak(weak: true)
  v(3cm)
  text(size: 10pt, weight: "bold", fill: warna.daun, tracking: 0.15em)[BAB #counter(heading).display("1")]
  v(0.3cm)
  text(size: 30pt, weight: "extrabold", fill: warna.hutan, it.body)
  v(0.2cm)
  line(length: 3cm, stroke: 3pt + warna.daun)
  v(0.8cm)

  // Daftar halaman di bab ini.
  context {
    let berikut = query(heading.where(level: 1, outlined: true).after(here(), inclusive: false))
    let sel = heading.where(level: 2).after(here())
    if berikut.len() > 0 { sel = sel.before(berikut.first().location(), inclusive: false) }
    set text(size: 10pt)
    for hal in query(sel) {
      let nomor = counter(heading).at(hal.location()).map(str).join(".")
      block(above: 0.55em, below: 0.55em, link(hal.location())[
        #box(width: 2.2em, text(fill: warna.daun, weight: "semibold", nomor))#hal.body
        #box(width: 1fr, repeat(text(fill: warna.garis)[.#h(3pt)]))
        #text(fill: warna.redup, str(counter(page).at(hal.location()).first()))
      ])
    }
  }
  pagebreak()
}

#show heading.where(level: 2): it => {
  v(1.4em, weak: true)
  block(sticky: true, below: 1.1em, width: 100%)[
    #text(size: 9pt, weight: "bold", fill: warna.daun)[#counter(heading).display()]
    #v(-0.4em)
    #text(size: 17pt, weight: "extrabold", fill: warna.hutan, it.body)
    #v(-0.3em)
    #line(length: 100%, stroke: 0.8pt + warna.garis)
  ]
}

#show heading.where(level: 3): it => block(sticky: true, above: 1.6em, below: 0.8em,
  text(size: 12pt, weight: "bold", fill: warna.hutan, it.body))

#show heading.where(level: 4): it => block(sticky: true, above: 1.3em, below: 0.7em,
  text(size: 10pt, weight: "bold", it.body))

#show heading.where(level: 5): it => block(sticky: true, above: 1.2em, below: 0.6em,
  text(size: 9.5pt, weight: "semibold", fill: warna.redup, it.body))

// Tautan antarhalaman: hijau, dengan nomor halaman tujuan (berguna saat dicetak).
#show link: it => {
  if type(it.dest) == label {
    text(fill: warna.daun, weight: "medium", it)
    context text(size: 0.85em, fill: warna.redup)[ (hlm. #counter(page).at(it.dest).first())]
  } else {
    text(fill: warna.daun, it)
  }
}

// Gambar: bingkai tipis, keterangan di bawah.
#show figure.where(kind: image): it => {
  set block(above: 1.4em, below: 1.4em)
  it
}
#show figure.where(kind: image): set figure(supplement: "Gambar")
#show image: it => box(stroke: 0.5pt + warna.garis, radius: 3pt, clip: true, it)
#show figure.caption: it => text(size: 8pt, fill: warna.redup)[
  #text(weight: "bold")[#it.supplement #context it.counter.display(it.numbering)] · #it.body
]

// Tabel.
#show figure.where(kind: table): set align(left)
#show figure.where(kind: table): set block(breakable: true)
#set table(
  inset: (x: 7pt, y: 5.5pt),
  stroke: (_, y) => (bottom: 0.5pt + warna.garis, top: if y == 0 { 0.5pt + warna.garis }),
  fill: (_, y) => if y == 0 { warna.kepala },
)
#show table: set text(size: 8.5pt)
#show table: set par(justify: false)
#show table.cell.where(y: 0): set text(weight: "bold", fill: warna.hutan)
#show table.hline: none

// Daftar.
#set list(marker: text(fill: warna.daun)[•], indent: 2pt, body-indent: 7pt)
#set enum(indent: 2pt, body-indent: 7pt, numbering: n => text(fill: warna.daun, weight: "bold")[#n.])

// --- Daftar isi -------------------------------------------------------------

#counter(page).update(1)
#set page(numbering: "i")

#[
  #show outline.entry.where(level: 1): it => {
    v(1em, weak: true)
    text(weight: "bold", fill: warna.hutan, it)
  }
  #show heading.where(outlined: false): it => block(below: 1.2cm,
    text(size: 24pt, weight: "extrabold", fill: warna.hutan, it.body))
  #outline(title: [Daftar Isi], depth: 2, indent: 1.4em)
]

// --- Isi ----------------------------------------------------------------------

#set page(numbering: "1")
#counter(page).update(1)

#include ".build/isi.typ"
