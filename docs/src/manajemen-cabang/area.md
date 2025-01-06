---
outline: deep
---

# Area

![Area](/area.png)

Halaman **Area** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola seluruh data area yang tersedia.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Area".
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Area”.

### 2. **Tabel Daftar Area**

- **Fungsi**: Memberikan informasi tentang daftar area yang ada, terdiri dari beberapa kolom seperti nama, kode, keterangan dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah area.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data area dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data area.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data area terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data area secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah area seperti berikut:
     ![Tambah Area](/tambah-area.png)
   - Pengguna dapat melengkapi form area yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data area berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data perusahaan yang akan diperbarui dan selanjutnya akan diarahkan ke halaman area perusahaan.
   - Pengguna dapat memperbarui data perusahaan pada form area yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data area berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data area yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Area](/hapus-area.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
