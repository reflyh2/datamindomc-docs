---
outline: deep
---

# Transaksi Batal

Menu: **Transaksi → Transaksi Batal** (judul halaman: **Laporan Transaksi Batal**)

Laporan semua faktur yang dibatalkan, untuk diperiksa supervisor. Faktur yang dihapus di [Daftar Transaksi](/transaksi/daftar-transaksi) tidak hilang, tetapi pindah ke sini dengan status **Batal**.

![Laporan Transaksi Batal](/transaksi-batal-daftar.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| Filter **Periode**, **Cabang**, **Asal Pembatalan** | Atur, lalu klik **Terapkan**. Periode mengikuti tanggal buku faktur, bukan tanggal pembatalannya |
| **Transaksi Batal** | Jumlah faktur batal pada filter ini |
| **Nilai Pembelian**, **Nilai Penjualan** | Total rupiah pembelian dan penjualan yang batal |
| **Asal Pembatalan** | Jumlah faktur batal per asal: teller, square, antar cabang, dan stok awal |

### Kolom tabel

| Kolom | Artinya |
|---|---|
| **Tanggal** | Tanggal buku (periode) faktur |
| **Dibuat Pada** | Waktu faktur disimpan |
| **Waktu Batal** | Waktu faktur dibatalkan. Bisa bergeser bila faktur itu diubah lagi setelah batal |
| **Teller** | Pengguna yang membuat faktur |
| **Dibatalkan Oleh** | Pengguna yang membatalkan |
| **Asal** | Lihat tabel asal di bawah |
| **Catatan** | Catatan yang diisi di form transaksi, bukan alasan pembatalan |
| **Pembelian**, **Penjualan** | Valas, jumlah, kurs, dan nilai rupiah per faktur |

### Asal pembatalan

| Asal | Artinya |
|---|---|
| **Teller** | Faktur biasa yang dibatalkan pengguna |
| **Square** | Faktur Square Balance yang dibatalkan sistem atau pengguna |
| **Antar Cabang** | Transaksi antar cabang |
| **Stok Awal** | Faktur pengisian stok awal |

Pilih **Sembunyikan Square/Sistem** di filter Asal Pembatalan untuk menyembunyikan pembatalan Square. Pilihan ini berguna kalau Anda hanya ingin memeriksa pembatalan oleh kasir.

## Mengekspor

Klik **Ekspor** untuk mengunduh laporan sesuai filter yang aktif. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Aturan

- **Faktur batal tidak bisa dikembalikan.** Kalau transaksinya ternyata benar, buat transaksi baru.
- **Faktur batal tidak menggerakkan stok dan kas.** Faktur ini hanya arsip, dan fakturnya tidak boleh dicetak untuk pelanggan.
- **Membatalkan faktur lunas butuh dua langkah.** Klik **Reset pembayaran** dulu, baru **Hapus faktur**. Lihat [Daftar Transaksi](/transaksi/daftar-transaksi#ikon-aksi).

## Terkait

- [Daftar Transaksi](/transaksi/daftar-transaksi)
- [Alur Kerja Kasir](/alur-kerja/kasir#mengubah-atau-membatalkan)
- [Alur Kerja Supervisor](/alur-kerja/supervisor)
