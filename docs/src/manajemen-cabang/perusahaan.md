---
outline: deep
---

# Perusahaan

![Perusahaan](/perusahaan.png)

Halaman **Perusahaan** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola seluruh data perusahaan yang tersedia.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Perusahaan".
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Perusahaan”.

### 2. **Tabel Daftar Pengguna**

- **Fungsi**: Memberikan informasi tentang daftar perusahaan yang ada, terdiri dari beberapa kolom seperti nama, alamat, no telpon, email, NPWP, jabatan dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah perusahaan.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data perusahaan dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data perusahaan.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data perusahaan terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data perusahaan secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah perusahaan seperti berikut:
     ![Tambah Cabang](/tambah-perusahaan.png)
   - Pengguna dapat melengkapi form perusahaan yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data perusahaan berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data perusahaan yang akan diperbarui dan selanjutnya akan diarahkan ke halaman edit perusahaan.
   - Pengguna dapat memperbarui data perusahaan pada form edit yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data perusahaan berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data perusahaan yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Cabang](/hapus-perusahaan.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
