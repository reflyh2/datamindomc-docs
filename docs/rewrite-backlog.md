# Backlog Rewrite Dokumentasi ValasPro

Audit: 1 Oktober 2026, branch `panduan-v2`. File ini berada di luar `docs/src/`, jadi tidak ikut di-build atau masuk PDF.

Template untuk menulis ulang:

- `docs/templates/halaman-menu.md` untuk halaman Referensi Menu
- `docs/templates/halaman-tugas.md` untuk halaman Alur Kerja / tugas

## Ringkasan kondisi

Total ada 88 halaman konten (tanpa `index.md`).

| Kode | Kondisi | Penanda di halaman | Jumlah |
|---|---|---|---|
| **K** | Kosong, hanya placeholder | `::: warning Segera diperbarui` | 35 |
| **U** | Template lama, isi diketahui sudah usang | `::: warning Belum disesuaikan` | 12 |
| **L** | Template lama + screenshot versi lama | `::: info Tampilan versi sebelumnya` | 24 |
| **B** | Sudah gaya baru | – | 17 |

Halaman yang sudah gaya baru: `mulai/*` (4), `alur-kerja/kasir`, `supervisor`, `underlying`, `bantuan/*` (2), `shift/*` (3), `periode/*` (3), `staff/*` (2).

Jadi **71 dari 88 halaman (81%)** masih perlu ditulis ulang. Untuk mengecek ulang:

```bash
grep -rlE "Segera diperbarui|Belum disesuaikan|Tampilan versi sebelumnya" docs/src | sort
```

## Cara menentukan prioritas

1. **Frekuensi pemakaian.** Menu yang dipakai kasir dan supervisor setiap hari didahulukan.
2. **Risiko.** Menu yang menyangkut kepatuhan (DTTOT, PEP, PPATK, underlying) dan uang (batal, bayar) didahulukan.
3. **Bahan sudah ada.** Banyak isi menu sudah dijelaskan di `alur-kerja/kasir.md`, `alur-kerja/supervisor.md`, dan `alur-kerja/underlying.md`. Halaman seperti ini cepat ditulis ulang, cukup disusun ulang sebagai referensi.

Perkiraan upaya: **S** = < 1 jam (bahan sudah ada), **M** = setengah hari (perlu cek aplikasi), **L** = ≥ 1 hari (menu besar atau belum ada bahan).

## P1: Kasir, supervisor harian, dan kepatuhan

| ✓ | Halaman | Kondisi | Peran | Bahan yang sudah ada / catatan | Upaya |
|---|---|---|---|---|---|
| [ ] | `master/pengaturan-kurs` | U | Supervisor | ⚠️ **Isinya salah**: halaman ini salinan "Mutasi Valas" (H1 `# Mutasi Valas`). Bahan: `alur-kerja/supervisor#menerbitkan-kurs` | S |
| [ ] | `transaksi/transaksi-valas` | L | Kasir | `alur-kerja/kasir#membuat-transaksi`. Dirujuk 33 halaman lain | S |
| [ ] | `transaksi/pembayaran-valas` | L | Kasir | `alur-kerja/kasir#membayar-faktur` | S |
| [ ] | `transaksi/daftar-transaksi` | L | Kasir | `alur-kerja/kasir#mencetak-faktur`, `#mengubah-atau-membatalkan` | M |
| [ ] | `transaksi/transaksi-batal` | K | Kasir, Supervisor | Belum ada bahan | M |
| [ ] | `transaksi/informasi-kurs` | L | Kasir | `alur-kerja/kasir#memastikan-kurs-sudah-terbit` | S |
| [ ] | `transaksi/cdd-edd` | L | Kasir | `alur-kerja/kasir#formulir-cdd-edd` | M |
| [ ] | `pelanggan/daftar-pelanggan` | L | Kasir | `alur-kerja/kasir#memilih-pelanggan`. H1 masih "Pengaturan Pelanggan" | M |
| [ ] | `pelanggan/skrining/ringkasan` | K | Kepatuhan | `alur-kerja/kasir#indikasi-dttot` | M |
| [ ] | `pelanggan/skrining/dttot` | U | Kepatuhan | `alur-kerja/kasir#indikasi-dttot` | M |
| [ ] | `pelanggan/skrining/pep` | U | Kepatuhan | `alur-kerja/kasir#pep-dan-blacklist` | M |
| [ ] | `pelanggan/blacklist` | K | Kepatuhan | `alur-kerja/kasir#pep-dan-blacklist` | M |
| [ ] | `inventori/stok-valas` | L | Kasir | `alur-kerja/kasir#mengecek-stok` | S |
| [ ] | `inventori/riwayat-valas` | U | Kasir | Menurut `kasir.md`, Riwayat Valas adalah **tab** di halaman Stok Valas. Cek di aplikasi; kalau benar, gabungkan ke `stok-valas` | S |
| [ ] | `eksternal/underlying/otorisasi-underlying` | L | Kasir, Kepatuhan | `alur-kerja/underlying`. Lihat catatan underlying di bawah | S |
| [ ] | `eksternal/underlying/lapor-underlying` | L | Kepatuhan | `alur-kerja/underlying#mendaftarkan-underlying` | S |
| [ ] | `eksternal/underlying/list-underlying` | L | Kepatuhan | `alur-kerja/underlying#rekap-dan-perubahan` | S |
| [ ] | `eksternal/ppatk/ltkt` | K | Kepatuhan | Ada tenggat lapor ke PPATK | M |
| [ ] | `eksternal/ppatk/ltkm` | K | Kepatuhan | Ada tenggat lapor ke PPATK | M |
| [ ] | `alur-kerja/kepatuhan` | K | Kepatuhan | Tulis setelah halaman skrining dan PPATK di atas selesai | M |

