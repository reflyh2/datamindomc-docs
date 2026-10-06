---
outline: [2, 3]
---

# Alur Kerja Kasir

Halaman ini menuntun satu hari kerja kasir, dari membuka hari sampai menyerahkan kas. Tiap langkah menautkan halaman menu yang terkait kalau Anda butuh rincian.

<Alur judul="Satu hari kerja kasir" :langkah="[
  { fase: 'Pagi' },
  { judul: 'Buka Hari', menu: 'Shift → Buka Hari', ket: 'Periksa checklist pembukaan dan saldo awal sistem. Tidak wajib, tetapi pengingatnya muncul terus sampai hari dibuka.', peran: 'Supervisor / kasir pertama' },
  { judul: 'Cek kurs dan stok', menu: 'Transaksi → Informasi Kurs', ket: 'Pastikan kurs hari ini sudah terbit dan stok valas cukup untuk dijual.' },
  { fase: 'Setiap pelanggan' },
  { judul: 'Buat transaksi', menu: 'Transaksi → Transaksi Valas', ket: 'Pilih tipe dan pelanggan, baca Status Kepatuhan, isi valas, lalu Simpan. Faktur terbit dengan status Belum Bayar.' },
  { judul: 'Bayar faktur', menu: 'Transaksi → Pembayaran Valas', ket: 'Pilih akun kas atau bank, lalu Bayar sekarang. Status faktur menjadi Lunas dan stok bergerak.' },
  { judul: 'Cetak faktur dan formulir', menu: 'Transaksi → Daftar Transaksi', ket: 'Serahkan faktur kepada pelanggan. Cetak formulir CDD atau EDD bila diperlukan.' },
  { fase: 'Ganti shift atau pulang' },
  { judul: 'Serah Terima Kasir', menu: 'Shift → Serah Terima Kasir', ket: 'Pemegang kas menyerahkan, penerima menghitung fisik lalu menerima.', cabang: [
    { jika: 'Fisik sama dengan sistem', judul: 'Diterima', nada: 'ok' },
    { jika: 'Ada selisih', judul: 'Diterima, ditinjau supervisor', nada: 'warn' },
    { jika: 'Penerima menolak', judul: 'Ditolak, kas tetap di penyerah', nada: 'alert' },
  ] },
  { judul: 'Rekonsiliasi & Tutup Hari', menu: 'Shift → Rekonsiliasi & Tutup Hari', ket: 'Hanya bila fitur Rekonsiliasi Harian aktif. Teller menghitung fisik, supervisor menutup periode.', peran: 'Opsional' },
]" />

::: tip Sebelum mulai
Periksa chip **Periode** di bagian atas layar. Transaksi Anda dicatat pada tanggal itu. Lihat [Mengenal Layar ValasPro](/mulai/mengenal-layar).
:::

## Pagi hari

### Buka Hari

Menu: **Shift → Buka Hari**. Biasanya dilakukan supervisor atau kasir pertama, sekali setiap hari kerja sebelum transaksi pertama.

![Halaman Buka Hari dengan checklist pembukaan dan saldo awal sistem](/buka-hari-checklist.png)

1. Periksa **Checklist Pembukaan**. Butir bertanda **!** perlu dicek, misalnya kurs hari ini belum diterbitkan, masih ada transaksi belum dibayar dari hari sebelumnya, atau hari ini hari libur. Klik **Buka** di butir itu untuk langsung menuju halaman terkait.
2. Periksa **Saldo Awal Sistem**, yaitu kas IDR dan stok valas menurut sistem. Hitung fisik tidak dilakukan di sini, tetapi saat serah terima kasir.
3. Isi **Catatan** bila perlu, lalu klik **Buka Hari**.

Kalau hari sudah dibuka, kotak **Status** menampilkan jam dan nama yang membukanya, seperti pada gambar di atas.

Yang perlu diketahui:

- Buka Hari **tidak wajib**, dan transaksi tetap bisa berjalan tanpanya. Hanya saja, Beranda dan menu akan terus mengingatkan (tanda **!** kuning) sampai hari dibuka.
- Buka Hari hanya berlaku untuk cabang Anda, dan hanya bisa dilakukan sekali per tanggal.
- Pada cabang yang memakai lebih dari satu shift kasir, Buka Hari mengembalikan shift ke **Shift 1**.

