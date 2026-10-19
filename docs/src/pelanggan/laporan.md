---
outline: deep
---

# Laporan

Menu: **Pelanggan → Laporan** (judul halaman: **Rekap Transaksi per Nasabah**)

Rekap transaksi lunas per pelanggan pada cabang dan periode tertentu, diurutkan dari total transaksi terbesar. Dipakai untuk melihat siapa pelanggan terbesar, atau menyaring pelanggan dengan nilai transaksi di atas batas tertentu untuk keperluan kepatuhan.

![Halaman Rekap Transaksi per Nasabah: filter dan tabel rekap](/pelanggan-laporan-rekap.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Cabang** | Cabang yang direkap. Pilih **-- Semua Cabang --** untuk menggabungkan semua cabang |
| **Periode** | Rentang tanggal transaksi |
| **Min. Transaksi (Rp)** | Hanya tampilkan pelanggan yang total transaksinya paling sedikit sebesar ini. Isi `0` untuk semua |
| **Cari** | Nama, telepon, atau pekerjaan |
| **Nama** | Klik untuk membuka [detail pelanggan](/pelanggan/daftar-pelanggan#melihat-detail-pelanggan) |
| **Total Transaksi** | Jumlah nilai rupiah transaksi lunas. Klik untuk membuka rincian per faktur di tab baru |
| **J.Faktur** | Jumlah faktur lunas |
| **Valas Transaksi** | Valas yang ditransaksikan, mis. *(USD)*. Klik untuk membuka jendela **Valas yang Ditransaksikan** |
| **Transaksi Terakhir** | Tanggal transaksi terakhir pelanggan di periode itu |

Hanya transaksi berstatus **lunas** yang dihitung. Faktur yang belum dibayar, menunggu, atau batal tidak masuk rekap.

## Menyaring rekap

1. Pilih **Cabang** dan **Periode**.
2. Isi **Min. Transaksi (Rp)** bila hanya ingin melihat pelanggan bernilai besar.
3. Tabel langsung menyesuaikan. Ketik di **Cari** untuk mempersempit lagi.

## Mengekspor dan mencetak

Klik **Ekspor**, lalu pilih **Excel**, **CSV**, atau **Cetak**. Hasilnya mengikuti filter yang sedang dipakai. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Terkait

- [Daftar Pelanggan](/pelanggan/daftar-pelanggan)
- [Matriks Resiko](/pelanggan/skrining/tingkat-resiko), untuk penilaian risiko dari nominal dan frekuensi transaksi
