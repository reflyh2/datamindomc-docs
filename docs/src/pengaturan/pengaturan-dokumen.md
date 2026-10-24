---
outline: deep
---

# Pengaturan Dokumen

Menu **Pengaturan → Dokumen** mengatur tampilan dokumen yang dicetak dari ValasPro. Isinya dua bagian:

- **Invoice**: template invoice (termasuk menyusun invoice sendiri), tanggal yang dicetak, rincian metode pembayaran, dan keterangan di bawah invoice.
- **Kop Surat & Dokumen**: kop surat, kaki dokumen, dan tanda tangan pengesahan untuk formulir dan laporan yang dicetak.

Bagian yang tampil mengikuti hak akses jabatan Anda. Kalau Anda hanya punya akses kop surat, menu ini langsung membuka **Kop Surat & Dokumen**.

## Menyusun invoice sendiri (Template Kustom)

Di **Template Invoice** ada dua kartu: **Template siap pakai** (desain yang sudah tersedia) dan **Susun sendiri**. Dengan **Susun sendiri** Anda menentukan sendiri isi invoice: bagian mana yang dicetak, urutannya, dan tulisan pada judul serta labelnya.

### Memakai Template Kustom

1. Buka **Pengaturan → Dokumen**, bagian **Invoice**.
2. Di **Template Invoice**, pilih kartu **Susun sendiri**, lalu pilih kertas printer Anda (**Kertas lebar**, **Thermal 80mm**, atau **Thermal 58mm**).
3. Klik **Atur Tata Letak**.
4. Setelah tata letak disimpan, kembali ke bagian **Invoice** dan simpan pilihan template.

Invoice baru dicetak dengan susunan Anda setelah **Template Invoice** disimpan dengan kartu **Susun sendiri** terpilih. Kalau belum, halaman tata letak menampilkan pengingat *"Cetak invoice belum memakai tata letak ini."*

### Mengatur tata letak

Halaman **Tata Letak Invoice Kustom** terbagi dua. Di kiri ada daftar blok dan gaya. Di kanan ada pratinjau yang ikut berubah setiap kali Anda mengubah sesuatu, memakai transaksi terakhir cabang Anda.

- **Urutan**: seret blok lewat pegangan ☰ di kiri namanya.
- **Isi blok**: klik nama blok untuk membuka pilihannya, misalnya tulisan judul *Faktur Pembelian* / *Faktur Penjualan*, kolom yang dicetak, atau label tanda tangan.
- **Sembunyikan**: klik ikon mata. Blok **Rincian Valas** dan **Total** selalu dicetak dan tidak bisa disembunyikan atau dihapus.
- **Tambah blok**: pilih jenisnya di bawah daftar lalu klik **Tambah**. **Teks Bebas** dan **Pemisah** boleh ditambahkan lebih dari sekali, blok lain hanya satu.
- **Gaya**: atur jenis huruf, ukuran huruf, dan warna aksen. Printer thermal tetap mencetak hitam.
- **Kertas lain**: pindah ke **Thermal 80mm** atau **Thermal 58mm** lewat tombol di kanan atas. Setiap kertas punya susunannya sendiri.

Pada **Kertas lebar**, blok di bagian atas (misalnya Kop Perusahaan, Judul, dan Nomor & Tanggal) bisa diberi lebar **1/2** atau **1/3** supaya tampil berdampingan.

Pada **Teks Bebas** dan slogan Kop Perusahaan, Anda bisa menulis `{companyName}`, `{branchName}`, dan `{invoice}`. Saat dicetak, ketiganya diganti nama perusahaan, nama cabang, dan nomor invoice.

Klik **Simpan** untuk menyimpan. Kalau Anda meninggalkan halaman dengan perubahan yang belum disimpan, ValasPro akan meminta konfirmasi lebih dulu.

**Kembalikan ke bawaan** menghapus susunan yang tersimpan untuk kertas itu dan menggantinya dengan susunan awal.

::: tip
Blok **Keterangan Invoice** mencetak teks dari isian **Keterangan Invoice** di bagian Invoice. Isinya diubah di sana, bukan di halaman tata letak.
:::

