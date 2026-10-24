---
outline: deep
---

# LTKT — Transaksi Keuangan Tunai

Menu: **Eksternal → PPATK → LTKT** (judul halaman: **LTKT — Transaksi Keuangan Tunai**)

Daftar kewajiban lapor LTKT (Laporan Transaksi Keuangan Tunai) ke PPATK. ValasPro menghitung sendiri nasabah mana yang wajib dilaporkan dan kapan tenggatnya. Tugas Anda: unduh XML-nya, kirim lewat goAML, lalu catat nomor laporannya di sini.

## Kapan sebuah transaksi wajib dilaporkan

Sebuah baris muncul di halaman ini bila **total faktur lunas satu nasabah dalam satu tanggal transaksi mencapai Rp500.000.000 atau lebih**. Ambang ini berlaku untuk satu faktur besar, dan juga untuk beberapa faktur kecil yang dijumlahkan.

| Aspek | Ketentuan |
|---|---|
| Dihitung per | Nasabah dan tanggal transaksi (periode) |
| Cabang | Seluruh cabang perusahaan dijumlahkan |
| Faktur yang dihitung | Hanya yang berstatus **Lunas** |
| Tidak dihitung | Faktur batal, faktur stok awal, dan nasabah **Square Balance** (nasabah otomatis penutup periode) |
| Tenggat | 14 hari kerja sejak tanggal transaksi |

Kolom **Dasar** menunjukkan asalnya: **Faktur tunggal**, atau **Akumulasi 3 faktur** bila beberapa faktur dijumlahkan. Akumulasi adalah bentuk yang paling perlu diperhatikan, karena transaksi yang dipecah-pecah justru yang ingin ditangkap aturan ini.

Tenggat dihitung dalam **hari kerja**. Akhir pekan dan [Hari Libur](/pengaturan/hari-libur) perusahaan tidak dihitung, jadi isi hari libur perusahaan harus lengkap.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Perlu dilaporkan** | Jumlah kewajiban yang tampil pada rentang tanggal terpilih |
| **Lewat tenggat** | Berapa dari baris yang tampil sudah melewati 14 hari kerja |
| **Ambang LTKT** dan **Tenggat** | Nilai ambang dan batas hari yang berlaku |
| Penyaring | **Dari Tanggal**, **Sampai Tanggal**, **Tipe Transaksi**, dan **Cari** (nama, nomor laporan, petugas). Tabel langsung berubah saat penyaring diganti. **Tipe Transaksi** hanya berlaku untuk ekspor Excel dan Cetak, bukan untuk isi tabel |
| Tab **Perlu Dilaporkan** | Kewajiban yang belum dicatat nomornya dan belum dikecualikan. Angka kecil di sebelah tab adalah seluruh tunggakan, tanpa melihat rentang tanggal |
| Tab **Sudah Dilaporkan** | Kewajiban yang nomornya sudah dicatat. Kolom tenggat berganti menjadi **Tgl Lapor** |
| Tab **Dikecualikan** | Kewajiban yang sengaja tidak dilaporkan, beserta alasannya |
| **Ekspor** | **Excel**, **Cetak**, dan **XML** (lihat di bawah) |

Rentang tanggal awalnya hanya satu hari, yaitu periode cabang yang aktif. Kalau tabel tampak kosong, lihat kalimat di atas tabel. Kalimat *"Periode ini menampilkan 2 dari 5 kewajiban LTKT yang belum diselesaikan"* berarti masih ada tunggakan di tanggal lain. Klik **Tampilkan semua** untuk memuat setahun terakhir.

Warna tenggat: abu-abu untuk **H-4** atau lebih, kuning untuk **H-3** sampai **Jatuh tempo hari ini**, dan merah untuk **Lewat … hari kerja**. Tanda **PEP** di samping nama berarti nasabah itu orang yang terpapar politik. Lihat [PEP](/pelanggan/skrining/pep).

## Melaporkan satu kewajiban

1. Buka **Eksternal → PPATK → LTKT**. Atur rentang tanggal bila perlu.
2. Klik ikon **Lihat faktur** di baris itu untuk memeriksa faktur penyusunnya sebelum melapor.
3. Klik ikon **Unduh XML goAML**. File bernama `GoAML_LTKT_<tanggal>_<id nasabah>.xml` terunduh.
4. Unggah file itu di aplikasi goAML PPATK dan selesaikan pengirimannya di sana. ValasPro tidak mengirim laporan untuk Anda.
5. Setelah goAML memberi nomor tanda terima, kembali ke ValasPro dan klik ikon **Catat nomor LTKT**.
6. Isi kolom berikut, lalu klik **Simpan**.

   | Kolom | Cara mengisi |
   |---|---|
   | **Nomor LTKT** \* | Nomor tanda terima dari PPATK, maksimal 55 karakter |
   | **Tanggal Lapor** \* | Tanggal laporan dikirim. Awalnya hari ini |

