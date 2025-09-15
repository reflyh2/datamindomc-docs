---
outline: deep
---

# Otorisasi Underlying

![Otorisasi Underlying](/underlying-authorize.png)

Halaman ini digunakan untuk melakukan otorisasi terhadap transaksi yang tercatat sebagai transaksi underlying.

---

## Struktur Halaman

### 1. **Judul Halaman**

- **Lokasi**: Bagian atas halaman.
- **Isi**: "Otorisasi Underlying".
- **Navigasi**: Breadcrumb di sebelah kanan atas menunjukkan posisi halaman saat ini, seperti “Dashboard > Otorisasi Underlying".

### 2. **Tabel Transaksi**

- **Fungsi**: Menampilkan list data transaksi underlying.

### 3. **Aksi dan Tombol**
- **Tombol "Payment"**:
  - **Fungsi**: Digunakan untuk melakukan otorisasi pada transaksi yang dipilih.
  - **Lokasi**: Di bagian kolom Action tabel.
---

## Alur Penggunaan

1. **Mengaktifkan Fitur Underlying**:
  - Pengguna dapat memilih untuk mengaktifkan atau tidak menu underlying di pengaturan umum, dengan menekan toggle aktif di "Peringatan Underlying", lalu pengguna juga dapat menetapkan limit underlying perbulan pada field input "Limit Underlying", seperti pada gambar berikut : ![Pratinjau](/underlying-setting.png)
2. **Transaksi Underlying**:
  - Setelah underlying aktif maka sistem akan mendeteksi setiap transaksi pada pelanggan yang sudah melebih limit bulanan yang sudah ditetapkan, jika terdapat transaksi yang melebihi limit maka akan tampil peringatan seperti pada gambar berikut : ![Pratinjau](/underlying-invoice-warning.png)
  - Jika transaksi terdeteksi sebagai underlying makan pada menu [Pembayaran Valas](/transaksi/pembayaran-valas) tidak akan dapat dilakukan pembayaran dan akan muncul penanda underlying seperti pada gambar berikut : ![Pratinjau](/underlying-cannot-payment.png)
3. **Otorisasi Transaksi Underlying**:
  - Selanjutnya pada menu ini, akan tampil list transaksi underlying seperti pada contoh gambar berikut : ![Pratinjau](/underlying-authorize.png)
  - Pengguna dapat menekan tombol "Payment" untuk melakukan otorisasi, lalu akan muncul halaman form seperti berikut : ![Pratinjau](/underlying-authorize-form.png) lalu pengguna dapat melengkapi seluruh data yang diperlukan.
  - Jika sudah di otorisasi maka status underlying pada transaksi tersebut akan lepas dan transaksi dapat dilanjut pembayarannya seperti biasa.

## Lainnya

Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas).
