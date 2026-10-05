---
outline: deep
---

# Tutup Buku Tahunan

Menu: **Keuangan → Tutup Buku**, tab **Tahunan** (judul halaman saat menutup: **Tutup Buku Tahun &lt;tahun&gt;**)

Tutup buku memindahkan saldo **pendapatan dan beban** satu tahun ke akun **Laba Ditahan**, lalu mengunci transaksi dan jurnal tahun itu. Biasanya dilakukan bagian akunting setelah tahun buku berakhir dan semua koreksi tahun itu selesai.

Tutup buku dilakukan **per cabang**. Untuk menutup cabang lain, masuk ke cabang itu lewat portal cabang.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Tahun terakhir ditutup** | Tahun terakhir yang ditutup di cabang ini beserta tanggal penutupannya, atau "belum pernah tutup buku". |
| **Siap ditutup** | Tahun terlama yang masih terbuka. Bila "—", tahun berjalan belum berakhir sehingga belum ada yang bisa ditutup. |
| **Laba/rugi bersih terakhir** | Laba (hijau) atau rugi (merah) yang dipindahkan ke Laba Ditahan pada penutupan terakhir. |
| **Akun Laba Ditahan** | Akun tujuan laba/rugi, yaitu akun **30002 Laba Ditahan**. Bila tertulis **Belum diatur**, buat akun itu dulu di [Daftar Akun](/keuangan/daftar-akun). |
| **Riwayat Penutupan** | Semua penutupan, termasuk yang sudah dibuka kembali. Kolom **Status** menunjukkan **Aktif** atau **Dibuka kembali** (lengkap dengan tanggal, siapa, dan alasannya). |
| **Status Cabang** | Hanya muncul bila perusahaan punya lebih dari satu cabang. Menampilkan tahun terakhir ditutup dan tahun siap ditutup di setiap cabang. Hanya untuk dilihat. |

Menu **Aksi** di setiap baris riwayat berisi **Detail**, **Cetak Jurnal**, dan **Buka Kembali** (hanya pada penutupan terakhir).

## Menutup buku satu tahun

1. Klik **Tutup Buku &lt;tahun&gt;** di panel **Riwayat Penutupan**. Tahun yang dipilih otomatis adalah tahun terlama yang masih terbuka. Bila perlu, ganti di kolom **Tahun**.
2. Periksa **Checklist**:
   - Butir bertanda **merah** menghalangi penutupan, misalnya tahun sebelumnya masih terbuka atau akun Laba Ditahan belum ada. Selesaikan dulu lewat tautan di butir itu.
   - Butir bertanda **Peringatan** (kuning) tidak menghalangi, tetapi sebaiknya diselesaikan dulu. Contohnya transaksi yang belum dibayar atau draft penyusutan yang belum diposting. Setelah tutup buku, keduanya tidak bisa diselesaikan lagi di tahun itu.
3. Periksa angka **Pendapatan**, **Beban**, dan **Laba/rugi bersih**, lalu tabel **Pratinjau Jurnal Penutup**. Tabel ini menunjukkan jurnal yang akan dibuat: setiap akun pendapatan dan beban dibalik saldonya sampai nol, dan selisihnya masuk ke Laba Ditahan. Total debit dan kredit harus sama.
4. Centang **Saya mengerti transaksi dan jurnal tahun &lt;tahun&gt; akan dikunci.**
5. Klik **Tutup Buku &lt;tahun&gt;**.

Setelah berhasil, halaman detail penutupan terbuka. Jurnal penutup bernomor **AC/…** dan bertanggal **1 Januari tahun berikutnya**.

::: tip Belum ada yang disimpan sampai tombol ditekan
Pratinjau dan checklist hanya menampilkan apa yang akan terjadi. Anda bisa membuka halaman ini kapan saja untuk melihat perkiraan laba/rugi tanpa menutup buku.
:::

## Melihat detail dan mencetak jurnal

Klik **Aksi → Detail** pada baris riwayat. Halaman detail menampilkan tahun buku, nomor jurnal, siapa dan kapan menutup, status, serta rincian **Jurnal Penutup**. Klik **Cetak Jurnal** untuk mencetaknya.

## Membuka kembali penutupan

Lakukan ini bila masih ada koreksi untuk tahun yang sudah ditutup.

