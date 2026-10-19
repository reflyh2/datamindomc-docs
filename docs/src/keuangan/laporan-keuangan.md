---
outline: deep
---

# Laporan Akunting

::: warning Belum disesuaikan
Alur dan tampilan menu ini sudah berubah sejak halaman ini ditulis. Isinya sedang diperbarui; jangan jadikan satu-satunya acuan.
:::

![Laporan Akunting](/laporan-akunting.png)

Halaman **Laporan Akunting** adalah bagian dari sistem aplikasi money changer yang digunakan untuk memantau kondisi keuangan perusahaan secara menyeluruh. Menu ini berisi berbagai jenis laporan yang dapat membantu pengguna dalam proses pencatatan, analisis, dan pelaporan akuntansi.

---

## Jenis Laporan

### 1. **Laporan Jurnal**
![Pratinjau](/laporan-jurnal.png)
- **Fungsi**: Menampilkan seluruh pencatatan transaksi keuangan yang sudah diinput ke sistem sesuai urutan waktu.
- **Detail**:
  - Setiap jurnal ditampilkan dengan baris debit dan kreditnya.
  - Dapat difilter berdasarkan periode, cabang, jenis jurnal, dan kata kunci.
  - Layar menampilkan 50 jurnal per halaman. Pindah halaman lewat tombol nomor di bawah tabel; keterangan "Jurnal 1–50 dari …" menunjukkan posisinya. Satu jurnal tidak pernah terpotong ke halaman berikutnya.
  - Kotak ringkasan di atas (Jumlah jurnal, Total debit, Total kredit, Jurnal tidak seimbang) dan baris **Total seluruh periode** selalu menghitung seluruh periode, bukan hanya halaman yang sedang dibuka.
