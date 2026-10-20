---
outline: [2, 3]
---

# Riwayat Valas

Menu: **Inventori → Stok Valas**, tab **Riwayat Valas**

Riwayat Valas menampilkan setiap keluar-masuk satu atau beberapa valas dalam rentang tanggal tertentu, dari stok awal sampai stok akhir. Gunakan halaman ini untuk menelusuri asal angka stok, misalnya saat stok di sistem tidak sama dengan isi brankas.

## Membuka Riwayat Valas

Ada dua cara:

- **Tab Riwayat Valas.** Buka **Inventori → Stok Valas**, lalu klik tab **Riwayat Valas** di samping **Stok Valas** dan **Laporan Stok**. Pengguna yang hanya punya hak akses Riwayat Valas, tanpa Stok Valas, melihat menu **Inventori → Riwayat Valas** di sidebar.
- **Klik angka stok.** Di tab [Stok Valas](/inventori/stok-valas), klik angka **Stok Akhir** sebuah valas. Jendela **Riwayat Valas** terbuka dan menampilkan mutasi valas itu pada tanggal yang dipilih saja. Cara ini lebih cepat untuk mengecek satu angka. Untuk rentang beberapa hari, pakai tab Riwayat Valas.

## Memilih data yang ditampilkan

Halaman awalnya kosong dengan pesan *Pilih valas yang ingin ditampilkan pada filter di atas.* Atur filternya:

| Filter | Cara mengisi |
|---|---|
| **Periode** | Rentang tanggal. Awalnya periode berjalan. Untuk satu hari, pilih tanggal awal dan akhir yang sama |
| **Cabang** | Awalnya cabang Anda. Pengguna yang boleh melihat semua cabang bisa memilih beberapa cabang atau **Semua Cabang** |
| **Valas** | Pilih satu atau beberapa valas, atau **Semua Valas**. Tombol **Tampilkan semua valas** di tabel kosong melakukan hal yang sama |

Tidak ada tombol Terapkan. Tabel dimuat ulang begitu Anda selesai memilih dan menutup daftar pilihan. Klik **Atur ulang** untuk kembali ke filter awal.

