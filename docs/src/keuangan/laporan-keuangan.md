---
outline: [2, 3]
---

# Laporan Keuangan

Menu: **Keuangan → Laporan Keuangan**

Laporan Keuangan menyusun laporan akuntansi cabang dari jurnal: Jurnal, Buku Besar, Neraca Saldo, Laba Rugi, Neraca, Arus Kas, Buku Kas/Bank, dan Modal. Semua laporan ada di satu halaman dan dipilih lewat tab di atasnya.

![Laporan Keuangan, tab Neraca Saldo](/neraca-saldo.png)

## Memakai halaman ini

### Tab laporan

Klik tab untuk berpindah laporan. Cabang dan periode yang sudah dipilih ikut terbawa ke tab berikutnya. Tab yang tidak tampil berarti Anda tidak punya akses ke laporan itu.

### Filter

| Filter | Cara mengisi |
|---|---|
| **Periode** | Rentang tanggal. Neraca dan Modal memakai **Posisi per tanggal**, yaitu satu tanggal. Tombol ‹ dan › menggeser periode ke belakang atau ke depan |
| **Cabang** | Cabang yang dilaporkan |

Klik **Terapkan** untuk memuat laporan. Laporan tidak berubah sebelum tombol ini diklik. **Atur ulang** mengembalikan filter ke awal.

Di bawah filter tertulis cabang dan periode yang sedang tampil, beserta metodenya bila ada, misalnya *metode saldo akun* di Laba Rugi.

### Alat di atas tabel

| Alat | Fungsinya |
|---|---|
| **Cari akun…** | Menyaring baris menurut kode atau nama akun |
| **Sembunyikan nilai nol** | Membuang akun yang nilainya nol |
| **Lipat semua** / **Buka semua** | Melipat atau membuka semua kelompok akun |
| **Ekspor** | **Excel**, **PDF**, atau **Cetak** laporan yang sedang tampil |

