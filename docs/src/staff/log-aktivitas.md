---
outline: deep
---

# Log Aktivitas

Menu: **Staff → Log Aktivitas**

Catatan siapa melakukan apa, kapan, dan dari mana. Gunakan halaman ini untuk menelusuri perubahan, misalnya siapa yang membatalkan sebuah transaksi, mengubah kurs, atau mencabut hak akses sebuah jabatan.

Catatan di halaman ini tidak bisa diubah maupun dihapus.

::: tip Siapa yang bisa membuka
Pengguna yang jabatannya punya hak akses **Log Aktivitas**. Jabatan yang sudah boleh mengatur **Pengaturan Jabatan** otomatis mendapatkannya.

Aktivitas yang dilakukan akun **Super Admin**, atau yang menyangkut akun dan jabatan Super Admin (termasuk login gagal ke akun itu), hanya terlihat oleh Super Admin. Pengguna lain juga tidak melihat nama Super Admin di penyaring **Pengguna**.
:::

## Isi halaman

| Bagian | Isi |
|---|---|
| Kotak atas | **Aktivitas hari ini**, **7 hari terakhir**, **Pengguna aktif hari ini**, dan **Gagal login (7 hari)** |
| Penyaring | **Tanggal** (bawaan 7 hari terakhir), **Modul**, **Pengguna**, **Cabang**, dan **Cari** |
| Tabel | **Waktu**, **Pengguna**, **Cabang**, **Aktivitas** (modulnya), **Deskripsi**, dan **IP** |
| **Ekspor** | Unduh daftar sesuai penyaring ke Excel, CSV, atau Cetak |

Aktivitas pembatalan atau penghapusan ditandai merah, dan login yang gagal ditandai kuning.

## Apa saja yang dicatat

| Modul | Contoh |
|---|---|
| **Login** | Login, logout, login gagal |
| **Staf & Hak Akses** | Menambah atau mengubah pengguna dan jabatan, memberi atau mencabut hak akses, mengeluarkan pengguna secara paksa |
| **Transaksi** | Membuat, mengubah, membatalkan, impor transaksi, menerima atau menolak transaksi antar cabang |
| **Pembayaran** | Membayar, membayar sekaligus, mereset pembayaran |
| **Kurs** | Menerbitkan kurs, mengubah jadwal shift kurs, pengaturan dan tautan Papan Kurs |
| **Master Data** | Menambah, mengubah, atau menghapus pecahan valas, cabang, pelanggan, dan akun |
| **Pengaturan** | Menyimpan satu tab Pengaturan |
| **Jurnal** | Membuat, mengubah, menghapus jurnal |
| **Periode** | Closing periode, reset periode, rekonsiliasi harian, Tutup Periode, tutup buku tahunan |
| **Serah Terima** | Menyerahkan, menerima, menolak, membatalkan serah terima kas, meninjau selisih, ambil alih kas, Buka Hari |

Perubahan stok dan saldo yang terjadi otomatis karena transaksi tidak dicatat terpisah. Lihat aktivitas transaksinya.

## Melihat detail perubahan

Pilih ikon <kbd>ⓘ</kbd> di ujung baris. Jendela **Detail Aktivitas** menampilkan waktu, pengguna, IP, dan perangkat. Untuk perubahan data, tabel **Perubahan** menampilkan nilai **Sebelum** dan **Sesudah** setiap kolom yang berubah.

Isi kolom yang bersifat rahasia, seperti password dan nomor identitas, tidak pernah ditampilkan. Di tempatnya tertulis **(disembunyikan)**.

Baris tanpa ikon tidak punya rincian tambahan. Deskripsinya sudah lengkap.

## Aktivitas lewat dukungan teknis

Bila tim dukungan masuk ke akun Anda untuk membantu, nama pengguna di tabel diberi keterangan **lewat Console**.

## Terkait

- [Pengguna & Jabatan](/staff/pengguna-jabatan)
- [Daftar Akses](/staff/daftar-akses)
