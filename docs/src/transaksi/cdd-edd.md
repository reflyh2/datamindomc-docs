---
outline: deep
---

# Formulir CDD / EDD

Menu: dibuka dari ikon **Cetak CDD** atau **Cetak EDD** di **Transaksi → Daftar Transaksi** (judul halaman: **Formulir CDD** atau **Formulir EDD**)

Formulir data nasabah untuk satu transaksi, siap dicetak dan ditandatangani pelanggan. Formulir ini adalah bukti uji tuntas nasabah yang diminta regulator.

- **CDD** (*Customer Due Diligence*): identifikasi dan verifikasi identitas nasabah, untuk nasabah berisiko biasa.
- **EDD** (*Enhanced Due Diligence*): pemeriksaan lebih mendalam untuk nasabah berisiko tinggi. Biasanya perlu dokumen tambahan, misalnya bukti sumber dana dan tujuan penggunaan.

![Formulir CDD untuk transaksi pembelian](/cdd-edd-formulir.png)

## CDD atau EDD?

Aplikasi memilih jenis formulir dari data pelanggan, bukan dari nilai transaksi:

| Kondisi pelanggan | Formulir |
|---|---|
| Berstatus **PEP**, atau **Pekerjaan**-nya tergolong berisiko tinggi | **EDD** |
| Selain itu | **CDD** |

Label ikon di Daftar Transaksi sudah menunjukkan jenisnya: **Cetak CDD** atau **Cetak EDD**. Status PEP diatur di [PEP](/pelanggan/skrining/pep), sedangkan pekerjaan diisi di data pelanggan.

Contoh formulir EDD:

![Contoh formulir EDD](/edd-preview.png)

## Isi formulir

| Bagian | Isi |
|---|---|
| **A. Informasi Nasabah** | Nama, jenis dan nomor identitas, alamat, jenis kelamin, serta jenis transaksi (pembelian atau penjualan). Diambil dari data pelanggan |
| **B. Informasi Beneficial Owner** | Diisi bila transaksi dilakukan untuk pihak lain. Bagian yang kosong diisi tangan saat dicetak |
| **Sumber Dana**, **Tujuan Transaksi** | Diambil dari isian di form transaksi |
| **C. Pernyataan dan Tanda Tangan** | Pernyataan nasabah bahwa informasinya benar, dengan kolom tanda tangan |

Kalau ada data pelanggan yang salah, perbaiki di [Daftar Pelanggan](/pelanggan/daftar-pelanggan), lalu buka formulirnya lagi.

## Mencetak atau mengunduh

1. Di **Transaksi → Daftar Transaksi**, klik ikon **Cetak CDD** atau **Cetak EDD** pada baris faktur.
2. Klik **Print** untuk mencetak, atau **Download** untuk mengunduh PDF.
3. Minta pelanggan menandatangani formulir, lalu arsipkan bersama salinan identitasnya.

Ikon ini hanya ada untuk faktur yang tidak batal dengan pelanggan Retail, Corporate, Money Changer, atau Bank.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#formulir-cdd-edd)
- [Daftar Transaksi](/transaksi/daftar-transaksi)
- [PEP](/pelanggan/skrining/pep)
