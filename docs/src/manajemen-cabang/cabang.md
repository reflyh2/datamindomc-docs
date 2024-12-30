---
outline: deep
---

# Cabang

![Cabang](/cabang.png)

Halaman **Cabang** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola seluruh data cabang yang tersedia.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Cabang".
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Cabang”.

### 2. **Table Daftar Cabang**

- **Fungsi**: Memberikan informasi tentang daftar cabang yang ada, terdiri dari beberapa kolom seperti nama, kode, telepon, periode, shift, area, portal dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah cabang.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data cabang dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data cabang.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data cabang terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data cabang secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah cabang seperti berikut:
     ![Tambah Cabang](/tambah-cabang.png)
   - Pengguna dapat melengkapi form cabang yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data cabang berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data perusahaan yang akan diperbarui dan selanjutnya akan diarahkan ke halaman cabang perusahaan.
   - Pengguna dapat memperbarui data perusahaan pada form cabang yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data cabang berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data cabang yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Cabang](/hapus-cabang.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
