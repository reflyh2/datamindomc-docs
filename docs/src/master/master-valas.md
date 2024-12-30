---
outline: deep
---

# Master Valas

![Master Valas](/master-valas.png)

Halaman **Master Valas** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola data utama valas seperti membuat valas baru, memperbarui data valas dan aksi lainnya.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Master Valas”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Master Valas”.

### 2. **Table Daftar Master Valas**

- **Fungsi**: Memberikan informasi tentang daftar valas yang ada, terdiri dari beberapa kolom seperti kode valas, nama valas, dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah master valas.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data master valas dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data master valas.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data master valas terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data master valas secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah master valas seperti berikut:
     ![Tambah Master Valas](/tambah-master-valas.png)
   - Pengguna dapat melengkapi form master valas yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data master valas berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data master valas yang akan diperbarui dan selanjutnya akan diarahkan ke halaman edit master valas.
   - Pengguna dapat memperbarui data master valas pada form edit yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data master valas berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data master valas yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Master Valas](/hapus-master-valas.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
