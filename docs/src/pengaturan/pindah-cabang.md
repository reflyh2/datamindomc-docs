---
outline: deep
---

# Pindah Cabang

Menu: **Pindah Cabang** (menu tersendiri di sidebar, bukan di dalam Pengaturan)

Membuat akun Anda bekerja sebagai cabang lain tanpa keluar dan masuk lagi. Berguna bagi admin, supervisor area, atau akunting yang perlu memeriksa atau menangani transaksi cabang lain.

## Siapa yang melihat menu ini

| Jabatan Anda punya | Yang tampil |
|---|---|
| **Pindah ke cabang lain** saja | Menu **Pindah Cabang** di sidebar |
| **Daftar Cabang lengkap** (pengelola cabang) | Menu **Pindah Cabang** tidak ada. Pindah lewat kolom portal di bagian **Cabang**, **Pengaturan → Perusahaan** (lihat [Cabang](/pengaturan/pengaturan-perusahaan/cabang)) |

Hak **Pindah ke cabang lain** juga membuka pilihan *Semua Cabang* di laporan. Atur hak ini di [Daftar Akses](/staff/daftar-akses).

## Pindah ke cabang lain

1. Buka **Pindah Cabang**. Halaman **Daftar Cabang** menampilkan semua cabang perusahaan Anda dengan kolom **Nama**, **Kode**, **Area**, dan **Telpon**.
2. Saring dengan pilihan **Area** bila cabangnya banyak. Bawaannya **Semua Area**.
3. Klik **Pindah** di baris cabang tujuan. Cabang Anda saat ini ditandai **Aktif** dan tidak bisa dipilih.
4. Setujui pertanyaan *"Pindah cabang?"* dengan klik **Pindah**. Bila ragu, klik **Batal**.

Muncul pesan *"Pindah ke cabang [nama] berhasil."* Nama cabang dan periodenya di bagian atas layar berganti ke cabang tujuan.

::: warning Transaksi berikutnya tercatat di cabang tujuan
Sampai Anda kembali, semua yang Anda kerjakan memakai kurs, stok, kas, dan periode cabang tujuan. Pastikan nama cabang di header sudah benar sebelum membuat transaksi.
:::

## Kembali ke cabang asal

Selama Anda berada di cabang lain, header menampilkan tautan **Kembali ke cabang asal ([kode])**. Klik tautan itu. Muncul pesan *"Kembali ke cabang asal berhasil."*

Anda tidak perlu kembali sebelum keluar. Tetapi bila lupa, Anda masuk berikutnya masih di cabang tujuan, jadi cek header setiap awal bekerja.

## Aturan

- **Hanya cabang perusahaan sendiri.** Daftar tidak memuat cabang perusahaan lain.
- **Hak akses jabatan tetap.** Pindah cabang tidak menambah hak. Menu yang tampil tetap sesuai jabatan Anda.
- **Periode, shift, dan stok mengikuti cabang tujuan.** Bila cabang tujuan memakai periode manual dan sedang ditutup, aturan penutupan di cabang itu yang berlaku. Lihat [Fitur Opsional](/mulai/fitur-opsional).
- **Semua tindakan tercatat atas nama Anda** di [Log Aktivitas](/staff/log-aktivitas).

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| Menu **Pindah Cabang** tidak ada | Jabatan Anda tidak punya hak **Pindah ke cabang lain**, atau Anda pengelola cabang | Pengelola cabang memakai kolom portal di **Pengaturan → Perusahaan → Cabang**. Selain itu, minta admin menambahkan haknya |
| Cabang yang dicari tidak ada di daftar | Filter **Area** masih terpilih | Pilih **Semua Area** |
| Tombol **Pindah** tidak bisa diklik | Itu cabang Anda saat ini (**Aktif**) | Pilih cabang lain |

## Terkait

- [Cabang](/pengaturan/pengaturan-perusahaan/cabang) dan [Area](/pengaturan/pengaturan-perusahaan/area)
- [Daftar Akses](/staff/daftar-akses)
- [Alur Kerja Admin](/alur-kerja/admin)
