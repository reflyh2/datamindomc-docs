# Backlog Rewrite Dokumentasi ValasPro

Audit ulang: 20 Oktober 2026, branch `main` (audit sebelumnya: 13 dan 1 Oktober 2026). File ini berada di luar `docs/src/`, jadi tidak ikut di-build atau masuk PDF.

Template untuk menulis ulang:

- `docs/templates/halaman-menu.md` untuk halaman Referensi Menu
- `docs/templates/halaman-tugas.md` untuk halaman Alur Kerja / tugas

## Ringkasan kondisi

Total ada 80 halaman konten (tanpa `index.md`). Sejak audit pertama, halaman Laporan Umum digabung jadi `laporan-umum/laporan-transaksi` dan `laporan-umum/laporan-laba`, menu PB Valas berganti nama jadi Pindah Pecahan, Pinjaman Valas dihapus, dan Tutup Buku Bulanan ditambahkan.

| Kode | Kondisi | Penanda di halaman | Jumlah |
|---|---|---|---|
| **K** | Kosong, hanya placeholder | `::: warning Segera diperbarui` | 18 |
| **U** | Template lama, isi diketahui sudah usang | `::: warning Belum disesuaikan` | 6 |
| **L** | Template lama + screenshot versi lama | `::: info Tampilan versi sebelumnya` | 10 |
| **S** | Sudah gaya baru, tetapi baru sebagian | – | 1 |
| **B** | Sudah gaya baru | – | 45 |

Halaman yang sudah gaya baru: `mulai/*` (5), `alur-kerja/kasir`, `supervisor`, `underlying`, `bantuan/*` (2), `transaksi/*` kecuali `transaksi-antarcabang` (6), `pelanggan/*` (10), `inventori/*` (3), `master/pengaturan-kurs`, `shift/*` (3), `periode/*` (3), `staff/*` (3), `laporan-umum/*` (2), `keuangan/hutang-piutang-cabang`, `keuangan/tutup-buku-bulanan`, `keuangan/penutupan-tahunan`, `pengaturan/pengaturan-umum`.

Yang baru sebagian:

- `eksternal/laporan-keuangan-bi`: tab Laba Rugi selesai, tab **Neraca** belum.

Jadi **34 dari 80 halaman (43%)** masih perlu ditulis ulang, ditambah 1 yang belum tuntas. `pengaturan/pengaturan-dokumen` sudah banyak terisi tetapi masih berpenanda, jadi ikut dihitung kosong. Untuk mengecek ulang:

```bash
grep -rlE "Segera diperbarui|Belum disesuaikan|Tampilan versi sebelumnya" docs/src | sort
```

## Cara menentukan prioritas

1. **Isi salah.** Halaman yang menyesatkan pembaca didahulukan dari halaman yang kosong.
2. **Frekuensi pemakaian.** Menu yang dipakai kasir dan supervisor setiap hari didahulukan.
3. **Risiko.** Menu yang menyangkut kepatuhan (DTTOT, PEP, PPATK, underlying) dan uang didahulukan.
4. **Bahan sudah ada.** Banyak isi menu sudah dijelaskan di `alur-kerja/kasir.md`, `alur-kerja/supervisor.md`, dan `alur-kerja/underlying.md`. Halaman seperti ini cepat ditulis ulang, cukup disusun ulang sebagai referensi.

Perkiraan upaya: **S** = < 1 jam (bahan sudah ada), **M** = setengah hari (perlu cek aplikasi), **L** = ≥ 1 hari (menu besar atau belum ada bahan).

## P0: Isi salah

| ✓ | Halaman | Kondisi | Peran | Catatan | Upaya |
|---|---|---|---|---|---|
| [x] | `master/pengaturan-kurs` | – | Supervisor | Selesai | – |
| [x] | `inventori/riwayat-valas` | – | Kasir | Selesai. Tetap halaman sendiri karena masih ada di sidebar aplikasi (untuk pengguna tanpa hak akses Stok Valas). Belum ada screenshot | – |

## P1: Kasir harian dan kepatuhan

