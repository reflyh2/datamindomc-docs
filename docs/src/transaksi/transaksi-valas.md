---
outline: deep
---

# Transaksi Valas

Menu: **Transaksi → Transaksi Valas** (judul halaman: **Buat Transaksi Valas**)

Form untuk mencatat pembelian atau penjualan valas dengan satu pelanggan. Dipakai kasir setiap kali ada pelanggan. Panduan langkah demi langkah dari awal hari ada di [Alur Kerja Kasir](/alur-kerja/kasir#membuat-transaksi).

<Alur :langkah="[
  { judul: 'Pilih tipe transaksi dan pelanggan', ket: 'Pembelian atau Penjualan, lalu Cari pelanggan atau tambah pelanggan baru.' },
  { judul: 'Baca Status Kepatuhan', ket: 'Underlying, kemiripan DTTOT, PEP, dan blacklist dicek otomatis begitu pelanggan dipilih.', nada: 'warn' },
  { judul: 'Isi Data Valas', ket: 'Ketik kode valas, isi jumlah, lalu Enter. Ulangi untuk valas lain.' },
  { judul: 'Simpan', ket: 'Jawab konfirmasi dengan OK. Faktur terbit dengan status Belum Bayar.', cabang: [
    { jika: 'Berikutnya', judul: 'Bayar di Pembayaran Valas', nada: 'ok' },
  ] },
]" />

