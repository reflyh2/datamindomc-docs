---
outline: [2, 3]
---

# Alur Kerja Kasir

Halaman ini menuntun satu hari kerja kasir, dari membuka hari sampai menyerahkan kas. Tiap langkah menautkan halaman menu yang terkait kalau Anda butuh rincian.

```
PAGI         Buka Hari → cek kurs terbit → cek stok
SETIAP       Transaksi Valas → pilih pelanggan → BACA peringatan
TRANSAKSI    → isi valas → Simpan → bayar → Cetak faktur (dan CDD/EDD)
PULANG /     Serah Terima Kasir → Serahkan Kas
GANTI SHIFT  (penerima: Hitung & Terima)
```

::: tip Sebelum mulai
Periksa chip **Periode** di bagian atas layar. Transaksi Anda dicatat pada tanggal itu. Lihat [Mengenal Layar ValasPro](/mulai/mengenal-layar).
:::

## Pagi hari

### Buka Hari

Menu: **Shift → Buka Hari**. Biasanya dilakukan supervisor atau kasir pertama, sekali setiap hari kerja sebelum transaksi pertama.

1. Periksa **Checklist Pembukaan**. Butir bertanda **!** perlu dicek, misalnya kurs hari ini belum diterbitkan, masih ada transaksi belum dibayar dari hari sebelumnya, atau hari ini hari libur. Klik **Buka** di butir itu untuk langsung menuju halaman terkait.
2. Periksa **Saldo Awal Sistem**, yaitu kas IDR dan stok valas menurut sistem. Hitung fisik tidak dilakukan di sini, tetapi saat serah terima kasir.
3. Isi **Catatan** bila perlu, lalu klik **Buka Hari**.

Yang perlu diketahui:

- Buka Hari **tidak wajib**, dan transaksi tetap bisa berjalan tanpanya. Hanya saja, Beranda dan menu akan terus mengingatkan (tanda **!** kuning) sampai hari dibuka.
- Buka Hari hanya berlaku untuk cabang Anda, dan hanya bisa dilakukan sekali per tanggal.
- Pada cabang yang memakai lebih dari satu shift kasir, Buka Hari mengembalikan shift ke **Shift 1**.

### Memastikan kurs sudah terbit

