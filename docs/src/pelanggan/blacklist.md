---
outline: deep
---

# Blacklist

Menu: **Pelanggan → Blacklist** (judul halaman: **Daftar Pelanggan Blacklist**)

Daftar pelanggan yang sedang diblacklist, beserta tipe dan alasannya. Dipakai petugas kepatuhan untuk memantau siapa saja yang dibatasi dan untuk mengembalikan pelanggan ke status normal. Menu ini hanya tampil bila Anda punya hak akses melihat atau mengelola blacklist.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Total Diblacklist** | Jumlah pelanggan di blacklist |
| **Peringatan** | Jumlah pelanggan tipe Peringatan, yang masih bisa bertransaksi |
| **Diblokir** | Jumlah pelanggan tipe Diblokir, yang tidak bisa bertransaksi |
| **Tipe Blacklist** | Saring **Peringatan** atau **Diblokir** |
| **Cari** | Nama, no. identitas, atau alasan |
| Tabel | Nama, kategori, no. identitas, tipe blacklist, alasan, siapa yang memblacklist, dan tanggalnya |

### Tipe blacklist

| Tipe | Di form transaksi |
|---|---|
| **Peringatan** | Kotak kuning. Transaksi tetap bisa disimpan |
| **Diblokir** | Kotak merah. Tombol Simpan nonaktif, transaksi tidak bisa disimpan |

## Memasukkan pelanggan ke blacklist

Pelanggan tidak ditambahkan dari halaman ini, tetapi dari [Daftar Pelanggan](/pelanggan/daftar-pelanggan#memblacklist-pelanggan): klik **⋮ → Blacklist** pada barisnya, atau centang beberapa baris lalu klik **Blacklist**. Pilih tipe, tulis alasannya, lalu simpan.

## Mengeluarkan pelanggan dari blacklist

Butuh hak akses mengelola blacklist.

1. Cari pelanggannya di tabel.
2. Klik ikon **Hapus dari Blacklist** di ujung baris.
3. Di jendela **Hapus dari Blacklist?**, klik **Ya, Hapus**. Muncul pesan *"Pelanggan berhasil dihapus dari blacklist."*.

Pelanggan kembali ke status normal dan bisa bertransaksi seperti biasa. Alasan dan tanggal blacklist sebelumnya ikut dihapus dari data pelanggan.

## Mengekspor dan mencetak

Klik **Ekspor**, lalu pilih **Excel**, **CSV**, atau **Cetak**. Hasilnya mengikuti filter tipe dan pencarian yang sedang dipakai. Lihat [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Aturan

- **Hanya pelanggan retail dan corporate** yang bisa diblacklist.
- **Melihat dan mengelola punya hak akses terpisah.** Pengguna yang hanya bisa melihat tidak mendapat tombol Hapus dari Blacklist, dan tidak bisa memblacklist dari Daftar Pelanggan.
- **Mengganti tipe.** Untuk mengubah Peringatan menjadi Diblokir (atau sebaliknya), blacklist ulang pelanggan itu dari Daftar Pelanggan dengan tipe yang baru.

## Terkait

- [PEP dan blacklist saat transaksi](/alur-kerja/kasir#pep-dan-blacklist)
- [Daftar Pelanggan](/pelanggan/daftar-pelanggan)
