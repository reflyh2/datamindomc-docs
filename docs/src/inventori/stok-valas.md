---
outline: [2, 3]
---

# Stok Valas

Menu: **Inventori → Stok Valas**

Stok Valas menampilkan saldo setiap valas aktif pada satu tanggal, untuk satu atau beberapa cabang. Kasir memakainya untuk mengecek stok sebelum menjual, dan supervisor untuk mencocokkan stok sistem dengan isi brankas.

Halaman ini punya tiga tab:

| Tab | Isi |
|---|---|
| **Stok Valas** | Saldo per valas pada satu tanggal. Dijelaskan di halaman ini |
| **Laporan Stok** | Rekap stok awal, pembelian, penjualan, dan stok akhir dalam satu rentang tanggal. Lihat [Laporan Stok](#laporan-stok) |
| **Riwayat Valas** | Setiap keluar-masuk valas, baris demi baris. Lihat [Riwayat Valas](/inventori/riwayat-valas) |

Saat berpindah tab, pilihan cabang dan centang **Kecualikan Square Balance** ikut dibawa. Tanggalnya tidak, karena tab Stok Valas memakai satu tanggal sedangkan dua tab lainnya memakai rentang.

![Stok Valas: stok brankas dan stok akhir per valas](/stok-valas-posisi.png)

## Memilih data yang ditampilkan

| Filter | Cara mengisi |
|---|---|
| **Posisi Tanggal** | Tanggal yang saldonya ingin dilihat. Awalnya periode berjalan |
| **Cabang** | Awalnya cabang Anda. Pengguna yang boleh melihat semua cabang bisa memilih beberapa cabang atau **Semua Cabang** |
| **Cari** | Ketik kode atau nama valas untuk menyaring baris tabel |
| **Sembunyikan Stok Kosong** | Centang untuk membuang valas yang stoknya nol. Valas bersaldo negatif tetap tampil |
| **Kecualikan Square Balance** | Hanya untuk perusahaan dengan metode laba Square Balance. Lihat [Square Balance](#square-balance) |

Tidak ada tombol Terapkan. Halaman dimuat ulang begitu ada filter yang berubah. Klik **Atur ulang** untuk kembali ke filter awal.

## Isi halaman

### Ringkasan

| Kotak | Isi |
|---|---|
| **Total Nilai Stok** (USD) | Nilai seluruh stok dalam USD, memakai kurs BI pada Posisi Tanggal |
| **Total Nilai Stok** (Rupiah) | Hanya bila setelan **Nilai Stok dalam IDR** aktif. Nilai stok dengan kurs jual yang berlaku **sekarang**, juga untuk tanggal yang sudah lewat. Tanpa setelan ini, kotak ini diganti **Valas Aktif**, yaitu jumlah valas yang terdaftar |
| **Valas Bergerak** | Berapa valas yang punya saldo, dari seluruh valas aktif |
| **Transaksi Square** | Hanya saat **Kecualikan Square Balance** dicentang. Jumlah transaksi square yang tidak dihitung |
| **Stok Negatif** | Berapa valas yang saldonya minus. Angkanya merah bila ada, dan valas itu perlu ditelusuri |

Ringkasan selalu dihitung dari semua valas aktif, termasuk yang disembunyikan oleh **Sembunyikan Stok Kosong**.

### Tabel satu cabang

| Kolom | Isi |
|---|---|
| **Valas**, **Keterangan** | Kode dan nama valas. Valas bersaldo negatif diberi label *negatif* dan barisnya diwarnai merah |
| **Stok Brangkas** | Stok dari transaksi yang **sudah dibayar** saja |
| **Stok Akhir** | Stok dari semua transaksi kecuali yang dibatalkan, **termasuk yang belum dibayar**, ditambah [Pindah Pecahan](/inventori/pb-valas). Angka inilah yang dipakai saat menjual |
| **Stok Akhir (USD)** | Stok Akhir dalam USD, memakai kurs BI pada Posisi Tanggal |
| **Harga Satuan Rupiah**, **Jumlah Stok Rupiah** | Hanya bila **Nilai Stok dalam IDR** aktif. Kurs jual saat ini dan nilai stok dalam rupiah |

Selisih Stok Brangkas dan Stok Akhir adalah valas yang sudah dijanjikan ke pelanggan tetapi belum berpindah tangan, karena transaksinya belum dibayar.

Baris **TOTAL** di bawah hanya menjumlahkan kolom USD dan Rupiah. Jumlah valas yang berbeda mata uang tidak bisa dijumlahkan.

#### Kolom tambahan untuk Hutang Piutang

Perusahaan yang memakai modul Hutang Piutang melihat empat kolom lagi:

| Kolom | Isi |
|---|---|
| **Stok Hutang** | Valas yang sudah dijual dengan **Valas Tertunda** tetapi belum diserahkan ke pelanggan. Valasnya masih di brankas |
| **Stok Piutang** | Valas yang sudah dibeli dengan **Valas Tertunda** tetapi belum diterima dari pelanggan. Valasnya belum ada di brankas |
| **Stok Deposit** | Valas titipan pelanggan |
| **Stok Fisik** | Stok Akhir + Stok Hutang + Stok Deposit − Stok Piutang, yaitu yang seharusnya ada di brankas |

Pada perusahaan ini, label *negatif*, **Sembunyikan Stok Kosong**, dan nilai rupiah memakai Stok Fisik, bukan Stok Akhir.

### Tabel beberapa cabang

Bila lebih dari satu cabang dipilih, tabel diringkas: satu kolom per cabang berisi **Stok Akhir** cabang itu, lalu **Total Stok Akhir**, **Total (USD)**, dan **Total Rupiah** (bila Nilai Stok dalam IDR aktif). Kolom hutang, piutang, deposit, dan Stok Brangkas tidak ditampilkan. Pilih satu cabang untuk melihatnya.

## Menelusuri asal angka stok

Angka stok di tabel bisa diklik. Jendela **Riwayat Valas** terbuka dan menampilkan mutasi valas itu pada Posisi Tanggal, dari Stok Awal sampai Stok Akhir.

- **Satu cabang:** klik angka **Stok Akhir** (atau **Stok Fisik**, bila ada).
- **Beberapa cabang:** klik angka di kolom nama cabang untuk melihat riwayat cabang itu saja. Klik angka **Total Stok Akhir** untuk melihat riwayat gabungan semua cabang terpilih. Judul jendela menampilkan *Gabungan N cabang*, dan kolom **Cabang** menunjukkan asal tiap baris.

Di jendela itu, klik nomor faktur untuk melihat **Detail Faktur**. Untuk rentang beberapa hari, buka tab [Riwayat Valas](/inventori/riwayat-valas).

## Square Balance

Bagi perusahaan yang memakai Square Balance, penutupan periode menjual seluruh valas dan pembukaan periode berikutnya membelinya kembali. Akibatnya stok terbaca nol tepat di tanggal tutup periode.

- **Tanpa centang** (bawaan), angka mengikuti pembukuan. Bila ada transaksi square pada tanggal itu, halaman menampilkan catatan yang menyarankan centang **Kecualikan Square Balance**.
- **Dengan centang**, transaksi square tidak dihitung. Pakai ini kalau yang Anda cari adalah isi brankas. Angkanya tidak lagi sama dengan jurnal, dan catatan kuning mengingatkan hal itu, termasuk di hasil ekspor.

## Menyembunyikan kolom

Klik **Tampilan Kolom**, lalu hapus centang kolom yang tidak diperlukan. Angka di tombol menunjukkan berapa kolom yang disembunyikan.

## Mengekspor dan mencetak

Klik **Ekspor**, lalu pilih **Excel**, **CSV**, atau **PDF**. Hasilnya mengikuti filter dan kolom yang sedang tampil. Lihat juga [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Laporan Stok

Tab **Laporan Stok** merekap stok dalam satu rentang tanggal. Filternya **Periode** (rentang tanggal, awalnya periode berjalan), **Cabang**, dan **Kecualikan Square Balance**, dengan cara kerja yang sama seperti tab Stok Valas.

| Kolom | Isi |
|---|---|
| **Kode** | Kode valas. Hanya valas yang punya stok atau mutasi pada rentang itu yang tampil |
| **Awal** | Stok sehari sebelum rentang |
| **Beli — Jumlah**, **Jual — Jumlah** | Jumlah valas yang masuk dan keluar sepanjang rentang, dari transaksi valas dan [Pindah Pecahan](/inventori/pb-valas) |
| **Beli — Total**, **Jual — Total** | Nilai rupiah pembelian dan penjualan. Hanya dari transaksi valas, karena Pindah Pecahan tidak punya nilai rupiah |
| **Akhir** | Awal + Beli − Jual. Sama dengan Stok Akhir di tab Stok Valas pada tanggal akhir rentang |

Bila beberapa cabang dipilih, kolom-kolom itu diulang per cabang, lalu ditutup blok **Total**. Baris **TOTAL** hanya menjumlahkan kolom rupiah.

Kolom **Kode** dan **Akhir** selalu tampil. Kolom lain bisa disembunyikan lewat **Tampilan Kolom**, dan hasilnya bisa diekspor lewat **Ekspor**.

## Jika angkanya janggal

| Yang terlihat | Kemungkinan penyebab | Yang dilakukan |
|---|---|---|
| Label *negatif*, **Stok Negatif** lebih dari 0 | Valas dijual sebelum pembeliannya tercatat, misalnya pembelian dicatat belakangan | Klik angka stoknya dan telusuri baris merah pertama di Riwayat Valas |
| Stok bernilai 0 di tanggal tutup periode | Transaksi Square Balance | Centang **Kecualikan Square Balance** |
| Stok Akhir lebih kecil dari isi brankas | Ada penjualan yang belum dibayar | Bandingkan dengan **Stok Brangkas**, lalu cek [Pembayaran Valas](/transaksi/pembayaran-valas) |
| Stok Akhir tidak sama dengan isi brankas, padahal semua sudah dibayar | Ada hutang, piutang, atau deposit valas | Lihat kolom **Stok Fisik** |
| *Belum ada valas berstatus aktif di perusahaan ini.* | Belum ada valas aktif | Tambahkan valas di [Master Valas](/master/master-valas) |
| *Semua valas aktif berstok kosong pada tanggal ini disembunyikan …* | **Sembunyikan Stok Kosong** dicentang | Hapus centangnya |

## Terkait

- [Riwayat Valas](/inventori/riwayat-valas)
- [Pindah Pecahan](/inventori/pb-valas)
- [Kasir: mengecek stok](/alur-kerja/kasir#mengecek-stok)
- [Fitur Opsional](/mulai/fitur-opsional)
