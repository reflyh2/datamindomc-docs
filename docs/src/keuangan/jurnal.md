---
outline: [2, 3]
---

# Jurnal

Menu: **Keuangan → Jurnal**

Jurnal mencatat setiap perpindahan uang di buku besar cabang. Sebagian besar jurnal dibuat otomatis, misalnya dari transaksi valas, deposit, dan pembayaran hutang piutang. Di menu ini bagian akunting melihat semua jurnal, dan membuat jurnal manual untuk biaya, setoran modal, koreksi, atau pinjaman antarcabang.

![Daftar Jurnal](/jurnal.png)

## Isi halaman

### Ringkasan

| Kotak | Isi |
|---|---|
| **Jurnal** | Jumlah jurnal yang tampil di tabel |
| **Total debit**, **Total kredit** | Jumlah sisi debit dan kredit jurnal yang tampil |
| **Tidak seimbang** | Jurnal yang total debit dan kreditnya berbeda. *Debit dan kredit setiap jurnal sama* berarti tidak ada. Klik kotak ini untuk menampilkan jurnal yang tidak seimbang saja. Tanda **Hanya tidak seimbang ×** muncul di atas tabel; klik × untuk membuangnya |

### Menyaring jurnal

| Filter | Cara mengisi |
|---|---|
| **Periode** | Rentang tanggal jurnal |
| **Tipe** | Pilih satu atau beberapa tipe jurnal. Awalnya semua tipe manual |
| **Cari** | Nomor jurnal, keterangan, nomor referensi, atau nama akun |

Jurnal otomatis dari **Transaksi Valas**, **Transaksi Deposit**, **Pembayaran Hutang Piutang**, dan **Penyesuaian HPP** jumlahnya banyak, jadi awalnya disembunyikan. Di bawah filter tertulis berapa jurnal otomatis di periode itu yang tidak ditampilkan. Klik **Sertakan** untuk ikut menampilkannya.

### Tabel

