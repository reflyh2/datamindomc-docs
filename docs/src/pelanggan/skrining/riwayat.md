---
outline: deep
---

# Riwayat

Menu: **Pelanggan → Skrining → Riwayat** (judul halaman: **Riwayat Skrining**)

Catatan setiap pemeriksaan yang menghasilkan kecocokan nama pelanggan dengan daftar DTTOT atau DPPSPM, beserta skor kemiripan, keputusan petugas, dan alasannya. Dipakai petugas kepatuhan untuk meninjau keputusan kasir dan sebagai bukti saat pemeriksaan regulator.

![Tab Riwayat: kotak ringkasan per tingkat kemiripan dan tabel Riwayat Skrining Nasabah](/pelanggan-skrining-riwayat.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Kemiripan Tinggi** | Kecocokan **Sangat mirip** (skor 90% ke atas), yang perlu ditinjau pejabat senior |
| **Kemiripan Menengah** | Kecocokan **Mirip** (75–89%), yang dilanjutkan dengan alasan tertulis |
| **Kemiripan Rendah** | Kecocokan **Perlu dicek** (60–74%), yang tercatat tanpa tindak lanjut |
| **Total Tercatat** | Seluruh catatan sejak pencatatan dimulai |
| **Cari** | Nama pelanggan, nama yang cocok, atau petugas |
| **Semua** / **Tinggi** / **Menengah** / **Rendah** | Menyaring tabel per tingkat kemiripan |
| **Skor** | Skor kemiripan nama |
| **Daftar** | Daftar yang cocok, DTTOT atau DPPSPM |
| **Cocok Dengan** | Nama di daftar yang mirip dengan nama pelanggan |
| **Keputusan** | Lihat tabel di bawah |
| **Alasan** | Alasan yang ditulis kasir saat melanjutkan transaksi |
| **Petugas** | Pengguna yang menyimpan transaksi |

### Keputusan

| Keputusan | Artinya |
|---|---|
| **Tidak ditindaklanjuti** | Kemiripan rendah. Transaksi tersimpan tanpa konfirmasi |
| **Dilanjutkan dengan alasan** | Kasir mengonfirmasi bahwa pelanggan bukan pihak di daftar, menulis alasan, lalu menyimpan transaksi |
| **Ditolak sistem** | Kasir mencoba menyimpan tanpa konfirmasi atau dengan alasan kurang dari 10 karakter, sehingga transaksi tidak tersimpan |

## Meninjau kecocokan

1. Pilih **Tinggi** untuk melihat kecocokan yang paling perlu ditinjau.
2. Untuk tiap baris, bandingkan pelanggan dengan entri di kolom **Cocok Dengan** (buka tab [DTTOT](/pelanggan/skrining/dttot) atau [DPPSPM](/pelanggan/skrining/dppspm) dan cari namanya).
3. Periksa apakah **Alasan** yang ditulis kasir masuk akal, misalnya tanggal lahir atau nomor identitas berbeda.
4. Bila ternyata pelanggan memang pihak di daftar, tindak lanjuti sesuai prosedur kepatuhan perusahaan Anda, termasuk pelaporan ke PPATK, dan pertimbangkan memblacklist pelanggan di [Daftar Pelanggan](/pelanggan/daftar-pelanggan#memblacklist-pelanggan).

## Mengekspor riwayat

Klik **Ekspor**, lalu pilih formatnya. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Aturan

- **Hanya kecocokan yang dicatat.** Transaksi dengan pelanggan yang skriningnya bersih tidak muncul di sini.
- **Catatan tidak bisa diubah atau dihapus.** Baris di halaman ini adalah bukti, bukan data kerja.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"Belum ada nasabah yang tersangkut daftar pengawasan…"* | Belum pernah ada kecocokan | Tidak perlu tindakan |

## Terkait

- [Indikasi DTTOT di form transaksi](/alur-kerja/kasir#indikasi-dttot)
- [Cara kerja skrining](/pelanggan/skrining/ringkasan#cara-kerja-skrining)
