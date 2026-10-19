---
outline: deep
---

# DTTOT

Menu: **Pelanggan → Skrining → DTTOT**

Daftar Terduga Teroris dan Organisasi Teroris terbitan Kepolisian RI melalui PPATK. Nama pelanggan dicocokkan otomatis dengan daftar ini setiap kali transaksi disimpan. Halaman ini dipakai untuk melihat isi daftar dan mengecek tanggal pembaruannya.

![Tab DTTOT: kotak ringkasan dan tabel Daftar DTTOT](/pelanggan-skrining-dttot.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Entri Daftar** | Jumlah nama terduga teroris dan organisasi di daftar |
| **Terakhir Diperbarui** | Tanggal impor terakhir. Bandingkan dengan tanggal terbitan terbaru PPATK |
| **Kecocokan 30 Hari** | Jumlah kecocokan pelanggan Anda dengan daftar ini dalam 30 hari terakhir. Klik **lihat riwayat skrining** untuk membuka tab [Riwayat](/pelanggan/skrining/riwayat) |
| **Cari** | Nama, kode, atau kewarganegaraan |
| **Nama** | Nama beserta aliasnya |
| **Deskripsi** | Keterangan dari PPATK, mis. nomor paspor dan afiliasi |
| **Terduga** | **Orang** atau **Korporasi** |
| **Kode** | Kode entri dari PPATK |
| **W N** | Kewarganegaraan |

Klik **⋮ → Detail** di ujung baris untuk melihat seluruh data satu entri.

## Menambah entri

Tombol **Tambah** hanya tampil bila Anda punya hak akses mengelola DTTOT.

1. Klik **Tambah**.
2. Isi **Nama** (wajib) dan data lain yang tersedia.
3. Klik **Simpan**.

## Mengekspor daftar

Klik **Ekspor**, lalu pilih formatnya. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Aturan

- **Satu daftar untuk semua perusahaan.** DTTOT adalah daftar nasional. Karena itu, mengubah, menghapus, dan mengimpor daftar hanya bisa dilakukan oleh pengelola sistem ValasPro. Bila daftar terlihat belum diperbarui, hubungi pengelola.
- **Impor menggantikan seluruh daftar.** Pengelola mengunggah berkas CSV terbaru lewat **Impor Daftar DTTOT**, dan isinya menggantikan daftar lama.
- **Pencocokan berdasarkan kemiripan nama.** Nama yang umum bisa ikut tersaring. Petugas tetap harus membandingkan tanggal lahir, alamat, dan kewarganegaraan. Lihat [Cara kerja skrining](/pelanggan/skrining/ringkasan#cara-kerja-skrining).

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"Daftar DTTOT berlaku untuk seluruh tenant; hanya role sistem yang dapat mengubahnya."* | Anda mencoba mengubah, menghapus, atau mengimpor daftar | Minta pengelola sistem memperbarui daftar |

## Terkait

- [Indikasi DTTOT di form transaksi](/alur-kerja/kasir#indikasi-dttot)
- [Riwayat Skrining](/pelanggan/skrining/riwayat)
- [DPPSPM](/pelanggan/skrining/dppspm)