## Pengaturan Invoice

Bagian **Invoice** (*Tata letak dan isi invoice yang dicetak dari transaksi.*) memuat isian berikut. Simpan dengan tombol **Simpan** di bawah halaman.

| Isian | Fungsi |
|---|---|
| **Template Invoice** | Pilih kartu **Template siap pakai** (desain dikelompokkan menurut kertas printer) atau **Susun sendiri** (lihat bagian di atas). Klik **Pratinjau** untuk melihat hasilnya di tab baru. Pratinjau memakai transaksi terakhir cabang dan isian di halaman ini, termasuk yang belum disimpan |
| **Tanggal Invoice** | Sumber tanggal yang dicetak: **Periode Sistem** atau **Tanggal Dibuat**. Hanya Super Admin yang bisa mengubahnya |
| **Rincian Metode Pembayaran** | Mencetak rincian metode pembayaran (tunai/bank) pada invoice |
| **Pakai Logo Kop Surat** | Invoice mencetak logo dari **Kop Surat**, bukan logo perusahaan. Kalau logo Kop Surat belum diunggah, invoice tetap memakai logo perusahaan |
| **Keterangan Invoice** | Teks yang dicetak di bawah invoice, maksimal 1000 karakter. Tulis `{companyName}` untuk menyisipkan nama perusahaan. Dikosongkan, dipakai keterangan bawaan. Klik **Kembalikan ke keterangan bawaan** untuk membatalkan teks Anda |

Sebagian template tidak mendukung semua isian. Bila begitu, catatan kecil di bawah isian itu menjelaskannya.

## Kop Surat & Dokumen

Bagian ini mengatur kepala (kop) dan bagian bawah dokumen cetak: formulir CDD/EDD, laporan akuntansi, laporan stok, laporan umum, dan laporan lain. Daftar lengkapnya ada di kartu **Dokumen yang Memakai Kop** di halaman ini. Pengaturannya berlaku untuk seluruh perusahaan. Ekspor Excel tidak memakai kop.

Selama Anda belum mengubah apa pun, semua dokumen tercetak persis seperti sebelumnya.

### Pratinjau

Di sebelah kanan formulir (di layar sempit, di bagian bawah) ada kartu **Pratinjau**. Isinya ikut berubah setiap kali Anda mengetik atau memilih gambar, sebelum disimpan. Pilih tab **Formulir** atau **Laporan** untuk melihat kop pada jenis dokumen itu.

Pratinjau di browser bisa sedikit berbeda dari hasil cetak. Untuk melihat hasil sebenarnya, klik **Pratinjau PDF Formulir** atau **Pratinjau PDF Laporan** di bawah formulir. PDF dibuka di tab baru dan memakai isian yang belum disimpan.

### Kop Surat

Pilih **Mode Kop**:

- **Bawaan — nama perusahaan + alamat cabang**: kop standar ValasPro. Pada laporan, kepala laporan tetap seperti sebelumnya.
- **Terstruktur — logo + baris teks sendiri**: Anda mengatur sendiri isinya:
  - **Logo** dan **Logo Kanan** (misalnya logo asosiasi atau sertifikasi)
  - **Judul Kop** dan **Slogan**
  - **Baris Kop**, **Posisi**, **Ukuran Judul** (Kecil, Sedang, Besar) dan **Gaya Garis** (Ganda, Tunggal, Tebal-tipis)
  - **Warna Aksen**, dan **Garis Pemisah** di bawah kop
- **Gambar — unggah kop yang sudah jadi**: unggah satu gambar kop di **Berkas Kop**, lalu atur **Tinggi Kop (px)**.

Di **Baris Kop** Anda bisa mengklik penanda di bawahnya untuk menyisipkan data yang terisi otomatis: `{perusahaan}`, `{alamat}`, `{telepon}`, `{email}`, `{npwp}`, `{cabang}`, `{kota}`, dan `{izin}` (nomor izin perusahaan). Alamat, telepon, dan kota diambil dari cabang yang mencetak dokumen. Baris yang semua penandanya kosong tidak dicetak.

