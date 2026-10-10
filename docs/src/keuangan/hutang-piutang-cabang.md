---
outline: deep
---

# Hutang Piutang Cabang

Menu: **Keuangan → Hutang Piutang Cabang**

Halaman ini menampilkan hutang cabang Anda kepada cabang lain dan piutangnya dari cabang lain, dipisah per cabang. Saldonya diambil dari akun **Hutang Cabang** dan **Piutang Cabang** yang dipilih di **Pengaturan Umum → Akuntansi**, bagian **Hutang piutang**.

Saldo bertambah dari dua sumber:

- [Transaksi antarcabang](/transaksi/transaksi-antarcabang): saat faktur dibayar, cabang pembeli mencatat hutang dan cabang penjual mencatat piutang.
- [Jurnal](/keuangan/jurnal) antarcabang: **Tambah → Buat Piutang** dan **Tambah → Bayar Hutang**.

Angka yang tampil adalah milik cabang yang sedang aktif. Untuk melihat cabang lain, masuk ke cabang itu lewat portal cabang.

## Isi halaman

| Bagian | Isi |
|---|---|
| Tab **Hutang** / **Piutang** | Angka di tab adalah jumlah cabang yang punya saldo. |
| **Total hutang** / **Total piutang** | Jumlah saldo ke semua cabang. |
| **Posisi bersih** | Total piutang dikurangi total hutang. |
| **Belum cocok** | Jumlah cabang yang saldonya berbeda dengan catatan cabang itu sendiri. Lihat [Status "Tidak cocok"](#status-tidak-cocok). |
| **Posisi per tanggal** | Saldo dihitung sampai tanggal ini. Awalnya hari ini (atau tanggal periode cabang bila perusahaan memakai periode manual). Begitu tanggalnya diganti, halaman langsung dimuat ulang. |

Kolom tabel:

| Kolom | Isi |
|---|---|
| **Cabang** / **Area** | Cabang lawan. Klik namanya untuk membuka rinciannya. |
| **Hutang (Rp)** / **Piutang (Rp)** | Saldo di cabang Anda. Angka dalam kurung bernilai negatif. Tanda **Lebih bayar** (atau **Lebih terima**) muncul bila pembayaran melebihi hutangnya. |
| **Menurut cabang lawan (Rp)** | Saldo yang dicatat cabang lawan untuk cabang Anda: piutangnya di tab **Hutang**, hutangnya di tab **Piutang**. |
| **Status** | **Cocok** bila kedua angka sama, **Tidak cocok** bila berbeda. |

Menu **Aksi** di setiap baris berisi **Rincian**, dan di tab **Hutang** juga **Bayar hutang** bila masih ada hutang ke cabang itu.

::: warning Akun belum dikaitkan
Bila muncul pesan **Akun Hutang Cabang belum dikaitkan** (atau **Piutang Cabang**), pilih akunnya dulu di **Pengaturan Umum → Akuntansi**, bagian **Hutang piutang**. Hanya pengguna yang boleh membuka Pengaturan Umum yang melihat tautannya.
:::

## Melihat rincian

Klik nama cabang, atau **Aksi → Rincian**. Jendela **Rincian hutang** (atau **Rincian piutang**) menampilkan setiap jurnal ke cabang itu sampai tanggal posisi: tanggal, nomor dan jenis jurnal, keterangan, debit, kredit, dan **Saldo** berjalannya. Klik nomor jurnal untuk membuka jurnalnya.

Bila jurnalnya lebih dari 200, yang paling lama digabung menjadi baris **Saldo mutasi sebelumnya**.

## Membayar hutang ke cabang

1. Buka tab **Hutang**.
2. Pada cabang yang dituju, klik **Aksi → Bayar hutang**.
3. Form **Jurnal Pembayaran Hutang Antarcabang** terbuka dengan cabang dan sisa hutangnya sudah terisi di baris pertama. Pilih **Dibayar dari akun** dan **Akun hutang cabang**, ubah jumlahnya bila hanya membayar sebagian, lalu simpan.

Tombol **Bayar Hutang** di kanan atas tabel membuka form yang sama tanpa isian. Kedua tombol hanya muncul bagi pengguna yang boleh membuat jurnal.

## Status "Tidak cocok"

Hutang cabang Anda ke cabang B seharusnya sama dengan piutang cabang B kepada cabang Anda. Bila berbeda, biasanya satu sisinya belum dicatat:

- **Faktur transaksi antarcabang baru dibayar di satu cabang.** Contohnya, cabang Anda sudah membayar faktur pembelian, tetapi faktur penjualan pasangannya di cabang lawan masih **Belum bayar**. Selisihnya hilang setelah faktur itu dibayar.
- **Jurnal manual ke akun hutang atau piutang cabang** yang tidak dibuat lewat jurnal antarcabang, sehingga cabang lawan tidak ikut mencatat.

Buka **Rincian** di kedua cabang dan bandingkan jurnalnya untuk menemukan yang belum berpasangan.

::: tip Kolom "Menurut cabang lawan" berisi "–"
Status **Tidak dicek** berarti akun pasangannya belum diketahui: akun Hutang Cabang belum ditautkan ke akun Piutang Cabang di [Daftar Akun](/keuangan/daftar-akun), dan akun sisi lainnya juga belum dipilih di Pengaturan Umum.
:::
