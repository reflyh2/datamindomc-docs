---
outline: deep
---

# Tutup Buku Bulanan

Menu: **Keuangan → Tutup Buku**, tab **Bulanan** (judul halaman saat menutup: **Tutup Buku &lt;bulan&gt;**, misalnya **Tutup Buku Mei 2026**)

Tutup buku bulanan **mengunci** transaksi, jurnal, dan posting aset satu bulan setelah laporan bulan itu final. Tidak ada jurnal yang dibuat: saldo pendapatan dan beban tetap berjalan sampai [tutup buku tahunan](/keuangan/penutupan-tahunan) (tab **Tahunan** di menu yang sama).

Tutup buku dilakukan **per cabang**. Untuk menutup cabang lain, masuk ke cabang itu lewat portal cabang.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Bulan terakhir ditutup** | Bulan terakhir yang ditutup di cabang ini beserta tanggal penutupannya, atau "belum pernah tutup buku bulanan". |
| **Siap ditutup** | Bulan terlama yang masih terbuka. Bila "—", bulan itu belum berakhir. |
| **Perlu ditinjau** | Jumlah bulan yang jurnalnya berubah setelah ditutup. Lihat [Tanda "Perlu ditinjau"](#tanda-perlu-ditinjau). |
| **Riwayat Penutupan** | Semua penutupan, termasuk yang sudah dibuka kembali. Kolom **Status** menunjukkan **Aktif** atau **Dibuka kembali** (lengkap dengan tanggal, siapa, dan alasannya). |
| **Status Cabang** | Hanya muncul bila perusahaan punya lebih dari satu cabang. Menampilkan bulan terakhir ditutup dan bulan siap ditutup di setiap cabang. Hanya untuk dilihat. |

Menu **Aksi** di setiap baris riwayat berisi **Detail** dan **Buka Kembali** (hanya pada penutupan terakhir).

## Menutup buku satu bulan

1. Klik **Tutup Buku &lt;bulan&gt;** di panel **Riwayat Penutupan**. Bulan yang dipilih otomatis adalah bulan terlama yang masih terbuka.
2. Periksa **Checklist**:
   - Butir bertanda **merah** menghalangi penutupan, misalnya bulan sebelumnya masih terbuka atau ada jurnal yang tidak seimbang. Selesaikan dulu lewat tautan di butir itu.
   - Butir bertanda **Peringatan** (kuning) tidak menghalangi, tetapi sebaiknya diselesaikan dulu: transaksi yang belum dibayar, draft penyusutan yang belum diposting, atau serah terima kasir yang belum diterima. Setelah tutup buku, semuanya tidak bisa diselesaikan lagi di bulan itu.
3. Periksa tabel **Mutasi Akun &lt;bulan&gt;**: total debit dan kredit setiap akun selama bulan itu. Angka ini disimpan sebagai catatan saat bulan ditutup.
4. Centang **Saya mengerti transaksi, jurnal, dan posting aset &lt;bulan&gt; akan dikunci.**
5. Klik **Tutup Buku &lt;bulan&gt;**.

Setelah berhasil, halaman detail penutupan terbuka.

::: tip Bulan tanpa transaksi tetap ditutup
Bulan ditutup berurutan tanpa celah. Bulan yang tidak berisi jurnal sama sekali tetap perlu ditutup. Tabel mutasinya kosong, dan checklist-nya biasanya langsung hijau.
:::

## Melihat detail

Klik **Aksi → Detail** pada baris riwayat. Halaman detail menampilkan bulan, siapa dan kapan menutup, status, serta tabel **Mutasi Akun Saat Ditutup**.

## Membuka kembali penutupan

Lakukan ini bila masih ada koreksi untuk bulan yang sudah ditutup.

1. Pada penutupan terakhir, klik **Aksi → Buka Kembali** (atau tombol **Buka Kembali** di halaman detail).
2. Isi **Alasan**, misalnya "Koreksi jurnal biaya yang terlewat".
3. Klik **Buka Kembali**.

Transaksi, jurnal, dan posting aset bulan itu bisa diubah lagi. Penutupan tetap tercantum di riwayat dengan status **Dibuka kembali** dan alasannya. Setelah koreksi selesai, tutup buku bulan itu lagi.

Untuk membuka bulan yang lebih lama, buka kembali dulu bulan-bulan sesudahnya satu per satu, dimulai dari yang terbaru.

## Aturan

- **Hanya bulan yang sudah berakhir.** Bulan berjalan tidak bisa ditutup. Mei 2026 baru bisa ditutup mulai 1 Juni 2026.
- **Berurutan.** Bulan yang masih terbuka harus ditutup lebih dulu sebelum bulan sesudahnya.
- **Bulan yang ditutup terkunci.** Transaksi, jurnal, pembayaran, penyusutan, inventarisasi, dan mutasi aset bertanggal di bulan itu tidak bisa dibuat, diubah, atau dihapus. Di menu [Jurnal](/keuangan/jurnal), jurnalnya tampil bergembok dengan keterangan *"Bulan &lt;bulan&gt; sudah ditutup buku"*.
- **Jika Rekonsiliasi Harian aktif**, periode transaksi cabang harus sudah melewati akhir bulan (lewat **Tutup Periode**) sebelum bulan itu bisa ditutup.
- **Hanya penutupan terakhir yang bisa dibuka kembali**, dan alasannya wajib diisi. Alasan tercatat di riwayat dan di **Staff → Log Aktivitas**.
- **Bulan di tahun yang sudah ditutup tahunan tidak bisa dibuka kembali.** Buka kembali tutup buku [tahunan](/keuangan/penutupan-tahunan) tahun itu lebih dulu.

## Tanda "Perlu ditinjau"

Bila jurnal sebuah bulan berubah setelah bulan itu ditutup (misalnya diubah langsung di database), penutupannya ditandai **Perlu ditinjau**. Halaman detailnya menampilkan panel **Mutasi Berubah Sejak Ditutup** berisi akun yang berubah beserta angka saat ditutup dan angka sekarang. Periksa perubahannya, lalu buka kembali dan tutup ulang bulan itu bila perubahannya memang benar.

Jurnal penutup tahunan (AC, bertanggal 1 Januari) tidak memicu tanda ini.

## Hubungan dengan tutup buku tahunan

Tutup buku tahunan tetap bisa dilakukan walau ada bulan yang belum ditutup. Bila cabang memakai tutup buku bulanan, checklist di tab **Tahunan** menampilkan **Peringatan** *"Semua bulan sudah ditutup bulanan"* beserta daftar bulan yang belum ditutup.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"&lt;bulan&gt; belum berakhir. Tutup buku baru bisa dilakukan mulai …"* | Bulan yang dipilih adalah bulan berjalan. | Tunggu sampai bulan itu berakhir. |
| *"&lt;bulan&gt; masih terbuka. Tutup buku &lt;bulan&gt; lebih dulu."* | Ada bulan sebelumnya yang belum ditutup. | Tutup buku bulan itu lebih dulu. |
| *"&lt;bulan&gt; sudah ditutup. Buka kembali dulu bila perlu menutup ulang."* | Bulan itu sudah punya penutupan aktif. | Buka kembali penutupannya bila memang perlu ditutup ulang. |
| *"… jurnal &lt;bulan&gt; tidak seimbang. Perbaiki di menu Jurnal sebelum menutup buku."* | Ada jurnal yang total debit dan kreditnya berbeda. | Perbaiki jurnal itu di menu [Jurnal](/keuangan/jurnal). |
| *"Periode transaksi cabang belum melewati … Selesaikan Tutup Periode Rekonsiliasi Harian sampai akhir bulan."* | Rekonsiliasi Harian aktif dan periode transaksi belum sampai akhir bulan. | Selesaikan **Tutup Periode** sampai hari terakhir bulan itu. |
| *"Centang konfirmasi sebelum menutup buku."* | Kotak konfirmasi belum dicentang. | Centang kotaknya, lalu klik **Tutup Buku** lagi. |
| *"Hanya penutupan terakhir (&lt;bulan&gt;) yang bisa dibuka kembali."* | Mencoba membuka bulan yang bukan penutupan terakhir. | Buka kembali bulan-bulan sesudahnya lebih dulu. |
| *"Tahun &lt;tahun&gt; sudah ditutup lewat Tutup Buku Tahunan. …"* | Bulan itu ada di tahun yang sudah ditutup tahunan. | Buka kembali tutup buku tahunan tahun itu lebih dulu (tab **Tahunan**). |
| *"Alasan buka kembali wajib diisi."* | Kolom **Alasan** kosong. | Isi alasannya. |
| *"Tidak dapat … ! Bulan &lt;bulan&gt; sudah ditutup buku. Minta supervisor membuka kembali Tutup Buku Bulanan bulan tersebut terlebih dahulu."* (di menu lain) | Tanggal transaksi/jurnal jatuh di bulan yang sudah ditutup. | Pakai tanggal lain, atau minta supervisor membuka kembali bulan itu. |
| *"Tidak dapat memproses penyusutan ! Periode ini sudah dilakukan penutupan."* (di menu Aset) | Periode penyusutan, inventarisasi, atau mutasi aset jatuh di bulan yang sudah ditutup. | Minta supervisor membuka kembali bulan itu. |

## Terkait

- [Tutup Buku Tahunan](/keuangan/penutupan-tahunan)
- [Jurnal](/keuangan/jurnal)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
- [Alur kerja akunting](/alur-kerja/akunting)
