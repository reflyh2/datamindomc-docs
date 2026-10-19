---
outline: deep
---

# Pecahan Valas

::: info Tampilan versi sebelumnya
Gambar di halaman ini diambil dari tampilan ValasPro versi sebelumnya. Letak dan warna tombol bisa sedikit berbeda.
:::

![Pecahan Valas](/pecahan-valas.png)

Halaman **Pecahan Valas** adalah bagian dari sistem aplikasi yang digunakan untuk mengelola data pecahan valas seperti membuat pecahan valas baru, memperbarui data pecahan valas dan aksi lainnya.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Pecahan Valas”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Pecahan Valas.

### 2. **Tabel Daftar Pecahan Valas**

- **Fungsi**: Memberikan informasi tentang daftar pecahan valas yang ada, terdiri dari beberapa kolom seperti mata uang, kode, nama, potongan beli, potongan jual dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Create"**:

  - **Fungsi**: Digunakan untuk navigasi ke halaman form tambah pecahan valas.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengekspor data pecahan valas dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Print"**:

  - **Fungsi**: Digunakan untuk mencetak data pecahan valas.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data pecahan valas terbaru.
  - **Lokasi**: Di bagian atas tabel.

- **Kolom "Search"**:

  - **Fungsi**: Digunakan untuk mencari data pecahan valas secara spesifik.
  - **Lokasi**: Di bagian kanan atas tabel.

---

## Alur Penggunaan

1. **Menambahkan Data**:
   - Pengguna dapat menekan tombol "create" dan selanjutnya akan diarahkan ke halaman tambah pecahan valas seperti berikut:
     ![Tambah Pecahan Valas](/tambah-pecahan-valas.png)
   - Pengguna dapat melengkapi form pecahan valas yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data pecahan valas berhasil di tambahkan.
2. **Memperbarui Data**:
   - Pengguna dapat menekan tombol "Edit" pada kolom "action" untuk data pecahan valas yang akan diperbarui dan selanjutnya akan diarahkan ke halaman edit pecahan valas.
   - Pengguna dapat memperbarui data pecahan valas pada form edit yang tersedia.
   - Apabila data sudah lengkap maka pengguna dapat menekan tombol "Simpan" dan data pecahan valas berhasil di perbarui.
3. **Menghapus Data**:
   - Pengguna dapat menekan tombol "Delete" pada kolom "action" untuk data pecahan valas yang akan dihapus dan selanjutnya akan tampil dialog konfirmasi seperti berikut:
     ![Hapus Pecahan Valas](/hapus-pecahan-valas.png)
   - Pengguna dapat menekan tombol "Ok" jika ingin melanjutkan hapus data, namun jika tidak pengguna dapat menekan tombol "Cancel" untuk membatalkan aksi.
4. **Tindakan Massal (banyak pecahan sekaligus)**:
   - Centang kotak di kolom paling kiri pada pecahan yang ingin diubah. Kotak di judul kolom memilih semua pecahan di halaman yang sedang tampil. Pilihan tetap tersimpan saat Anda pindah halaman atau mengganti saringan.
   - Di atas tabel muncul bar "_n_ pecahan dipilih" dengan tombol berikut:
     - **Atur Potongan**: mengisi Potongan Beli dan/atau Potongan Jual untuk semua pecahan terpilih. Kolom yang dikosongkan tidak diubah.
     - **Nonaktifkan**: menyembunyikan pecahan terpilih dari form transaksi. Pecahan yang stoknya belum 0 di semua cabang akan dilewati, dan namanya beserta stok per cabang ditampilkan setelah proses selesai.
     - **Aktifkan kembali**: muncul bila ada pecahan nonaktif yang dipilih (saring Status ke "Nonaktif" atau "Semua status").
     - **Batalkan pilihan**: mengosongkan semua centang.
   - Setelah proses selesai, halaman dimuat ulang dan angka ringkasan di atas tabel ikut diperbarui.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas).
