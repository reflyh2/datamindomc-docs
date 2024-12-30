---
outline: deep
---

# Transaksi Valas

![Transaksi Valas](/transaksi-valas.png)

Halaman **Transaksi Valas** adalah bagian dari sistem aplikasi yang digunakan untuk menambahkan transaksi valas baru. Terdapat dua form yang haru dilengkapi yaitu informasi umum dan data valas.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Transaksi Valas”.
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Transaksi Valas”.

### 2. **Form Transaksi Valas**

- **Fungsi**: Menginput atau memasukan data transaksi valas yang akan dibuat terdapat 2 jenis form yang harus diisi yaitu :
  - **Informasi Umum**: Berisi input data seperti tipe transaksi, tipe pelanggan, pelanggan, sumber dana, tujuan transaksi, catatan dan opsi transaksi modal.
  - **Data Valas**: Berisi input data seperti jenis valas, jumlah, kurs dan sub total.

### 3. **Tabel Valas**

- **Fungsi**: Menampilkan pratinjau data yang ditambahkan dari form data valas.

### 4. **Aksi dan Tombol**

- **Tombol "Simpan"**:
  - **Fungsi**: Digunakan untuk menyimpan data transaksi yang sudah di input.
  - **Lokasi**: Di bagian kanan atas halaman.
- **Tombol "Tambah ke Tabel"**:
  - **Fungsi**: Digunakan untuk menambahkan data valas yang sudah di input.
  - **Lokasi**: Di bagian bawah form data valas.

---

## Alur Penggunaan

1. **Menginput data informasi umum**:
   - Pilih tipe tansaksi (Pembelian atau Penjualan).
   - Pilih tipe pelanggan, aksi ini akan mempengaruhi daftar pelanggan pada aksi selanjutnya.
   - Pilih pelanggan dari daftar pelanggan yang tersedia atau pengguna juga dapat [menambahkan pelanggan baru]("/pelanggan/pengaturan-pelanggan")
   - Pilih sumber dana tujuan transaksi.
   - Tambahkan catatan jika diperlukan, aksi ini bersifat opsional.
   - Pengguna juga dapat mengaktifkan transaksi modal dengan catatan Transaksi Modal tidak akan terhitung pada perhitungan laba.
   - Pastikan input yang memiliki tanda **"\*"** terisi.
2. **Menginput data valas**:
   - Pilih valas yang tersedia pada daftar valas.
   - Input jumlah valas yang ingin di transaksikan, jika tipe transaksi yang dipilih adalah penjualan pastikan jumlah yang diinput tidak melebihi stok yang tersedia.
3. **Pratinjau Data Valas**:
   - Setelah data valas ditambahkan maka tabel pratinjau data valas akan terisi.
   - Contoh tabel yang sudah terisi : ![Pratinjau data valas](/tv-preview.png)
4. **Menyimpan Transaksi**:
   - Pastikan data yang sudah di input sudah benar.
   - Klik tombol "Simpan" pada bagian kanan atas halaman.
   - Jika transaksi berhasil maka akan muncul faktur transaksi.
   - Contoh faktur : ![Faktur Transaksi](/invoice-tv.png)

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/daftar-valas).
