---
outline: deep
---

# Daftar Pelanggan

Menu: **Pelanggan → Daftar Pelanggan**

Tempat menyimpan data semua pelanggan (nasabah): perorangan, badan usaha, money changer, dan bank. Di sini Anda menambah, mengubah, mengimpor, dan menghapus pelanggan, menandai status PEP, serta memasukkan pelanggan ke blacklist. Pelanggan yang tersimpan di sini bisa langsung dipilih di form transaksi.

![Halaman Daftar Pelanggan: kotak ringkasan, filter, bilah tindakan massal, dan tabel pelanggan](/pelanggan-daftar-pelanggan-tabel.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Total Nasabah** | Jumlah pelanggan, beserta berapa di antaranya money changer dan bank |
| **Retail & Korporat** | Jumlah pelanggan perorangan dan badan usaha |
| **Diblacklist** | Jumlah pelanggan yang sedang diblacklist. Hanya tampil bila Anda punya hak akses blacklist |
| **PEP** | Jumlah pelanggan yang ditandai PEP |
| **Risiko Tinggi** | Jumlah pelanggan berisiko tinggi bulan ini, beserta jumlah yang menengah. Klik nama bulannya untuk membuka [Matriks Resiko](/pelanggan/skrining/tingkat-resiko). Hanya tampil bila Anda punya hak akses Matriks Resiko |
| Filter | **Kategori Pelanggan**, **Status PEP**, **Tingkat Risiko** (bila Anda punya hak akses Matriks Resiko), dan **Cari** (nama, no. identitas, telepon, atau alamat) |
| Bilah tindakan massal | Muncul aktif setelah Anda mencentang satu baris atau lebih. Lihat [Tindakan massal](#tindakan-massal) |
| Tabel | Nama, no. identitas beserta jenisnya, kategori, pekerjaan, telepon, alamat, status PEP, tingkat risiko dan status blacklist (bila Anda punya hak aksesnya) |

Kolom **PEP** berisi **Ya**, **Tidak**, atau **-**. Tanda **-** berarti status PEP pelanggan belum diverifikasi.

Kolom **Tingkat Risiko** berisi **Tinggi**, **Menengah**, atau **Rendah** untuk bulan berjalan, sama dengan penilaian di [Matriks Resiko](/pelanggan/skrining/tingkat-resiko). Arahkan kursor ke label untuk melihat total skornya. Pelanggan selain retail tidak dinilai dan berisi **-**. Pelanggan retail yang tidak bertransaksi bulan ini bernilai **Rendah**. Filter **Tingkat Risiko** hanya menampilkan pelanggan retail.

Pelanggan berkategori **Square Balance** adalah pelanggan bawaan sistem untuk transaksi penyeimbang. Pelanggan ini tidak bisa dihapus atau diblacklist.

Pencarian, urutan kolom, dan halaman tabel bekerja seperti tabel lain. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

### Menu aksi

Klik ikon **⋮** di ujung baris untuk membuka menu aksi pelanggan itu.

![Menu aksi pelanggan: Detail, Lihat foto, Ubah, dan Hapus](/pelanggan-daftar-pelanggan-aksi.png)

| Aksi | Kegunaan |
|---|---|
| **Detail** | Membuka data lengkap dan riwayat transaksi pelanggan |
| **Lihat foto** | Menampilkan file identitas yang diunggah |
| **Ubah** | Membuka form ubah pelanggan |
| **Blacklist** / **Hapus dari blacklist** | Memasukkan atau mengeluarkan pelanggan dari blacklist. Hanya untuk pelanggan retail dan corporate, dan hanya bila Anda punya hak akses mengelola blacklist |
| **Hapus** | Menghapus pelanggan. Hanya tampil bila Anda punya hak akses hapus pelanggan |

## Menambah pelanggan

1. Klik **Tambah**.
2. Pilih **Kategori Pelanggan** lebih dulu. Kolom yang tampil menyesuaikan kategori.
3. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   | Kolom | Cara mengisi |
   |---|---|
   | **Kategori Pelanggan** \* | **Retail** (perorangan), **Corporate** (badan usaha), **Money Changer**, atau **Bank** |
   | **Kewarganegaraan** \* | Bawaannya **Indonesia**. Hanya untuk retail |
   | **Tipe Identitas** \* | Retail: **KTP**, **SIM**, **Paspor**, atau **KITAS**. Corporate: **NIB**. Money Changer: **Ijin BI**. Bank: **NPWP** |
   | **No Identitas** \* | Nomor pada dokumen identitas. Tidak boleh sama dengan pelanggan lain. Lihat [panjang nomor](#aturan) |
   | **Masa Berlaku** | Masa berlaku dokumen. Hanya untuk selain retail |
   | **Nama** \* | Nama sesuai identitas |
   | **Pekerjaan** \* | Pilih dari daftar. Hanya untuk retail |
   | **Telepon** | Tidak boleh sama dengan pelanggan lain |
   | **PEP (Politically Exposed Person)** | **Ya**, **Tidak**, atau **-** bila belum diverifikasi. Hanya untuk retail |
   | **Tanggal Lahir** \* | Hanya untuk retail. Usia minimal 17 tahun. Tidak wajib bila **Data Pelanggan Minimal** aktif di [Pengaturan Umum](/pengaturan/pengaturan-umum) bagian **Transaksi** |
   | **Tempat Lahir**, **Jenis Kelamin**, **Agama** | Hanya untuk retail |
   | **Alamat**, **Email**, **NPWP**, **Catatan** | Opsional |
   | **File Identitas** | Foto atau pindaian identitas, maksimal 2 MB |
   | **Rekening Bank** | Klik **Tambah Akun Bank**, lalu isi nama bank dan nomor rekening. Nomor rekening tidak boleh dobel |

4. Klik **Simpan**. Muncul pesan *"Data berhasil disimpan!"*.

![Form Tambah Pelanggan untuk kategori Retail](/pelanggan-daftar-pelanggan-tambah.png)

Untuk pelanggan retail, Anda bisa mengisi form dari foto KTP atau SIM. Klik **Scan KTP/SIM**, lalu foto kartunya. Fitur ini masih **Eksperimental**, jadi periksa lagi setiap kolom yang terisi sebelum menyimpan.

Pelanggan baru juga bisa ditambahkan langsung dari form transaksi. Lihat [Pelanggan baru](/alur-kerja/kasir#pelanggan-baru).

## Melihat detail pelanggan

Klik **⋮ → Detail**. Halaman **Detail Pelanggan** punya dua tab:

- **Identitas**: seluruh data pelanggan, **Status Kepatuhan** (Status PEP, Status Blacklist, dan Tingkat Risiko bulan ini beserta keenam skornya untuk pelanggan retail bila Anda punya hak akses Matriks Resiko), file identitas, dan rekening bank. Bila pelanggan diblacklist, tampil juga alasan, tanggal, dan siapa yang memblacklist.
- **Riwayat Transaksi**: total transaksi lunas, jumlah faktur, dan tanggal transaksi terakhir, lalu rincian per valas. Atur **Cabang** dan **Periode**, lalu klik **Terapkan**. Klik **Lihat semua transaksi** untuk daftar per faktur.

![Tab Identitas di Detail Pelanggan](/pelanggan-daftar-pelanggan-detail.png)

![Tab Riwayat Transaksi: total, jumlah faktur, transaksi terakhir, dan rincian per valas](/pelanggan-daftar-pelanggan-riwayat.png)

## Mengubah pelanggan

1. Klik **⋮ → Ubah**, atau klik **Ubah** di halaman Detail.
2. Ubah kolom yang perlu.
3. Klik **Simpan**. Muncul pesan *"Data berhasil diubah!"*.

Perubahan data pelanggan tercatat di [Log Aktivitas](/staff/log-aktivitas).

## Mengimpor pelanggan dari Excel

Dipakai untuk memasukkan banyak pelanggan sekaligus, misalnya saat pindah dari aplikasi lain. Tombol **Impor** hanya tampil bila Anda punya hak akses impor pelanggan.

1. Klik **Impor**, lalu klik **Unduh Template**.
2. Isi template. Klik **Panduan Kolom** untuk melihat aturannya:
   - Kolom wajib: `category`, `name`, `id_type`, `id_number`. Di template, judul kolom wajib berlatar merah, dan kolom opsional berlatar abu-abu.
   - Baris 1 adalah judul kolom. Jangan diubah, dihapus, atau digeser.
   - Hapus baris contoh sebelum mengisi data asli.
   - Sel `birthdate` dan `id_number` harus bertipe **Teks**. Sel bertipe Tanggal membuat tanggal lahir tersimpan kosong, dan sel bertipe Angka merusak nomor identitas.
   - Tulis dengan huruf kecil: `retail`/`corporate`/`mc`/`bank`, `ktp`/`sim`/`passport`/`kitas`/`nib`/`siup`, dan nama agama.
   - `profession` dan `nation` diisi namanya, bukan kodenya.
   - `is_pep` hanya menerima `0`, `1`, atau `2`.
3. Di jendela **Impor Data Pelanggan**, pilih file di **Berkas Excel** (.xlsx, .xls, atau .csv), lalu klik **Impor**.
4. Baca hasilnya: jumlah yang berhasil diimpor, diperbarui, duplikat yang dilewati, dan yang gagal. Baris yang gagal dirinci di **Detail Error**, dengan nomor baris sesuai lembar kerja Anda.
5. Bila ada yang gagal, klik **Unduh baris gagal (.xlsx)**. Berkas itu memakai template yang sama, hanya berisi baris yang gagal, dengan alasannya di kolom **keterangan** paling kanan. Perbaiki barisnya, lalu impor berkas itu lagi. Kolom keterangan tidak perlu dihapus. Tautan ini berlaku sehari.

![Jendela Impor Data Pelanggan dengan Panduan Kolom terbuka](/pelanggan-daftar-pelanggan-impor.png)

::: warning No. identitas yang sudah terdaftar
Baris dengan `id_number` yang sudah ada **memperbarui** data pelanggan lama, bukan membuat pelanggan baru.
:::

## Mengekspor daftar pelanggan

Klik **Ekspor Excel**. File berisi pelanggan sesuai filter dan pencarian yang sedang dipakai. Bila Anda punya hak akses Matriks Resiko, file juga berisi kolom **Tingkat Risiko**.

## Memblacklist pelanggan

Butuh hak akses mengelola blacklist. Hanya pelanggan **retail** dan **corporate** yang bisa diblacklist.

1. Klik **⋮ → Blacklist** pada pelanggan itu.
2. Di jendela **Blacklist Pelanggan**, pilih **Tipe Blacklist**:
   - **Tipe 1 - Peringatan**: pelanggan masih bisa bertransaksi, tetapi kasir melihat peringatan.
   - **Tipe 2 - Diblokir**: pelanggan tidak bisa bertransaksi.
3. Isi **Alasan Blacklist**, lalu simpan. Muncul pesan *"Pelanggan berhasil diblacklist."*.

Untuk mengeluarkan pelanggan dari blacklist, klik **⋮ → Hapus dari blacklist**, atau hapus dari halaman [Blacklist](/pelanggan/blacklist).

## Menghapus pelanggan

1. Klik **⋮ → Hapus**.
2. Konfirmasi. Muncul pesan *"Data pelanggan berhasil dihapus !"*.

Pelanggan yang masih punya transaksi (selain transaksi batal) tidak bisa dihapus. Bila data pelanggan itu ternyata dobel, gabungkan lewat [Data Duplikat](/pelanggan/data-duplikat).

## Tindakan massal

Centang beberapa baris, atau centang kotak di judul tabel untuk memilih semua baris di halaman itu. Bilah di atas tabel berubah menjadi **_n_ nasabah dipilih** beserta tombolnya:

| Tombol | Hasil |
|---|---|
| **Tandai PEP** | Status PEP pelanggan terpilih menjadi Ya |
| **Tandai Bukan PEP** | Status PEP pelanggan terpilih menjadi Tidak |
| **Blacklist** | Membuka jendela **Blacklist _n_ Nasabah** dengan Tipe dan Alasan yang sama untuk semua |
| **Hapus dari Blacklist** | Mengeluarkan pelanggan terpilih dari blacklist |
| **Hapus** | Menghapus pelanggan terpilih |
| **Batalkan pilihan** | Mengosongkan centang |

Tombol **Blacklist**, **Hapus dari Blacklist**, dan **Hapus** hanya tampil bila Anda punya hak aksesnya, dan nonaktif bila tidak ada baris terpilih yang bisa diproses.

Setelah selesai, jendela **Selesai** menampilkan berapa yang berhasil dan baris mana yang dilewati beserta alasannya:

| Alasan dilewati | Artinya |
|---|---|
| *(hanya retail & corporate yang bisa diblacklist)* | Pelanggan money changer, bank, atau square balance |
| *(tidak sedang diblacklist)* | Pelanggan itu memang tidak ada di blacklist |
| *(nasabah square balance tidak bisa dihapus)* | Pelanggan bawaan sistem |
| *(masih punya transaksi)* | Pelanggan punya transaksi yang belum dibatalkan |

## Aturan

- **No. identitas dan telepon tidak boleh dobel** di satu perusahaan. Satu pelanggan cukup didaftarkan sekali dan bisa dipakai di semua cabang.
- **Panjang no. identitas diperiksa.** KTP tepat 16 karakter, SIM minimal 12, Paspor maksimal 9, NPWP minimal 15, dan Ijin BI minimal 6.
- **Pelanggan retail minimal berusia 17 tahun** bila tanggal lahirnya diisi.
- **Status PEP diatur di sini**, lewat form pelanggan atau tindakan massal, bukan di halaman [PEP](/pelanggan/skrining/pep). Pelanggan PEP memakai formulir EDD saat bertransaksi. Lihat [Formulir CDD / EDD](/transaksi/cdd-edd).
- **Blacklist berlaku saat transaksi.** Tipe Peringatan memunculkan kotak kuning di form transaksi. Tipe Diblokir memunculkan kotak merah dan tombol Simpan nonaktif.
- **Pelanggan yang punya transaksi tidak bisa dihapus.** Hapus hanya untuk data yang salah input dan belum terpakai.
- **Unggah foto identitas bergantung paket langganan.** Bila paket Anda tidak mengizinkannya, kolom File Identitas ditolak saat disimpan.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"The No Identitas has already been taken."* atau *"The No Telpon has already been taken."* | Pelanggan dengan nomor itu sudah terdaftar | Cari nomornya di kolom **Cari**, lalu pakai pelanggan yang sudah ada |
| *"Nomor identitas KTP harus 16 karakter!"* (atau pesan serupa untuk SIM, Passpor, NPWP, SIUP) | Panjang no. identitas tidak sesuai jenisnya | Periksa lagi nomornya pada dokumen |
| *"Usia pelanggan minimal 17 Tahun"* | Tanggal lahir menunjukkan usia di bawah 17 tahun | Periksa tanggal lahir. Bila benar, pelanggan belum bisa didaftarkan |
| *"Ukuran file dokumen tidak boleh lebih dari 2MB (maksimal 2048 KB). Silakan kompres atau pilih file lain."* | File identitas lebih dari 2 MB | Kompres foto atau pilih file lain |
| *"Paket langganan Anda tidak mengizinkan unggah foto identitas pelanggan."* | Paket langganan tidak mencakup unggah foto | Simpan tanpa file, atau hubungi pengelola untuk mengubah paket |
| *"Pelanggan masih memiliki data transaksi !"* | Pelanggan punya transaksi yang belum dibatalkan | Biarkan datanya. Bila dobel, gabungkan di [Data Duplikat](/pelanggan/data-duplikat) |
| *"Hanya pelanggan retail dan corporate yang dapat diblacklist."* | Kategori pelanggan money changer atau bank | Blacklist tidak berlaku untuk kategori itu |
| *"Tipe wajib diisi."* | Tipe Blacklist belum dipilih | Pilih Tipe 1 atau Tipe 2 |
| *"Anda tidak punya wewenang untuk aksi ini."* | Hak akses Anda tidak mencakup tindakan massal itu | Minta atasan atau admin menjalankannya |
| *"Belum ada nasabah yang cocok dengan filter ini…"* | Filter atau pencarian terlalu sempit | Ubah kategori, status PEP, atau kata kunci |

## Terkait

- [Memilih pelanggan di form transaksi](/alur-kerja/kasir#memilih-pelanggan)
- [PEP dan blacklist saat transaksi](/alur-kerja/kasir#pep-dan-blacklist)
- [Blacklist](/pelanggan/blacklist)
- [Matriks Resiko](/pelanggan/skrining/tingkat-resiko)
- [Data Duplikat](/pelanggan/data-duplikat)
- [Laporan Pelanggan](/pelanggan/laporan)
