// Warna dan komponen yang dipakai isi buku (isi.typ) dan tata letak (buku.typ).
// Warna sama dengan token --valas-* di docs/.vitepress/theme/custom.css.

#let warna = (
  hutan: rgb("#0e4d36"),
  daun: rgb("#0f8a47"),
  mint: rgb("#6fd39c"),
  tinta: rgb("#1c2a24"),
  redup: rgb("#6b7a72"),
  garis: rgb("#d9e0dc"),
  kanvas: rgb("#f6f8f7"),
  kepala: rgb("#eef2f0"),
  alert: rgb("#c0392b"),
  alert-bg: rgb("#fbeeec"),
  ok-bg: rgb("#e8f5ee"),
  warn: rgb("#f39c12"),
  warn-ink: rgb("#99610a"),
  warn-bg: rgb("#fdf3e3"),
  netral: rgb("#4a5560"),
  netral-bg: rgb("#eef0f2"),
)

// --- Callout (::: info / tip / warning) -------------------------------------

#let gaya-callout = (
  info: (label: "Info", aksen: warna.netral, tinta: warna.netral, latar: warna.netral-bg),
  tip: (label: "Tips", aksen: warna.daun, tinta: warna.hutan, latar: warna.ok-bg),
  warning: (label: "Perhatian", aksen: warna.warn, tinta: warna.warn-ink, latar: warna.warn-bg),
  danger: (label: "Bahaya", aksen: warna.alert, tinta: warna.alert, latar: warna.alert-bg),
  details: (label: "Rincian", aksen: warna.garis, tinta: warna.tinta, latar: warna.kanvas),
)

#let callout(jenis, judul: none, isi) = {
  let g = gaya-callout.at(jenis, default: gaya-callout.info)
  block(
    width: 100%,
    fill: g.latar,
    stroke: (left: 3pt + g.aksen),
    radius: (right: 4pt),
    inset: (left: 12pt, right: 12pt, y: 10pt),
    above: 1.2em,
    below: 1.2em,
  )[
    #set par(spacing: 0.75em)
    #text(weight: "bold", fill: g.tinta, size: 0.95em)[#if judul != none { judul } else { g.label }]

    #isi
  ]
}

// --- Diagram alur (<Alur> di VitePress) -------------------------------------

#let warna-nada(nada) = if nada == "ok" {
  (warna.daun, warna.ok-bg)
} else if nada == "warn" {
  (warna.warn, warna.warn-bg)
} else if nada == "alert" {
  (warna.alert, warna.alert-bg)
} else {
  (warna.garis, white)
}

#let lencana(isi) = box(
  fill: warna.kepala,
  radius: 8pt,
  inset: (x: 6pt, y: 2.5pt),
  text(size: 7.5pt, weight: "semibold", fill: warna.redup, isi),
)

#let cabang-alur(cabang) = grid(
  columns: (1fr,) * calc.min(cabang.len(), 3),
  gutter: 6pt,
  ..cabang.map(c => {
    let (aksen, latar) = warna-nada(c.at("nada", default: none))
    block(
      width: 100%,
      fill: latar,
      stroke: (top: 2pt + aksen),
      radius: (bottom: 3pt),
      inset: 7pt,
    )[
      #set par(spacing: 0.4em)
      #text(size: 7.5pt, fill: warna.redup)[#c.jika]

      #text(size: 8.5pt, weight: "bold")[#c.judul]
      #if "ket" in c [

        #text(size: 8pt)[#c.ket]
      ]
    ]
  }),
)

#let alur(data) = {
  let nomor = 0
  let baris = ()
  for s in data.langkah {
    if "fase" in s {
      baris.push(grid.cell(colspan: 2, inset: (top: if baris.len() > 0 { 8pt } else { 0pt }, bottom: 2pt))[
        #text(size: 7.5pt, weight: "bold", fill: warna.daun, tracking: 0.08em, upper(s.fase))
      ])
    } else {
      nomor += 1
      let (aksen, _) = warna-nada(s.at("nada", default: none))
      let lingkar = if s.at("nada", default: none) == none { warna.hutan } else { aksen }
      baris.push(circle(radius: 9pt, fill: lingkar, stroke: none)[
        #set align(center + horizon)
        #text(size: 8pt, weight: "bold", fill: white, str(nomor))
      ])
      baris.push(block(breakable: false, width: 100%)[
        #set par(spacing: 0.45em)
        #text(weight: "bold", size: 9.5pt, s.judul)
        #if "peran" in s { h(4pt); lencana(s.peran) }
        #if "menu" in s [

          #text(size: 8pt, fill: warna.daun, weight: "semibold", s.menu)
        ]
        #if "ket" in s [

          #text(size: 8.5pt, s.ket)
        ]
        #if "cabang" in s [

          #v(2pt)
          #cabang-alur(s.cabang)
        ]
      ])
    }
  }

  block(
    width: 100%,
    fill: warna.kanvas,
    stroke: 0.6pt + warna.garis,
    radius: 5pt,
    inset: 12pt,
    above: 1.4em,
    below: 1.4em,
  )[
    #if data.judul != "" {
      text(size: 10pt, weight: "bold", fill: warna.hutan, data.judul)
      v(4pt)
    }
    #grid(columns: (18pt, 1fr), column-gutter: 9pt, row-gutter: 9pt, ..baris)
  ]
}
