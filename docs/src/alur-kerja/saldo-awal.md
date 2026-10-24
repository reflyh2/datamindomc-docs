---
outline: [2, 3]
---

# Mengisi Saldo Awal Valas, Kas dan Bank

Saat perusahaan baru mulai memakai ValasPro, isi brankas dan rekening bank belum tercatat. Stok Valas, Kas IDR dan saldo bank masih nol. Akibatnya penjualan pertama ditolak karena stok tidak cukup, dan pembayaran lewat bank tidak punya saldo.

Ada tiga saldo awal yang perlu dicatat:

| Saldo awal | Cara mencatat |
|---|---|
| **Uang tunai IDR** | Jurnal modal (Kas Masuk) ke akun Kas IDR |
| **Rekening bank** | Jurnal modal (Kas Masuk) ke akun rekening bank, satu jurnal per rekening |
| **Stok valas** | Pembelian pertama dari pelanggan **Square Balance**, dibayar dari Kas IDR. Karena itu, jurnal modal Kas IDR diisi sebesar uang tunai **ditambah** nilai stok valas |

<Alur judul="Mengisi saldo awal satu cabang" :langkah="[
  { judul: 'Hitung saldo awal', ket: 'Stok fisik per valas dan kurs perolehannya, uang tunai IDR, dan saldo setiap rekening bank.' },
  { judul: 'Siapkan akun rekening bank', menu: 'Keuangan → Daftar Akun', ket: 'Satu akun Kas & Bank per rekening, dengan Akun modal = Ya.' },
  { judul: 'Catat jurnal modal', menu: 'Keuangan → Jurnal → Tambah → Kas Masuk', ket: 'Kas IDR sebesar nilai stok valas + uang tunai. Setiap rekening bank sebesar saldonya.' },
  { judul: 'Buat transaksi pembelian', menu: 'Transaksi → Transaksi Valas', ket: 'Tipe Pelanggan Square Balance. Isi semua valas dengan kurs perolehannya.' },
  { judul: 'Bayar dari kas IDR', menu: 'Transaksi → Pembayaran Valas', ket: 'Kas terisi otomatis sebesar tagihan, lalu Bayar sekarang.', cabang: [
    { jika: 'Berhasil', judul: 'Stok valas masuk, Kas IDR = uang tunai, bank = saldo rekening', nada: 'ok' },
  ] },
]" />