Rincian lengkapnya ada di [Buka Hari](/shift/buka-hari).

### Memastikan kurs sudah terbit

Kurs di form transaksi terisi otomatis dari **kurs yang sudah diterbitkan** supervisor. Kurs yang baru disimpan sebagai draf belum dipakai. Cara menerbitkan kurs ada di [Alur Kerja Supervisor](/alur-kerja/supervisor#menerbitkan-kurs).

Untuk mengecek kurs yang sedang berlaku, buka **Transaksi → Informasi Kurs**. Halaman ini menampilkan kurs beli, kurs jual, dan stok setiap valas dalam satu tabel, jadi cocok dijadikan pegangan sepanjang hari.

![Informasi Kurs: kurs beli, kurs jual, dan stok USD](/informasi-kurs-papan.png)

Kurs berganti otomatis menurut **Jadwal Shift Kurs** perusahaan Anda. Jadwal bawaannya: kurs **shift 1** berlaku pukul 04.00–10.00, dan kurs **shift 2** sesudahnya. Perusahaan yang memakai kurs tunggal hanya punya satu kurs sepanjang hari.

### Mengecek stok

Buka **Inventori → Stok Valas**. Angka yang dipakai saat menjual adalah **Stok Akhir**, yaitu stok setelah semua transaksi periode berjalan, termasuk yang belum dibayar. **Stok Brankas** hanya menghitung transaksi yang sudah dibayar. Untuk menelusuri keluar-masuk satu valas, buka tab **Riwayat Valas** di halaman yang sama.

![Stok Valas: stok brankas dan stok akhir per valas](/stok-valas-posisi.png)

## Membuat transaksi

Menu: **Transaksi → Transaksi Valas** (halaman **Buat Transaksi Valas**). Kolom bertanda \* wajib diisi.

![Form Buat Transaksi Valas dengan panel Status Kepatuhan, Informasi Umum, dan Data Valas](/transaksi-valas-form.png)

### 1. Informasi Umum

| Kolom | Cara mengisi |
|---|---|
| **Tipe Transaksi** \* | **Transaksi Pembelian** kalau Anda membeli valas dari pelanggan. **Transaksi Penjualan** kalau Anda menjual valas ke pelanggan. Label hijau *Pembelian* atau merah *Penjualan* di judul form ikut berubah |
| **Periode Transaksi** \* | Tanggal buku. Hanya muncul bila perusahaan mengizinkan tanggal transaksi dipilih. Biasanya sudah terisi otomatis |
| **Jam Transaksi** | Hanya muncul bila fitur **Jam Transaksi Manual** aktif. Terisi otomatis dengan jam sekarang (WIB); ganti dengan jam transaksi sebenarnya kalau Anda mencatatnya belakangan. Kosongkan untuk memakai jam saat disimpan |
| **Tipe Pelanggan** \* | Retail, Corporate, Money Changer, Bank, Antar Cabang, atau Square Balance |
| **Pelanggan** \* | Klik **Cari**. Pelanggan tidak bisa diketik langsung. Lihat [Memilih pelanggan](#memilih-pelanggan) |
| **Sumber Dana** \*, **Tujuan Transaksi** \* | Pilih dari daftar, atau ketik pilihan baru. Pilihan baru tersimpan untuk transaksi berikutnya |
| **Kurir**, **Beneficial Owner** | Muncul untuk tipe pelanggan tertentu |
| **Surat Kuasa** | Unggah berkasnya bila transaksi diwakilkan |
| **Catatan** | Bebas, maksimal 125 karakter |

Tergantung setelan perusahaan, form juga bisa berisi **Akun Biaya** dan **Biaya Transaksi**. Lihat [Fitur Opsional](/mulai/fitur-opsional).

### 2. Data Valas

1. Ketik kode valas di kolom **Valas**, misalnya *USD*, lalu pilih dari daftar. Tombol **Cari** di sebelahnya membuka daftar valas lengkap dengan stok dan kursnya.
2. Ketik **Jumlah** dalam satuan valas, bukan rupiah.
3. **Kurs** terisi otomatis dari kurs terbit, dan **Sub Total** dihitung sendiri. Anda juga bisa mengisi Sub Total, lalu jumlahnya dihitung dari kurs.
4. Tekan <kbd>Enter</kbd> atau klik **Tambah ke Tabel**. Baris valas pindah ke tabel **Rincian Valas**. Ulangi langkah ini kalau pelanggan menukar lebih dari satu valas.

![Panel Data Valas: ketik kode valas lalu pilih dari daftar](/transaksi-valas-pilih-valas.png)

Baris di Rincian Valas masih bisa diubah jumlah dan kursnya. Hapus baris dengan ikon tempat sampah merah.

Di bawah tabel ada **Total (USD)** dan **Total (Rp)**. Khusus penjualan, isi **Pembayaran** (uang yang diserahkan pelanggan), lalu **Kembalian** dihitung otomatis. Kalau transaksinya lewat transfer, pilih **Rekening Terdaftar** milik pelanggan atau isi **Rekening Baru** di panel **Rekening Bank**.

![Rincian Valas, Pembayaran, Kembalian, dan Total pada transaksi penjualan](/transaksi-valas-rincian.png)

### 3. Simpan

Klik **Simpan**, lalu jawab konfirmasi *"Apakah data transaksi ini sudah benar ?"* dengan **OK**.

![Konfirmasi sebelum transaksi disimpan](/transaksi-valas-konfirmasi.png)

Setelah disimpan, aplikasi membuka halaman **Faktur** dengan status **Belum Bayar**. Kalau perusahaan mengaktifkan **Pembayaran Saat Buat Transaksi**, form pembayaran muncul lebih dulu.

![Halaman faktur pembelian yang baru disimpan, berstatus Belum Bayar](/transaksi-valas-faktur.png)

Ada juga tombol **Simpan & Buat Lagi**. Tombol ini menyimpan transaksi, lalu langsung membuka form kosong untuk pelanggan berikutnya.

### Hal yang bisa menghentikan transaksi

| Yang muncul | Artinya | Yang dilakukan |
|---|---|---|
| *Stok valas USD tidak mencukupi pada/sesudah tanggal transaksi (tersedia …)* atau *Jumlah penjualan valas USD melebihi stok yang tersedia* | Stok tidak cukup untuk dijual | Kurangi jumlahnya, atau minta tambahan stok lewat **Inventori → PB Valas** |
| *Rate Pembelian harus diotorisasi* / *Rate Penjualan harus diotorisasi* | Kurs yang Anda ketik terlalu jauh dari kurs terbit | Minta supervisor mengisi nama pengguna dan kata sandinya di jendela **Identifikasi Petugas Otorisasi** |
| Tombol **Simpan** nonaktif, dengan keterangan *Serah terima kasir sedang berlangsung — transaksi tidak dapat disimpan.* | Masih ada serah terima kasir yang belum diterima | Tunggu sampai penerima menerima atau menolaknya |
| *Diblokir! Pelanggan ini diblacklist (tipe diblokir)…* | Pelanggan diblokir perusahaan | Transaksi tidak bisa dilanjutkan. Arahkan pelanggan ke petugas kepatuhan |
| Transaksi ditolak karena periodenya terkunci | Tanggal itu sudah direkonsiliasi atau ditutup | Hubungi supervisor. Lihat [Rekonsiliasi & Tutup Hari](/shift/rekonsiliasi) |

Tipe pelanggan **Antar Cabang** otomatis memakai kurs antarcabang dan hanya bisa dipakai untuk penjualan.

## Memilih pelanggan

### Pelanggan lama

Klik **Cari** di kolom Pelanggan. Jendela **Cari Pelanggan** hanya menampilkan pelanggan dengan kategori yang sama dengan **Tipe Pelanggan**. Cari berdasarkan nama, NIK, atau nomor telepon, lalu klik barisnya.

![Jendela Cari Pelanggan](/transaksi-valas-cari-pelanggan.png)

Begitu pelanggan dipilih, aplikasi langsung memeriksa empat hal dan menampilkan hasilnya di panel **Status Kepatuhan** di atas form:

1. **Nilai Underlying Bulan ini**, yaitu total pembelian valas pelanggan bulan ini dalam USD, dibandingkan dengan **Limit Underlying**.
2. Kemiripan nama dengan daftar pengawasan (DTTOT dan sejenisnya).
3. Status **PEP**.
4. **Blacklist** internal perusahaan.

**Baca panel ini sebelum melanjutkan.** Pemeriksaan tidak dijalankan untuk tipe pelanggan Antar Cabang dan Square Balance.

### Pelanggan baru

1. Klik **Cari**, lalu klik **Tambah Pelanggan Baru**.
2. Isi data sesuai kartu identitas. Wajib diisi: **Kategori**, **Warganegara**, **Tipe Identitas**, **No Identitas**, **Masa Berlaku**, **Nama**, **Pekerjaan**, dan **Tanggal Lahir**.
3. Klik **Simpan**, lalu jawab konfirmasinya. Pelanggan baru langsung terpilih di form transaksi.

![Jendela Tambah Pelanggan yang sudah diisi](/transaksi-valas-pelanggan-baru.png)

Tombol **Scan KTP/SIM** di bagian atas jendela bisa mengisi form otomatis dari foto kartu identitas. Fitur ini masih bertanda **Eksperimental**, jadi selalu periksa ulang hasilnya.

::: tip Isi NPWP sejak awal
NPWP wajib ada kalau suatu saat pelanggan perlu didaftarkan dokumen underlying. Tanpa NPWP, pendaftaran underlying ditolak.
:::

::: tip Pilih pekerjaan dengan benar
**Pekerjaan** menentukan tingkat risiko pelanggan. Pekerjaan berisiko tinggi membuat formulir pelanggan otomatis menjadi **EDD**.
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

![Pembayaran Valas dengan dua faktur belum lunas](/pembayaran-valas-daftar.png)

1. Klik ikon uang di kolom paling kanan baris faktur. Jendela **Pembayaran valas** terbuka.
2. Di **Dibayar dari akun**, akun **Kas** sudah terisi dengan nilai tagihan. Untuk membayar lewat bank, klik **Tambah bank**, lalu bagi nominalnya.
3. Pastikan **Sisa** bernilai Rp 0,00 dengan tanda **Pas**. Sisa yang belum nol berarti nominal yang dialokasikan belum sama dengan tagihan.
4. Klik **Bayar sekarang**. Pesan *Berhasil!* muncul, dan faktur hilang dari daftar.

![Jendela Pembayaran valas: rincian valas, akun pembayaran, dan sisa tagihan](/pembayaran-valas-form-baru.png)

Setelah dibayar, status faktur menjadi **Lunas**, dan stok serta kas di cabang ikut bergerak. Rincian setiap kolom ada di [Pembayaran Valas](/transaksi/pembayaran-valas).

Beberapa faktur bisa dilunasi sekaligus dari satu akun: centang fakturnya, klik **Bayar terpilih**, pilih akun di **Bayar dari akun**, lalu **Bayar sekarang**. Lihat [Membayar beberapa faktur sekaligus](/transaksi/pembayaran-valas#membayar-beberapa-faktur-sekaligus).

Kalau baris faktur menampilkan label kuning **underlying**, faktur itu belum bisa dibayar. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).

### Mencetak faktur

Halaman faktur berjudul **Faktur _nomor_**, lengkap dengan status (Lunas, Menunggu, Belum Bayar, atau Dibatalkan). Klik **Cetak** di kanan atas, lalu serahkan satu lembar kepada pelanggan. Dari **Daftar Transaksi**, faktur yang sama bisa dicetak ulang lewat ikon **Cetak faktur**.

- Nama kasir di faktur diambil dari pemegang kas terakhir di Serah Terima Kasir.
- Kalau tombol **Cetak** tidak ada dan muncul *"Peringatan! Pelanggan ini telah melebihi transaksi …"*, pelanggan sudah melewati batas underlying. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).
- Faktur transaksi yang dibatalkan hanya arsip dan tidak boleh dicetak untuk pelanggan.

Klik **Transaksi** di bawah faktur untuk membuat transaksi berikutnya.

### Formulir CDD / EDD

Di **Transaksi → Daftar Transaksi**, klik ikon **Cetak CDD** atau **Cetak EDD** di kolom Aksi, lalu klik **Download** atau **Print**. Formulir otomatis menjadi **EDD** (uji tuntas mendalam) bila pelanggan berstatus PEP atau pekerjaannya tergolong berisiko tinggi. Lihat [CDD / EDD](/transaksi/cdd-edd).

### Mengubah atau membatalkan

Pakai ikon di kolom **Aksi** di **Transaksi → Daftar Transaksi**. Ikon yang tampil bergantung pada status faktur dan hak akses Anda.

![Daftar Transaksi Valas dengan ikon aksi di setiap baris](/daftar-transaksi-aksi.png)

| Status faktur | Yang bisa dilakukan |
|---|---|
| **Belum bayar** | **Ubah faktur**, atau **Hapus faktur** untuk membatalkannya |
| **Menunggu** | **Hapus faktur** |
| **Lunas** | **Reset pembayaran** dulu supaya status kembali Belum bayar, baru faktur bisa diubah atau dihapus |

Faktur yang dihapus tidak benar-benar hilang. Statusnya menjadi **Batal**, dan faktur itu tercatat di [Transaksi Batal](/transaksi/transaksi-batal). Kalau hari atau periodenya sudah ditutup, transaksi tidak bisa diubah lagi. Hubungi supervisor.

## Serah Terima Kasir

Menu: **Shift → Serah Terima Kasir**. Serah terima dilakukan saat kasir berganti atau saat pulang, supaya kas dan valas berpindah tangan dengan jelas.

### Menyerahkan (pemegang kas)

Syaratnya:

- Anda adalah **pemegang kas** saat ini, yaitu orang yang terakhir menerima kas. Kalau cabang belum pernah melakukan serah terima, siapa pun boleh menyerahkan.
- Tidak ada serah terima lain yang masih menunggu.
- Tidak ada transaksi yang **belum dibayar** atau **menunggu**. Selesaikan dulu di Pembayaran Valas.

Langkahnya:

1. Klik **Serahkan Kas**.
2. Pilih **Kasir penerima**.
3. Pada cabang dengan lebih dari satu shift, biarkan centang **Ganti shift** kalau serah terima ini sekaligus pergantian shift.
4. Periksa ringkasan **Aktivitas Sejak Serah Terima Terakhir**, **Kas IDR diserahkan**, dan **Valas Diserahkan**. Angka-angka ini diambil dari sistem saat Anda menekan Serahkan.
5. Isi **Catatan** bila perlu, lalu klik **Serahkan**.

![Halaman Serahkan Kas: kasir penerima, aktivitas sejak serah terima terakhir, dan valas diserahkan](/serah-terima-kasir-serahkan.png)

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

![Hasil Cocokkan pada Hitung & Terima Kas dengan selisih kas](/serah-terima-kasir-cocokkan.png)

Gambar dan rincian setiap langkah ada di [Serah Terima Kasir](/shift/serah-terima-kasir).

### Pindah Shift dan Ambil Alih Kas

- **Pindah Shift**: kasir yang sama melanjutkan ke shift berikutnya tanpa hitung fisik. Tombol ini hanya ada di cabang yang memakai lebih dari satu shift.
- **Ambil Alih Kas**: dipakai supervisor kalau pemegang kas berhalangan, misalnya sakit, supaya cabang tidak terkunci. Alasannya wajib diisi.

## Akhir hari: Rekonsiliasi

Bagian ini hanya berlaku bila menu **Shift → Rekonsiliasi & Tutup Hari** muncul di layar Anda. Artinya perusahaan menyalakan fitur Rekonsiliasi Harian. Lihat [Fitur Opsional](/mulai/fitur-opsional).

1. Pastikan semua faktur hari itu sudah **Lunas** atau dibatalkan.
2. Buka **Shift → Rekonsiliasi & Tutup Hari**, lalu klik **Rekonsiliasi _tanggal_**.
3. Hitung fisik setiap valas dan kas IDR, isi kolom **Fisik**, lalu klik **Cocokkan**.
4. Kalau ada selisih, hitung ulang dulu. Kalau selisihnya nyata, isi alasannya.
5. Klik **Simpan Rekonsiliasi**. Setelah itu supervisor menjalankan **Tutup Hari**.

![Hasil Cocokkan pada rekonsiliasi: stok USD cocok, kas IDR selisih Rp -50.000](/rekonsiliasi-cocokkan.png)

Setelah rekonsiliasi disimpan, tanggal itu terkunci untuk transaksi. Rincian lengkapnya ada di [Rekonsiliasi & Tutup Hari](/shift/rekonsiliasi).

## Terkait

- [Menangani Batas Underlying](/alur-kerja/underlying)
- [Alur Kerja Supervisor](/alur-kerja/supervisor)
- [Masalah Umum](/bantuan/masalah-umum)
- [Daftar Istilah](/bantuan/istilah)
