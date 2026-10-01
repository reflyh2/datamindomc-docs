---
outline: deep
---

# Pengguna & Jabatan

Menu: **Staff → Pengguna & Jabatan**

Satu halaman dengan dua tab:

- **Pengguna** — akun yang bisa masuk ke ValasPro di perusahaan Anda.
- **Jabatan** — menentukan menu dan tindakan yang boleh dibuka penggunanya.

Tab yang tampil mengikuti hak akses Anda: tanpa hak akses Jabatan, hanya tab Pengguna yang muncul, begitu pula sebaliknya.

## Tab Pengguna


Akun yang bisa masuk ke ValasPro di perusahaan Anda: siapa, di cabang mana, dengan jabatan apa, dan kapan terakhir masuk.

![Daftar Pengguna](/daftar-pengguna.png)

### Isi halaman

| Bagian | Isi |
|---|---|
| Kotak atas | **Pengguna** (jumlah pengguna / batas paket, beserta sisa kursi), **Nonaktif**, dan **Belum Pernah Masuk** |
| Penyaring | **Cabang**, **Jabatan**, **Status** (Aktif / Nonaktif), dan **Cari** (nama, username, atau email). Tabel langsung berubah saat penyaring diganti |
| Tabel | **Nama** (dengan foto dan username), **Email**, **Cabang**, **Jabatan**, **Status**, **Login Terakhir**, dan **Aksi** |
| **Ekspor** | Unduh tabel sesuai penyaring yang aktif ke Excel, CSV, atau Cetak |

Jabatan bertanda **SISTEM** adalah jabatan bawaan ValasPro (Super Admin, Support, Demo). Pengguna dengan jabatan ini tidak dihitung terhadap batas paket.

#### Aksi per baris

Semua aksi ada di tombol **⋮** pada kolom **Aksi**. Klik nama pengguna untuk langsung ke detailnya.

| Menu | Aksi |
|---|---|
| **Detail** | Data lengkap pengguna, termasuk apakah ia sedang masuk |
| **Ubah** | Mengubah nama, foto, cabang, jabatan, username, email, atau kata sandi |
| **Paksa keluar** | Mengakhiri sesi yang sedang terbuka. Hanya muncul bila pengguna itu sedang masuk |
| **Nonaktifkan** / **Aktifkan** | Menutup atau membuka kembali akses pengguna |
| **Hapus** | Menghapus akun secara permanen |

Untuk akun Anda sendiri, menu hanya berisi **Detail** dan **Ubah**.

### Menambah pengguna

1. Klik **Tambah**.
2. Isi **Nama** dan, bila mau, **Foto Profil** (JPG, PNG, atau GIF, maksimal 2 MB).
3. Pilih **Cabang** dan **Jabatan**.
4. Isi **Username**, **Email**, **Kata Sandi**, dan **Ulangi Kata Sandi** (minimal 6 karakter). Klik ikon mata untuk melihat kata sandi yang diketik.
5. Klik **Simpan**.

![Tambah Pengguna](/tambah-pengguna.png)

Pengguna baru bisa masuk dengan email atau username beserta kata sandinya.

Bila batas paket sudah tercapai, tombol **Tambah** tidak bisa diklik. Hapus pengguna yang tidak dipakai lagi, atau hubungi kami untuk meningkatkan paket.

### Mengubah pengguna

Klik **⋮ → Ubah** pada barisnya, ubah datanya, lalu klik **Simpan**. Kosongkan **Kata Sandi Baru** bila kata sandinya tidak ingin diganti.

Saat mengubah akun Anda sendiri, **Jabatan** terkunci. Minta admin lain bila jabatan Anda perlu diganti.

### Paksa keluar

Untuk perangkat yang hilang, atau komputer bersama yang lupa ditinggal dalam keadaan masuk.

1. Klik **⋮** pada barisnya, lalu **Paksa keluar**.
2. Klik **Paksa keluar** di kotak konfirmasi.

Pada perangkat pengguna itu, halaman berikutnya yang dibuka kembali ke layar masuk dengan pesan *"Sesi Anda diakhiri oleh admin perusahaan."* Ia bisa langsung masuk lagi dengan kata sandinya. Bila kata sandinya mungkin sudah diketahui orang lain, ganti juga kata sandinya lewat **Ubah**.

### Menonaktifkan pengguna

Untuk karyawan yang keluar atau cuti panjang.

1. Klik **⋮** pada barisnya, lalu **Nonaktifkan**.
2. Klik **Nonaktifkan** di kotak konfirmasi.

Pengguna nonaktif tidak bisa masuk (*"Akun Anda dinonaktifkan. Hubungi admin perusahaan Anda."*), dan sesinya yang sedang terbuka langsung berakhir. Riwayat transaksinya tetap utuh. Pilih **⋮ → Aktifkan** untuk membuka aksesnya lagi.

### Menghapus pengguna

Klik **⋮ → Hapus**, lalu **Hapus** di kotak konfirmasi.

