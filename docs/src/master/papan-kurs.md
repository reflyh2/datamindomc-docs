---
outline: [2, 3]
---

# Papan Kurs

Menu: **Master → Papan Kurs**

Papan Kurs adalah layar TV di counter yang menampilkan kurs beli dan jual kepada pelanggan. Di menu ini Anda memilih valas yang tampil, mengatur tampilan layar, dan membuat tautan layar untuk setiap cabang.

![Papan Kurs di layar TV, template Malam](/papan-kurs-layar.png)

## Isi halaman

### Ringkasan

| Kotak | Isi |
|---|---|
| **Valas tampil** | Jumlah valas di papan, berapa pecahannya, dan dari berapa valas aktif |
| **Template** | Template dan orientasi yang sedang dipakai |
| **Kurs terakhir terbit** | Kapan kurs terakhir diterbitkan. Layar ikut berganti otomatis. *Belum ada* berarti kurs belum pernah diterbitkan di [Pengaturan Kurs](/master/pengaturan-kurs) |
| **Layar publik** | Jumlah tautan cabang yang aktif, dan kapan salah satunya terakhir dilihat |

Di bawahnya ada tiga panel: **Valas di Papan**, **Tampilan Layar**, dan **Tautan Layar Publik**.

## Memilih valas yang tampil

Panel **Valas di Papan** berisi semua mata uang yang punya pecahan aktif. Perubahan di panel ini **tersimpan otomatis**, tanpa tombol Simpan.

![Panel Valas di Papan](/papan-kurs-valas.png)

1. Centang **Tampil** untuk menaruh mata uang di papan. Hapus centangnya untuk menyembunyikan.
2. Atur **Urutan** dengan menyeret baris atau memakai tombol panah naik-turun.
3. Di kolom **Pecahan**, pilih pecahan yang muncul. Awalnya **Semua pecahan**.

Pilihan pecahan menentukan baris di layar:

- **Satu pecahan** tampil dengan kode mata uangnya, misalnya **USD**.
- **Lebih dari satu** tampil per pecahan, misalnya **USD100** dan **USD50**.

Pecahan yang dinonaktifkan di [Pecahan Valas](/master/pecahan-valas) hilang dari papan dengan sendirinya.

Gunakan **Cari** dan saringan **Tampilkan** (**Semua**, **Di papan**, **Tidak di papan**) untuk mencari mata uang di daftar yang panjang.

## Mengatur tampilan layar

Di panel **Tampilan Layar**:

![Panel Tampilan Layar dengan pratinjau](/papan-kurs-tampilan.png)

| Pilihan | Isi |
|---|---|
| **Template** | **Klasik** (hijau, tabel penuh), **Emas** (hitam-emas, dengan alamat cabang), **Malam** (gelap, jam berjalan), **Ringkas** (putih, cocok portrait), atau **Kemerdekaan** (merah-putih, edisi Agustus) |
| **Orientasi** | **Landscape**, **Portrait (putar kiri)**, atau **Portrait (putar kanan)**. Pakai portrait untuk TV yang dipasang tegak sementara keluaran komputernya tetap landscape |
| **Desimal kurs** | **Ikuti template** (Malam dan Kemerdekaan tanpa desimal, lainnya 2 desimal), atau **Tanpa desimal** sampai **4 desimal** |
| **Cabang** | Cabang yang kursnya dipakai di pratinjau dan **Buka Layar**. Tidak mengubah tautan cabang lain |
| **Teks berjalan** | Teks yang bergulir di dasar layar, paling banyak 300 karakter. Kosongkan untuk menyembunyikannya |

**Pratinjau** di sebelahnya langsung memakai isian Anda, termasuk yang belum disimpan. Label *Belum disimpan* muncul selama ada perubahan. Klik **Simpan** untuk memakainya di semua layar. Muncul pesan *Tampilan layar disimpan.*

**Buka Layar** membuka papan dalam ukuran penuh di tab baru dengan akun Anda. Untuk TV, pakai tautan layar publik di bawah.

## Memasang layar di TV

Setiap cabang punya tautannya sendiri, dan layar ini **tidak perlu login**. TV tidak memakai akun siapa pun, jadi tidak ada pengguna yang ter-logout saat TV menyala.

1. Di panel **Tautan Layar Publik**, klik **Buat tautan** di baris cabang Anda.
2. Klik **Salin**.
3. Buka tautan itu di browser TV, lalu jadikan layar penuh.

![Panel Tautan Layar Publik](/papan-kurs-tautan.png)

Setelah itu TV tidak perlu disentuh lagi. Layar memuat ulang sendiri saat kurs diterbitkan, shift kurs berganti, atau pilihan dan tampilan papan berubah. Perubahan tampil dalam satu menit.

Kolom status menunjukkan apakah layar sedang menyala:

| Status | Arti |
|---|---|
| **Aktif** | Layar dibuka dalam 5 menit terakhir |
| **Terakhir dilihat …** | Layar pernah dibuka, tetapi tidak dalam 5 menit terakhir. Periksa TV-nya |
| **Belum pernah dibuka** | Tautan sudah dibuat, tetapi belum dibuka di layar mana pun |

### Bila tautan bocor

Isi layar hanya kurs yang memang untuk publik. Kalau tautannya tersebar ke tempat yang tidak semestinya:

- **Buat ulang** mengganti tautan. Tautan lama langsung berhenti bekerja, jadi pasang tautan baru di TV.
- **Cabut** menghapus tautan. Layar yang memakainya langsung berhenti menampilkan kurs.

## Aturan

- Kurs di papan sama dengan kurs di form transaksi cabang itu, termasuk mengikuti shift kurs yang sedang berlaku.
- Waktu "Kurs diperbarui" di layar adalah waktu penerbitan kurs terakhir. Bagian ini disembunyikan bila kurs belum pernah diterbitkan.
- Satu mata uang yang ditampilkan wajib punya minimal satu pecahan terpilih. Untuk menyembunyikannya, hapus centang **Tampil**.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Belum ada pecahan valas aktif, jadi belum ada yang bisa ditampilkan di papan.* | Perusahaan belum punya pecahan aktif | Klik **Buka Pecahan Valas** dan tambahkan pecahan |
| *Pilih minimal satu pecahan. Untuk menyembunyikan valas, hapus centang Tampil.* | Semua pecahan sebuah mata uang dikosongkan | Pilih minimal satu pecahan, atau hapus centang **Tampil** |
| *Pecahan tidak dikenal atau sudah nonaktif. Muat ulang halaman lalu coba lagi.* | Pecahan dinonaktifkan selagi halaman terbuka | Muat ulang halaman |
| Di TV: *Layar tidak bisa ditampilkan* | Browser TV sedang login ke perusahaan lain | Keluar dari aplikasi di browser itu, atau buka tautan di jendela privat |
| Di TV: halaman tidak ditemukan | Tautan sudah dibuat ulang atau dicabut | Salin tautan terbaru dan pasang lagi di TV |
| Kurs di layar masih lama | Kurs baru belum diterbitkan, atau layar baru menunggu pemeriksaan berikutnya | Pastikan kurs sudah terbit di Pengaturan Kurs, lalu tunggu satu menit |

## Terkait

- [Pengaturan Kurs](/master/pengaturan-kurs)
- [Pecahan Valas](/master/pecahan-valas)
- [Informasi Kurs](/transaksi/informasi-kurs)
- [Supervisor: Papan Kurs](/alur-kerja/supervisor#papan-kurs)
