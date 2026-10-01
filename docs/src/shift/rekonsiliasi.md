---
outline: deep
---

# Rekonsiliasi & Tutup Hari

Menu: **Shift → Rekonsiliasi & Tutup Hari**

::: info Fitur opsional
Menu ini hanya muncul bila **Rekonsiliasi Harian** aktif di perusahaan Anda **dan** metode laba perusahaan adalah HPP. Lihat [Fitur Opsional](/mulai/fitur-opsional).
:::

Menutup setiap hari kerja dengan dua langkah:

1. **Rekonsiliasi** (teller): hitung stok valas dan kas IDR fisik, lalu cocokkan dengan saldo sistem.
2. **Tutup Periode** (supervisor): periksa syaratnya, lihat ringkasan hari itu, lalu majukan periode cabang ke hari berikutnya.

Proses ini tidak membuat jurnal dan tidak mengoreksi stok. Tujuannya mencatat bahwa hitungan fisik sudah dicocokkan, lalu mengunci hari yang sudah selesai.

## Periode menjadi manual

Selama fitur ini aktif:

- **Periode tidak ikut tanggal hari ini.** Periode hanya maju lewat Tutup Periode. Chip Periode di bagian atas layar menunjukkan tanggal yang sedang berjalan.
- **Transaksi selalu dicatat di Periode aktif.** Tanggal transaksi tidak bisa dipilih.
- **Tanggal yang sudah lewat terkunci.** Transaksi, pembayaran, jurnal, dan mutasi stok untuk tanggal sebelum Periode aktif ditolak. Tanggal yang sudah direkonsiliasi juga terkunci selama rekonsiliasinya masih berlaku.

## Isi halaman

| Kotak | Isi |
|---|---|
| **Periode aktif** | Tanggal yang sedang berjalan. Kalau tertulis *tertinggal n hari dari hari ini*, berarti ada hari yang belum ditutup |
| **Rekonsiliasi periode ini** | *Belum rekonsiliasi*, **Cocok**, atau **Ada Selisih** |
| **Closing terakhir** | Periode terakhir yang sudah ditutup |
| **Menunggu tinjauan** | Rekonsiliasi Ada Selisih yang belum ditinjau supervisor |

Tabel **Riwayat Rekonsiliasi** bisa disaring menurut **Tanggal**, **Status**, dan **Cabang** (khusus supervisor).

## Langkah 1: Rekonsiliasi (teller)

Syarat: tidak ada faktur **belum dibayar** atau **menunggu** di Periode aktif.

1. Klik **Rekonsiliasi _tanggal_**. Halaman **Hitung Stok Fisik** terbuka.
2. Hitung uang fisik di laci dan brankas.
3. Di **Stok Valas**, isi kolom **Fisik** untuk setiap valas. Semua valas yang punya stok wajib dihitung. Isi 0 bila fisiknya habis. Kalau ada valas yang fisiknya ada padahal tidak tercantum, pilih di **Valas lain yang ada fisiknya…**, lalu klik **Tambah baris**.
4. Di **Kas IDR**, isi total rupiah fisik di **Fisik (Rp)**. Tambahkan **Catatan** bila perlu.
5. Klik **Cocokkan**. Angka sistem dan selisihnya baru muncul setelah langkah ini, supaya yang dicatat benar-benar hasil hitungan.
6. Hasilnya:
   - **Semua cocok.**: klik **Simpan Rekonsiliasi**.
   - **Ada selisih:**: baris yang berbeda ditandai merah. Hitung ulang dulu. Kalau selisihnya memang nyata, isi **Alasan selisih** di setiap baris itu (dan **Alasan selisih kas** bila kasnya berbeda), lalu klik **Simpan Rekonsiliasi**.

Mengubah angka setelah Cocokkan membatalkan hasilnya, jadi Anda perlu menekan Cocokkan lagi. Setiap pencocokan ulang dicatat sebagai *hitung ulang*.

Kalau perusahaan menetapkan **Toleransi Selisih Kas**, selisih kas sampai jumlah itu tetap dianggap cocok. Valas tidak punya toleransi.

::: warning Tanggal terkunci setelah disimpan
Setelah rekonsiliasi disimpan, transaksi, pembayaran, dan mutasi stok pada tanggal itu ditolak sampai rekonsiliasinya dibatalkan.
:::

## Langkah 2: Tutup Periode (supervisor)

Klik **Tutup Hari**. Halaman **Tutup Periode _tanggal_** berisi empat bagian.

### Checklist Tutup Periode

Semua butir harus bertanda centang hijau sebelum periode bisa ditutup:

| Butir | Kalau gagal |
|---|---|
| Periode _tanggal_ sudah berjalan | Periodenya belum tiba |
| Tidak ada faktur belum dibayar/diotorisasi | Selesaikan atau batalkan faktur yang masih menggantung, termasuk dari tanggal sebelumnya |
| Teller sudah rekonsiliasi stok & kas | Minta teller menjalankan langkah 1 |
| Selisih rekonsiliasi sudah ditinjau supervisor | Buka rekonsiliasinya, lalu klik **Tandai Ditinjau** |
| Saldo sistem tidak berubah sejak rekonsiliasi | Ada perubahan setelah teller menghitung. **Batalkan Rekonsiliasi**, lalu minta teller menghitung ulang |

Butir yang gagal punya tautan ke halaman tempat masalahnya diselesaikan.

### Preview

- **Preview Stok Valas**: per valas, Saldo Awal, Beli, Jual, **Mutasi Lain** (perubahan di luar jual beli, misalnya deposit valas, antarcabang, atau penyesuaian), Saldo Akhir, Fisik, dan Selisih.
- **Preview Kas IDR**: saldo awal, penerimaan, pengeluaran, saldo akhir, fisik, dan selisih.
- **Ringkasan Transaksi**: jumlah dan total faktur beli dan jual yang lunas, serta jumlah faktur batal.

### Periode berikutnya

Secara bawaan, periode berikutnya adalah hari setelahnya. Kalau cabang libur, Anda boleh memilih tanggal yang lebih jauh, paling lambat hari ini. Batas tanggalnya tertulis di bawah kolom. **Tanggal yang dilompati ikut terkunci.**

Isi **Catatan** bila perlu, klik **Tutup Periode**, lalu konfirmasi.

## Detail rekonsiliasi

Klik ikon **Detail** di Riwayat Rekonsiliasi untuk membuka **Detail Rekonsiliasi**. Halaman ini menampilkan hitungan per valas, kas, siapa yang menghitung, dan berapa kali hitung ulang.

| Tombol | Untuk | Catatan |
|---|---|---|
| **Tandai Ditinjau** | Supervisor menyatakan selisih sudah ditindaklanjuti | Catatan wajib. Tidak mengubah angka dan tidak membuka kunci tanggal |
| **Batalkan Rekonsiliasi** | Membuka kembali tanggal itu supaya teller bisa menghitung ulang | Alasan wajib. Tidak bisa dilakukan selama periodenya sudah ditutup |
| **Buka Kembali Closing** | Membatalkan Tutup Periode terakhir | Alasan wajib. Hanya untuk closing terakhir, dan hanya bila belum ada transaksi atau jurnal di periode baru |
| **Cetak Berita Acara** | Dokumen hasil hitung dengan tanda tangan teller dan supervisor | |

## Terkait

- [Buka Hari](/shift/buka-hari)
- [Serah Terima Kasir](/shift/serah-terima-kasir)
- [Fitur Opsional](/mulai/fitur-opsional)
