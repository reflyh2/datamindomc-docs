---
outline: deep
---

# Pengaturan Umum

**Pengaturan Umum** berisi setelan yang berlaku untuk seluruh perusahaan: semua cabang dan semua pengguna. Buka lewat menu **Pengaturan › Pengaturan Umum**.

Setelan dikelompokkan dalam navigasi di sisi kiri halaman:

| Bagian | Isi |
|---|---|
| **Umum** | Kantor Pusat, Valas USD, Jumlah Desimal Kurs, Hari Libur Mingguan, Batas Maksimal User |
| **Transaksi** | Isian form transaksi dan fitur yang tampil saat membuat transaksi |
| **Stok & Periode** | Aturan stok valas, Periode Transaksi, dan Rekonsiliasi Harian |
| **Akuntansi** | Metode Laba dan Penghubung Akun |
| **Dokumen › Invoice** | Template, tanggal, dan keterangan yang dicetak pada invoice |
| **Dokumen › Kop Surat & Dokumen** | Kop surat pada dokumen cetak |
| **Kepatuhan** | Validasi Modal IDR dan Peringatan Underlying |

Bagian yang tampil mengikuti hak akses Anda.

## Menyimpan perubahan

Setiap bagian disimpan sendiri dengan tombol **Simpan** di bawah halaman. Menyimpan satu bagian tidak mengubah setelan di bagian lain.

- Tombol **Simpan** baru aktif setelah ada isian yang diubah. Di sebelahnya tampil jumlah perubahan, misalnya "2 perubahan belum disimpan".
- Jika Anda menutup halaman atau pindah bagian sebelum menyimpan, browser akan menanyakan apakah perubahan boleh dibuang.

## Setelan khusus Super Admin

Setelan yang diberi label **Super Admin** hanya bisa diubah oleh pengguna dengan peran Super Admin. Pengguna lain tetap bisa melihat nilainya, tetapi isiannya terkunci dengan keterangan "Hanya bisa diubah Super Admin."

## Setelan yang bergantung pada setelan lain

Beberapa setelan hanya berlaku jika setelan lain aktif. Isian seperti ini terkunci dan menampilkan alasannya:

- **Periode Transaksi** terkunci di mode HPP, karena tanggal transaksi mengikuti kalender (atau diatur oleh Rekonsiliasi Harian).
- **Rekonsiliasi Harian** hanya bisa diaktifkan di mode HPP.
- **Toleransi Selisih Kas** baru muncul setelah **Rekonsiliasi Harian** diaktifkan.
- **Limit Underlying** baru muncul setelah **Peringatan Underlying** diaktifkan.

## Kesiapan konfigurasi

Transaksi baru bisa dibayar setelah akun-akun di **Akuntansi › Penghubung Akun** terisi. Jika ada yang belum lengkap, kartu **Kesiapan konfigurasi** muncul di bagian Akuntansi dengan daftar akun yang perlu diisi. Klik nama akun untuk langsung menuju isiannya. Di bagian lain hanya tampil satu baris pengingat dengan tautan **Lengkapi di Akuntansi**, dan item **Akuntansi** di navigasi kiri diberi tanda.

- **Wajib** (bertanda \*): Akun Pembelian, Akun Penjualan, dan Akun Kas IDR. Di mode HPP, Akun Persediaan Valas juga wajib.
- **Dibutuhkan bila fiturnya aktif**: Akun Biaya Transaksi (Biaya Transaksi aktif), Akun Hutang Usaha dan Akun Piutang Usaha (Transaksi Hutang Piutang aktif), serta Akun Hutang Cabang dan Akun Piutang Cabang (perusahaan memiliki lebih dari satu cabang).

Akun yang sudah dihapus dari daftar akun juga dilaporkan, dengan keterangan "Akun yang dipilih sudah dihapus."

## Mengganti Metode Laba

**Metode Perhitungan Laba** (Square Balance atau HPP) tidak diubah lewat tombol Simpan, karena perubahannya memengaruhi laporan laba rugi dan jalannya periode di semua cabang.

1. Buka **Akuntansi**. Super Admin melihat tombol **Ganti ke HPP…** atau **Ganti ke Square Balance…** di samping metode yang sedang dipakai.
2. Halaman berikutnya menjelaskan akibat perpindahan. Bacalah sebelum melanjutkan.
3. Pindah ke HPP ditolak selama **Akun Pembelian** atau **Akun Persediaan Valas** belum diisi. Lengkapi lewat tautan **Lengkapi di Penghubung Akun**.
4. Jika perusahaan sudah memiliki transaksi terbayar, stok valas yang ada harus dipindahkan ke HPP oleh tim Datamindo. Centang "Saya paham dan akan menghubungi tim Datamindo untuk cutover stok awal." untuk melanjutkan, lalu hubungi tim Datamindo.
5. Klik **Ganti ke HPP** atau **Ganti ke Square Balance**. Perpindahan tercatat di Log Aktivitas.

::: warning
Pindah dari HPP ke Square Balance juga mematikan **Rekonsiliasi Harian**, karena fitur itu hanya tersedia di mode HPP. Jurnal yang sudah terbentuk tidak diubah, jadi laba sebelum dan sesudah perpindahan bisa tidak sebanding.
:::

Di mode HPP, **Metode Arus Biaya HPP** (FIFO atau Rata-Rata) juga diganti lewat halaman konfirmasinya sendiri.

## Keterangan Invoice

**Keterangan Invoice** di bagian **Invoice** adalah teks yang dicetak di bawah setiap invoice. Tulis `{companyName}` untuk menyisipkan nama perusahaan. Panjangnya paling banyak 1.000 karakter.

Jika dikosongkan, invoice memakai **keterangan bawaan** dari Datamindo. Teks bawaan itu tampil samar di dalam isian yang kosong. Untuk kembali ke keterangan bawaan setelah mengisi teks sendiri, klik **Kembalikan ke keterangan bawaan** lalu **Simpan**.
