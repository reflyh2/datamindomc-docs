---
outline: deep
---

# Data Duplikat

Menu: **Pelanggan → Data Duplikat** (judul halaman: **Data Duplikat Pelanggan**)

Tempat merapikan pelanggan yang tercatat lebih dari sekali, misalnya karena diinput ulang di cabang lain atau hasil impor. Sistem mengelompokkan data yang diduga dobel, lalu Anda memilih satu yang dipertahankan dan menggabungkan sisanya ke situ. Menu ini hanya tampil bila Anda punya hak akses mengelola data duplikat.

## Isi halaman

Halaman berisi daftar grup. Setiap grup adalah satu kelompok pelanggan yang diduga orang yang sama. Ada dua jenis grup:

| Jenis grup | Artinya |
|---|---|
| **No. Identitas _nomor_** | Beberapa pelanggan memakai no. identitas yang sama. Badge **Data identik** berarti datanya sama persis. Badge **Data berbeda** berarti ada perbedaan di nama, tipe identitas, tanggal lahir, atau NPWP |
| **Nama mirip · _nama_** | Nama pelanggan mirip, dan telepon mirip atau tanggal lahir sama, meski no. identitasnya berbeda. Badge di sebelahnya menunjukkan kemiripan apa yang ditemukan |

Di setiap grup ada tabel dengan kolom:

| Kolom | Isi |
|---|---|
| **Keeper** | Pilihan record yang dipertahankan |
| **Nama**, **Identitas**, **Tgl Lahir**, **NPWP**, **Telepon** | Data pelanggan, untuk dibandingkan |
| **Transaksi** | Jumlah transaksi milik record itu |
| **Dibuat** | Tanggal record dibuat |

Halaman menampilkan 20 grup sekaligus. Gunakan **Cari** (no. identitas, nama, telepon, atau NPWP) untuk menemukan grup tertentu.

## Menggabungkan pelanggan duplikat

1. Bandingkan data di setiap baris grup. Pastikan semuanya memang orang atau badan yang sama.
2. Pilih **Keeper**, yaitu record yang dipertahankan. Saran sistem: record yang punya transaksi, atau yang paling awal dibuat. Pilih juga record yang datanya paling lengkap dan benar.
3. Klik **Gabungkan**.
4. Di jendela **Gabungkan grup ini?**, klik **Ya, Gabungkan**. Muncul pesan *"Pelanggan duplikat berhasil digabungkan."*.

Seluruh transaksi dan data terkait dari record lain dipindahkan ke keeper. Record lainnya dihapus dari Daftar Pelanggan.

::: warning Tidak mudah dibatalkan
Penggabungan memindahkan transaksi ke keeper. Bila keliru, memisahkannya kembali harus lewat pengelola sistem. Periksa grup dengan badge **Data berbeda** dan grup **Nama mirip** dengan teliti sebelum menggabungkan.
:::

## Menandai bukan duplikat

Bila pelanggan dalam satu grup ternyata orang yang berbeda:

1. Klik **Bukan Duplikat** pada grup itu.
2. Di jendela **Tandai bukan duplikat?**, klik **Ya, Bukan Duplikat**.

Grup itu tidak ditampilkan lagi. Data pelanggannya tidak diubah.

## Aturan

- **Data keeper tidak ditimpa, hanya dilengkapi.** Kolom keeper yang sudah terisi tetap dipakai. Kolom yang kosong (mis. alamat, telepon, email, NPWP) diisi dari record lain. Rekening bank record lain ikut dipindahkan ke keeper.
- **Grup dengan no. identitas sama tetap perlu diperiksa.** No. identitas yang sama bisa juga berarti salah ketik pada salah satu pelanggan.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"Tidak ada duplikat yang perlu direview saat ini."* | Tidak ada data yang diduga dobel | Tidak perlu tindakan |
| *"Tidak ada grup yang cocok dengan pencarian."* | Kata kunci tidak cocok dengan grup mana pun | Ubah kata kunci |
| *"Data pelanggan tidak valid."* | Salah satu pelanggan di grup sudah tidak ada, misalnya sudah digabungkan pengguna lain | Muat ulang halaman |
| *"Gagal menggabungkan: …"* | Penggabungan gagal di server | Catat pesannya, lalu hubungi pengelola sistem |

## Terkait

- [Daftar Pelanggan](/pelanggan/daftar-pelanggan)
- [Mengimpor pelanggan dari Excel](/pelanggan/daftar-pelanggan#mengimpor-pelanggan-dari-excel)