::: tip Kapan dikerjakan
Kerjakan setelah langkah [Menyiapkan perusahaan baru](/alur-kerja/admin#menyiapkan-perusahaan-baru) selesai: valas sudah terdaftar di **Master → Pecahan Valas**, kurs pertama sudah terbit, dan **Akun Kas IDR** di Penghubung Akun sudah terisi. Selesaikan sebelum transaksi pelanggan pertama, dan pakai tanggal yang sama untuk semua jurnal dan transaksinya.
:::

Bila cabang belum memegang valas, lewati langkah 4 dan 5. Jurnal modal Kas IDR cukup diisi sebesar uang tunai.

## 1. Hitung saldo awal

Siapkan daftar berikut untuk setiap cabang:

| Yang disiapkan | Keterangan |
|---|---|
| **Jumlah fisik per valas** | Hasil hitung brankas, per kode valas yang terdaftar di Pecahan Valas, misalnya USD, SGD |
| **Kurs perolehan** | Harga rata-rata saat valas itu dibeli dulu. Bila tidak ada catatannya, pakai kurs beli hari ini |
| **Nilai stok valas** | Jumlah × kurs perolehan, dijumlahkan untuk semua valas |
| **Uang tunai IDR** | Rupiah yang benar-benar ada di brankas dan laci kasir |
| **Saldo rekening bank** | Saldo akhir di rekening koran atau mutasi, per rekening, pada hari sebelum mulai memakai ValasPro |

Contoh:

| Saldo awal | Jumlah | Kurs perolehan | Nilai (Rp) |
|---|---:|---:|---:|
| USD | 5.000 | 16.200 | 81.000.000 |
| SGD | 2.000 | 12.100 | 24.200.000 |
| **Total nilai stok valas** | | | **105.200.000** |
| Uang tunai IDR | | | 20.000.000 |
| Rekening Bank | | | 50.000.000 |

::: warning Kurs perolehan menentukan laba
Kurs yang Anda isi menjadi harga pokok stok tersebut. Pada metode **HPP**, laba setiap penjualan dihitung dari harga ini, jadi isi dengan harga perolehan yang sebenarnya. Kurs yang terlalu rendah membuat laba penjualan pertama terlihat terlalu besar, dan sebaliknya.
:::

## 2. Siapkan akun rekening bank

Setiap rekening bank perusahaan sebaiknya punya akun sendiri, supaya saldonya bisa dicocokkan dengan rekening koran. Perusahaan baru sudah punya satu akun bawaan, **Rekening Bank** (nomor 10101). Ganti namanya, atau tambahkan akun baru bila rekeningnya lebih dari satu.

Di **Keuangan → Daftar Akun**, klik **Tambah Akun** dan isi:

| Kolom | Isi |
|---|---|
| **Kategori** | **Kas & Bank** |
| **Sub-akun dari akun lain** | Centang, lalu pilih induk **Bank** |
| **Nama akun** | Nama bank dan nomor rekeningnya, misalnya *BCA 123-456-7890* |
| **Akun modal** | **Ya** |
| **Hanya ada di cabang** | Isi bila rekening ini hanya dipakai satu cabang |

Akun yang tidak berkategori **Kas & Bank** atau tidak bertanda **Akun modal** tidak muncul di **Tambah bank** pada Pembayaran Valas. Rincian form ada di [Daftar Akun](/keuangan/daftar-akun#menambah-akun).

## 3. Catat jurnal modal

Saldo awal kas dan bank dicatat sebagai setoran modal. Buat satu jurnal **Kas Masuk** untuk Kas IDR, dan satu lagi untuk setiap rekening bank.

### Kas IDR

Pembelian stok awal di langkah 4 dibayar dari Kas IDR. Agar setelah dibayar saldo kas sama dengan uang tunai di brankas, Kas IDR diisi lebih dulu sebesar **nilai stok valas + uang tunai IDR**.

1. Buka **Keuangan → Jurnal**, klik **Tambah**, lalu **Kas Masuk**.
2. Isi **Informasi jurnal**:

   | Kolom | Isi |
   |---|---|
   | **Tanggal** | Tanggal mulai memakai ValasPro. Sama dengan tanggal transaksi di langkah 4 |
   | **Diterima dari** | Misalnya nama pemilik |
   | **Diterima di akun** | Akun kas yang dipilih sebagai **Akun Kas IDR** di **Pengaturan → Umum**, bagian **Akuntansi › Penghubung Akun**. Bawaannya **Kas IDR** |
   | **Keterangan** | Misalnya *Modal awal: stok valas dan kas IDR* |

3. Di **Rincian**, pilih akun modal (bawaannya **Modal**, nomor 30001) dan isi jumlahnya. Dari contoh di atas: 105.200.000 + 20.000.000 = **125.200.000**.
4. Klik **Simpan**.

![Jurnal Kas Masuk untuk modal awal Kas IDR](/stok-awal-jurnal-modal.png)

Jurnal ini mendebit Kas IDR dan mengkredit Modal. Setelah langkah 5, Kas IDR turun sebesar nilai stok valas, sehingga yang tersisa sama dengan uang tunai di brankas.

::: details Cabang tanpa uang tunai IDR
Isi rincian sebesar nilai stok valas saja. Setelah pembayaran, saldo Kas IDR menjadi Rp 0.
:::

### Rekening bank

Ulangi untuk setiap rekening yang saldonya tidak nol:

1. Buka **Keuangan → Jurnal**, klik **Tambah**, lalu **Kas Masuk**.
2. Isi **Tanggal** yang sama, **Diterima dari**, dan **Keterangan**, misalnya *Saldo awal rekening bank*. Nomor atau tanggal rekening koran bisa dicatat di **No. Referensi**.
3. Di **Diterima di akun**, pilih akun rekening bank dari langkah 2.
4. Di **Rincian**, pilih akun **Modal** dan isi saldo rekening. Dari contoh: **50.000.000**.
5. Klik **Simpan**.

![Jurnal Kas Masuk untuk saldo awal rekening bank](/saldo-awal-jurnal-bank.png)

::: warning Jangan pilih Kas Valas
Daftar **Diterima di akun** juga memuat **Kas Valas**. Jangan memakainya untuk saldo awal. Stok valas hanya bertambah lewat transaksi pembelian di langkah 4, bukan lewat jurnal.
:::

## 4. Buat transaksi pembelian

1. Buka **Transaksi → Transaksi Valas**.
2. Di **Informasi Umum**:

   | Kolom | Isi |
   |---|---|
   | **Tipe Transaksi** | **Transaksi Pembelian** |
   | **Periode Transaksi** | Bila muncul, samakan dengan tanggal jurnal modal |
   | **Tipe Pelanggan** | **Square Balance** |
   | **Pelanggan** | Klik **Cari**, lalu pilih **Square Balance**. Pelanggan ini dibuat otomatis untuk setiap perusahaan |
   | **Sumber Dana**, **Tujuan Transaksi** | Tidak wajib untuk tipe pelanggan Square Balance |
   | **Catatan** | Misalnya *Stok awal* |

3. Tambahkan setiap valas: ketik kodenya, isi **Jumlah**, ganti **Kurs** dengan kurs perolehan, lalu tekan <kbd>Enter</kbd>. Semua valas boleh masuk ke satu faktur.
4. Pastikan **Total (Rp)** sama dengan total nilai stok valas dari langkah 1.
5. Klik **Simpan**, lalu **OK**. Faktur terbit dengan status **Belum Bayar**.

![Transaksi pembelian stok awal dengan pelanggan Square Balance](/stok-awal-transaksi.png)

Kolom **Sumber Dana** dan **Tujuan Transaksi** bisa sudah terisi nilai bawaan perusahaan. Biarkan atau kosongkan, keduanya tidak memengaruhi stok.

Bila **Otorisasi Kurs** aktif dan kurs perolehan jauh dari kurs terbit, muncul *Rate Pembelian harus diotorisasi*. Minta supervisor mengisi nama pengguna dan kata sandinya di **Identifikasi Petugas Otorisasi**.

::: danger Jangan lewat menu Periode → Square Balance
Menu [Square Balance](/periode/square-balance) hanya untuk penutupan periode. Transaksi yang dibuat di sana akan di-**Reverse** pada periode berikutnya, sehingga stoknya hilang lagi. Stok awal selalu dibuat dari **Transaksi → Transaksi Valas**.
:::

## 5. Bayar dari kas IDR

1. Buka **Transaksi → Pembayaran Valas** dan klik ikon uang pada faktur stok awal. Kotak **Saldo Kas** di atas daftar menunjukkan hasil jurnal modal Kas IDR.

   ![Faktur stok awal di Pembayaran Valas](/stok-awal-pembayaran-daftar.png)

2. Di **Dibayar dari akun**, akun **Kas** sudah terisi sebesar tagihan. Biarkan. Jangan bayar stok awal dari rekening bank, karena saldo bank akan berkurang dari saldo rekening koran.
3. Klik **Bayar sekarang**. Status faktur menjadi **Lunas**, stok valas masuk ke brankas, dan Kas IDR berkurang.

![Pembayaran faktur stok awal dari Kas IDR](/stok-awal-pembayaran.png)

Rincian layar pembayaran ada di [Pembayaran Valas](/transaksi/pembayaran-valas).

## 6. Periksa hasilnya

| Periksa di | Yang harus terlihat |
|---|---|
| **Inventori → Stok Valas** | Stok setiap valas sama dengan hasil hitung fisik |
| **Pembayaran Valas**, kotak **Saldo Kas** | Sama dengan uang tunai IDR di brankas |
| **Pembayaran Valas**, kotak **Saldo Bank** | Pilih setiap rekening. Saldonya sama dengan rekening koran |
| **Keuangan → Laporan Keuangan**, buku besar | Kas IDR: kas masuk dari jurnal modal, lalu kas keluar dari faktur stok awal. Rekening bank: satu kas masuk dari jurnal modal |

![Stok Valas setelah stok awal dibayar](/stok-awal-stok-valas.png)

Pada contoh, Saldo Kas di Pembayaran Valas turun dari Rp 125.200.000 menjadi Rp 20.000.000, sama dengan uang tunai IDR di brankas.

Pada perusahaan dengan metode Square Balance, halaman Stok Valas punya centang **Kecualikan Square Balance**. Bila dicentang, stok awal ikut disembunyikan karena dicatat atas nama pelanggan Square Balance. Hapus centangnya untuk melihat stok sebenarnya.

## Cabang lebih dari satu

Stok, kas dan bank dicatat per cabang. Ulangi langkah 1–6 di setiap cabang dengan saldonya sendiri. Masuk sebagai pengguna cabang itu, atau pakai [Pindah Cabang](/pengaturan/pindah-cabang) terlebih dahulu, karena jurnal dan transaksi dicatat di cabang yang sedang aktif.

Rekening bank yang dipakai bersama beberapa cabang cukup dicatat saldonya sekali, di cabang yang memegang rekening itu.

## Pengaruh ke laporan

| Laporan | Pengaruh |
|---|---|
| **Neraca** | Kas IDR, rekening bank dan stok valas bertambah. Modal bertambah sebesar total jurnal modal |
| **PPATK (LTKT)**, **Laporan KUPVA** | Faktur stok awal tidak dihitung, karena pelanggannya Square Balance |
| **LKU** dan **Laporan Keuangan BI** | Faktur stok awal masuk sebagai **Pembelian** pada bulan stok awal dicatat, karena stoknya memang bertambah. Kurs transaksinya tidak dipakai untuk menghitung kurs rata-rata |
| **Laporan Laba** | Jurnal modal dan pembelian stok awal tidak menghasilkan laba. Laba baru muncul saat valasnya dijual |
| **Batas underlying** | Tidak terpengaruh, karena batas underlying hanya menghitung penjualan |

## Jika salah input

| Kesalahan | Yang dilakukan |
|---|---|
| Jumlah atau kurs salah, faktur **belum dibayar** | Ubah atau hapus faktur di [Daftar Transaksi](/transaksi/daftar-transaksi) |
| Jumlah atau kurs salah, faktur **sudah dibayar** | Klik **Reset pembayaran** di Daftar Transaksi, perbaiki fakturnya, lalu bayar lagi |
| Nilai jurnal modal salah, atau salah memilih akun | Ubah jurnal Kas Masuk itu di [Jurnal](/keuangan/jurnal), selama tanggalnya belum ditutup buku |
| Faktur stok awal dibatalkan | Faktur tercatat di [Transaksi Batal](/transaksi/transaksi-batal) dengan asal **Square** |

## Terkait

- [Alur Kerja Admin](/alur-kerja/admin)
- [Daftar Akun](/keuangan/daftar-akun)
- [Jurnal](/keuangan/jurnal#membuat-jurnal-kas-keluar-atau-kas-masuk)
- [Transaksi Valas](/transaksi/transaksi-valas)
- [Pembayaran Valas](/transaksi/pembayaran-valas)
- [Stok Valas](/inventori/stok-valas)
