---
outline: deep
---

# Fitur Opsional

Setiap perusahaan bisa menyalakan atau mematikan beberapa fitur ValasPro. Akibatnya, menu, kolom, dan tombol di layar Anda bisa berbeda dengan perusahaan lain, dan juga dengan gambar di panduan ini.

Setelan-setelan ini ada di **Pengaturan → Umum**. Sebagian hanya bisa diubah oleh penyedia aplikasi. Kalau ragu fitur mana yang aktif di perusahaan Anda, tanyakan ke admin perusahaan.

Setelan dikelompokkan dalam bagian **Umum**, **Transaksi**, **Stok & Periode**, **Akuntansi**, dan **Kepatuhan**. Pengaturan invoice dan kop surat ada di menu terpisah, **Pengaturan → Dokumen**. Setelan yang hanya bisa diubah penyedia aplikasi tidak tampil di layar Anda.

![Tab Transaksi & Stok di halaman Pengaturan Umum](/fitur-pengaturan-umum.png)

## Fitur yang mengubah menu

| Setelan | Kalau aktif |
|---|---|
| **Rekonsiliasi Harian** | Menu **Shift → Rekonsiliasi & Tutup Hari** muncul. Periode tidak lagi maju otomatis: kasir menghitung fisik, lalu supervisor menutup hari. Hanya berlaku bila Metode Perhitungan Laba = HPP |
| **Metode Perhitungan Laba** | Menentukan jenis laporan laba (HPP atau Square Balance). Pada metode **Square Balance**, periode dimajukan secara manual dan bagian **Pengaturan Cabang** muncul di Pengaturan Perusahaan |

## Fitur yang mengubah form transaksi

| Setelan | Kalau aktif |
|---|---|
| **Otorisasi Kurs** | Kurs yang diketik terlalu jauh dari kurs terbit harus disetujui supervisor dengan nama pengguna dan kata sandinya |
| **Biaya Transaksi** | Muncul kolom **Akun Biaya** dan **Biaya Transaksi** |
| **Pembayaran Saat Buat Transaksi** | Setelah transaksi disimpan, form pembayaran langsung muncul |
| **Bisa Jual Stok Habis** | Penjualan tetap boleh disimpan walaupun stok valas tidak cukup |
| **Jam Transaksi Manual** | Muncul kolom **Jam Transaksi** (boleh dikosongkan). Jam yang diisi tercetak di faktur dan menentukan urutan transaksi pada hari itu |
| **Peringatan Underlying** dan **Limit Underlying** | Faktur pelanggan yang melewati batas pembelian valas bulanan tidak bisa dicetak atau dibayar sampai dokumen underlying didaftarkan. Lihat [Menangani Batas Underlying](/alur-kerja/underlying) |

## Fitur lain

| Setelan | Kalau aktif |
|---|---|
| **Persetujuan Atasan** (hapus faktur, reset pembayaran, terbitkan kurs) | Sebelum aksi itu dijalankan, muncul jendela **Persetujuan Atasan**. Atasan mengetik username atau email dan kata sandinya sendiri, lalu klik **Setujui**. Atasan harus pengguna lain yang jabatannya punya hak akses **Setujui Hapus Faktur**, **Setujui Reset Pembayaran**, atau **Setujui Terbitkan Kurs**. Nama atasan tercatat di Log Aktivitas |
| **Nilai Stok dalam IDR** | Halaman stok menampilkan harga satuan dan nilai stok dalam rupiah |
| **Hari Libur Mingguan** | Hari tersebut ditandai sebagai hari libur, misalnya di checklist Buka Hari |
| **Template Invoice**, **Tanggal Invoice**, **Keterangan Invoice** | Mengatur bentuk faktur yang dicetak. Letaknya di **Pengaturan → Dokumen** |
