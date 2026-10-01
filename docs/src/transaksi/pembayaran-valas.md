---
outline: deep
---

# Pembayaran Valas

Menu: **Transaksi → Pembayaran Valas**

Daftar faktur yang belum lunas, sekaligus tempat membayarnya. Faktur dibayar setelah uang dan valas benar-benar berpindah tangan dengan pelanggan. Angka hijau di menu menunjukkan jumlah faktur yang menunggu.

<Alur :langkah="[
  { judul: 'Faktur disimpan', ket: 'Status Belum Bayar. Faktur muncul di daftar ini.' },
  { judul: 'Klik ikon uang', ket: 'Jendela Pembayaran valas terbuka.' },
  { judul: 'Atur akun pembayaran', ket: 'Kas terisi otomatis. Tambahkan bank bila sebagian atau seluruhnya ditransfer.' },
  { judul: 'Bayar sekarang', ket: 'Bisa ditekan setelah Sisa bernilai Rp 0,00 (Pas).', cabang: [
    { jika: 'Berhasil', judul: 'Status Lunas, stok dan kas bergerak', nada: 'ok' },
  ] },
]" />

![Pembayaran Valas dengan dua faktur belum lunas](/pembayaran-valas-daftar.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Belum Lunas** | Jumlah faktur yang belum dibayar |
| **Nilai Transaksi** | Total rupiah faktur yang belum dibayar |
| **Saldo Kas** | Saldo akun kas cabang saat ini |
| **Saldo Bank** | Saldo rekening bank yang dipilih di daftar |
| Filter | **Rentang periode** dan **Tipe** (beli atau jual). Tanpa rentang periode, semua faktur belum lunas ditampilkan |
| Kolom **Lama** | Sudah berapa lama faktur menunggu dibayar |

Fitur tabel lainnya dijelaskan di [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Membayar satu faktur

1. Klik ikon uang di kolom paling kanan baris faktur.
2. Periksa **Faktur**, **Pelanggan**, dan **Rincian Valas** di jendela **Pembayaran valas**.
3. Di **Dibayar dari akun**, akun **Kas** sudah terisi sebesar tagihan.
   - Untuk transfer, klik **Tambah bank**, pilih rekeningnya, lalu bagi nominalnya.
   - Klik **×** untuk mengosongkan baris akun.
4. Bila pembayaran lewat rekening pelanggan, tambahkan di **Rekening Bank Pelanggan** lewat **Dari daftar** atau **Rekening baru**.
5. Pastikan **Sisa** bernilai Rp 0,00 dengan tanda **Pas**.
6. Klik **Bayar sekarang**.

![Jendela Pembayaran valas](/pembayaran-valas-form-baru.png)

Bila berhasil, muncul pesan *Pembayaran transaksi Faktur No : … telah berhasil*.

![Pesan pembayaran berhasil](/pembayaran-valas-berhasil.png)

Ringkasan di bawah jendela membaca **Tagihan − Dialokasikan = Sisa**. **Tagihan** sudah termasuk biaya transaksi bila ada.

## Membayar semua faktur sekaligus

Pengguna dengan peran Super Admin melihat tombol **Bayar semua faktur belum lunas**. Tombol ini membayar **semua** faktur belum lunas di cabang, lintas periode, bukan hanya yang tampil di filter. Pakai dengan hati-hati.

## Aturan

- **Stok brankas dan kas bergerak saat dibayar.** Sebelum dibayar, faktur sudah dihitung di stok akhir tetapi belum mengubah stok brankas.
- **Faktur belum lunas menahan proses lain.** Serah terima kasir, rekonsiliasi, dan tutup periode tidak bisa dijalankan selama masih ada faktur belum dibayar atau menunggu.
- **Faktur dengan label underlying tidak bisa dibayar.** Dokumen underlying pelanggan perlu didaftarkan lebih dulu. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).
- **Pembayaran bisa dibatalkan.** Pakai ikon **Reset pembayaran** di [Daftar Transaksi](/transaksi/daftar-transaksi). Jurnal pembayarannya ikut dihapus.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#membayar-faktur)
- [Transaksi Valas](/transaksi/transaksi-valas)
- [Daftar Transaksi](/transaksi/daftar-transaksi)