Kurs di form transaksi terisi otomatis dari **kurs yang sudah diterbitkan** supervisor. Kurs yang baru disimpan sebagai draf belum dipakai. Cara menerbitkan kurs ada di [Alur Kerja Supervisor](/alur-kerja/supervisor#menerbitkan-kurs).

Untuk mengecek kurs yang sedang berlaku, buka **Transaksi → Informasi Kurs**. Halaman ini menampilkan kurs umum, kurs antarcabang, dan stok valas dalam satu layar, jadi cocok dijadikan pegangan sepanjang hari.

Kurs berganti otomatis menurut jam: kurs **shift 1** berlaku sebelum pukul 10.00, dan kurs **shift 2** sesudahnya.

### Mengecek stok

Buka **Inventori → Stok Valas**. Angka yang dipakai saat menjual adalah stok akhir, yaitu stok setelah semua transaksi periode berjalan. Untuk menelusuri keluar-masuk satu valas, buka tab **Riwayat Valas** di halaman yang sama.

## Membuat transaksi

Menu: **Transaksi → Transaksi Valas** (halaman **Buat Transaksi Valas**). Kolom bertanda \* wajib diisi.

### 1. Informasi Umum

| Kolom | Cara mengisi |
|---|---|
| **Tipe Transaksi** \* | **Transaksi Pembelian** kalau Anda membeli valas dari pelanggan. **Transaksi Penjualan** kalau Anda menjual valas ke pelanggan |
| **Periode Transaksi** \* | Tanggal buku. Biasanya sudah terisi otomatis |
| **Jam Transaksi** | Hanya muncul bila fitur **Jam Transaksi Manual** aktif. Isi jam transaksi sebenarnya kalau Anda mencatatnya belakangan. Kosongkan untuk memakai jam saat disimpan |
| **Tipe Pelanggan** \* | Retail, Corporate, Money Changer, Bank, Antar Cabang, atau Square Balance |
| **Pelanggan** \* | Klik **Cari**. Pelanggan tidak bisa diketik langsung. Lihat [Memilih pelanggan](#memilih-pelanggan) |
| **Sumber Dana** \*, **Tujuan Transaksi** \* | Pilih dari daftar, atau ketik pilihan baru. Pilihan baru tersimpan untuk transaksi berikutnya |
| **Kurir**, **Beneficial Owner** | Muncul untuk tipe pelanggan tertentu |
| **Surat Kuasa** | Unggah berkasnya bila transaksi diwakilkan |
| **Catatan** | Bebas, maksimal 125 karakter |

Tergantung setelan perusahaan, form juga bisa berisi **Akun Biaya** dan **Biaya Transaksi**. Lihat [Fitur Opsional](/mulai/fitur-opsional).

### 2. Data Valas

1. Klik **Cari** pada kolom **Valas**, lalu pilih valasnya. Daftar ini juga menampilkan stok dan kurs.
2. Ketik **Jumlah** dalam satuan valas, bukan rupiah.
3. **Kurs** terisi otomatis dari kurs terbit, dan **Sub Total** dihitung sendiri.
4. Klik **Tambah ke Tabel**. Ulangi langkah ini kalau pelanggan menukar lebih dari satu valas.

Di bawah tabel valas ada **Total (Rp)** beserta nilai setaranya dalam USD. Khusus penjualan, isi **Pembayaran** (uang yang diserahkan pelanggan); **Kembalian** akan dihitung otomatis. Kalau transaksinya lewat transfer, pilih **Rekening Terdaftar** milik pelanggan atau isi **Rekening Baru**.

### 3. Simpan

Klik **Simpan**, lalu jawab konfirmasi *"Apakah data transaksi ini sudah benar ?"*. Setelah itu aplikasi membuka halaman faktur. Kalau perusahaan mengaktifkan **Pembayaran Saat Buat Transaksi**, form pembayaran muncul lebih dulu.

### Hal yang bisa menghentikan transaksi

| Yang muncul | Artinya | Yang dilakukan |
|---|---|---|
| *Stok valas tidak cukup* | Stok akhir tidak cukup untuk dijual | Kurangi jumlahnya, atau minta tambahan stok lewat **Inventori → PB Valas** |
| *Rate Pembelian harus diotorisasi* / *Rate Penjualan harus diotorisasi* | Kurs yang Anda ketik terlalu jauh dari kurs terbit | Minta supervisor mengisi nama pengguna dan kata sandinya di jendela **Identifikasi Petugas Otorisasi** |
| *Peringatan!! Proses Serah Terima Kasir Sedang Berlansung Transaksi Tidak Dapat Dilakukan* | Masih ada serah terima kasir yang belum diterima | Tunggu sampai penerima menerima atau menolaknya |
| *Diblokir! Pelanggan ini diblacklist (tipe diblokir)…* | Pelanggan diblokir perusahaan | Transaksi tidak bisa dilanjutkan. Arahkan pelanggan ke petugas kepatuhan |

Tipe pelanggan **Antar Cabang** otomatis memakai kurs antarcabang dan hanya bisa dipakai untuk penjualan.

## Memilih pelanggan

### Pelanggan lama

Klik **Cari** di kolom Pelanggan, cari berdasarkan nama, nomor identitas, nomor telepon, atau pekerjaan, lalu klik barisnya.

Begitu pelanggan dipilih, aplikasi langsung memeriksa empat hal dan menampilkan hasilnya di panel **Status Kepatuhan**:

1. **Nilai Underlying Bulan ini**, yaitu total pembelian valas pelanggan bulan ini dalam USD, dibandingkan dengan batasnya.
2. Kemiripan nama dengan daftar pengawasan (DTTOT dan sejenisnya).
3. Status **PEP**.
4. **Blacklist** internal perusahaan.

**Baca panel ini sebelum melanjutkan.** Pemeriksaan tidak dijalankan untuk tipe pelanggan Antar Cabang dan Square Balance.

### Pelanggan baru

1. Klik **Cari**, lalu klik **Tambah Pelanggan Baru**.
2. Isi data sesuai kartu identitas. Wajib diisi: **No Identitas**, **Masa Berlaku**, dan **Nama**.
3. Klik **Simpan**. Pelanggan baru langsung terpilih di form transaksi.

::: tip Isi NPWP sejak awal
NPWP wajib ada kalau suatu saat pelanggan perlu didaftarkan dokumen underlying. Tanpa NPWP, pendaftaran underlying ditolak.
:::

### Indikasi DTTOT

Nama pelanggan dicocokkan dengan daftar pengawasan seperti DTTOT (Daftar Terduga Teroris dan Organisasi Teroris) dan DPPSPM. Pencocokan berdasarkan **kemiripan nama**, jadi nama yang umum bisa ikut tersaring. Kalau ada yang mirip, muncul kotak peringatan:

> **Mirip · 87%** Nama pelanggan mirip dengan salah satu daftar pengawasan (DTTOT).

Label di depan kotak menunjukkan seberapa mirip nama itu:

| Label | Warna | Tombol Simpan |
|---|---|---|
| **Perlu dicek** | Kuning | Tetap aktif |
| **Mirip** atau **Sangat mirip** | Merah | **Terkunci** sampai Anda mengisi konfirmasi |

Langkahnya:

1. Klik **Lihat detail kecocokan** (atau **Lihat _n_ kecocokan**) untuk membuka **Daftar Pelanggan Terindikasi**.
2. Bandingkan nama lengkap, tanggal dan tempat lahir, alamat, serta kewarganegaraan dengan identitas fisik pelanggan.
3. Kalau hanya namanya yang mirip dan data lainnya berbeda, centang **Sudah saya periksa, pelanggan ini bukan pihak yang tercantum dalam daftar …**, lalu tulis alasannya (minimal 10 karakter), misalnya *tanggal lahir dan NIK berbeda*. Setelah itu tombol Simpan aktif lagi. Alasan ini disimpan sebagai jejak audit.
4. Kalau datanya benar-benar cocok, **jangan lanjutkan transaksi** dan segera laporkan ke petugas kepatuhan.

### PEP dan blacklist

| Kondisi | Kotak | Bisa disimpan? | Yang dilakukan |
|---|---|---|---|
| Pelanggan **PEP** (orang yang terpapar politik) | Kuning | Ya | Lengkapi dokumen, dan isi Sumber Dana serta Tujuan Transaksi dengan rinci. Formulir pelanggannya otomatis menjadi **EDD** |
| **Blacklist tipe peringatan** | Kuning | Ya | Cek alasannya di **Pelanggan → Blacklist**, lalu lanjutkan dengan ekstra hati-hati |
| **Blacklist tipe diblokir** | Merah | **Tidak**, tombol Simpan nonaktif | Arahkan pelanggan ke petugas kepatuhan |

## Setelah transaksi disimpan

### Membayar faktur

Faktur yang belum lunas muncul di **Transaksi → Pembayaran Valas**. Angka hijau di menu itu menunjukkan jumlah faktur yang menunggu.

1. Klik ikon uang di baris faktur.
2. Pilih sumber pembayaran (kas atau rekening bank), lalu klik **Bayar sekarang**.

Untuk melunasi semua sekaligus, pakai tombol **Bayar semua faktur belum lunas**.

Kalau baris faktur menampilkan label kuning **underlying**, faktur itu belum bisa dibayar. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).

### Mencetak faktur

Halaman faktur berjudul **Faktur _nomor_**, lengkap dengan status (Lunas, Menunggu, Belum Bayar, atau Dibatalkan). Klik **Cetak** di kanan atas, lalu serahkan satu lembar kepada pelanggan.

- Nama kasir di faktur diambil dari pemegang kas terakhir di Serah Terima Kasir.
- Kalau tombol **Cetak** tidak ada dan muncul *"Peringatan! Pelanggan ini telah melebihi transaksi …"*, pelanggan sudah melewati batas underlying. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).
- Faktur transaksi yang dibatalkan hanya arsip dan tidak boleh dicetak untuk pelanggan.

