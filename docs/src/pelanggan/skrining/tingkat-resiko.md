---
outline: deep
---

# Matriks Resiko

Menu: **Pelanggan → Skrining → Matriks Resiko**

Penilaian risiko pelanggan per bulan, dihitung otomatis dari transaksi bulan itu. Dipakai petugas kepatuhan untuk menentukan pelanggan yang wajib uji tuntas lanjutan (EDD) dan yang perlu dipantau berkala.

![Tab Matriks Resiko: kotak ringkasan, filter bulan dan cabang, serta tabel skor parameter](/pelanggan-skrining-tingkat-resiko.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Risiko Tinggi** | Jumlah pelanggan berisiko tinggi, yang wajib uji tuntas lanjutan |
| **Risiko Menengah** | Jumlah pelanggan berisiko menengah, yang perlu pemantauan berkala |
| **Periode** | Bulan yang dinilai |
| **Nasabah Dinilai** | Jumlah pelanggan yang tampil di tabel, yaitu yang skornya di atas skor terendah |
| **Bulan** / **Cabang** | Bulan dan cabang yang dinilai. Klik **Terapkan** setelah mengubahnya |
| **Semua** / **Tinggi** / **Menengah** | Menyaring tabel per tingkat risiko |
| **Total Transaksi** / **Frek.** | Nilai rupiah dan jumlah faktur pelanggan pada bulan itu |
| **Skor Parameter** | Skor 1–3 untuk tiap parameter (lihat di bawah) |
| **Total** / **Tingkat Risiko** | Jumlah keenam skor, dan tingkat risikonya |

### Parameter skor

| Kolom | Parameter | Cara menilai |
|---|---|---|
| **NOM** | Nominal transaksi sebulan | 1 di bawah Rp 500 juta, 2 mulai Rp 500 juta, 3 mulai Rp 1 miliar |
| **FREK** | Frekuensi transaksi sebulan | 1 di bawah 5 faktur, 2 mulai 5 faktur, 3 mulai 20 faktur |
| **PEP** | Status PEP dan pekerjaan | Dari [Master Risiko](/eksternal/master-risiko) |
| **VALAS** | Mata uang yang ditransaksikan | Dari Master Risiko |
| **KOTA** | Kabupaten/kota cabang | Dari Master Risiko |
| **NEG** | Kewarganegaraan | Dari Master Risiko |

### Tingkat risiko

| Total skor | Tingkat |
|---|---|
| 13–18 | **Tinggi** |
| 7–12 | **Menengah** |
| 6 | Rendah, tidak ditampilkan |

Pelanggan yang keenam parameternya bernilai terendah (total 6) tidak tampil di tabel.

Klik nama pelanggan untuk membuka Detail Pelanggan.

## Di Daftar Pelanggan

Penilaian bulan berjalan juga tampil di [Daftar Pelanggan](/pelanggan/daftar-pelanggan): kotak **Risiko Tinggi**, kolom dan filter **Tingkat Risiko**, serta baris **Tingkat Risiko** di Status Kepatuhan pada Detail Pelanggan. Di sana penilaian selalu mencakup semua cabang.

## Mengekspor penilaian

Klik **Ekspor Excel**. File berisi penilaian sesuai bulan, cabang, dan filter yang sedang dipakai.

## Aturan

- **Hanya pelanggan retail yang dinilai.** Pelanggan corporate, money changer, dan bank tidak masuk penilaian.
- **Dinilai per bulan kalender, dari transaksi lunas.** Nominal dan frekuensi dihitung dari transaksi lunas pada bulan yang dipilih saja. Transaksi antar cabang dan modal awal tidak dihitung.
- **Nilai parameter diatur di Master Risiko.** Bila skor PEP, valas, kota, atau negara tidak sesuai kebijakan perusahaan Anda, ubah nilainya di [Master Risiko](/eksternal/master-risiko).
- **Penilaian tidak menghentikan transaksi.** Pelanggan berisiko tinggi tetap bisa bertransaksi. Tindak lanjutnya (EDD dan persetujuan pejabat senior) dilakukan di luar aplikasi.

## Terkait

- [PEP](/pelanggan/skrining/pep)
- [Daftar Pelanggan](/pelanggan/daftar-pelanggan)
- [Master Risiko](/eksternal/master-risiko)
- [Laporan Pelanggan](/pelanggan/laporan)
