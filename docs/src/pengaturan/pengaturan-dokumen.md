---
outline: deep
---

# Pengaturan Dokumen

Menu **Pengaturan → Dokumen** mengatur tampilan dokumen yang dicetak dari ValasPro. Isinya dua bagian:

- **Invoice**: template invoice (termasuk menyusun invoice sendiri), tanggal yang dicetak, rincian metode pembayaran, dan keterangan di bawah invoice.
- **Kop Surat & Dokumen**: kop surat untuk dokumen cetak/PDF, misalnya formulir CDD dan EDD.

Bagian yang tampil mengikuti hak akses jabatan Anda. Kalau Anda hanya punya akses kop surat, menu ini langsung membuka **Kop Surat & Dokumen**.

## Menyusun invoice sendiri (Template Kustom)

Di **Template Invoice** ada dua kartu: **Template siap pakai** (desain yang sudah tersedia) dan **Susun sendiri**. Dengan **Susun sendiri** Anda menentukan sendiri isi invoice: bagian mana yang dicetak, urutannya, dan tulisan pada judul serta labelnya.

### Memakai Template Kustom

1. Buka **Pengaturan → Dokumen**, bagian **Invoice**.
2. Di **Template Invoice**, pilih kartu **Susun sendiri**, lalu pilih kertas printer Anda (**Kertas lebar**, **Thermal 80mm**, atau **Thermal 58mm**).
3. Klik **Atur Tata Letak**.
4. Setelah tata letak disimpan, kembali ke bagian **Invoice** dan simpan pilihan template.

Invoice baru dicetak dengan susunan Anda setelah **Template Invoice** disimpan dengan kartu **Susun sendiri** terpilih. Kalau belum, halaman tata letak menampilkan pengingat *"Cetak invoice belum memakai tata letak ini."*

### Mengatur tata letak

Halaman **Tata Letak Invoice Kustom** terbagi dua. Di kiri ada daftar blok dan gaya. Di kanan ada pratinjau yang ikut berubah setiap kali Anda mengubah sesuatu, memakai transaksi terakhir cabang Anda.

- **Urutan**: seret blok lewat pegangan ☰ di kiri namanya.
- **Isi blok**: klik nama blok untuk membuka pilihannya, misalnya tulisan judul *Faktur Pembelian* / *Faktur Penjualan*, kolom yang dicetak, atau label tanda tangan.
- **Sembunyikan**: klik ikon mata. Blok **Rincian Valas** dan **Total** selalu dicetak dan tidak bisa disembunyikan atau dihapus.
- **Tambah blok**: pilih jenisnya di bawah daftar lalu klik **Tambah**. **Teks Bebas** dan **Pemisah** boleh ditambahkan lebih dari sekali, blok lain hanya satu.
- **Gaya**: atur jenis huruf, ukuran huruf, dan warna aksen. Printer thermal tetap mencetak hitam.
- **Kertas lain**: pindah ke **Thermal 80mm** atau **Thermal 58mm** lewat tombol di kanan atas. Setiap kertas punya susunannya sendiri.

Pada **Kertas lebar**, blok di bagian atas (misalnya Kop Perusahaan, Judul, dan Nomor & Tanggal) bisa diberi lebar **1/2** atau **1/3** supaya tampil berdampingan.

Pada **Teks Bebas** dan slogan Kop Perusahaan, Anda bisa menulis `{companyName}`, `{branchName}`, dan `{invoice}`. Saat dicetak, ketiganya diganti nama perusahaan, nama cabang, dan nomor invoice.

Klik **Simpan** untuk menyimpan. Kalau Anda meninggalkan halaman dengan perubahan yang belum disimpan, ValasPro akan meminta konfirmasi lebih dulu.

**Kembalikan ke bawaan** menghapus susunan yang tersimpan untuk kertas itu dan menggantinya dengan susunan awal.

::: tip
Blok **Keterangan Invoice** mencetak teks dari isian **Keterangan Invoice** di bagian Invoice. Isinya diubah di sana, bukan di halaman tata letak.
:::

::: warning Segera diperbarui
Panduan lengkap menu ini sedang ditulis ulang untuk tampilan terbaru ValasPro.
:::