![Form Buat Transaksi Valas](/transaksi-valas-form.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| Judul form | Label **Pembelian** (hijau) atau **Penjualan** (merah) mengikuti Tipe Transaksi. Tombol **Simpan** dan **Simpan & Buat Lagi** ada di kanan atas dan di bawah form |
| **Status Kepatuhan** | Hasil pemeriksaan pelanggan: **Nilai Underlying Bulan ini** dibandingkan **Limit Underlying**, serta peringatan DTTOT, PEP, dan blacklist bila ada |
| **Informasi Umum** | Tipe transaksi, pelanggan, sumber dana, tujuan transaksi, dan rincian tambahan |
| **Data Valas** | Tempat memilih valas dan mengisi jumlah, kurs, serta sub total sebelum ditambahkan ke tabel |
| **Rekening Bank** | Muncul setelah pelanggan dipilih. Isi bila transaksi dibayar lewat transfer |
| **Rincian Valas** | Daftar valas yang akan disimpan di faktur. Jumlah dan kurs masih bisa diubah di sini |
| Total | **Total (USD)** dan **Total (Rp)**. Untuk penjualan ada juga **Pembayaran** dan **Kembalian** |

## Mengisi Informasi Umum

| Kolom | Cara mengisi |
|---|---|
| **Tipe Transaksi** \* | **Transaksi Pembelian** bila Anda membeli valas dari pelanggan. **Transaksi Penjualan** bila Anda menjual valas ke pelanggan |
| **Periode Transaksi** \* | Hanya muncul bila perusahaan mengizinkan tanggal transaksi dipilih. Pada perusahaan dengan periode manual, transaksi selalu dicatat di Periode aktif |
| **Jam Transaksi** | Hanya muncul bila **Jam Transaksi Manual** aktif. Terisi otomatis dengan jam sekarang (WIB) dan ikut berjalan sampai Anda mengubahnya. Kosongkan untuk memakai jam saat disimpan |
| **Tipe Pelanggan** \* | Menentukan daftar pelanggan yang muncul saat Anda klik **Cari** |
| **Pelanggan** \* | Klik **Cari**. Lihat [Memilih pelanggan](/alur-kerja/kasir#memilih-pelanggan) |
| **Sumber Dana** \*, **Tujuan Transaksi** \* | Pilih dari daftar, atau ketik pilihan baru |
| **Kurir** | Pilih bila valas diantar atau diambil kurir. Surat kuasa yang pernah diunggah untuk kurir dan pelanggan ini muncul otomatis |
| **Beneficial Owner** | Muncul untuk pelanggan Corporate |
| **Surat Kuasa** | Unggah berkasnya bila transaksi diwakilkan |
| **Catatan** | Bebas, maksimal 125 karakter |

Kolom **Akun Biaya**, **Biaya Transaksi**, dan **Valas Tertunda** hanya muncul bila fiturnya aktif. Lihat [Fitur Opsional](/mulai/fitur-opsional).

## Menambahkan valas

1. Ketik kode valas di kolom **Valas**, lalu pilih dari daftar. Tombol **Cari** membuka daftar valas lengkap dengan stok dan kurs.
2. Isi **Jumlah**, atau isi **Sub Total** bila pelanggan menyebut nilai rupiahnya.
3. **Kurs** terisi dari kurs terbit. Mengubahnya terlalu jauh dari kurs terbit membutuhkan otorisasi supervisor bila **Otorisasi Kurs** aktif.
4. Tekan <kbd>Enter</kbd> atau klik **Tambah ke Tabel**.

![Memilih valas dengan mengetik kodenya](/transaksi-valas-pilih-valas.png)

Untuk penjualan, isi **Pembayaran** dengan uang yang diserahkan pelanggan. **Kembalian** dihitung otomatis.

![Rincian Valas dan total pada transaksi penjualan](/transaksi-valas-rincian.png)

## Menyimpan

| Tombol | Fungsi |
|---|---|
| **Simpan** | Menyimpan transaksi, lalu membuka halaman faktur |
| **Simpan & Buat Lagi** | Menyimpan transaksi, lalu membuka form kosong untuk transaksi berikutnya |

Kedua tombol menampilkan konfirmasi *"Apakah data transaksi ini sudah benar ?"*. Klik **OK** untuk menyimpan.

![Halaman faktur setelah transaksi disimpan](/transaksi-valas-faktur.png)

Di halaman faktur:

- **Cetak** mencetak faktur untuk pelanggan.
- **Transaksi** membuka form transaksi baru.
- **Kembali** kembali ke halaman sebelumnya.

Faktur baru berstatus **Belum Bayar**. Stok brankas dan kas baru bergerak setelah faktur dibayar di [Pembayaran Valas](/transaksi/pembayaran-valas).

## Aturan

- **Satu faktur, satu pelanggan.** Beberapa valas boleh masuk ke satu faktur, tetapi pelanggannya hanya satu.
- **Penjualan dibatasi stok akhir.** Penjualan ditolak bila stok akhir valas tidak cukup, kecuali **Bisa Jual Stok Habis** aktif.
- **Antar Cabang hanya untuk penjualan.** Tipe pelanggan ini memakai kurs antarcabang.
- **Tombol Simpan bisa terkunci.** Ini terjadi bila serah terima kasir sedang berlangsung, pelanggan diblokir, atau ada kemiripan DTTOT yang belum dikonfirmasi. Alasannya tertulis di samping tombol.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Stok valas USD tidak mencukupi pada/sesudah tanggal transaksi (tersedia …)* atau *Jumlah penjualan valas USD melebihi stok yang tersedia* | Stok kurang dari jumlah yang dijual | Kurangi jumlahnya, atau minta tambahan stok lewat **Inventori → PB Valas** |
| *Rate Pembelian harus diotorisasi* / *Rate Penjualan harus diotorisasi* | Kurs terlalu jauh dari kurs terbit | Minta supervisor mengisi nama pengguna dan kata sandi di **Identifikasi Petugas Otorisasi** |
| Tombol Simpan nonaktif: *Serah terima kasir sedang berlangsung — transaksi tidak dapat disimpan.* | Ada serah terima yang belum diterima | Tunggu sampai serah terima diterima atau ditolak |
| *Diblokir! Pelanggan ini diblacklist (tipe diblokir)…* | Pelanggan diblokir perusahaan | Arahkan pelanggan ke petugas kepatuhan |

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#membuat-transaksi)
- [Pembayaran Valas](/transaksi/pembayaran-valas)
- [Daftar Transaksi](/transaksi/daftar-transaksi)
- [Menangani Batas Underlying](/alur-kerja/underlying)