**Catatan underlying:** `alur-kerja/underlying.md` menyebut **Eksternal → Underlying** sebagai *satu* halaman dengan tiga tab (Perlu Underlying, Dokumen, Rekap Bulanan). Sidebar docs memecahnya jadi tiga halaman dengan nama file lama (`otorisasi-`, `lapor-`, `list-underlying`) dan H1 lama ("Otorisasi Underlying", "Lapor Underlying", "List Underlying"). Pilih salah satu:

- gabungkan jadi satu halaman `eksternal/underlying.md` dengan bagian per tab, atau
- pertahankan tiga halaman, tetapi rename file dan H1 sesuai nama tab.

## P2: Supervisor berkala, laporan regulator, akunting

| ✓ | Halaman | Kondisi | Peran | Catatan | Upaya |
|---|---|---|---|---|---|
| [ ] | `master/parameter-kurs` | K | Supervisor | | M |
| [ ] | `master/papan-kurs` | K | Supervisor | Bahan: `alur-kerja/supervisor#papan-kurs` | S |
| [ ] | `transaksi/transaksi-antarcabang` | L | Kasir, Supervisor | | M |
| [ ] | `inventori/pb-valas` | L | Supervisor | Dirujuk dari `kasir.md` (stok tidak cukup) | M |
| [ ] | `inventori/pinjaman-valas` | L | Supervisor | | M |
| [ ] | `eksternal/laporan-sipesat` | L | Kepatuhan | | M |
| [ ] | `eksternal/lku` | L | Kepatuhan | | M |
| [ ] | `eksternal/laporan-kupva` | U | Kepatuhan | H1 masih "Laporan KUPVA BI" | M |
| [ ] | `eksternal/laporan-keuangan-bi` | K | Akunting | | M |
| [ ] | `eksternal/master-risiko` | K | Kepatuhan | | M |
| [ ] | `pelanggan/laporan` | L | Kepatuhan | H1 masih "Database Pelanggan" | S |
| [ ] | `pelanggan/data-duplikat` | K | Kepatuhan | | M |
| [ ] | `keuangan/daftar-akun` | L | Akunting | | M |
| [ ] | `keuangan/jurnal` | L | Akunting | 5 screenshot lama | M |
| [ ] | `keuangan/laporan-keuangan` | U | Akunting | H1 masih "Laporan Akunting". 7 screenshot lama | L |
| [ ] | `keuangan/hutang-piutang-cabang` | K | Akunting | | M |
| [ ] | `keuangan/penutupan-tahunan` | K | Akunting | | M |
| [ ] | `alur-kerja/akunting` | K | Akunting | Tulis setelah halaman keuangan selesai | M |
| [ ] | `laporan-umum/transaksi-valas/rincian-valas` | L | Supervisor | | S |
| [ ] | `laporan-umum/transaksi-valas/ringkasan-valas` | L | Supervisor | | S |
| [ ] | `laporan-umum/transaksi-valas/laporan-idr` | L | Supervisor | H1 "Laporan Modal IDR", sidebar "Laporan IDR" | S |
| [ ] | `laporan-umum/transaksi-valas/per-valas` | K | Supervisor | | S |
| [ ] | `laporan-umum/transaksi-valas/per-faktur` | K | Supervisor | | S |
| [ ] | `laporan-umum/laba/per-cabang` | L | Supervisor | | S |
| [ ] | `laporan-umum/laba/per-valas` | K | Supervisor | | S |