| Kolom | Isi |
|---|---|
| Tanda panah | Klik untuk membuka baris akun jurnal itu |
| **Tanggal** | Tanggal jurnal |
| **No Jurnal** | Nomor jurnal. Awalannya menunjukkan tipe, misalnya `BUM/` untuk Kas Masuk dan `INV/` untuk transaksi valas |
| **Tipe** | Tipe jurnal. Lihat [Tipe jurnal](#tipe-jurnal) |
| **Keterangan** | Keterangan jurnal |
| **Total (Rp)** | Total sisi debit |
| **Dibuat oleh** | Pengguna yang membuat jurnal |

Menu aksi di ujung baris berisi **Detail**, **Cetak bukti**, **Ubah**, dan **Hapus**. Jurnal yang tidak boleh diubah di sini diberi ikon gembok. Arahkan kursor ke gembok untuk membaca alasannya. Lihat [Jurnal yang terkunci](#jurnal-yang-terkunci).

**Ekspor** mengunduh isi tabel sesuai filter. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

### Tipe jurnal

Jurnal yang bisa dibuat dari menu ini:

| Tipe | Dibuat lewat |
|---|---|
| **Memorial** | **Tambah → Jurnal Umum** |
| **Kas Keluar** | **Tambah → Kas Keluar** |
| **Kas Masuk** | **Tambah → Kas Masuk** |
| **Pinjaman Keluar** | **Tambah → Buat Piutang**. Pasangannya, **Pinjaman Masuk**, dibuat di cabang tujuan |
| **Bayar Pinjam Keluar** | **Tambah → Bayar Hutang**. Pasangannya, **Bayar Pinjam Masuk**, dibuat di cabang tujuan |

Jurnal yang dibuat otomatis oleh menu lain:

| Tipe | Asalnya |
|---|---|
| **Transaksi Valas** | Transaksi valas yang dibayar |
| **Transaksi Deposit** | Deposit pelanggan |
| **Pembayaran Hutang Piutang** | Pembayaran di modul Hutang Piutang |
| **Penyesuaian HPP** | Hitung ulang HPP |
| **Setor Laba** | [Tutup Periode](/periode/tutup-periode) atau [Pengaturan Periode](/periode/pengaturan-periode) |
| **Penyusutan & Amortisasi Aset**, **Pelepasan Aset**, **Mutasi Aset Keluar**, **Mutasi Aset Masuk** | Menu Aset |
| **Penutupan Tahunan** | [Penutupan Tahunan](/keuangan/penutupan-tahunan) |
| **Kas Keluar Multicabang**, **Kas Masuk Multicabang** | Jurnal kas antarcabang lama. Masih tampil di daftar, tetapi tidak lagi dibuat dari menu **Tambah** |

## Membuat jurnal umum

Pakai jurnal umum untuk mencatat apa saja dengan debit dan kredit bebas, misalnya koreksi atau pemindahan saldo antarakun.

1. Klik **Tambah**, lalu **Jurnal Umum**.

   ![Menu Tambah](/jurnal-tambah-menu.png)

2. Di **Informasi jurnal**, isi kolom berikut. Kolom bertanda \* wajib diisi.

   | Kolom | Cara mengisi |
   |---|---|
   | **Tanggal** \* | Tanggal jurnal (dd-mm-yyyy). Awalnya periode berjalan |
   | **No. referensi** | Nomor bukti dari luar, misalnya nomor nota. Paling panjang 55 karakter |
   | **Keterangan** \* | Paling panjang 225 karakter |

   Nomor jurnal dibuat otomatis saat disimpan.

3. Di **Rincian**, pilih **Akun** dan isi **Debit** atau **Kredit** di setiap baris. **Catatan** boleh dikosongkan. Klik **Tambah baris** bila perlu lebih dari dua baris.

   ![Form Jurnal Umum](/jurnal-umum.png)

4. Periksa bilah total di bawah. Tombol **Simpan** baru aktif setelah statusnya **Seimbang**.
5. Klik **Simpan**, atau tekan <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. Muncul pesan *Jurnal berhasil dibuat!*

Tombol di ujung setiap baris rincian:

| Tombol | Fungsinya |
|---|---|
| Timbangan (**Isi selisih**) | Mengisi baris itu dengan selisih debit dan kredit, supaya jurnal seimbang |
| **Duplikat baris** | Menyalin baris di bawahnya |
| **Hapus baris** | Membuang baris |

### Akun valas

Bila akun yang dipilih bermata uang asing, di bawah barisnya muncul baris kurs: **Kurs**, debit valas, dan kredit valas. Isi nilai rupiah atau nilai valasnya, dan yang lain dihitung dari kurs.

Satu akun valas hanya boleh dipakai di satu baris. Bila dipakai dua kali, status berubah menjadi **Akun valas ganda**. Gabungkan keduanya ke satu baris.

### Bilah total

| Bagian | Isi |
|---|---|
| **Total debit**, **Total kredit** | Jumlah semua baris |
| **Selisih** | Total debit dikurangi total kredit |
| Status | **Belum ada nilai**, **Debit kurang …** atau **Kredit kurang …**, **Akun valas ganda**, atau **Seimbang** |

## Membuat jurnal kas keluar atau kas masuk

Jurnal kas lebih cepat untuk mencatat uang yang keluar dari atau masuk ke satu akun kas, misalnya membayar listrik atau menerima setoran modal.

1. Klik **Tambah**, lalu **Kas Keluar** atau **Kas Masuk**.
2. Isi **Informasi jurnal**:

   ![Form Jurnal Kas Keluar](/jurnal-kas-keluar.png)

   | Kolom | Cara mengisi |
   |---|---|
   | **Tanggal** \*, **No. referensi** | Sama seperti jurnal umum |
   | **Penerima** (Kas Keluar) / **Diterima dari** (Kas Masuk) | Nama pihak lawan |
   | **Dibayar dari akun** \* (Kas Keluar) / **Diterima di akun** \* (Kas Masuk) | Akun kas atau bank. Akun ini otomatis menerima total rincian di sisi lawannya |
   | **Keterangan** \* | Juga menjadi catatan baris akun kas |

3. Di **Rincian**, pilih akun lawan dan isi jumlahnya. Di Kas Keluar setiap baris dibukukan di sisi debit, di Kas Masuk di sisi kredit.
4. Klik **Simpan**.

## Mencatat pinjaman antarcabang

Dua pilihan di grup **Antar Cabang** mencatat uang yang berpindah antarcabang. Setiap jurnal otomatis membuat jurnal pasangannya di cabang tujuan, jadi kedua cabang tidak perlu mencatat sendiri-sendiri.

| Pilihan | Judul form | Untuk |
|---|---|---|
| **Buat Piutang** | Jurnal Piutang Antarcabang | Cabang Anda meminjamkan kas ke cabang lain |
| **Bayar Hutang** | Jurnal Pembayaran Hutang Antarcabang | Cabang Anda membayar hutang ke cabang lain |

1. Pilih **Dibayar dari akun**, yaitu akun kas cabang Anda.
2. Pilih **Akun piutang cabang** (Buat Piutang) atau **Akun hutang cabang** (Bayar Hutang).
3. Di **Rincian**, pilih **Cabang** tujuan, akun kas penerima di cabang itu, dan jumlahnya. Di **Bayar Hutang**, hanya cabang yang masih Anda hutangi yang bisa dipilih. Angka di kurung adalah sisa hutangnya.
4. Klik **Simpan**.

Saldo hasilnya bisa dipantau di [Hutang Piutang Cabang](/keuangan/hutang-piutang-cabang). Bila muncul *Belum ada akun antarcabang. …*, akun Hutang Cabang dan Piutang Cabang belum diatur di **Pengaturan Umum → Akuntansi**.

## Melihat, mencetak, dan mengubah jurnal

- **Detail** membuka halaman **Detail Jurnal**: tanggal, nomor, nomor referensi, tipe, pihak lawan, keterangan, siapa yang membuat dan terakhir mengubah, serta semua baris akunnya. Dari sana Anda bisa klik **Cetak**, **Ubah**, atau **Hapus**.
- **Cetak bukti** membuka bukti jurnal dalam PDF, misalnya bukti kas keluar untuk ditandatangani.
- **Ubah** membuka form yang sama dengan saat membuat. Klik **Simpan**, lalu muncul *Jurnal berhasil diupdate!*

## Menghapus jurnal

**Satu jurnal:** pilih **Hapus** di menu aksi, lalu klik **Hapus** di konfirmasi *Hapus jurnal?* Seluruh baris akunnya ikut terhapus. Untuk jurnal antarcabang, jurnal pasangannya di cabang lain juga terhapus.

**Beberapa jurnal:**

1. Centang baris-baris yang ingin dihapus. Di atas tabel tertulis berapa jurnal yang dipilih.
2. Klik **Hapus**, lalu konfirmasi *Hapus … jurnal?*

Jurnal yang terkunci dilewati. Pesan hasilnya menyebut berapa jurnal yang terhapus, dan alasan untuk yang gagal atau dilewati.

## Jurnal yang terkunci

Jurnal bergembok tidak bisa diubah atau dihapus dari menu ini:

| Alasan di gembok | Artinya |
|---|---|
| *Kelola melalui menu Deposit* | Jurnal dibuat oleh deposit |
| *Kelola melalui menu Hutang Piutang › Pembayaran › Riwayat* | Jurnal dibuat oleh pembayaran hutang piutang |
| *Kelola melalui menu Transaksi (otomatis dari hitung ulang HPP)* | Jurnal penyesuaian HPP |
| *Kelola melalui menu Keuangan › Tutup Buku › Tahunan* | Jurnal [Penutupan Tahunan](/keuangan/penutupan-tahunan) |
| *Tahun … sudah ditutup buku* | Tanggal jurnal ada di tahun yang sudah ditutup |
| *Bulan … sudah ditutup buku* | Tanggal jurnal ada di bulan yang sudah ditutup lewat [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan) |
| *Jurnal turunan antar cabang — kelola dari cabang asal* | Jurnal pasangan dari cabang lain. Ubah atau hapus jurnal aslinya |

Jurnal transaksi valas tidak bergembok, tetapi sebaiknya dikoreksi lewat transaksinya, bukan lewat jurnal.

## Aturan

- Total debit dan kredit setiap jurnal harus sama, dan nilainya tidak boleh 0.
- Tanggal jurnal tidak boleh jatuh di periode yang sudah ditutup. Bila Anda memilih tanggal di tahun yang sudah ditutup buku, form langsung memberi tahu dan jurnal tidak bisa disimpan.
- Satu akun valas hanya boleh muncul di satu baris jurnal.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| **Simpan** tidak bisa diklik, *Belum bisa disimpan: …* | Jurnal belum seimbang atau belum ada nilai | Lihat status di bilah total, lalu perbaiki barisnya |
| *Nilai jurnal tidak boleh 0* | Semua baris bernilai 0 | Isi nilainya |
| *Total debit dan kredit tidak seimbang* | Debit dan kredit berbeda | Klik **Isi selisih** di salah satu baris, atau perbaiki nilainya |
| *Akun valas yang sama sudah dipakai baris lain — gabungkan ke satu baris.* | Satu akun valas dipakai dua kali | Gabungkan ke satu baris |
| *Tidak dapat membuat Jurnal ! Periode ini sudah dilakukan penutupan.* | Tanggal ada di periode yang sudah ditutup | Ganti tanggalnya, atau minta penutupannya dibuka kembali |
| *Tidak dapat menghapus Jurnal ! Periode ini sudah dilakukan penutupan* | Sama, saat menghapus | Sama |
| *Melebihi sisa hutang cabang ini.* | Pembayaran hutang lebih besar dari sisa hutang | Kurangi jumlahnya |
| *Jurnal … tidak dapat diubah. …* | Jurnal terkunci | Lihat [Jurnal yang terkunci](#jurnal-yang-terkunci) |
| *Jurnal ini milik cabang lain. Pindah ke cabang tersebut untuk mengubahnya.* | Jurnal dibuat di cabang lain | Masuk ke cabang itu lewat portal cabang |
| *Belum ada jurnal pada periode ini. …* | Tidak ada jurnal manual di periode itu | Ubah periodenya, atau klik **Sertakan** untuk menampilkan jurnal otomatis |

## Terkait

- [Daftar Akun](/keuangan/daftar-akun)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
- [Hutang Piutang Cabang](/keuangan/hutang-piutang-cabang)
- [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan)
- [Penutupan Tahunan](/keuangan/penutupan-tahunan)