1. Pada penutupan terakhir, klik **Aksi → Buka Kembali** (atau tombol **Buka Kembali** di halaman detail).
2. Isi **Alasan**, misalnya "Koreksi beban Desember".
3. Klik **Buka Kembali**.

Jurnal penutup dihapus dan transaksi serta jurnal tahun itu bisa diubah lagi. Penutupan tetap tercantum di riwayat dengan status **Dibuka kembali** dan alasannya. Setelah koreksi selesai, tutup buku tahun itu lagi.

Untuk membuka tahun yang lebih lama, buka kembali dulu tahun-tahun sesudahnya satu per satu, dimulai dari yang terbaru.

## Aturan

- **Hanya tahun yang sudah berakhir.** Tahun berjalan tidak bisa ditutup. Tahun 2026 baru bisa ditutup mulai 1 Januari 2027.
- **Berurutan.** Tahun yang masih terbuka harus ditutup lebih dulu sebelum tahun sesudahnya. Tahun tanpa jurnal sama sekali dilewati.
- **Tahun yang ditutup terkunci.** Transaksi dan jurnal bertanggal di tahun itu tidak bisa dibuat, diubah, atau dihapus.
- **Jurnal penutup hanya dikelola dari menu ini.** Di menu [Jurnal](/keuangan/jurnal), jurnal AC tampil dengan keterangan *"Kelola melalui menu Keuangan › Tutup Buku › Tahunan"* dan tidak bisa diubah atau dihapus di sana.
- **Hanya penutupan terakhir yang bisa dibuka kembali**, dan alasannya wajib diisi. Alasan tercatat di riwayat dan di **Staff → Log Aktivitas**.

::: warning Tanda "Perlu ditinjau"
Penutupan yang dibuat dengan versi lama ValasPro bisa ditandai **Perlu ditinjau** di kolom Status. Artinya saldo pendapatan/beban tidak nol setelah penutupan itu, sehingga Laba Ditahan perlu dihitung ulang. Untuk memperbaikinya, buka kembali dari tahun terakhir sampai tahun yang ditandai, lalu tutup buku lagi berurutan.
:::

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"Tahun &lt;tahun&gt; belum berakhir. Tutup buku baru bisa dilakukan mulai 1 Januari …"* | Tahun yang dipilih adalah tahun berjalan. | Tunggu sampai tahun itu berakhir. |
| *"Tahun &lt;tahun&gt; masih terbuka. Tutup buku tahun &lt;tahun&gt; lebih dulu."* | Ada tahun sebelumnya yang belum ditutup. | Tutup buku tahun itu lebih dulu. |
| *"Tahun &lt;tahun&gt; sudah ditutup. Buka kembali dulu bila perlu menutup ulang."* | Tahun itu sudah punya penutupan aktif. | Buka kembali penutupannya bila memang perlu ditutup ulang. |
| *"Akun Laba Ditahan (30002) di jenis Ekuitas belum ada untuk cabang ini."* | Akun tujuan laba/rugi belum dibuat. | Buat akun **30002 Laba Ditahan** di [Daftar Akun](/keuangan/daftar-akun). |
| *"Centang konfirmasi sebelum menutup buku."* | Kotak konfirmasi belum dicentang. | Centang kotaknya, lalu klik **Tutup Buku** lagi. |
| *"Hanya penutupan terakhir (tahun &lt;tahun&gt;) yang bisa dibuka kembali."* | Mencoba membuka tahun yang bukan penutupan terakhir. | Buka kembali tahun-tahun sesudahnya lebih dulu. |
| *"Alasan buka kembali wajib diisi."* | Kolom **Alasan** kosong. | Isi alasannya. |
| *"Tidak dapat … ! Periode ini sudah dilakukan penutupan."* (di menu lain) | Tanggal transaksi/jurnal jatuh di tahun yang sudah ditutup. | Pakai tanggal lain, atau minta akunting membuka kembali penutupan tahun itu. |

::: info Cabang yang memakai tutup buku bulanan
Bila cabang ini pernah memakai tab [Bulanan](/keuangan/tutup-buku-bulanan), checklist menampilkan **Peringatan** *"Semua bulan sudah ditutup bulanan"* beserta bulan yang belum ditutup. Peringatan ini tidak menghalangi penutupan tahunan.
:::

## Terkait

- [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan)
- [Jurnal](/keuangan/jurnal)
- [Daftar Akun](/keuangan/daftar-akun)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
- [Alur kerja akunting](/alur-kerja/akunting)