### Kaki Dokumen

Kaki dokumen dicetak di bagian bawah formulir dan laporan. Semuanya mati sampai Anda mengisinya.

- **Teks Kaki**: satu baris teks bebas, misalnya *Berizin dan diawasi oleh Bank Indonesia No. {izin}*. Penanda yang sama dengan Baris Kop bisa dipakai di sini.
- **Keterangan Cetak**: mencetak tanggal cetak dan nama pengguna yang mencetak.
- **Nomor Halaman**: mencetak "Halaman 1", "Halaman 2", dan seterusnya. Opsi ini hanya berlaku pada dokumen PDF. Saat mencetak langsung dari browser, gunakan nomor halaman bawaan browser.

### Pengesahan

Centang **Cetak blok pengesahan pada laporan** untuk menambahkan tempat tanda tangan di akhir setiap laporan. Isi:

- **Kota**: kosongkan untuk memakai kota cabang yang mencetak. Tanggal diisi otomatis.
- **Jabatan** dan **Nama Penandatangan**: kalau nama dikosongkan, dicetak garis titik-titik untuk diisi tangan.
- **Tanda Tangan / Stempel**: gambar PNG berlatar transparan, maksimal 2 MB. Kosongkan untuk tanda tangan basah.

Formulir CDD dan EDD tidak ikut mencetak blok ini karena sudah punya kolom tanda tangan sendiri.

### Formulir CDD/EDD

Pilih **Tata Letak** formulir uji tuntas nasabah. Pilihan ini berlaku untuk formulir CDD maupun EDD.

- **Standar — label dan isian satu kolom**: formulir bawaan ValasPro.
- **Tabel Dua Kolom — perorangan & perusahaan berdampingan**: identitas pelanggan dicetak dalam tabel dengan kolom **Perorangan** dan **Perusahaan**, disusul **Informasi Lainnya**, **Beneficial Owner**, serta kolom tanda tangan **TTD Officer**, **Admin Officer**, dan **TTD Customer**. Data pelanggan Retail masuk ke kolom Perorangan, sedangkan pelanggan Corporate, Money Changer, dan Bank masuk ke kolom Perusahaan. Pada formulir EDD ada tambahan baris **Jenis High Risk** dan **Metode Pembayaran**.

Kalau memilih Tabel Dua Kolom, muncul dua isian lagi:

- **Warna Formulir**: warna pita judul bagian, misalnya kuning `#fdd85d`. Kosongkan untuk memakai Warna Aksen kop. Warna teks pada pita menyesuaikan otomatis supaya tetap terbaca.
- **Catatan Kaki Formulir**: kalimat kecil di bawah kolom tanda tangan. Penanda seperti `{perusahaan}` bisa dipakai di sini. Kosongkan untuk memakai kalimat contoh.

Kop di atas formulir tetap mengikuti pengaturan **Kop Surat**. Hasilnya bisa dilihat di tab **Formulir** pada Pratinjau.

### Menyimpan dan mengembalikan

Klik **Simpan** untuk menerapkan pengaturan ke semua dokumen. Gambar yang sudah diunggah bisa dihapus lewat tautan di bawahnya, misalnya **Hapus logo kanan** atau **Hapus tanda tangan**.

**Kembalikan ke bawaan** mengembalikan semua pengaturan kop, kaki dokumen, pengesahan, dan formulir CDD/EDD ke kondisi awal. Gambar yang sudah diunggah tidak dihapus, jadi bisa dipakai lagi kalau Anda memilih mode Terstruktur atau Gambar lagi.

## Hak akses

Bagian **Invoice** mengikuti akses Pengaturan Umum. **Kop Surat & Dokumen** punya akses sendiri, yaitu menu Kop Surat. Atur di [Daftar Akses](/staff/daftar-akses).

## Terkait

- [Pengaturan Umum](/pengaturan/pengaturan-umum)
- [Formulir CDD / EDD](/transaksi/cdd-edd)
- [Alur Kerja Admin](/alur-kerja/admin)
