---
outline: deep
---

# Serah Terima Kasir

![Serah Terima Kasir](/serah-terima-kasir.png)

Halaman **Serah Terima Kasir** adalah bagian dari sistem aplikasi yang digunakan untuk melakukan perpindahan kasir pada cabang tertentu.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Serah Terima Kasir”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Daftar Serah Terima Kasir”.

### 2. **Tabel Daftar Serah Terima Kasir**

- **Fungsi**: Memberikan informasi terkait data perpindahan kasir, terdiri dari beberapa kolom seperti waktu, periode, shift, ganti shift, user, jumlah idr, status, dan action.

### 3. **Aksi dan Tombol**

- **Tombol "Buat Penyerahan"**:

  - **Fungsi**: Digunakan untuk melakukan navigasi ke halaman penyerahan kasir.
  - **Lokasi**: Di bagian kanan atas tabel.

- **Kolom "status"**:

  - **Fungsi**: Digunakan untuk melakukan penyaringan data serah terima kasir berdasarkan status tertentu.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "Export"**:

  - **Fungsi**: Digunakan untuk mengeksport data serah terima kasir dalam bentuk file CSV, Excel atau PDF.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "print"**:

  - **Fungsi**: Digunakan untuk mencetak data serah terima kasir.
  - **Lokasi**: Di bagian atas tabel.

- **Tombol "reload"**:

  - **Fungsi**: Digunakan untuk mendapatkan data serah terima kasir terbaru.
  - **Lokasi**: Di bagian atas tabel.

---

## Alur Penggunaan

1. **Membuat Penyerahan Kasir**:

   - Untuk melakukan penyerahan kasir pengguna perlu melakukan navigasi ke halaman penyerahan kasir dengan cara menekan tombol "Buat Penyerahan".
   - Setelah itu akan muncul form penyerahan kasir seperti berikut :
     ![Form Penyerahan Kasir](/penyerahan-kasir.png)
   - Setelah itu pengguna dapat melengkapi data yang diperlukan seperti kasir penerima.
   - Apabila data sudah benar dan lengkap, maka pengguna dapat menekan tombol simpan untuk menyelesaikan aksi penyerahan kasir.
   - Penyerahan kasir berhasil dibuat, selanjutnya dapat menunggu kasir penerima untuk menerima aksi serah kasir tersebut.

2. **Menerima Penyerahan Kasir**:
   - Untuk melakukan penerimaan kasir, pengguna harus terlebih dahulu mendapatkan penyerahan kasir dari kasir lain atau yang bersangkutan, jika sudah maka akan tampil seperti berikut :
     ![Terima Penyerahan Kasir](/terima-penyerahan-kasir.png)
   - Pengguna dapat melihat detail informasi terkait dengan penyerahan kasir tersebut dengan cara menekan tombol "Info" pada kolom action.
   - Jika data sudah benar dan pengguna ingin menerima penyerahan kasir, pengguna dapat menekan tombol "Terima" pada kolom action dan akan diarahkan ke halaman penerimaan kasir seperti berikut :
     ![Penerimaan Kasir](/penerimaan-kasir.png)
   - Selanjutnya tekan tombol "Terima" jika ingin melanjutkan aksi, atau tombol "Tolak" jika ingin menolak penyerahan kasir.
   - Pengguna juga dapat mencetak data penyerahan kasir dengan cara menekan tombol "Print Serah Terima" di bagian kanan atas halaman penerimaan kasir.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas).