Halaman laporan (`laporan-umum/*`, `*/laporan`) bentuknya mirip satu sama lain: filter, kolom, ekspor. Tulis satu dulu sebagai contoh, lalu sisanya bisa dikerjakan beruntun.

## P3: Admin dan setup (jarang dibuka)

| ✓ | Halaman | Kondisi | Catatan | Upaya |
|---|---|---|---|---|
| [ ] | `pengaturan/pengaturan-umum` | K | Sumber semua fitur opsional. Selaraskan dengan `mulai/fitur-opsional` | M |
| [ ] | `pengaturan/pengaturan-perusahaan/perusahaan` | U | | M |
| [ ] | `pengaturan/pengaturan-perusahaan/area` | U | | S |
| [ ] | `pengaturan/pengaturan-perusahaan/cabang` | U | | M |
| [ ] | `pengaturan/pengaturan-perusahaan/pengaturan-cabang` | U | | M |
| [ ] | `pengaturan/hari-libur` | K | Dipakai checklist Buka Hari | S |
| [ ] | `pengaturan/pindah-cabang` | K | | S |
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

1. **Tautan "Lainnya" hasil salin-tempel.** 33 halaman lama ditutup dengan *"Baca juga tentang [cara mengelola transaksi valas](/transaksi/transaksi-valas)"*, apa pun topiknya. `transaksi-valas` bahkan menautkan dirinya sendiri. Ganti dengan bagian **Terkait** yang relevan saat halaman ditulis ulang.
   ```bash
   grep -rl "cara mengelola transaksi valas" docs/src
   ```
2. **H1 tidak sama dengan nama di sidebar**, sehingga judul tab browser, hasil pencarian, dan PDF tidak konsisten:

   | Halaman | H1 sekarang | Nama di sidebar |
   |---|---|---|
   | `master/pengaturan-kurs` | Mutasi Valas | Pengaturan Kurs |
   | `inventori/riwayat-valas` | Mutasi Valas | Riwayat Valas |
   | `keuangan/laporan-keuangan` | Laporan Akunting | Laporan Keuangan |
   | `pelanggan/daftar-pelanggan` | Pengaturan Pelanggan | Daftar Pelanggan |
   | `pelanggan/laporan` | Database Pelanggan | Laporan |
   | `eksternal/laporan-kupva` | Laporan KUPVA BI | Laporan KUPVA |
   | `laporan-umum/transaksi-valas/laporan-idr` | Laporan Modal IDR | Laporan IDR |
   | `eksternal/underlying/*` | Otorisasi / Lapor / List Underlying | Perlu Underlying / Dokumen / Rekap Bulanan |

3. **35 halaman kosong ikut masuk PDF.** Karena PDF mengikuti sidebar, ekspor PDF saat ini berisi 35 halaman "Segera diperbarui". Pertimbangkan untuk melewati halaman berpenanda itu di `vitepress-pdf.config.ts` sampai halaman tersebut terisi.
4. **13 gambar tidak dipakai** di `docs/src/public/`. Sebagian besar sisa halaman yang dihapus atau dipindah (PPATK lama, proses-awal-hari, serah terima versi lama): `nasabah-kupva-bi.png`, `penerimaan-kasir.png`, `penutupan-periode.png`, `penyerahan-kasir.png`, `ppatk-list-detail.png`, `ppatk-report-detail.png`, `ppatk-report.png`, `proses-awal-hari.png`, `serah-terima-kasir.png`, `tambah-jabatan.png`, `terima-penyerahan-kasir.png`, `underlying-report.png`. (`favicon.ico` juga tidak dirujuk dari markdown; cek dulu sebelum menghapus karena config memakai `logo.ico`.)
5. **Salah ketik di halaman lama**, misalnya "haru" dan "tansaksi" di `transaksi-valas.md`. Tidak perlu diperbaiki terpisah, karena halamannya akan ditulis ulang.

## Urutan kerja yang disarankan

1. Perbaiki `master/pengaturan-kurs` (isinya salah). Ini perbaikan tercepat dengan dampak terbesar.
2. Kerjakan halaman P1 berupaya **S**. Bahannya sudah ada di `alur-kerja/`, sehingga ±10 halaman bisa selesai dalam satu sampai dua hari.
3. Lanjutkan P1 berupaya **M** (transaksi batal, skrining, PPATK), lalu tulis `alur-kerja/kepatuhan`.
4. Kerjakan P2 per grup (laporan umum → keuangan), lalu `alur-kerja/akunting`.
5. Kerjakan P3, lalu `alur-kerja/admin`.

Setelah setiap halaman selesai: hapus penandanya (`Segera diperbarui` / `Belum disesuaikan` / `Tampilan versi sebelumnya`), centang barisnya di sini, lalu jalankan `pnpm build`.
