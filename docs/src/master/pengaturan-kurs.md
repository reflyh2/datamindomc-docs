---
outline: [2, 3]
---

# Pengaturan Kurs

Menu: **Master → Pengaturan Kurs** (judul halaman: **Pengaturan Kurs Valas**)

Di sini supervisor menentukan kurs beli dan jual setiap valas, lalu menerbitkannya supaya dipakai kasir. Kurs yang terbit langsung dipakai di form transaksi, di [Informasi Kurs](/transaksi/informasi-kurs), dan di [Papan Kurs](/master/papan-kurs).

## Isi halaman

Bagian atas halaman berisi kotak ringkasan:

| Kotak | Isi |
|---|---|
| **Kurs berlaku sekarang** | Shift kurs yang sedang dipakai transaksi beserta jam berlakunya. Perusahaan dengan kurs tunggal melihat *Kurs tunggal* |
| **Jadwal shift kurs** | Jumlah shift kurs dan jam mulai masing-masing, misalnya *S1 04.00 · S2 10.00*. Klik **Atur** untuk [mengubah jadwal](#mengatur-jadwal-shift-kurs) |
| **Valas aktif** | Jumlah valas aktif yang punya kurs |
| **Draf belum terbit** | Jumlah valas yang kursnya sudah disimpan sebagai draf tetapi belum diterbitkan. Angkanya kuning bila ada. Selama belum terbit, kasir masih memakai kurs lama |
| **Terakhir terbit** | Waktu penerbitan terakhir, beserta shift dan nama penerbitnya |
| **USD kurs BI (jual)** | Kurs jual USD dari Bank Indonesia sebagai acuan, beserta kurs belinya. Hanya untuk dilihat |

Di bawahnya ada tab:

| Tab | Isi |
|---|---|
| **Shift 1**, **Shift 2**, **Shift 3** | Tabel kurs untuk shift itu. Jumlah tab mengikuti jadwal shift kurs. Perusahaan dengan kurs tunggal hanya punya tab **Kurs** |
| **Kurs BI** | Kurs transaksi Bank Indonesia. Lihat [Melihat kurs BI](#melihat-kurs-bi) |
| **Riwayat Terbit** | Catatan setiap penerbitan. Lihat [Melihat riwayat terbit](#melihat-riwayat-terbit) |

Tabel kurs berisi kolom berikut:

| Kolom | Isi |
|---|---|
| **Beli**, **Jual** | Isian kurs yang bisa Anda ubah. Baris yang sudah diubah tetapi belum disimpan ditandai, begitu juga baris yang masih berupa draf |
| **Selisih** | Jual dikurangi beli |
| **Kurs terbit** | Kurs yang sedang dipakai transaksi saat ini. Bandingkan dengan isian Beli dan Jual sebelum menerbitkan |
| **Diperbarui** | Waktu kurs valas itu terakhir diubah |

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
2. Isi kolom **Beli** dan **Jual** untuk setiap valas. Tekan <kbd>Enter</kbd> atau tombol panah untuk pindah baris.
3. Klik **Terbitkan**. Konfirmasi *Terbitkan kurs?* menyebut berapa valas yang berubah. Periksa angkanya, lalu klik **Terbitkan** lagi.

Setelah berhasil muncul pesan seperti *Kurs shift 1 terbit — 5 dari 24 valas berubah.*

Kalau ingin menyimpan dulu tanpa menerbitkan, klik **Simpan Draf** di langkah 3. Draf bisa diterbitkan nanti dengan membuka tab shift yang sama lalu klik **Terbitkan**.

### Menaikkan atau menurunkan banyak kurs sekaligus

1. Centang baris valas yang ingin disesuaikan. Centang kotak di judul kolom untuk memilih semua baris yang tampil.
2. Di bilah yang muncul, pilih kolomnya: *Beli & jual*, *Beli saja*, atau *Jual saja*.
3. Pilih arahnya: *naik* atau *turun*.
4. Isi besarnya, lalu pilih satuannya: **%** atau **Rp**.
5. Klik **Terapkan**.

Hasilnya masih berupa isian yang belum disimpan. Periksa barisnya, lalu klik **Simpan Draf** atau **Terbitkan**. Klik **Batalkan pilihan** untuk menghapus centang.

### Yang terjadi pada shift lain

**Menerbitkan satu shift juga menimpa kurs shift sesudahnya.** Contohnya, menerbitkan Shift 1 juga mengubah Shift 2 dan Shift 3:

- Shift 2 mendapat nilai yang sama.
- Shift 3 dihitung dari [Parameter Kurs](/master/parameter-kurs) **Shift 3** bila parameternya diisi. Kalau tidak diisi, nilainya disalin.

Kalau shift berikutnya perlu kurs berbeda, buka tab shift itu dan terbitkan **sesudah** shift sebelumnya.

### Persetujuan atasan

Bila perusahaan menyalakan [Persetujuan Atasan](/mulai/fitur-opsional#fitur-lain) untuk terbitkan kurs, jendela **Persetujuan Atasan** muncul setelah Anda mengonfirmasi **Terbitkan**. Atasan mengetik username atau email dan kata sandinya sendiri, lalu klik **Setujui**.

Atasan harus pengguna lain yang jabatannya punya hak akses **Setujui Terbitkan Kurs**. Anda tidak bisa menyetujui terbitan Anda sendiri.

## Mengatur jadwal shift kurs

Jadwal menentukan berapa kali kurs berganti dalam sehari dan pukul berapa.

1. Klik **Atur** di kotak **Jadwal shift kurs**.
2. Pilih **Jumlah shift kurs**: *1 (kurs tunggal)*, *2 shift*, atau *3 shift*.
3. Untuk 2 atau 3 shift, isi jam mulai setiap shift. Jam setiap shift harus lebih lambat dari shift sebelumnya.
4. Klik **Simpan**. Halaman dimuat ulang dengan tab shift yang baru.

Yang perlu diketahui:

- **Setiap shift berlaku sampai shift berikutnya dimulai.** Jam sebelum shift 1 (lewat tengah malam) masih memakai shift terakhir. Contoh: dengan jadwal 06.00 / 14.00 / 22.00, transaksi pukul 03.00 memakai kurs shift 3.
- **Jadwal berlaku untuk semua cabang**, dan tidak ada hubungannya dengan shift kasir di menu **Shift**.
- **Shift yang baru ditambah diisi dari shift sebelumnya.** Periksa kursnya dan terbitkan ulang bila perlu.
- **Isian kurs yang belum disimpan hilang** saat jadwal disimpan. Kalau masih ada isian seperti itu, muncul peringatan *Buang isian yang belum disimpan?* Klik **Batal**, lalu simpan atau terbitkan kursnya dulu.

## Melihat kurs BI

Tab **Kurs BI** menampilkan kurs transaksi Bank Indonesia (**Beli**, **Jual**, dan **Tengah**) sebagai acuan saat menentukan kurs. Tab ini hanya untuk dilihat.

- Kurs diambil otomatis setiap hari kerja. BI tidak mengumumkan kurs pada akhir pekan dan hari libur.
- Pilih **Tanggal pengumuman** untuk melihat kurs hari sebelumnya.
- **Valas perusahaan** hanya menampilkan mata uang yang dipakai valas Anda. Klik **Semua** untuk melihat seluruh mata uang.
- Kolom **Tengah** adalah rata-rata beli dan jual. Kurs ini juga dipakai di [LKU](/eksternal/lku) dan [Laporan Keuangan BI](/eksternal/laporan-keuangan-bi).

## Melihat riwayat terbit

Tab **Riwayat Terbit** mencatat setiap penerbitan: **Waktu terbit**, **Shift**, penerbit (**Oleh**), dan **Valas berubah**. Penerbitan yang tidak mengubah kurs apa pun tetap dicatat.

Klik sebuah baris untuk membuka **Rincian Penerbitan**. Jendela itu menampilkan kurs **Beli sebelum**, **Beli sesudah**, **Jual sebelum**, dan **Jual sesudah** untuk setiap valas.

## Mencetak dan mengekspor kurs

Klik **Ekspor** di atas tabel kurs, lalu pilih **Excel** atau **Cetak**. Isinya kurs terbit setiap valas: kode, nama, beli, jual, selisih, dan waktu diperbarui.

## Aturan

- **Kurs beli dan jual wajib diisi dan lebih dari 0.**
- **Kurs jual tidak boleh lebih rendah dari kurs beli.** Baris yang salah ditandai merah, dan kurs tidak bisa disimpan sampai diperbaiki.
- **Hanya valas aktif yang tampil.** Valas baru atau yang diaktifkan kembali diatur di [Master Valas](/master/master-valas).

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Periksa kurs yang ditandai merah sebelum melanjutkan.* | Ada kurs kosong, 0, atau jualnya lebih rendah dari beli | Perbaiki baris yang merah |
| *Tidak ada draf yang belum terbit di shift ini.* / *Belum ada kurs yang bisa diterbitkan di shift ini.* | Tidak ada perubahan untuk diterbitkan | Ubah kursnya dulu, atau pastikan Anda berada di tab shift yang benar |
| Baris valas tidak bisa diisi, dengan keterangan *Valas ini belum punya baris kurs di shift ini; hubungi admin.* | Data kurs valas itu belum dibuat | Minta admin memeriksa valas tersebut di [Master Valas](/master/master-valas) |
| *Sesi berakhir. Muat ulang halaman lalu coba lagi.* | Anda terlalu lama tidak aktif | Muat ulang halaman. Isian yang belum disimpan hilang, jadi isi ulang |
| *Draf gagal disimpan.* / *Kurs gagal diterbitkan. Coba lagi.* | Koneksi terputus | Periksa koneksi, lalu ulangi |
| **USD kurs BI (jual)** berisi *Belum ada data kurs BI* | Kurs BI belum berhasil diambil | Tidak menghalangi penerbitan. Parameter Kurs Shift 3 sementara memakai rasio 1 |

## Terkait

- [Supervisor: menerbitkan kurs harian](/alur-kerja/supervisor#menerbitkan-kurs)
- [Parameter Kurs](/master/parameter-kurs)
- [Papan Kurs](/master/papan-kurs)
- [Informasi Kurs](/transaksi/informasi-kurs)