| ✓ | Halaman | Kondisi | Peran | Bahan yang sudah ada / catatan | Upaya |
|---|---|---|---|---|---|
| [x] | `transaksi/transaksi-valas` | – | Kasir | Selesai | – |
| [x] | `transaksi/pembayaran-valas` | – | Kasir | Selesai | – |
| [x] | `transaksi/daftar-transaksi` | – | Kasir | Selesai | – |
| [x] | `transaksi/transaksi-batal` | – | Kasir, Supervisor | Selesai | – |
| [x] | `transaksi/informasi-kurs` | – | Kasir | Selesai | – |
| [x] | `transaksi/cdd-edd` | – | Kasir | Selesai | – |
| [x] | `inventori/stok-valas` | – | Kasir | Selesai. Tab Laporan Stok ikut dijelaskan di halaman ini. Memakai screenshot `stok-valas-posisi.png` | – |
| [x] | `pelanggan/daftar-pelanggan` | – | Kasir | Selesai | – |
| [ ] | `eksternal/underlying/otorisasi-underlying` | L | Kasir, Kepatuhan | `alur-kerja/underlying`. Lihat catatan underlying di bawah | S |
| [ ] | `eksternal/underlying/lapor-underlying` | L | Kepatuhan | `alur-kerja/underlying#mendaftarkan-underlying` | S |
| [ ] | `eksternal/underlying/list-underlying` | L | Kepatuhan | `alur-kerja/underlying#rekap-dan-perubahan` | S |
| [x] | `pelanggan/skrining/ringkasan` | – | Kepatuhan | Selesai. Tab baru ikut ditulis: `skrining/dppspm`, `skrining/tingkat-resiko`, `skrining/riwayat` | – |
| [x] | `pelanggan/skrining/dttot` | – | Kepatuhan | Selesai | – |
| [x] | `pelanggan/skrining/pep` | – | Kepatuhan | Selesai | – |
| [x] | `pelanggan/blacklist` | – | Kepatuhan | Selesai, ditulis dari kode (akun uji tidak punya akses). Belum ada screenshot | – |
| [ ] | `eksternal/ppatk/ltkt` | K | Kepatuhan | Ada tenggat lapor ke PPATK | M |
| [ ] | `eksternal/ppatk/ltkm` | K | Kepatuhan | Ada tenggat lapor ke PPATK | M |
| [ ] | `alur-kerja/kepatuhan` | K | Kepatuhan | Tulis setelah halaman skrining dan PPATK di atas selesai | M |

**Catatan underlying:** `alur-kerja/underlying.md` menyebut **Eksternal → Underlying** sebagai *satu* halaman dengan tiga tab (Perlu Underlying, Dokumen, Rekap Bulanan). Sidebar docs sudah memakai nama tab, tetapi nama file (`otorisasi-`, `lapor-`, `list-underlying`) dan H1 ("Otorisasi Underlying", "Lapor Underlying", "List Underlying") masih nama lama. Putuskan dulu sebelum menulis:

- gabungkan jadi satu halaman `eksternal/underlying.md` dengan bagian per tab, atau
- pertahankan tiga halaman, tetapi rename file dan H1 sesuai nama tab.

## P2: Supervisor berkala, laporan regulator, akunting

| ✓ | Halaman | Kondisi | Peran | Catatan | Upaya |
|---|---|---|---|---|---|
| [ ] | `master/papan-kurs` | K | Supervisor | Bahan: `alur-kerja/supervisor#papan-kurs` | S |
| [ ] | `master/parameter-kurs` | K | Supervisor | | M |
| [ ] | `transaksi/transaksi-antarcabang` | L | Kasir, Supervisor | Satu-satunya halaman Transaksi yang belum ditulis ulang | M |
| [x] | `inventori/pb-valas` | – | Supervisor | Selesai | – |
| [ ] | `eksternal/laporan-keuangan-bi` | S | Akunting | Tab Laba Rugi selesai, tab **Neraca** belum | M |
| [ ] | `eksternal/lku` | L | Kepatuhan | Dirujuk dari `laporan-keuangan-bi` (kurs tengah BI) | M |
| [ ] | `eksternal/laporan-sipesat` | L | Kepatuhan | | M |
| [ ] | `eksternal/laporan-kupva` | U | Kepatuhan | H1 masih "Laporan KUPVA BI" | M |
| [ ] | `eksternal/master-risiko` | K | Kepatuhan | | M |
| [x] | `pelanggan/laporan` | – | Kepatuhan | Selesai | – |
| [x] | `pelanggan/data-duplikat` | – | Kepatuhan | Selesai, ditulis dari kode (akun uji tidak punya akses). Belum ada screenshot | – |
| [ ] | `keuangan/daftar-akun` | L | Akunting | | M |
| [ ] | `keuangan/jurnal` | L | Akunting | 5 screenshot lama | M |
| [ ] | `keuangan/laporan-keuangan` | U | Akunting | H1 masih "Laporan Akunting". 7 screenshot lama | L |
| [x] | `keuangan/hutang-piutang-cabang` | – | Akunting | Selesai | – |
| [x] | `keuangan/tutup-buku-bulanan` | – | Akunting | Selesai (halaman baru) | – |
| [x] | `keuangan/penutupan-tahunan` | – | Akunting | Selesai | – |
| [ ] | `alur-kerja/akunting` | K | Akunting | Tulis setelah halaman keuangan selesai | M |
| [x] | `laporan-umum/laporan-transaksi` | – | Supervisor | Selesai. Menggantikan 5 halaman laporan transaksi lama | – |
| [x] | `laporan-umum/laporan-laba` | – | Supervisor | Selesai. Menggantikan 2 halaman laporan laba lama | – |

## P3: Admin dan setup (jarang dibuka)

