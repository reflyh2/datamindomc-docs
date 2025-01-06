---
outline: deep
---

# Daftar Akses

![Daftar Akses](/daftar-akses.png)

Halaman **Daftar Akses** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola seluruh data akses yang tersedia.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Akses”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Akses”.

### 2. **Tabel Daftar Pengguna**

- **Fungsi**: Memberikan informasi tentang daftar akses yang ada, terdiri dari beberapa kolom seperti kategori, nama, permission dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah akses.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data akses dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data akses.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data akses terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data akses secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

- **Kolom "Kategori Akses"**:

  - **Fungsi**: Digunakan untuk menyaring data akses berdasarkan kategori.
  - **Lokasi**: Di bagian atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah akses seperti berikut:
     ![Tambah Akses](/tambah-akses.png)
   - Pengguna dapat melengkapi form akses yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data akses berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data akses yang akan diperbarui dan selanjutnya akan diarahkan ke halaman edit pengguna.
   - Pengguna dapat memperbarui data akses pada form edit yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data akses berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data akses yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Pengguna](/hapus-akses.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