Di sebagian besar laporan, nama akun bisa diklik untuk membuka [Buku Besar](#buku-besar) akun itu pada periode yang sama. Angka dalam kurung bernilai negatif.

## Jurnal

Semua jurnal di periode itu, lengkap dengan baris debit dan kreditnya.

![Tab Jurnal](/laporan-jurnal.png)

| Kotak | Isi |
|---|---|
| **Jumlah jurnal** | Jumlah jurnal di periode itu, semua jenis |
| **Total debit**, **Total kredit** | Jumlah seluruh baris debit dan kredit |
| **Jurnal tidak seimbang** | Jurnal yang debit dan kreditnya berbeda. Bila nol, tertulis *semua debit = kredit* |

Saring dengan **Jenis jurnal** (awalnya **Semua jenis**) dan **Cari** (nomor jurnal atau keterangan).

Tabel berisi **Tanggal**, **Akun**, **Keterangan**, **Debit**, dan **Kredit**. Setiap jurnal diawali baris judul dengan label jenisnya. Jurnal yang tidak seimbang diberi label **Tidak seimbang**.

Layar menampilkan 50 jurnal per halaman. Pindah halaman lewat tombol nomor di bawah tabel; keterangan *Jurnal 1–50 dari …* menunjukkan posisinya. Satu jurnal tidak pernah terpotong ke halaman berikutnya. Kotak ringkasan dan baris **Total seluruh periode** selalu menghitung seluruh periode, bukan hanya halaman yang dibuka. Ekspor juga berisi seluruh periode. Lihat [Batas ekspor](#batas-ekspor).

Untuk membuat atau mengubah jurnal, pakai menu [Jurnal](/keuangan/jurnal).

## Buku Besar

Mutasi dan saldo per akun.

![Tab Buku Besar](/buku-besar.png)

Tanpa akun dipilih, tabel menampilkan **ringkasan per akun** yang punya mutasi: **Akun**, **Mutasi** (jumlah baris), **Saldo awal**, **Debit**, **Kredit**, dan **Saldo akhir**, ditutup baris **Total**. Kotak ringkasannya **Akun ditampilkan**, **Mutasi debit**, **Mutasi kredit**, dan **Saldo akhir**.

Klik nama akun, atau pilih akun di filter **Akun**, untuk melihat rinciannya. Kotak pertama menjadi **Saldo awal**, dan tabel menampilkan setiap mutasi dengan saldo berjalan:

- Baris pertama: **Saldo awal per …**.
- Rincian ditampilkan 100 baris per halaman. Halaman kedua dan seterusnya dibuka dengan **Saldo pindahan dari halaman sebelumnya**, supaya saldo berjalan tetap bersambung.
- Baris **Mutasi & saldo akhir** ada di halaman terakhir. Di halaman lain tertulis *Berlanjut di halaman berikutnya*.

Ekspor berisi rincian semua akun dalam periode, tidak per halaman.

### Batas ekspor

Supaya laporan yang sangat besar tidak membuat sistem lambat, tab Jurnal dan Buku Besar membatasi jumlah baris per ekspor:

| Ekspor | Batas baris |
|---|---|
| PDF | 1.000 |
| Cetak | 5.000 |
| Excel | 30.000 |

Bila laporan melebihi batas, Anda dikembalikan ke layar laporan dengan pesan seperti *Laporan ini berisi 18.290 baris, melebihi batas 1.000 baris untuk PDF. Persempit periode atau akun, atau gunakan Cetak atau Ekspor Excel.* Persempit periodenya, pilih satu akun di Buku Besar, atau pakai format yang batasnya lebih besar.

## Neraca Saldo

Saldo awal, mutasi, dan saldo akhir setiap akun, untuk memastikan total debit sama dengan total kredit.

| Kotak | Isi |
|---|---|
| **Saldo akhir debit**, **Saldo akhir kredit** | Jumlah saldo akhir di setiap sisi |
| **Mutasi periode** | Jumlah mutasi di periode itu |
| **Status** | **Seimbang** bila saldo akhir debit sama dengan kredit |

Kolom **Saldo awal**, **Mutasi**, dan **Saldo akhir** masing-masing dibagi **Debit** dan **Kredit**. Akun dikelompokkan menjadi Aset, Kewajiban, Ekuitas, Pendapatan, dan Beban. Saldo yang berlawanan dengan sisi normal akunnya ditulis di kolom seberang.

## Laba Rugi

Pendapatan dan biaya di periode itu, sampai laba bersih.

![Tab Laba Rugi](/laba-rugi.png)

| Kotak | Isi |
|---|---|
| **Penjualan** | Total penjualan valas |
| **Laba kotor** | Penjualan dikurangi pembelian |
| **Laba operasional** | Laba kotor dikurangi biaya operasional |
| **Laba bersih** | Laba setelah pajak, dengan marginnya terhadap penjualan |

Urutan laporan: **Penjualan**, **Pembelian**, **Laba kotor**, **Biaya operasional**, **Laba bersih operasional**, **Pendapatan lainnya**, **Biaya lainnya**, **Laba bersih sebelum pajak**, **Pajak**, dan **Laba bersih setelah pajak**.

Bila perusahaan memakai metode laba HPP, bagian **Pembelian** diganti harga pokok penjualan (HPP). Untuk laba per transaksi, lihat [Laporan Laba](/laporan-umum/laporan-laba).

## Neraca

Posisi aktiva dan pasiva per satu tanggal.

![Tab Neraca](/neraca.png)

| Kotak | Isi |
|---|---|
| **Total aktiva**, **Total liabilitas**, **Total pasiva** | Jumlah setiap sisi |
| **Status** | **Seimbang** bila aktiva = pasiva |

| Sisi | Isi |
|---|---|
| **Aktiva** | **Aktiva lancar** (Kas dan bank, Piutang, Persediaan, Aktiva lancar lainnya), **Aktiva tetap**, **Depresiasi dan amortisasi**, **Aktiva lainnya** |
| **Pasiva** | **Liabilitas**, lalu **Modal**, termasuk **Laba sampai tahun lalu** dan **Laba tahun berjalan** |

Klik nama akun untuk membuka Buku Besarnya dari awal tahun sampai tanggal posisi.

## Arus Kas

Dari mana kas datang dan ke mana kas pergi selama periode, disusun dengan metode tidak langsung per jenis akun.

![Tab Arus Kas](/arus-kas.png)

| Kotak | Isi |
|---|---|
| **Saldo kas awal** | Saldo kas dan bank di awal periode |
| **Kenaikan (penurunan) bersih** | Perubahan kas selama periode |
| **Saldo kas akhir** | Saldo kas dan bank di akhir periode |
| **Rekonsiliasi** | **Cocok** bila saldo awal + kenaikan = saldo akhir, atau **Ada selisih** |

| Kelompok | Baris |
|---|---|
| **Operasional** | Penerimaan dari penjualan valas, aset lancar lainnya, pembayaran untuk pembelian valas, kartu kredit dan liabilitas jangka pendek lainnya, pendapatan lainnya, pengeluaran operasional, pembayaran pajak |
| **Investasi** | Perolehan aset, penjualan aset, aktivitas investasi lainnya |
| **Pendanaan** | Pembayaran pinjaman, penerimaan pinjaman, ekuitas/modal |

Setiap kelompok ditutup baris **Kas bersih yang diperoleh dari …**. Di bawahnya ada **Kenaikan (penurunan) kas bersih**, **Saldo kas awal periode**, dan **Saldo kas akhir periode**.

## Buku Kas/Bank

Mutasi satu akun kas atau bank dengan saldo berjalan, seperti rekening koran.

![Tab Buku Kas/Bank](/buku-kas-bank.png)

Pilih akunnya di filter **Akun kas/bank**.

| Kotak | Isi |
|---|---|
| **Saldo awal** | Saldo di awal periode |
| **Masuk (debit)**, **Keluar (kredit)** | Jumlah uang masuk dan keluar |
| **Saldo akhir** | Saldo di akhir periode |

Tabel berisi **Tanggal**, **No. jurnal**, **Keterangan**, **Debit**, **Kredit**, dan **Saldo**, diawali **Saldo awal per …** dan ditutup **Total & saldo akhir**. Untuk akun valas, ada juga kolom valas dan kurs.

## Modal

Modal per satu tanggal, dihitung dari saldo akun.

![Tab Modal](/laporan-modal.png)

| Kotak | Isi |
|---|---|
| **Total modal** | Hasil akhir laporan |
| **Kas, bank & aset** | Termasuk piutang dan kasbon |
| **Hutang** | Mengurangi modal |

Baris laporan: **Kas**, **Bank**, **Aset**, **Stok**, **Piutang**, **Kasbon**, **Hutang**, **Laba Ditahan**, **Pendapatan Periode Ini**, dan **Total modal**.

- **Stok** adalah nilai transaksi valas yang sudah dibayar pada tanggal itu, yang sudah keluar dari Kas.
- **Hutang**, **Laba Ditahan**, dan **Pendapatan Periode Ini** dikurangkan, sehingga **Total modal** menunjukkan modal yang disetor. Hutang ditulis negatif.
- Laba ditahan tampil negatif (dalam kurung). Bila saldonya rugi ditahan, angkanya tampil positif karena rugi itu ditambahkan kembali.

Akun yang dipakai diatur di **Pengaturan Umum → Akuntansi**, kelompok **Laporan keuangan**:

| Pengaturan | Pengaruhnya |
|---|---|
| **Akun Kasbon Karyawan** | Akun di baris **Kasbon**. Boleh akun induk; semua sub-akunnya ikut dihitung. Akun piutang lain masuk baris **Piutang**. Bila kosong, baris Kasbon berisi akun piutang yang namanya mengandung kata "kasbon" |
| **Akun Laba Ditahan** | Akun di baris **Laba Ditahan**, sekaligus tujuan jurnal [Penutupan Tahunan](/keuangan/penutupan-tahunan). Bila kosong, dipakai akun 30002 bernama "Laba Ditahan" |
| **Parent Akun Bank** | Akun yang langsung berada di bawahnya masuk baris **Bank**. Akun kas lainnya masuk baris **Kas** |

## Aturan

- Semua laporan dihitung dari jurnal. Transaksi yang belum dibayar belum punya jurnal, jadi belum masuk laporan.
- Angka di sini sama dengan saldo di [Daftar Akun](/keuangan/daftar-akun), karena sumbernya sama.
- Neraca yang tidak seimbang, atau Arus Kas yang menunjukkan **Ada selisih**, biasanya berasal dari jurnal yang tidak seimbang. Periksa kotak **Jurnal tidak seimbang** di tab Jurnal.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| Laporan tidak berubah setelah filter diganti | **Terapkan** belum diklik | Klik **Terapkan** |
| *Laporan ini berisi … baris, melebihi batas … baris untuk PDF. …* | Ekspor melebihi batas baris | Lihat [Batas ekspor](#batas-ekspor) |
| *Tidak ada jurnal pada periode dan filter ini.* | Tidak ada jurnal yang cocok | Perlebar periode atau ganti jenis jurnal |
| *Tidak ada mutasi akun pada periode ini.* | Belum ada jurnal di periode itu | Perlebar periodenya |
| *Belum ada saldo maupun mutasi akun sampai periode ini.* | Cabang belum punya jurnal sama sekali | Periksa cabang yang dipilih |
| *Belum ada akun kas/bank. …* | Belum ada akun berjenis Kas dan Bank | Tambahkan di [Daftar Akun](/keuangan/daftar-akun), atau atur akun kas bawaan di Pengaturan |
| Status Neraca atau Neraca Saldo tidak **Seimbang** | Ada jurnal yang tidak seimbang | Cari di [Jurnal](/keuangan/jurnal) dengan kotak **Tidak seimbang** |

## Terkait

- [Jurnal](/keuangan/jurnal)
- [Daftar Akun](/keuangan/daftar-akun)
- [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan)
- [Penutupan Tahunan](/keuangan/penutupan-tahunan)
- [Laporan Laba](/laporan-umum/laporan-laba)
- [Alur Kerja: Akunting](/alur-kerja/akunting)