| ✓ | Halaman | Kondisi | Catatan | Upaya |
|---|---|---|---|---|
| [x] | `pengaturan/pengaturan-umum` | – | Selesai | – |
| [ ] | `pengaturan/pengaturan-dokumen` | K | Pembuka sudah ada (Invoice, Kop Surat & Dokumen); isi belum | M |
| [ ] | `pengaturan/hari-libur` | K | Dipakai checklist Buka Hari | S |
| [ ] | `pengaturan/pindah-cabang` | K | | S |
| [ ] | `pengaturan/pengaturan-perusahaan/perusahaan` | U | | M |
| [ ] | `pengaturan/pengaturan-perusahaan/area` | U | | S |
| [ ] | `pengaturan/pengaturan-perusahaan/cabang` | U | | M |
| [ ] | `pengaturan/pengaturan-perusahaan/pengaturan-cabang` | U | | M |
| [ ] | `master/master-valas` | L | | M |
| [ ] | `master/pecahan-valas` | L | | S |
| [ ] | `alur-kerja/admin` | K | Tulis setelah halaman pengaturan selesai | M |
| [ ] | `aset/kategori-aset` | K | 7 halaman aset sebaiknya ditulis sekaligus | M |
| [ ] | `aset/daftar-aset` | K | | M |
| [ ] | `aset/penyusutan` | K | | M |
| [ ] | `aset/inventarisasi` | K | | S |
| [ ] | `aset/pelepasan` | K | | S |
| [ ] | `aset/mutasi` | K | | S |
| [ ] | `aset/laporan` | K | | S |

## Temuan lain (perbaiki sambil jalan)

1. **Tautan "Lainnya" hasil salin-tempel.** 15 halaman lama ditutup dengan *"Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas)"*, apa pun topiknya. Ganti dengan bagian **Terkait** yang relevan saat halaman ditulis ulang.
   ```bash
   grep -rl "cara mengelola transaksi valas" docs/src
   ```
2. **H1 tidak sama dengan nama di sidebar**, sehingga judul tab browser, hasil pencarian, dan PDF tidak konsisten:

   | Halaman | H1 sekarang | Nama di sidebar |
   |---|---|---|
   | `keuangan/laporan-keuangan` | Laporan Akunting | Laporan Keuangan |
   | `eksternal/laporan-kupva` | Laporan KUPVA BI | Laporan KUPVA |
   | `eksternal/underlying/*` | Otorisasi / Lapor / List Underlying | Perlu Underlying / Dokumen / Rekap Bulanan |

3. **22 halaman kosong ikut masuk PDF dan buku.** `export-pdf` mengikuti sidebar, dan `export-buku` mengikuti grup sidebar, jadi keduanya berisi halaman "Segera diperbarui". Pertimbangkan untuk melewati halaman berpenanda itu di `vitepress-pdf.config.ts` dan skrip `export-buku` sampai halaman tersebut terisi.
4. **35 file tidak dirujuk** di `docs/src/public/`:
   - Screenshot lama yang tidak dipakai lagi setelah halaman Transaksi ditulis ulang: `cdd-edd.png`, `cdd-edd-button.png`, `cdd-edd-preview.png`, `cdd-edd-print.png`, `daftar-transaksi.png`, `form-pembayaran-valas.png`, `informasi-kurs.png`, `pembayaran-valas.png`.
   - Screenshot lama yang tidak dipakai lagi setelah halaman Pelanggan ditulis ulang: `pengaturan-pelanggan.png`, `tambah-pelanggan.png`, `hapus-pengguna.png`, `database-pelanggan.png`, `dttot.png`, `dttot-warning.png`, `dttot-warning-dialog.png`, `pep.png`, `mark-customer-pep.png`.
   - Sisa halaman yang dihapus atau dipindah: `nasabah-kupva-bi.png`, `penerimaan-kasir.png`, `penutupan-periode.png`, `penyerahan-kasir.png`, `ppatk-list-detail.png`, `ppatk-report-detail.png`, `ppatk-report.png`, `proses-awal-hari.png`, `serah-terima-kasir.png`, `tambah-jabatan.png`, `terima-penyerahan-kasir.png`, `underlying-report.png`, `riwayat-valas.png`, `stok-valas.png`.
   - `favicon.ico`, `logo.png`, `logo.svg` juga tidak dirujuk dari markdown atau config (config memakai `logo.ico`). Cek dulu sebelum menghapus, karena bisa saja dipakai dari luar situs.

## Urutan kerja yang disarankan

1. ~~**P0**: `master/pengaturan-kurs` dan `inventori/riwayat-valas` (isinya salah).~~ Selesai 20 Oktober 2026.
2. **Perbaikan cepat**: lewati halaman kosong saat ekspor PDF/buku.
3. **P1 upaya S**: tiga halaman underlying (putuskan dulu digabung atau tidak).
4. **P1 upaya M**: `daftar-pelanggan`, skrining, blacklist, PPATK, lalu tulis `alur-kerja/kepatuhan`.
5. **P2** per grup: master → eksternal (termasuk tab Neraca) → pelanggan → keuangan, lalu `alur-kerja/akunting`.
6. **P3**: pengaturan dan master valas, lalu `alur-kerja/admin`. Grup Aset paling akhir, ditulis sekaligus.

Setelah setiap halaman selesai: hapus penandanya (`Segera diperbarui` / `Belum disesuaikan` / `Tampilan versi sebelumnya`), centang barisnya di sini, lalu jalankan `pnpm build`.