Perusahaan yang memakai Square Balance juga melihat kotak centang **Kecualikan Square Balance**. Lihat [Square Balance](#square-balance).

## Isi halaman

### Ringkasan

Kotak ringkasan di atas tabel muncul setelah valas dipilih:

| Kotak | Isi |
|---|---|
| **Stok Awal** | Stok sehari sebelum rentang tanggal. Hanya muncul bila satu valas dipilih |
| **Masuk**, **Keluar** | Jumlah valas yang masuk dan keluar sepanjang rentang. Hanya muncul bila satu valas dipilih |
| **Stok Akhir** | Stok awal + masuk − keluar. Hanya muncul bila satu valas dipilih |
| **Valas Ditampilkan** | Jumlah valas yang dipilih. Muncul menggantikan empat kotak di atas bila lebih dari satu valas dipilih, karena jumlah valas yang berbeda mata uang tidak bisa dijumlahkan |
| **Jumlah Mutasi** | Jumlah baris mutasi pada rentang itu |
| **Saldo Negatif** | Jumlah baris yang membuat stok menjadi minus. Angkanya merah bila ada, dan baris itu perlu ditelusuri |

### Tabel

Tabel dikelompokkan per valas. Setiap kelompok dibuka dengan baris **Stok Awal** dan ditutup dengan baris **Stok Akhir** yang berisi total masuk, total keluar, dan stok akhirnya. Baris di antaranya berurutan menurut waktu, dan urutannya tidak bisa diubah, karena kolom Stok Akhir dihitung baris demi baris.

| Kolom | Isi |
|---|---|
| **Tanggal** | Tanggal buku mutasi |
| **Cabang** | Asal baris. Hanya muncul bila lebih dari satu cabang dipilih |
| **No Faktur** | Nomor faktur transaksi atau nomor dokumen Pindah Pecahan. Klik nomor faktur untuk melihat **Detail Faktur**: pelanggan, rincian valas, dan totalnya |
| **Keterangan** | Jenis mutasi, beserta label bila ada (lihat di bawah) |
| **Kurs** | Kurs transaksi |
| **Masuk**, **Keluar** | Jumlah valas yang masuk (pembelian, pecahan tujuan) atau keluar (penjualan, pecahan asal) |
| **Stok Akhir** | Stok setelah baris itu. Baris yang membuat stok minus diwarnai merah |
| **User**, **Waktu** | Pengguna yang mencatat dan jam pencatatan |

Bila lebih dari satu cabang dipilih, **Stok Akhir** adalah stok gabungan semua cabang terpilih.

Label di kolom Keterangan:

| Label | Artinya |
|---|---|
| *square — tutup periode* / *square — buka periode* | Transaksi Square Balance dari penutupan atau pembukaan periode, bukan transaksi pelanggan. Tetap menggeser stok |
| *hutang piutang* | Valas tertunda, pembayarannya, atau deposit valas. Hanya menggeser **Stok Fisik**, bukan Stok Akhir |
| *di luar stok* | Catatan lama yang ditampilkan tetapi tidak dihitung sebagai stok |

### Yang dihitung sebagai mutasi

Stok Akhir di sini dihitung dengan cara yang sama dengan tab **Stok Valas**, jadi angkanya pada tanggal yang sama pasti cocok. Yang menggeser stok hanya:

- transaksi valas, kecuali yang dibatalkan, termasuk yang belum dibayar, dan
- [Pindah Pecahan](/inventori/pb-valas).

### Stok Fisik

Perusahaan yang memakai modul Hutang Piutang melihat dua kolom tambahan di kanan Stok Akhir:

| Kolom | Isi |
|---|---|
| **Fisik (±)** | Perubahan stok fisik karena baris itu |
| **Stok Fisik** | Stok akhir + hutang valas tertunda + deposit valas − piutang valas tertunda. Sama dengan kolom Stok Fisik di tab Stok Valas |

Kotak ringkasan juga bertambah: **Stok Fisik Akhir** dan **Baris Hutang Piutang**.

## Square Balance

Bagi perusahaan yang memakai Square Balance, penutupan periode menjual seluruh valas dan pembukaan periode berikutnya membelinya kembali. Akibatnya stok terbaca nol tepat di tanggal tutup periode.

- **Tanpa centang** (bawaan), angka mengikuti pembukuan dan transaksi square ikut tampil dengan labelnya. Kalau ada transaksi square pada rentang terpilih, halaman menampilkan catatan tentang hal ini.
- **Dengan centang Kecualikan Square Balance**, transaksi square dibuang. Pakai ini kalau yang Anda cari adalah isi brankas. Angkanya tidak lagi sama dengan jurnal, dan catatan kuning mengingatkan hal itu, termasuk di hasil ekspor.

## Menyembunyikan kolom

Klik **Tampilan Kolom**, lalu hapus centang kolom yang tidak diperlukan. Angka di tombol menunjukkan berapa kolom yang disembunyikan. Klik **Tampilkan semua kolom** untuk mengembalikannya.

**Tanggal**, **Stok Akhir**, dan **Stok Fisik** selalu tampil.

## Mengekspor dan mencetak

Klik **Ekspor**, lalu pilih **Excel**, **CSV**, atau **PDF**. Hasilnya mengikuti filter dan kolom yang sedang tampil. Lihat juga [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Jika angkanya janggal

| Yang terlihat | Kemungkinan penyebab | Yang dilakukan |
|---|---|---|
| *Tidak ada mutasi untuk valas dan cabang ini pada rentang tanggal terpilih.* | Memang tidak ada transaksi | Lebarkan rentang tanggal, atau pilih valas atau cabang lain |
| Baris merah, **Saldo Negatif** lebih dari 0 | Valas dijual sebelum stoknya tercatat masuk, misalnya pembelian dicatat belakangan | Telusuri baris merah pertama. Cek faktur di sekitarnya, lalu perbaiki lewat [Daftar Transaksi](/transaksi/daftar-transaksi) bila ada yang salah catat |
| Stok bernilai 0 di tanggal tutup periode | Transaksi Square Balance | Centang **Kecualikan Square Balance** |
| Stok Akhir tidak sama dengan isi brankas | Ada transaksi yang belum dibayar, atau hutang piutang valas yang belum diserahkan | Bandingkan dengan **Stok Brankas** di tab [Stok Valas](/inventori/stok-valas), atau lihat kolom **Stok Fisik** |

## Terkait

- [Stok Valas](/inventori/stok-valas)
- [Pindah Pecahan](/inventori/pb-valas)
- [Kasir: mengecek stok](/alur-kerja/kasir#mengecek-stok)
- [Daftar Transaksi](/transaksi/daftar-transaksi)
