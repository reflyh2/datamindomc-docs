---
outline: [2, 3]
---

# Menangani Batas Underlying

Ketentuan Bank Indonesia mewajibkan pembelian valas di atas jumlah tertentu didukung dokumen dasar (*underlying*), misalnya invoice impor, kontrak, atau bukti kebutuhan lain. Halaman ini menjelaskan apa yang terjadi saat pelanggan melewati batas itu dan bagaimana membukanya kembali.

::: info Fitur opsional
Semua yang dijelaskan di sini hanya berlaku bila **Peringatan Underlying** aktif di **Pengaturan → Umum**. Lihat [Fitur Opsional](/mulai/fitur-opsional).
:::

## Cara batas dihitung

| Aspek | Ketentuan |
|---|---|
| Dihitung per | Pelanggan, per cabang, per bulan berjalan |
| Transaksi yang dihitung | Hanya **penjualan** valas (pelanggan membeli valas dari Anda) |
| Tidak dihitung | Transaksi batal dan transaksi antarcabang |
| Batas bawaan | USD 10.000, bisa diubah lewat **Limit Underlying** |
| Tidak berlaku untuk | Pelanggan kategori **Money Changer** dan **Bank** |

Setiap dokumen underlying yang didaftarkan **menaikkan batas pelanggan** sebesar nilai USD faktur dasarnya. Jadi, mendaftarkan underlying adalah cara membuka kembali faktur yang tertahan.

## Tanda-tanda batas terlampaui

1. **Di form transaksi, tidak ada yang menghalangi.** Satu-satunya petunjuk adalah baris **Nilai Underlying Bulan ini** di panel Status Kepatuhan. Transaksi tetap bisa disimpan.
2. **Di halaman faktur, tombol Cetak hilang**, dan muncul *"Peringatan! Pelanggan ini telah melebihi transaksi … USD"*.
3. **Di Pembayaran Valas, faktur tidak bisa dibayar.** Ikon bayar diganti label kuning **underlying**.

::: tip Transaksinya aman
Transaksinya tetap tersimpan. Faktur hanya tidak bisa dicetak dan dibayar sampai underlying didaftarkan. **Jangan hapus lalu buat ulang transaksinya.** Cukup daftarkan underlying-nya.
:::

## Mendaftarkan underlying

Menu: **Eksternal → Underlying**. Halaman ini punya tiga tab: **Perlu Underlying**, **Dokumen**, dan **Rekap Bulanan**.

### Cara tercepat

- Dari **Transaksi → Pembayaran Valas**, klik label **underlying** di baris faktur. Formulir pendaftaran langsung terbuka di tempat. Cara ini butuh hak akses membuat dokumen underlying.
- Atau buka tab **Perlu Underlying**. Tab ini berisi faktur yang tertahan dan berapa USD yang masih kurang. Klik ikon **Daftarkan underlying** di barisnya, dan formulir terbuka dengan nasabah, tanggal, serta faktur yang sudah terisi.

### Mengisi formulir

Tab **Dokumen** → **Tambah Underlying** membuka formulir kosong.

| Kolom | Cara mengisi |
|---|---|
| **Tanggal** \* | Faktur dasar yang bisa dipilih mengikuti bulan tanggal ini |
| **Nasabah** \* | Klik **Cari**, lalu pilih nasabah |
| **Dokumen** | Hasil pindaian dokumen dasar (PDF, JPG, atau PNG), maksimal 2 MB |
| **Faktur Dasar** \* | Klik **Tambah Faktur**, lalu klik **Pilih** pada faktur yang dimaksud. Minimal satu faktur |

- Tombol **Tambah Faktur** baru aktif setelah Nasabah dan Tanggal terisi.
- Faktur yang bisa dipilih adalah faktur penjualan milik nasabah itu, pada bulan yang sama, yang belum dipakai dokumen underlying lain. Faktur yang belum lunas ikut tampil.
- Mengganti Nasabah atau Tanggal setelah memilih faktur akan **mengosongkan** daftar faktur yang sudah dipilih.

Klik **Simpan**. Setelah itu buka kembali halaman fakturnya (tekan F5 bila sudah terbuka). Tombol **Cetak** akan muncul lagi, dan faktur bisa dibayar di Pembayaran Valas.

### Jika gagal menyimpan

| Pesan | Penyebab | Solusi |
|---|---|---|
| Gagal, proses hanya bisa dilakukan kepada customer yang memiliki NPWP. | NPWP nasabah kosong atau berisi `-` | Lengkapi NPWP di **Pelanggan → Daftar Pelanggan**, lalu ulangi |
| Gagal, salah satu invoice sudah menjadi dasar dokumen underlying lain. | Satu faktur hanya boleh mendasari satu dokumen | Pilih faktur lain |
| Gagal, invoice yang dipilih tidak sesuai customer, cabang, atau periode underlying. | Bulan Tanggal berbeda dengan bulan faktur | Sesuaikan Tanggal, lalu pilih ulang fakturnya |
| Gagal, terjadi kesalahan di server! | Gangguan sistem | Ulangi. Bila terus terjadi, hubungi tim dukungan |

## Rekap dan perubahan

- **Rekap Bulanan**: pilih bulannya untuk melihat nasabah yang melewati batas beserta total USD-nya. Klik **_n_ faktur** untuk melihat rincian fakturnya.
- **Dokumen**: saring berdasarkan periode dan nasabah. Ikon **Lihat**, **Ubah**, dan **Hapus** ada di tiap baris.