Klik **Transaksi** untuk membuat transaksi berikutnya.

### Formulir CDD / EDD

Di **Transaksi → Daftar Transaksi**, klik ikon **Cetak CDD** atau **Cetak EDD** di kolom Aksi, lalu unduh atau cetak formulirnya. Formulir otomatis menjadi **EDD** (uji tuntas mendalam) bila pelanggan berstatus PEP atau pekerjaannya tergolong berisiko tinggi. Lihat [CDD / EDD](/transaksi/cdd-edd).

### Mengubah atau membatalkan

Pakai ikon **Ubah faktur**, **Hapus faktur**, atau **Reset pembayaran** di **Transaksi → Daftar Transaksi**. Ikon yang tampil bergantung pada status faktur dan hak akses Anda. Kalau hari atau periodenya sudah ditutup, transaksi tidak bisa diubah lagi. Hubungi supervisor.

## Serah Terima Kasir

Menu: **Shift → Serah Terima Kasir**. Serah terima dilakukan saat kasir berganti atau saat pulang, supaya kas dan valas berpindah tangan dengan jelas.

### Menyerahkan (pemegang kas)

Syaratnya:

- Anda adalah **pemegang kas** saat ini, yaitu orang yang terakhir menerima kas.
- Tidak ada serah terima lain yang masih menunggu.
- Tidak ada transaksi yang **belum dibayar** atau **menunggu**. Selesaikan dulu di Pembayaran Valas.

