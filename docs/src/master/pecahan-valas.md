---
outline: [2, 3]
---

# Pecahan Valas

Menu: **Master → Pecahan Valas**

Pecahan valas adalah satuan yang dijual-beli dan dihitung stoknya, misalnya **USD100** (100 Dollar) atau **USD5** (5 Dollar). Satu mata uang bisa punya beberapa pecahan dengan kurs masing-masing. Menu ini dipakai admin atau supervisor untuk menambah, mengubah, menonaktifkan, dan mengimpor pecahan.

![Pecahan Valas: ringkasan dan daftar pecahan](/pecahan-valas-daftar.png)

## Isi halaman

### Ringkasan

| Kotak | Isi |
|---|---|
| **Pecahan aktif** | Jumlah pecahan yang tampil di form transaksi |
| **Mata uang** | Jumlah mata uang yang punya pecahan aktif |
| **Belum ada kurs** | Pecahan aktif yang kurs beli atau jualnya masih 0. Bila Anda punya akses Pengaturan Kurs, klik **Atur di Pengaturan Kurs** untuk mengisinya |
| **Nonaktif** | Pecahan yang disembunyikan dari transaksi |

### Tabel

| Kolom | Isi |
|---|---|
| **Mata Uang** | Mata uang pecahan itu |
| **Kode** | Kode yang dicari kasir di form transaksi. Pecahan nonaktif diberi label *Nonaktif* |
| **Nama** | Nama pecahan, misalnya *100 Dollar* |
| **Potongan Beli**, **Potongan Jual** | Nilai potongan yang tersimpan untuk pecahan itu |
| **Kurs Beli / Jual** | Kurs yang berlaku saat ini di cabang Anda, mengikuti shift kurs. Label *Belum ada kurs* berarti kursnya belum diterbitkan |
| **Stok Cabang Ini** | Stok pecahan di cabang Anda, termasuk transaksi yang belum dibayar |

Saring tabel dengan **Mata uang**, **Status** (awalnya **Aktif**; pilih **Nonaktif** atau **Semua status** untuk melihat yang lain), dan **Cari** (kode atau nama). Tabel dimuat ulang begitu filter berubah. Hasil **Ekspor** mengikuti filter yang sedang dipakai. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

Menu aksi di tiap baris berisi **Lihat**, **Ubah**, dan **Nonaktifkan** (atau **Aktifkan kembali** untuk pecahan nonaktif).

### Detail pecahan

**Lihat** membuka detail pecahan: kurs beli dan jual yang berlaku, jumlah transaksi yang memakai pecahan itu, data pecahan, dan tabel **Stok per Cabang**. Tabel ini berguna sebelum menonaktifkan pecahan, karena pecahan hanya bisa dinonaktifkan bila stoknya 0 di semua cabang.

## Menambah pecahan

1. Klik **Tambah**.
2. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   ![Form Identitas Pecahan](/pecahan-valas-tambah.png)

   | Kolom | Cara mengisi |
   |---|---|
   | **Mata Uang** \* | Mata uang pecahan ini |
   | **Nama** \* | Nama pecahan, misalnya *100 Dollar*. Paling panjang 125 karakter |
   | **Kode** \* | Terisi otomatis dari kode mata uang dan angka pertama di Nama (USD + *100 Dollar* → **USD100**). Boleh diganti. Harus unik di perusahaan Anda dan disimpan huruf besar. Paling panjang 15 karakter |
   | **Potongan Beli**, **Potongan Jual** | Kosongkan atau isi 0 bila tidak ada potongan. Tulis tanpa pemisah ribuan |

3. Klik **Simpan**. Muncul pesan *Pecahan … berhasil ditambahkan.* Untuk menambah beberapa pecahan berturut-turut, klik **Simpan & Tambah Lagi**: form kosong terbuka lagi dengan mata uang yang sama.

