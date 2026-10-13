---
outline: deep
---

# Laporan Keuangan Bank Indonesia

Menu: **Eksternal → Bank Indonesia → Laporan Keuangan**

Laporan keuangan dalam format Bank Indonesia untuk seluruh cabang perusahaan. Halaman ini punya dua tab: **Neraca** dan **Laba Rugi**.

::: info Tab Neraca
Panduan tab **Neraca** sedang ditulis. Halaman ini baru membahas tab **Laba Rugi**.
:::

## Laba Rugi

![Tab Laba Rugi (BI), tampilan Tahun Berjalan](/laporan-keuangan-bi-laba-rugi.png)

### Memilih periode

1. Pilih **Bulan laporan**. Tombol **‹** dan **›** di kiri-kanannya langsung memuat bulan sebelum atau sesudahnya.
2. Pilih **Tampilan**:

   | Tampilan | Periode | Saldo Awal |
   |---|---|---|
   | **Tahun Berjalan** (bawaan) | 1 Januari s.d. akhir bulan yang dipilih | Saldo akhir Desember tahun sebelumnya |
   | **Bulanan** | Bulan yang dipilih saja | Saldo akhir bulan sebelumnya |

3. Klik **Terapkan**.

Periode yang sedang tampil tertulis di bawah tombol, misalnya *Tahun Berjalan 1 Januari 2026 s.d. 30 September 2026 · dalam Rupiah*.

::: tip Membandingkan dengan LKU
LKU selalu per bulan. Untuk mencocokkan angka dengan [LKU](/eksternal/lku) bulan yang sama, pilih tampilan **Bulanan**. Pada **Tahun Berjalan**, Penjualan UKA sama dengan jumlah Volume Penjualan (IDR) LKU dari Januari sampai bulan yang dipilih.
:::

### Isi halaman

| Bagian | Isi |
|---|---|
| **Kotak ringkasan** | **Pendapatan Operasional**, **Laba Kotor**, **Beban Operasional**, dan **Laba/(Rugi) Bersih**, ditambah batang komposisi Harga Pokok Penjualan, Beban Operasional, dan Laba/Rugi operasional |
| **Laporan Laba/(Rugi)** | Laporan lengkap sesuai format BI. **Beban Operasional** dan **Pendapatan/(Beban) Lain-lain** bisa diklik untuk membuka rinciannya |
| **Rincian per Mata Uang** | Saldo awal, pembelian, penjualan, saldo akhir, kurs tengah, dan HPP setiap mata uang |
| **Catatan & asumsi** | Klik untuk membuka penjelasan cara hitung |

Angka di layar dibulatkan ke rupiah penuh, dan angka negatif ditulis dalam kurung, misalnya *(316,246)*. Nilai lengkap dengan 2 desimal ada di Cetak, PDF, dan Excel.

### Dari mana angkanya

**Penjualan UKA, Pembelian, Saldo Awal, dan Saldo Akhir** diambil dari data yang sama dengan [LKU](/eksternal/lku):

- **Penjualan UKA** dan **Pembelian UKA dan TC** adalah nilai rupiah transaksi jual dan beli valas pada periode itu. Yang dihitung hanya transaksi yang sudah **lunas**. Transaksi **Antar Cabang** tidak dihitung, karena laporan ini menggabungkan seluruh cabang.
- **Saldo Awal UKA dan TC** dan **Saldo Akhir UKA dan TC** adalah stok valas dikali kurs tengah BI. Nilainya sama dengan kolom Saldo Akhir (IDR) di LKU, dan Saldo Akhir sama dengan "Kas dan Bank dalam UKA" di tab Neraca.
- Jumlah valas **dibulatkan ke bawah** ke bilangan bulat, karena sistem pelaporan BI tidak menerima desimal. Nilai pecahan yang terbuang masuk ke Harga Pokok Penjualan periode ini, lalu kembali lewat Saldo Awal periode berikutnya.

**Harga Pokok Penjualan** = Saldo Awal + Pembelian − Saldo Akhir, sesuai pedoman BI. **Pendapatan/(Rugi) Operasional Kotor UKA-TC** = Penjualan UKA − Harga Pokok Penjualan.

**Beban Operasional**, **Pendapatan/(Beban) Lain-lain**, dan **Beban Pajak** diambil dari saldo akun di jurnal. **Pendapatan Bunga Bank** dan **Beban Bunga Pinjaman** belum punya akun padanan, sehingga selalu 0.

**Laba/(Rugi) Bersih** pada tampilan **Tahun Berjalan** dipakai sebagai laba tahun berjalan di tab Neraca bulan yang sama.

### Selisih Kurs Valuasi UKA

Karena saldo valas dinilai dengan kurs tengah BI, laba kotor ikut naik saat kurs tengah naik dan turun saat kurs tengah turun, walaupun tidak ada transaksi. Baris miring ***— termasuk Selisih Kurs Valuasi UKA*** di bawah Laba Kotor UKA-TC menunjukkan berapa bagian laba kotor yang berasal dari perubahan nilai ini. Angkanya adalah selisih penilaian kurs tengah BI dengan harga pokok rata-rata valas, saldo akhir dikurangi saldo awal.

Baris ini **hanya keterangan**. Angkanya sudah termasuk dalam Laba Kotor, tidak dijumlahkan lagi ke Laba/(Rugi) Bersih, dan tidak membuat jurnal.

Contoh: pada bulan tanpa transaksi, kurs tengah turun sehingga nilai stok berkurang Rp 316.246. Laba Kotor UKA-TC menjadi (316,246), baris *termasuk Selisih Kurs Valuasi UKA* juga (316,246), dan Laba/(Rugi) Bersih tetap (316,246).

### Rincian per Mata Uang

Jumlah valas di tabel ini juga dibulatkan ke bawah, sama dengan LKU. Saldo Awal + Volume Beli − Penjualan selalu sama dengan Saldo Akhir.

Label kecil di kolom **Kurs Tengah Awal** dan **Kurs Tengah Akhir** menunjukkan asal kursnya:

| Label | Asal kurs |
|---|---|
| **bi** | Kurs tengah resmi Bank Indonesia |
| **manual** | Kurs yang ditetapkan petugas di menu [LKU](/eksternal/lku) |
| **transaksi** | Rata-rata kurs transaksi bulan itu, dipakai bila BI tidak mengumumkan kurs mata uang tersebut |
| **none** | Tidak ada kurs. Biasanya karena stoknya memang 0 |

### Peringatan di atas laporan

- ***Kurs tengah BI belum lengkap.*** Ada mata uang yang punya stok tetapi tidak punya kurs sama sekali, sehingga saldonya sementara dilaporkan Rp 0. Lengkapi kurs tengahnya di menu [LKU](/eksternal/lku).
- ***Data belum lengkap.*** Pada bulan tertentu penjualan suatu valas melebihi stok yang tercatat saat itu. Biasanya transaksi pembeliannya diinput setelah tanggal bisnisnya. Periksa transaksi mata uang dan bulan yang disebutkan.

### Mencetak dan mengunduh

Klik **Ekspor**, lalu pilih:

- **Excel** untuk mengunduh berkas Excel.
- **PDF** untuk membuka berkas PDF di tab baru.
- **Cetak** untuk membuka halaman cetak di tab baru.

Ketiganya memakai bulan dan tampilan yang sedang dipilih.

## Lainnya

Baca juga [LKU](/eksternal/lku), laporan kegiatan usaha bulanan yang memakai data valas yang sama.
