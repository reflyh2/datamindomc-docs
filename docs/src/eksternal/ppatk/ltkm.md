---
outline: deep
---

# LTKM — Transaksi Keuangan Mencurigakan

Menu: **Eksternal → PPATK → LTKM** (judul halaman: **LTKM — Transaksi Keuangan Mencurigakan**)

Tempat menyusun, melacak, dan mencatat LTKM (Laporan Transaksi Keuangan Mencurigakan) ke PPATK. Berbeda dari [LTKT](/eksternal/ppatk/ltkt) yang lahir dari ambang nominal, LTKM lahir dari **penilaian petugas**. ValasPro hanya membantu dengan menunjukkan sinyal. Tidak ada satu pun yang menjadi laporan tanpa Anda menekan tombolnya.

## Alur satu laporan

```
Sinyal  →  Dalam Proses  →  Sudah Dilaporkan
(usulan)   (draf + uraian)   (nomor goAML tercatat)
   ↘ Diabaikan (dengan alasan tertulis)
```

Laporan juga bisa dimulai tanpa sinyal, yaitu dari tombol **LTKM Baru** atau dari bendera di [Daftar Transaksi](/transaksi/daftar-transaksi).

## Aturan dasar

| Aspek | Ketentuan |
|---|---|
| Ambang nilai | **Tidak ada.** Transaksi kecil pun wajib dilaporkan bila ada unsur mencurigakan |
| Transaksi batal | Tetap wajib dipertimbangkan, termasuk transaksi yang tidak jadi |
| Tenggat | **3 hari kerja** sejak unsur mencurigakan diketahui, yaitu sejak Anda menandai atau membuat draf di sini, bukan sejak tanggal transaksi |
| Kerahasiaan | Jangan memberi tahu nasabah bahwa ia dilaporkan. [Log Aktivitas](/staff/log-aktivitas) hanya mencatat nomor draf, tanpa nama pihak terlapor |

Tenggat dihitung dalam hari kerja. Akhir pekan dan [Hari Libur](/pengaturan/hari-libur) perusahaan tidak dihitung.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Dalam proses** | Jumlah draf yang belum dikirim |
| **Lewat tenggat** | Berapa baris yang tampil sudah melewati 3 hari kerja |
| Penyaring | **Dari Tanggal**, **Sampai Tanggal**, dan **Cari** (nama, nomor laporan, petugas). Rentang awalnya satu hari: periode cabang yang aktif |
| Tab **Sinyal** | Usulan dari sistem. Belum ada tenggat (*"belum ditetapkan"*) |
| Tab **Dalam Proses** | Draf yang sedang disusun, urut dari tenggat terdekat |
| Tab **Sudah Dilaporkan** | Laporan yang nomornya sudah dicatat. Kolom tenggat berganti menjadi tanggal lapor |
| Tab **Diabaikan** | Sinyal yang sengaja tidak ditindaklanjuti, beserta alasannya |
| **LTKM Baru** | Membuat draf dari nol. Hanya tampil bagi yang boleh mencatat laporan |
| **Ekspor** | **Excel** dan **Cetak**: faktur yang sudah punya nomor LTKM pada rentang tanggal terpilih |

Setiap tab memakai rentang tanggal yang sama pada tanggal transaksi atau kejadian, jadi tab yang tampak kosong mungkin hanya terhalang rentang tanggal.

## Sinyal yang muncul

Sinyal dihitung dari faktur lunas satu nasabah pada satu tanggal, atau dari faktur batal.

| Sinyal | Muncul bila |
|---|---|
| **Nama nasabah mirip dengan daftar DTTOT** | Nama nasabah mirip dengan [DTTOT](/pelanggan/skrining/dttot). Persentase kemiripan ikut ditampilkan |
| **Nasabah berstatus PEP** | Nasabah bertanda [PEP](/pelanggan/skrining/pep) |
| **Beberapa transaksi sehari, total mepet di bawah ambang LTKT** | Lebih dari satu faktur dalam sehari yang totalnya antara Rp400.000.000 dan di bawah Rp500.000.000. Ini bentuk klasik pemecahan transaksi (*structuring*) |
| **Transaksi bernilai besar dibatalkan** | Faktur batal bernilai Rp250.000.000 atau lebih |

Sinyal hanyalah usulan. Nasabah yang tidak memicu sinyal bisa tetap Anda laporkan bila menurut Anda mencurigakan.

## Menindaklanjuti sinyal

Hak akses yang dibutuhkan: **Mencatat nomor laporan PPATK**. Tanpa hak ini, ikon aksi tidak tampil.

### Menjadikannya kandidat