Langkahnya:

1. Klik **Serahkan Kas**.
2. Pilih **Kasir penerima**.
3. Pada cabang dengan lebih dari satu shift, biarkan centang **Ganti shift** kalau serah terima ini sekaligus pergantian shift.
4. Periksa ringkasan **Aktivitas Sejak Serah Terima Terakhir**, **Kas IDR diserahkan**, dan **Valas Diserahkan**. Angka-angka ini diambil dari sistem saat Anda menekan Serahkan.
5. Isi **Catatan** bila perlu, lalu klik **Serahkan**.

::: warning Transaksi terkunci sementara
Selama serah terima belum diterima atau ditolak, transaksi baru, PB Valas, dan pinjaman valas di cabang tidak bisa dibuat.
:::

Serah terima yang belum diterima masih bisa **dibatalkan** oleh penyerahnya.

### Menerima (kasir penerima)

Serah terima yang menunggu Anda terlihat dari angka hijau di menu **Shift** dan di kotak **Menunggu Anda**.

1. Klik **Hitung & Terima**.
2. Hitung fisik setiap valas dan kas IDR, lalu isi kolom **Fisik**. Isi 0 bila fisiknya memang tidak ada. Angka sistem sengaja disembunyikan supaya hitungan Anda tidak terpengaruh.
3. Klik **Cocokkan**. Aplikasi lalu menampilkan angka yang diserahkan dan selisihnya.
4. Kalau semuanya cocok, klik **Terima Kas**. Kalau ada selisih, isi **Alasan selisih** di setiap baris yang berbeda. Serah terima tetap bisa diterima, dan akan ditandai untuk ditinjau supervisor.
5. Kalau Anda tidak bersedia menerima, klik **Tolak** dan tuliskan alasannya.

### Pindah Shift dan Ambil Alih Kas

- **Pindah Shift**: kasir yang sama melanjutkan ke shift berikutnya tanpa hitung fisik. Tombol ini hanya ada di cabang yang memakai lebih dari satu shift.
- **Ambil Alih Kas**: dipakai supervisor kalau pemegang kas berhalangan, misalnya sakit, supaya cabang tidak terkunci. Alasannya wajib diisi.

## Terkait

- [Menangani Batas Underlying](/alur-kerja/underlying)
- [Masalah Umum](/bantuan/masalah-umum)
- [Daftar Istilah](/bantuan/istilah)