- **Aksi**:
  - Ekspor ke Excel/PDF dan Cetak. Ekspor selalu berisi seluruh periode, tidak per halaman (lihat [Batas ekspor](#batas-ekspor)).

### 2. **Buku Besar**
![Pratinjau](/buku-besar.png)
- **Fungsi**: Menyajikan ringkasan transaksi yang dikelompokkan berdasarkan akun.
- **Detail**:
  - Tanpa akun dipilih, layar menampilkan **ringkasan per akun**: jumlah mutasi, saldo awal, debit, kredit, dan saldo akhir. Gunakan kotak **Cari akun...** untuk menyaring daftar.
  - Klik nama akun (atau pilih akun di kolom **Akun**) untuk melihat rincian mutasinya beserta saldo berjalan.
  - Rincian ditampilkan 100 baris per halaman. Halaman kedua dan seterusnya dibuka dengan baris **Saldo pindahan dari halaman sebelumnya**, sehingga saldo berjalan tetap bersambung. Baris **Mutasi & saldo akhir** muncul di halaman terakhir akun tersebut; di halaman lain tertulis "Berlanjut di halaman berikutnya".
- **Aksi**:
  - Ekspor ke Excel/PDF dan Cetak berisi rincian semua akun dalam periode, tidak per halaman (lihat [Batas ekspor](#batas-ekspor)).

#### Batas ekspor

Supaya laporan yang sangat besar tidak membuat sistem lambat, Laporan Jurnal dan Buku Besar membatasi jumlah baris per ekspor:

| Ekspor | Batas baris |
|---|---|
| PDF | 1.000 |
| Cetak | 5.000 |
| Excel | 30.000 |

Jika laporan melebihi batas, Anda dikembalikan ke layar laporan dengan pesan seperti:

> Laporan ini berisi 18.290 baris, melebihi batas 1.000 baris untuk PDF. Persempit periode atau akun, atau gunakan Cetak atau Ekspor Excel.

Persempit periode (misalnya per minggu atau per bulan), pilih akun tertentu di Buku Besar, atau gunakan format dengan batas lebih besar.

### 3. **Neraca**
![Pratinjau](/neraca.png)
- **Fungsi**: Menampilkan posisi keuangan perusahaan pada periode tertentu.
- **Struktur**:
  - **Aktiva**: Kas, piutang, aset lain.
  - **Pasiva**: Utang, modal, ekuitas.
- **Manfaat**: Mengetahui keseimbangan total aktiva dan pasiva.

### 4. **Neraca Saldo**
![Pratinjau](/neraca-saldo.png)
- **Fungsi**: Ringkasan saldo akhir tiap akun sebelum dilakukan penyesuaian.
- **Detail**:
  - Memastikan total debit = total kredit.
  - Digunakan sebagai dasar untuk menyusun laporan keuangan berikutnya.

### 5. **Arus Kas**
![Pratinjau](/arus-kas.png)
- **Fungsi**: Menyajikan informasi aliran masuk dan keluar kas perusahaan.
- **Kategori**:
  - Arus kas dari aktivitas operasi.
  - Arus kas dari aktivitas investasi.
  - Arus kas dari aktivitas pendanaan.
- **Manfaat**: Membantu perusahaan memantau likuiditas.

### 6. **Laba Rugi**
![Pratinjau](/laba-rugi.png)
- **Fungsi**: Menunjukkan hasil kinerja keuangan perusahaan dalam periode tertentu.
- **Detail**:
  - Pendapatan utama dan pendapatan lain-lain.
  - Beban usaha, beban administrasi, dan beban lainnya.
  - Laba bersih atau rugi bersih periode berjalan.

### 7. **Laporan Modal**
- **Fungsi**: Menghitung modal per tanggal tertentu dari saldo Kas, Bank, Aset, Stok, Piutang, Kasbon, Hutang, Laba Ditahan, dan Pendapatan Periode Ini.
- **Tanda angka**:
  - Hutang, Laba Ditahan, dan Pendapatan Periode Ini **dikurangkan** dari aset, sehingga **Total Modal** menunjukkan modal yang disetor.
  - Laba ditahan tampil sebagai angka negatif (dalam kurung). Kalau saldonya rugi ditahan, angkanya tampil positif karena rugi itu ditambahkan kembali.
- **Akun yang dipakai** diatur di **Pengaturan Umum › Akuntansi**, kelompok **Laporan keuangan**:
  - **Akun Kasbon Karyawan**: akun yang tampil di baris **Kasbon**. Boleh memilih akun induk; semua sub-akunnya ikut dihitung. Akun piutang lain masuk baris **Piutang**. Kalau dibiarkan kosong, baris Kasbon berisi akun piutang yang namanya mengandung kata "kasbon".
  - **Akun Laba Ditahan**: akun yang tampil di baris **Laba Ditahan**. Akun yang sama menjadi tujuan jurnal [Penutupan Tahunan](/keuangan/penutupan-tahunan). Kalau dibiarkan kosong, dipakai akun 30002 bernama "Laba Ditahan".
- **Baris Bank** berisi akun yang berada langsung di bawah **Parent Akun Bank** (Pengaturan Umum › Akuntansi). Akun kas lainnya masuk baris **Kas**.

---

## Fitur Umum pada Setiap Laporan

- **Filter Data**
  Setiap laporan dapat difilter berdasarkan periode (harian, bulanan, tahunan) atau kondisi tertentu sesuai kebutuhan.

- **Export & Print**
  Laporan dapat diekspor ke berbagai format (CSV, Excel, PDF) atau dicetak langsung untuk kebutuhan administrasi.

- **Navigasi Cepat**
  Menu laporan dilengkapi sidebar untuk berpindah antar laporan dengan mudah.

---

## Alur Penggunaan

1. Pilih menu **Laporan Akunting** pada sidebar.
2. Tentukan jenis laporan yang ingin dilihat (Jurnal, Buku Besar, Neraca, dll).
3. Gunakan form filter untuk menyesuaikan periode atau kondisi data.
4. Tampilkan laporan sesuai pilihan.
5. Jika diperlukan, lakukan export atau cetak laporan untuk dokumentasi.

---

## Lainnya

Baca juga dokumentasi terkait [daftar transaksi valas](/transaksi/daftar-transaksi).
