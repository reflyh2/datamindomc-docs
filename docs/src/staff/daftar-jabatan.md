---
outline: deep
---

# Daftar Jabatan

![Daftar Jabatan](/daftar-jabatan.png)

Halaman **Daftar Jabatan** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola data jabatan yang tersedia.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Jabatan”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Jabatan”.

### 2. **Tabel Daftar Jabatan**

- **Fungsi**: Memberikan informasi tentang daftar jabatan yang ada, terdiri dari beberapa kolom seperti nama, keterangan dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah jabatan.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data jabatan dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data jabatan.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data jabatan terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data jabatan secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:

   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah jabatan seperti berikut:
     ![Tambah Jabatan](/tambah-jabatan.png)
   - Pengguna dapat melengkapi form jabatan yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data jabatan berhasil di tambahkan.

2. **Memperbarui Data**:

   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data jabatan yang akan diperbarui dan selanjutnya akan diarahkan ke halaman edit jabatan.
   - Pengguna dapat memperbarui data jabatan pada form edit yang tersedia.
   - Apabila data sudah lengkap maka jabatan dapat menekan tombol "Simpan" dan data jabatan berhasil di perbarui.

3. **Menghapus Data**:

   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data jabatan yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Jabatan](/hapus-jabatan.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.

4. **Mengatur Hak Akses**
   - Pengguna dapat menekan tombol "Access Rights" pada kolom "action" untuk data jabatan yang akan diatur hak aksesnya dan selanjutnya akan diarahkan ke halaman pengaturan hak akses seperti berikut:
     ![Pengaturna Hak Akses](/pengaturan-hak-akses.png)
   - Pengguna dapat menekan checkbox yang pada hak akses yang akan diberikan, jika checkbox sudah ter checklist maka hak akses sudah diterapkan pada jabatan tersebut.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas).