Hanya pengguna yang **belum pernah** membuat transaksi, jurnal, serah terima kasir, atau tutup periode yang bisa dihapus. Untuk yang sudah pernah, ValasPro menolak dengan pesan *"… sudah punya riwayat transaksi atau jurnal, jadi tidak dapat dihapus. Nonaktifkan saja."*

### Aturan

- **Pengguna nonaktif tetap dihitung kursi.** Kursi paket baru lepas setelah pengguna dihapus.
- **Akun sendiri.** Anda tidak bisa menghapus, menonaktifkan, atau memaksa keluar akun Anda sendiri. Gunakan menu **Keluar**.
- **Jabatan sistem.** Hanya Super Admin yang bisa mengubah pengguna berjabatan sistem atau memberikan jabatan sistem.

## Tab Jabatan


Jabatan menentukan menu dan tindakan yang boleh dibuka penggunanya. Setiap pengguna punya satu jabatan.

![Daftar Jabatan](/daftar-jabatan.png)

### Isi halaman

| Bagian | Isi |
|---|---|
| **Cari** | Cari jabatan menurut nama atau keterangan |
| Tabel | **Nama**, **Keterangan**, **Pengguna** (jumlah pengguna di perusahaan Anda yang memakai jabatan ini), **Hak Akses** (jumlah hak akses yang diberikan), dan **Aksi** |
| **Ekspor** | Unduh daftar jabatan ke Excel, CSV, atau Cetak |

Jabatan bertanda **SISTEM** adalah jabatan bawaan ValasPro. Jabatan ini tidak bisa diubah atau dihapus, tetapi bisa disalin.

#### Aksi per baris

Semua aksi ada di tombol **⋮** pada kolom **Aksi**. Klik nama jabatan untuk langsung ke detailnya.

| Menu | Aksi |
|---|---|
| **Detail** | Data jabatan beserta daftar pengguna yang memakainya |
| **Atur hak akses** / **Lihat hak akses** | Mengatur hak akses jabatan. Untuk jabatan sistem, hanya bisa dilihat |
| **Ubah** | Mengganti nama atau keterangan |
| **Salin** | Membuat jabatan baru dengan hak akses yang sama |
| **Hapus** | Menghapus jabatan |

Untuk jabatan sistem, menu hanya berisi **Detail**, **Lihat hak akses**, dan **Salin**.

### Menambah jabatan

1. Klik **Tambah**.
2. Isi **Nama** (unik di perusahaan Anda) dan **Keterangan**.
3. Klik **Simpan**. Anda langsung dibawa ke halaman **Hak Akses** jabatan itu.

### Menyalin jabatan

Cara tercepat membuat jabatan yang mirip jabatan lain, misalnya *Kasir Senior* dari *Kasir*.

1. Klik **⋮ → Salin** pada jabatan sumber, lalu **Salin** di kotak konfirmasi.
2. Jabatan baru bernama **Salinan _nama jabatan_** terbuka di halaman ubah. Ganti namanya, lalu klik **Simpan**.
3. Sesuaikan hak aksesnya lewat **Atur hak akses**.

Hak akses bertanda **Khusus Super Admin** tidak ikut tersalin, kecuali Anda sendiri Super Admin.

### Mengatur hak akses

Klik **⋮ → Atur hak akses** pada barisnya.

![Hak Akses](/pengaturan-hak-akses.png)

| Bagian | Isi |
|---|---|
| Kotak atas | **Hak Akses Aktif** (jumlah yang diberikan / seluruhnya), **Kategori**, dan **Keterangan** jabatan |
| **Cari Hak Akses** | Menyaring menurut nama atau kode. Kategori yang berisi hasil terbuka sendiri |
| **Hanya yang aktif** | Menampilkan hak akses yang sudah diberikan saja |
| **Buka semua** / **Tutup semua** | Membuka atau menutup semua kategori |
| Kategori | Klik judulnya untuk membuka. Angka di sebelahnya = jumlah yang diberikan / jumlah di kategori itu |

- **Centang** satu hak akses untuk memberikannya, hilangkan centang untuk mencabutnya. Perubahan **langsung tersimpan**. Tidak ada tombol Simpan.
- **Pilih semua** / **Kosongkan** di sebuah kategori memberikan atau mencabut semua hak akses yang sedang tampil di kategori itu sekaligus.
- Bila penyimpanan gagal, centangnya kembali seperti semula dan muncul pesan di kanan atas.
- Hak akses bertanda **Khusus Super Admin** hanya bisa diberikan oleh Super Admin.

Pengguna dengan jabatan itu mendapat hak akses barunya pada halaman berikutnya yang ia buka.

### Menghapus jabatan

Klik **⋮ → Hapus**, lalu **Hapus** di kotak konfirmasi.

Jabatan yang masih dipakai pengguna tidak bisa dihapus. Pindahkan dulu penggunanya ke jabatan lain di [tab Pengguna](#tab-pengguna).

## Terkait

- [Daftar Akses](/staff/daftar-akses) — katalog seluruh hak akses