1. Di tab **Sinyal**, klik ikon **Jadikan kandidat LTKM** di baris itu.
2. Sinyal pindah ke tab **Dalam Proses** sebagai draf, dengan tenggat 3 hari kerja mulai hari ini. Indikator yang sesuai dan faktur nasabah pada hari itu sudah terisi.
3. Lanjutkan ke [Menyusun draf](#menyusun-draf).

### Mengabaikan

1. Klik ikon **Abaikan sinyal**.
2. Tulis **Alasan** (minimal 10 karakter), lalu klik **Simpan**. Tulis dasar penilaiannya, bukan sekadar "tidak perlu".

Sinyal yang diabaikan tidak muncul lagi. Alasannya tersimpan permanen di tab **Diabaikan** dan bisa dibaca pemeriksa.

## Menyusun draf

Ada tiga jalan masuk: **LTKM Baru**, ikon **Lihat / sunting** pada draf di tab **Dalam Proses**, atau bendera di Daftar Transaksi.

1. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   | Kolom | Cara mengisi |
   |---|---|
   | **Nama Pihak Terlapor** \* | Nama nasabah atau pihak yang dilaporkan, maksimal 125 karakter |
   | **Tanggal Kejadian** \* | Tanggal transaksi atau kejadian |
   | **Nilai (IDR)** | Nilai transaksi terkait |
   | **Indikator** \* | Centang satu atau lebih alasan kecurigaan. Lihat daftar di bawah |
   | **Uraian Kecurigaan** \* | Minimal 20 karakter. Uraikan apa yang terjadi, apa yang membuatnya menyimpang dari kebiasaan nasabah, dan tindakan yang sudah diambil |

2. Pilih transaksi terkait bila ada. Laporan atas percobaan transaksi yang dibatalkan boleh tanpa faktur.
3. Klik **Simpan Draft**.

Pilihan **Indikator**:

- Menyimpang dari profil, karakteristik, atau kebiasaan pola transaksi nasabah
- Patut diduga dilakukan untuk menghindari pelaporan
- Diduga menggunakan harta kekayaan hasil tindak pidana
- Transaksi yang diminta PPATK untuk dilaporkan
- Pemecahan transaksi (*structuring*) di bawah ambang pelaporan
- Identitas atau dokumen nasabah meragukan / menolak melengkapi data
- Transaksi diduga untuk kepentingan pihak lain yang disembunyikan
- Nasabah terindikasi masuk Daftar Terduga Teroris dan Organisasi Teroris
- Nasabah berstatus *Politically Exposed Person*
- Transaksi dibatalkan atau tidak jadi setelah menimbulkan kecurigaan

Draf bisa disunting berulang kali sebelum dikirim.

## Melaporkan ke PPATK

1. Di tab **Dalam Proses**, klik ikon **Unduh XML goAML** di baris draf. File bernama `GoAML_LTKM_<nomor>_<tanggal>.xml` terunduh.
2. Unggah file itu di aplikasi goAML PPATK dan selesaikan pengirimannya di sana. ValasPro tidak mengirim laporan untuk Anda.
3. Setelah goAML memberi nomor tanda terima, kembali ke ValasPro dan klik ikon **Catat nomor LTKM**.
4. Isi **Nomor LTKM** (maksimal 55 karakter) dan **Tanggal Lapor**, lalu klik **Simpan**.

Draf pindah ke tab **Sudah Dilaporkan**, dan nomornya ikut tertulis di faktur terkait.

::: warning Catat nomor hanya setelah terkirim
Mencatat nomor adalah pernyataan bahwa laporan sudah disampaikan ke PPATK. Setelah itu draf tidak muncul lagi di tab **Dalam Proses**.
:::

## Menandai dari Daftar Transaksi

Kasir atau supervisor yang menemukan kecurigaan saat menangani transaksi tidak perlu mengetik ulang. Di [Daftar Transaksi](/transaksi/daftar-transaksi), klik bendera **Tandai transaksi mencurigakan (LTKM)** pada faktur. Formulir LTKM terbuka dengan nasabah, tanggal, dan nilai yang sudah terisi. Bendera ini hanya tampil bagi jabatan yang punya akses laporan PPATK.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| Ikon aksi dan tombol **LTKM Baru** tidak ada | Jabatan Anda hanya boleh melihat | Minta admin menambahkan **Mencatat nomor laporan PPATK** di [Daftar Akses](/staff/daftar-akses) |
| Pesan bahwa **Uraian** atau **Indikator** wajib diisi | Draf disimpan tanpa uraian minimal 20 karakter atau tanpa indikator | Lengkapi lalu simpan lagi |
| Tab tampak kosong | Rentang tanggal terlalu sempit | Lebarkan **Dari Tanggal** dan **Sampai Tanggal** |
| Draf baru tidak punya sinyal asal | Dibuat lewat **LTKM Baru** | Normal. Hanya sinyal yang dijadikan kandidat membawa indikator usulan |

## Terkait

- [LTKT](/eksternal/ppatk/ltkt): laporan transaksi tunai berdasarkan ambang Rp500.000.000
- [Skrining pelanggan](/pelanggan/skrining/ringkasan): DTTOT, DPPSPM, PEP, dan riwayat keputusan
- [Alur Kerja Kepatuhan](/alur-kerja/kepatuhan)