Muncul pesan *"Nomor LTKT tercatat."* dan baris pindah ke tab **Sudah Dilaporkan**. Nomor yang sama juga tertulis di semua faktur penyusunnya.

::: warning Catat nomor hanya setelah terkirim
Mencatat nomor adalah pernyataan bahwa laporan sudah disampaikan ke PPATK. Jangan mengisinya untuk "menghilangkan" baris dari daftar.
:::

### Mengunduh banyak sekaligus

Untuk semua kewajiban dalam rentang tanggal yang dipilih, klik **Ekspor → XML**. Satu file `GoAML_LTKT_Batch_…xml` berisi semuanya. File ini memuat seluruh transaksi yang memenuhi ambang pada rentang itu, **termasuk yang sudah dilaporkan**, dan tidak mengikuti pilihan **Tipe Transaksi**. Periksa dulu supaya tidak mengirim laporan ganda.

## Mengecualikan kewajiban

Bila Anda menilai sebuah baris tidak perlu dilaporkan, jangan dibiarkan menumpuk. Kecualikan dengan alasan tertulis.

1. Klik ikon **Kecualikan** di baris itu.
2. Tulis **Alasan Pengecualian** (minimal 10 karakter). Tulis dasar penilaiannya, bukan sekadar "tidak perlu".
3. Klik **Simpan**.

Muncul pesan *"Kandidat dikecualikan beserta alasannya."* dan baris pindah ke tab **Dikecualikan**. Alasan tersimpan permanen dan tercatat di [Log Aktivitas](/staff/log-aktivitas), jadi pemeriksa bisa membacanya.

## Mengekspor daftar yang sudah dilaporkan

**Ekspor → Excel** dan **Ekspor → Cetak** memuat faktur yang **sudah punya nomor LTKT** pada rentang tanggal terpilih, dan bisa disaring dengan **Tipe Transaksi** (*Pembelian* atau *Penjualan*). Keduanya tidak memuat kewajiban yang masih menunggu. Lihat juga [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Aturan

- **Perlu hak akses berbeda.** Melihat halaman ini butuh **Menu LTKT**. Mengunduh XML bisa dilakukan semua yang melihat halaman, tetapi ikon **Catat nomor LTKT** dan **Kecualikan** hanya tampil bagi jabatan dengan **Mencatat nomor laporan PPATK**. Atur di [Daftar Akses](/staff/daftar-akses).
- **Satu baris per nasabah per tanggal.** Faktur yang berubah sesudah dilaporkan tidak menggeser baris di tab **Sudah Dilaporkan**, karena arsip itu disimpan terpisah.
- **Baris hilang bila transaksinya batal.** Bila faktur dibatalkan atau berubah sehingga totalnya di bawah ambang, kewajibannya tidak ada lagi.
- **Tidak ada pemblokiran.** Kewajiban yang lewat tenggat tetap bisa dilaporkan. Baris hanya ditandai merah.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"Kandidat LTKT tidak ditemukan lagi. Transaksinya mungkin sudah diubah atau dibatalkan."* | Faktur penyusunnya berubah sejak halaman dibuka | Muat ulang halaman dan periksa fakturnya di [Daftar Transaksi](/transaksi/daftar-transaksi) |
| *"Tidak ada transaksi yang memenuhi kriteria LTKT untuk kandidat tersebut."* | Saat mengunduh XML, tidak ada data yang memenuhi syarat | Muat ulang. Bila baris masih ada, hubungi admin |
| *"Tidak ada transaksi yang memenuhi kriteria LTKT pada periode tersebut."* | Unduh XML gabungan pada rentang tanpa kewajiban | Ubah rentang tanggal |
| Tabel kosong, padahal Anda yakin ada | Rentang tanggal hanya satu hari | Lebarkan rentang, atau klik **Tampilkan semua** |
| Ikon **Catat nomor LTKT** tidak ada | Jabatan Anda belum punya hak akses mencatat nomor | Minta admin menambahkannya |

## Terkait

- [LTKM](/eksternal/ppatk/ltkm): laporan transaksi mencurigakan, yang pemicunya penilaian petugas, bukan ambang nominal
- [Alur Kerja Kepatuhan](/alur-kerja/kepatuhan)
- [Hari Libur](/pengaturan/hari-libur)
- [Formulir CDD / EDD](/transaksi/cdd-edd)
