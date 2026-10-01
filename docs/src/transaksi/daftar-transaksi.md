---
outline: deep
---

# Daftar Transaksi

Menu: **Transaksi → Daftar Transaksi** (judul halaman: **Data Transaksi Valas**)

Semua faktur transaksi valas cabang. Dari sini kasir melihat rincian, mencetak ulang faktur dan formulir CDD/EDD, serta mengubah atau membatalkan faktur.

![Daftar Transaksi Valas](/daftar-transaksi-aksi.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Faktur**, **Nilai Beli**, **Nilai Jual** | Jumlah faktur dan total rupiah pembelian serta penjualan, sesuai filter yang aktif |
| Chip status | **Semua**, **Belum bayar**, **Menunggu**, **Lunas**, **Batal**, masing-masing dengan jumlahnya. Klik untuk menyaring |
| Filter | Rentang periode, **Semua tipe** (beli atau jual), **Semua kategori** pelanggan, dan kotak cari faktur, pelanggan, atau valas |
| Kotak centang | Untuk tindakan massal seperti **Hapus Transaksi** dan **Reset Pembayaran** |
| **Aksi** | Ikon tindakan per faktur. Lihat tabel di bawah |

Tombol **Tambah** membuka [Transaksi Valas](/transaksi/transaksi-valas). Fitur tabel lainnya dijelaskan di [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Status faktur

| Status | Artinya |
|---|---|
| **Belum bayar** | Faktur sudah disimpan, tetapi belum dibayar di [Pembayaran Valas](/transaksi/pembayaran-valas) |
| **Menunggu** | Transaksi **Antar Cabang** yang menunggu diproses cabang tujuan. Lihat [Antar Cabang](/transaksi/transaksi-antarcabang) |
| **Lunas** | Faktur sudah dibayar. Stok brankas dan kas sudah bergerak |
| **Batal** | Faktur sudah dihapus. Tetap tersimpan sebagai arsip di [Transaksi Batal](/transaksi/transaksi-batal) |

## Ikon aksi

| Ikon | Kapan muncul | Fungsi |
|---|---|---|
| **Lihat rincian** | Selalu | Membuka **Detail Faktur**: valas, jumlah, kurs, dan total |
| **Cetak faktur** | Faktur selain Batal, untuk pelanggan Retail, Corporate, Money Changer, atau Bank | Mencetak ulang faktur |
| **Cetak CDD** / **Cetak EDD** | Sama dengan Cetak faktur | Membuka [formulir CDD/EDD](/transaksi/cdd-edd). Labelnya EDD bila pelanggan PEP atau pekerjaannya berisiko tinggi |
| **Tandai transaksi mencurigakan (LTKM)** | Bila Anda punya akses laporan PPATK | Menandai faktur untuk dilaporkan sebagai LTKM. Bendera berubah bila sudah ditandai atau dilaporkan |
| **Ubah faktur** | Belum bayar | Membuka form transaksi untuk diubah |
| **Hapus faktur** | Belum bayar atau Menunggu | Membatalkan faktur. Statusnya menjadi Batal |
| **Reset pembayaran** | Lunas, dan Anda punya aksesnya | Membatalkan pembayaran supaya faktur kembali Belum bayar. Semua jurnal transaksi itu ikut dihapus |

![Jendela Detail Faktur](/daftar-transaksi-rincian.png)

## Mengubah faktur yang sudah lunas

1. Klik **Reset pembayaran**, lalu konfirmasi. Status faktur kembali **Belum bayar**.
2. Klik **Ubah faktur**, perbaiki, lalu simpan.
3. Bayar lagi di [Pembayaran Valas](/transaksi/pembayaran-valas).

## Aturan

- **Hapus berarti batal.** Faktur yang dihapus tidak bisa dikembalikan, tetapi tetap tercatat di Transaksi Batal.
- **Periode tertutup terkunci.** Faktur pada tanggal yang sudah direkonsiliasi atau ditutup tidak bisa diubah, dihapus, atau di-reset.
- **Faktur hasil penyelesaian deposit valas** tidak bisa diubah atau dihapus dari sini.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#mengubah-atau-membatalkan)
- [Pembayaran Valas](/transaksi/pembayaran-valas)
- [Transaksi Batal](/transaksi/transaksi-batal)