Pecahan baru langsung aktif, tetapi kursnya masih 0 dan terhitung di kotak **Belum ada kurs**. Terbitkan kursnya di [Pengaturan Kurs](/master/pengaturan-kurs) sebelum pecahan dipakai bertransaksi.

## Mengubah pecahan

Pilih **Ubah** di menu aksi, ganti isinya, lalu klik **Simpan**.

**Mata Uang** terkunci bila pecahan sudah pernah dipakai bertransaksi, karena laporan mengelompokkan transaksi menurut mata uang. Bila pecahan itu salah mata uang, nonaktifkan dan buat pecahan baru.

## Menonaktifkan dan mengaktifkan kembali

Pecahan tidak bisa dihapus. Pecahan yang tidak dipakai lagi dinonaktifkan.

1. Pilih **Nonaktifkan** di menu aksi.
2. Klik **Nonaktifkan** di konfirmasi.

Pecahan nonaktif tidak muncul lagi di form transaksi, Pengaturan Kurs, dan [Stok Valas](/inventori/stok-valas). Riwayat transaksinya tetap utuh.

Penonaktifan ditolak bila stoknya belum 0 di semua cabang. Pesannya menyebut cabang dan sisa stoknya. Kosongkan dulu stok itu lewat transaksi atau [Pindah Pecahan](/inventori/pb-valas).

Untuk memakainya lagi, pilih **Status: Nonaktif**, lalu pilih **Aktifkan kembali** di menu aksi baris itu. Pecahan yang belum pernah punya kurs perlu diterbitkan kursnya dulu di Pengaturan Kurs.

## Mengimpor pecahan

Untuk menambah banyak pecahan sekaligus:

1. Klik **Impor**, lalu **Unduh Template**.
2. Isi template. Judul kolom berlatar merah wajib diisi, yang abu-abu opsional:

   | Kolom | Cara mengisi |
   |---|---|
   | **name** \* | Nama pecahan |
   | **code** \* | Kode pecahan, unik |
   | **currency** \* | Kode mata uang persis, misalnya `USD`, `SGD`, `EUR`. Bukan namanya |
   | **reduction_buy**, **reduction_sell** | Potongan beli dan jual. Kosong dianggap 0. Tanpa pemisah ribuan |

   Jangan ubah, hapus, atau geser baris 1 (judul kolom), dan hapus baris contoh sebelum mengisi data asli.

3. Pilih berkasnya (.xlsx, .xls, atau .csv), lalu klik **Impor**.

Hasilnya tampil di jendela yang sama: berapa baris masuk, dilewati, dan gagal, beserta alasannya per baris. Kode yang sudah terdaftar, termasuk milik pecahan nonaktif, dilewati dan tidak ditimpa. Semua pecahan hasil impor berkurs 0, jadi terbitkan kursnya di Pengaturan Kurs.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Kode … sudah dipakai pecahan lain* | Kode itu sudah ada, mungkin milik pecahan nonaktif | Pakai kode lain, atau aktifkan kembali pecahan lama |
| *Mata uang tidak bisa diganti: pecahan ini sudah dipakai di … transaksi.* | Pecahan sudah dipakai bertransaksi | Nonaktifkan dan buat pecahan baru |
| *Pecahan … tidak bisa dinonaktifkan karena stoknya masih ada: …* | Masih ada stok di cabang yang disebut | Kosongkan stoknya lewat transaksi atau Pindah Pecahan |
| *Potongan beli harus angka.* | Ada huruf atau pemisah ribuan | Tulis angka saja, misalnya `150` |
| Saat impor: *mata uang '…' tidak dikenal* | Kolom currency diisi nama, bukan kode | Isi dengan kode persis, misalnya `USD` |
| Saat impor: *Berkas harus .xlsx, .xls, atau .csv.* | Format berkas lain | Simpan ulang dari template |

## Terkait

- [Pengaturan Kurs](/master/pengaturan-kurs)
- [Stok Valas](/inventori/stok-valas)
- [Pindah Pecahan](/inventori/pb-valas)
