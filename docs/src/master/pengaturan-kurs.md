---
outline: [2, 3]
---

# Pengaturan Kurs

Menu: **Master → Pengaturan Kurs** (judul halaman: **Pengaturan Kurs Valas**)

Di sini supervisor menentukan kurs beli dan jual setiap valas, lalu menerbitkannya supaya dipakai kasir. Kurs yang terbit langsung dipakai di form transaksi, di [Informasi Kurs](/transaksi/informasi-kurs), dan di [Papan Kurs](/master/papan-kurs).

![Pengaturan Kurs Valas: tab shift, ringkasan, dan tabel kurs](/pengaturan-kurs.png)

## Isi halaman

Paling atas ada tab:

| Tab | Isi |
|---|---|
| **Shift 1**, **Shift 2**, **Shift 3** | Tabel kurs untuk shift itu. Jumlah tab mengikuti jadwal shift kurs. Perusahaan dengan kurs tunggal hanya punya tab **Kurs**. Angka kuning di samping nama tab adalah jumlah valas yang masih berupa draf di shift itu |
| **Kurs BI** | Kurs transaksi Bank Indonesia. Lihat [Melihat kurs BI](#melihat-kurs-bi) |
| **Riwayat Terbit** | Catatan setiap penerbitan. Lihat [Melihat riwayat terbit](#melihat-riwayat-terbit) |

Bila masih ada isian yang belum disimpan saat Anda berpindah tab, muncul peringatan *Buang isian yang belum disimpan?* Klik **Batal** untuk tetap di tab itu, atau **Buang** untuk pindah dan membuang isiannya.

Di bawah tab ada kotak ringkasan:

| Kotak | Isi |
|---|---|
| **Kurs berlaku sekarang** | Shift kurs yang sedang dipakai transaksi, jam berlakunya (misalnya *10.00–04.00*), serta hari dan jam sekarang. Perusahaan dengan kurs tunggal melihat *Kurs tunggal* |
| **Jadwal shift kurs** | Jumlah shift kurs dan jam mulai masing-masing, misalnya *S1 04.00 · S2 10.00*. Klik **Atur** untuk [mengubah jadwal](#mengatur-jadwal-shift-kurs) |
| **Valas aktif** | Jumlah valas aktif di perusahaan Anda |
| **Draf belum terbit** | Jumlah valas yang kursnya sudah disimpan sebagai draf tetapi belum diterbitkan, beserta rinciannya per shift. Angkanya kuning bila ada. Selama belum terbit, kasir masih memakai kurs lama |
| **Terakhir terbit** | Waktu penerbitan terakhir, beserta shift dan nama penerbitnya. *Belum ada* berarti kurs belum pernah diterbitkan dari halaman ini |
| **USD kurs BI (jual)** | Kurs jual USD dari Bank Indonesia sebagai acuan, beserta kurs beli dan waktu pengambilannya. Hanya untuk dilihat |

Di bawahnya ada panel **Kurs Shift 1** (atau **Kurs Valas** untuk kurs tunggal) dengan kolom berikut:

| Kolom | Isi |
|---|---|
| **Valas** | Kode dan nama valas |
| **Beli**, **Jual** | Isian kurs yang bisa Anda ubah. Kotak bergaris kuning berarti isiannya belum disimpan |
| **Selisih** | Jual dikurangi beli |
| **Kurs terbit** | Kurs beli (**B**) dan jual (**J**) yang sedang dipakai transaksi. Panah naik atau turun menunjukkan perubahan dari penerbitan sebelumnya. Bandingkan dengan isian Beli dan Jual sebelum menerbitkan |
| **Diperbarui** | Waktu kurs valas itu terakhir diubah. Label **Draf** berarti isiannya sudah disimpan tetapi belum terbit |

Gunakan kotak **Cari** untuk menyaring valas berdasarkan kode atau nama. Pilihan **Tampilkan** menyaring baris menjadi **Semua**, **Belum disimpan**, atau **Draf belum terbit**.

## Draf dan terbit

Kurs diatur dalam dua tahap. Kesalahan paling sering terjadi karena tahap kedua terlewat.

| Tombol | Hasilnya |
|---|---|
| **Simpan Draf** | Kurs disimpan sebagai draf. **Belum dipakai transaksi.** Pakai ini kalau kurs disiapkan lebih awal atau perlu diperiksa orang lain dulu |
| **Terbitkan** | Kurs langsung dipakai untuk transaksi berikutnya dan tampil di papan kurs |
| **Kembalikan ke kurs terbit** | Mengisi ulang semua baris dengan kurs yang sedang terbit. Hasilnya belum disimpan. Untuk membuang draf lama, klik **Simpan Draf** setelahnya |

::: warning Belum terbit berarti belum berlaku
Selama Anda belum menekan **Terbitkan**, kasir masih memakai kurs lama. Periksa kotak **Draf belum terbit** sebelum meninggalkan halaman.
:::

## Mengubah dan menerbitkan kurs

1. Pilih tab shift yang ingin diubah, misalnya **Shift 1**. Perusahaan dengan kurs tunggal langsung memakai tab **Kurs**.
2. Isi kolom **Beli** dan **Jual** untuk setiap valas. Tekan <kbd>Enter</kbd> atau <kbd>↑</kbd>/<kbd>↓</kbd> untuk pindah baris.
3. Klik **Terbitkan**. Konfirmasi *Terbitkan kurs shift 1?* (atau *Terbitkan kurs?* untuk kurs tunggal) menyebut berapa valas yang berubah dan shift mana yang ikut ditimpa. Periksa angkanya, lalu klik **Terbitkan** lagi.

   ![Konfirmasi Terbitkan kurs shift 1](/pengaturan-kurs-terbitkan.png)

Yang diterbitkan adalah isian Beli dan Jual semua valas di tab itu, termasuk yang tidak berubah. Menerbitkan tanpa perubahan tetap boleh dan tetap dicatat di riwayat.

Setelah berhasil muncul pesan seperti *Kurs shift 1 terbit — 5 dari 24 valas berubah.*

Kalau ingin menyimpan dulu tanpa menerbitkan, klik **Simpan Draf** di langkah 3. Muncul pesan seperti *2 draf kurs shift 1 disimpan.* Draf bisa diterbitkan nanti dengan membuka tab shift yang sama lalu klik **Terbitkan**.

### Menaikkan atau menurunkan banyak kurs sekaligus

1. Centang baris valas yang ingin disesuaikan. Centang kotak di judul kolom untuk memilih semua baris yang tampil.
2. Di bilah yang muncul, pilih kolomnya: *Beli & jual*, *Beli saja*, atau *Jual saja*.
3. Pilih arahnya: *naik* atau *turun*.
4. Isi besarnya, lalu pilih satuannya: **%** atau **Rp**.
5. Klik **Terapkan**.

![Bilah penyesuaian massal dengan dua valas dipilih](/pengaturan-kurs-massal.png)

Hasilnya masih berupa isian yang belum disimpan. Periksa barisnya, lalu klik **Simpan Draf** atau **Terbitkan**. Klik **Batalkan pilihan** untuk menghapus centang.

### Yang terjadi pada shift lain

**Menerbitkan satu shift juga menimpa kurs shift sesudahnya.** Contohnya, menerbitkan Shift 1 juga mengubah Shift 2 dan Shift 3:

- Shift 2 mendapat nilai yang sama.
- Shift 3 dihitung dari parameter Shift 3 perusahaan Anda bila sudah diatur admin. Kalau belum, nilainya disalin.

Kalau shift berikutnya perlu kurs berbeda, buka tab shift itu dan terbitkan **sesudah** shift sebelumnya.

### Persetujuan atasan

Bila perusahaan menyalakan [Persetujuan Atasan](/mulai/fitur-opsional#fitur-lain) untuk terbitkan kurs, jendela **Persetujuan Atasan** muncul setelah Anda mengonfirmasi **Terbitkan**. Atasan mengetik username atau email dan kata sandinya sendiri, lalu klik **Setujui**.

Atasan harus pengguna lain yang jabatannya punya hak akses **Setujui Terbitkan Kurs**. Anda tidak bisa menyetujui terbitan Anda sendiri.

## Mengatur jadwal shift kurs

Jadwal menentukan berapa kali kurs berganti dalam sehari dan pukul berapa.

1. Klik **Atur** di kotak **Jadwal shift kurs**. Jendela **Jadwal Shift Kurs** terbuka.

   ![Jendela Jadwal Shift Kurs](/pengaturan-kurs-jadwal.png)

2. Pilih **Jumlah shift kurs**: *1 (kurs tunggal)*, *2 shift*, atau *3 shift*.
3. Untuk 2 atau 3 shift, isi **Shift … mulai pukul** untuk setiap shift. Jam setiap shift harus lebih lambat dari shift sebelumnya.
4. Klik **Simpan**. Muncul pesan seperti *Jadwal disimpan — 2 shift kurs aktif.*, lalu halaman dimuat ulang dengan tab shift yang baru.

Yang perlu diketahui:

- **Setiap shift berlaku sampai shift berikutnya dimulai.** Jam sebelum shift 1 (lewat tengah malam) masih memakai shift terakhir. Contoh: dengan jadwal 06.00 / 14.00 / 22.00, transaksi pukul 03.00 memakai kurs shift 3.
- **Jadwal berlaku untuk semua cabang**, dan tidak ada hubungannya dengan shift kasir di menu **Shift**.
- **Shift yang baru ditambah diisi dari shift sebelumnya.** Periksa kursnya dan terbitkan ulang bila perlu.
- **Isian kurs yang belum disimpan hilang** saat jadwal disimpan. Kalau masih ada isian seperti itu, muncul peringatan *Buang isian yang belum disimpan?* Klik **Batal**, lalu simpan atau terbitkan kursnya dulu.

## Melihat kurs BI

Tab **Kurs BI** menampilkan kurs transaksi Bank Indonesia (**Beli**, **Jual**, dan **Tengah**) per 1 unit sebagai acuan saat menentukan kurs. Tab ini hanya untuk dilihat.

![Tab Kurs BI](/pengaturan-kurs-bi.png)

- Kurs diambil otomatis setiap hari kerja. BI tidak mengumumkan kurs pada akhir pekan dan hari libur.
- Pilih **Tanggal pengumuman** untuk melihat kurs hari sebelumnya.
- **Valas perusahaan** hanya menampilkan mata uang yang dipakai valas Anda, ditandai label **Dipakai**. Klik **Semua** untuk melihat seluruh mata uang, atau ketik kode atau nama di **Cari**.
- Waktu pengambilan data tertulis di bawah tabel, misalnya *Data pengumuman ini terakhir diambil 01/10/2026 20:08.*
- Kolom **Tengah** adalah rata-rata beli dan jual. Kurs ini juga dipakai di [LKU](/eksternal/lku) dan [Laporan Keuangan BI](/eksternal/laporan-keuangan-bi).

## Melihat riwayat terbit

Tab **Riwayat Terbit** mencatat setiap penerbitan: **Waktu terbit**, **Shift**, penerbit (**Oleh**), dan **Valas berubah**. Penerbitan yang tidak mengubah kurs apa pun tetap dicatat.

Klik sebuah baris untuk membuka **Rincian Penerbitan**. Jendela itu menampilkan kurs **Beli sebelum**, **Beli sesudah**, **Jual sebelum**, dan **Jual sesudah** untuk setiap valas.

## Mencetak dan mengekspor kurs

Klik **Ekspor** di atas tabel kurs, lalu pilih **Excel** atau **Cetak**. Isinya kurs **terbit** (bukan draf) dari shift di tab yang sedang dibuka: valas, beli, jual, selisih, dan waktu diperbarui.

## Aturan

- **Kurs beli dan jual wajib diisi dan lebih dari 0.**
- **Kurs jual tidak boleh lebih rendah dari kurs beli.** Baris yang salah ditandai merah, dan kurs tidak bisa disimpan sampai diperbaiki.
- **Hanya valas aktif yang tampil.** Pecahan baru dan pecahan yang diaktifkan kembali diatur di [Pecahan Valas](/master/pecahan-valas).

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Periksa kurs yang ditandai merah sebelum melanjutkan.* | Ada kurs kosong, 0, atau jualnya lebih rendah dari beli | Perbaiki baris yang merah |
| *Tidak ada isian yang belum disimpan.* | **Simpan Draf** diklik padahal tidak ada isian yang diubah | Ubah kursnya dulu, atau pastikan Anda berada di tab shift yang benar |
| *Belum ada kurs yang bisa diterbitkan di shift ini.* | Tidak ada satu valas pun yang punya baris kurs di shift itu | Hubungi admin |
| *Belum ada valas berstatus aktif. …* | Perusahaan belum punya valas aktif | Tambahkan pecahan di [Pecahan Valas](/master/pecahan-valas) |
| Baris valas tidak bisa diisi, dengan keterangan *Valas ini belum punya baris kurs di shift ini; hubungi admin.* | Data kurs valas itu belum dibuat | Hubungi admin |
| *Sesi berakhir. Muat ulang halaman lalu coba lagi.* | Anda terlalu lama tidak aktif | Muat ulang halaman. Isian yang belum disimpan hilang, jadi isi ulang |
| *Draf gagal disimpan. Coba lagi.* / *Kurs gagal diterbitkan. Coba lagi.* | Koneksi terputus | Periksa koneksi, lalu ulangi |
| Di jendela jadwal: *Jam mulai shift 2 harus setelah jam mulai shift 1.* | Jam shift tidak berurutan | Isi jam yang lebih lambat dari shift sebelumnya |
| **USD kurs BI (jual)** berisi *—* dan *Belum ada data kurs BI; …* | Kurs BI belum berhasil diambil | Tidak menghalangi penerbitan. Shift 3 yang dihitung dari parameter sementara memakai rasio 1 |

## Terkait

- [Supervisor: menerbitkan kurs harian](/alur-kerja/supervisor#menerbitkan-kurs)
- [Pecahan Valas](/master/pecahan-valas)
- [Papan Kurs](/master/papan-kurs)
- [Informasi Kurs](/transaksi/informasi-kurs)
