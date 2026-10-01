---
outline: [2, 3]
---

# Alur Kerja Supervisor

Tugas harian supervisor cabang: menerbitkan kurs, mengatur papan kurs, meninjau selisih serah terima kasir, dan menutup hari.

```
PAGI         Buka Hari → isi kurs → Terbitkan
SIANG        Terbitkan kurs shift berikutnya bila berbeda
SEPANJANG    Tinjau selisih serah terima kasir
HARI
AKHIR HARI   Tutup hari (caranya tergantung metode laba, lihat di bawah)
```

## Menerbitkan kurs

Menu: **Master → Pengaturan Kurs** (halaman **Pengaturan Kurs Valas**).

### Draf dan terbit

Kurs diatur dalam dua tahap. Kesalahan paling sering terjadi karena tahap kedua terlewat.

| Tombol | Hasilnya |
|---|---|
| **Simpan Draf** | Kurs disimpan sebagai draf. **Belum dipakai transaksi.** |
| **Terbitkan** | Kurs langsung dipakai untuk transaksi berikutnya dan tampil di papan kurs |
| **Kembalikan ke kurs terbit** | Mengisi ulang semua baris dengan kurs yang sedang terbit. Untuk membuang draf lama, klik **Simpan Draf** setelahnya |

::: warning Belum terbit berarti belum berlaku
Selama Anda belum menekan **Terbitkan**, kasir masih memakai kurs lama. Kotak **Draf belum terbit** di atas halaman menunjukkan berapa valas yang masih berupa draf.
:::

### Langkah

1. Pilih tab shift yang ingin diubah, misalnya **Shift 1** atau **Shift 2**. Perusahaan dengan kurs tunggal hanya punya tab **Kurs**.
2. Isi kolom **Beli** dan **Jual** untuk setiap valas. Tekan <kbd>Enter</kbd> atau tombol panah untuk pindah baris.
3. Untuk menaikkan atau menurunkan banyak kurs sekaligus, centang baris-barisnya. Pilih *Beli & jual*, *Beli saja*, atau *Jual saja*, pilih arahnya (*naik* atau *turun*), isi besarnya dalam % atau Rp, lalu klik **Terapkan**. Hasilnya masih berupa isian yang belum disimpan.
4. Klik **Terbitkan**, lalu periksa konfirmasi yang menyebut berapa valas yang berubah.

Yang perlu diketahui:

- **Menerbitkan satu shift juga menimpa kurs shift sesudahnya.** Shift 2 mendapat nilai yang sama. Shift 3 dihitung dari **Master → Parameter Kurs → Shift 3** bila parameternya diisi, selain itu nilainya disalin. Kalau shift berikutnya perlu kurs berbeda, terbitkan shift itu sesudahnya.
- Kotak **Kurs berlaku sekarang** menunjukkan shift yang sedang dipakai transaksi beserta jam berlakunya.
- Kotak **USD kurs BI (jual)** menampilkan kurs acuan Bank Indonesia dan tidak bisa diubah.
- Kurs beli dan jual wajib diisi dan lebih dari 0. Kurs jual tidak boleh lebih rendah dari kurs beli. Baris yang salah ditandai merah.

### Jadwal shift kurs

Kotak **Jadwal shift kurs** menunjukkan berapa shift kurs yang dipakai perusahaan dan jam mulai masing-masing. Untuk mengubahnya:

1. Klik **Atur** di kotak **Jadwal shift kurs**.
2. Pilih **Jumlah shift kurs**: *1 (kurs tunggal)*, *2 shift*, atau *3 shift*.
3. Untuk 2 atau 3 shift, isi **Shift 1 mulai pukul**, **Shift 2 mulai pukul**, dan seterusnya. Jam setiap shift harus lebih lambat dari shift sebelumnya.
4. Klik **Simpan**. Halaman dimuat ulang dengan tab shift yang baru.

Yang perlu diketahui:

- Setiap shift berlaku sampai shift berikutnya dimulai. Jam sebelum shift 1 (lewat tengah malam) masih memakai shift terakhir. Contoh: dengan jadwal 06.00 / 14.00 / 22.00, transaksi pukul 03.00 memakai kurs shift 3.
- Jadwal ini berlaku untuk semua cabang perusahaan, dan tidak ada hubungannya dengan shift kasir di menu **Shift**.
- Saat jumlah shift ditambah, kurs shift yang baru diisi dari shift sebelumnya. Periksa dan terbitkan ulang bila perlu.
- Isian kurs yang belum disimpan akan hilang saat jadwal disimpan.

### Riwayat

Tab **Riwayat Terbit** mencatat setiap penerbitan: waktu, shift, siapa yang menerbitkan, dan berapa valas yang berubah. Klik barisnya untuk melihat kurs sebelum dan sesudah untuk setiap valas.

## Papan Kurs

Menu: **Master → Papan Kurs**. Di sini Anda mengatur layar TV di counter yang menampilkan kurs untuk pelanggan.

1. **Valas di Papan**: centang **Tampil** untuk valas yang ingin ditampilkan, lalu atur **Urutan**-nya. Perubahan di bagian ini tersimpan otomatis.
2. **Tampilan Layar**: pilih **Template**, **Orientasi** (pakai *portrait* untuk TV yang dipasang tegak), **Desimal kurs**, dan **Teks berjalan**. Pratinjau di sebelahnya langsung berubah. Klik **Simpan**.
3. **Tautan Layar Publik**: klik **Buat tautan** untuk cabang Anda, klik **Salin**, lalu buka tautannya di browser TV. **Layar ini tidak perlu login.**

Layar memuat ulang sendiri saat kurs diterbitkan atau shift kurs berganti, jadi TV tidak perlu disentuh. Kalau tautannya bocor, klik **Buat ulang** atau **Cabut**, dan tautan lama langsung berhenti bekerja.

## Meninjau selisih serah terima

Kalau kasir penerima menerima kas dengan selisih, serah terima itu ditandai **Perlu Ditinjau** di **Shift → Serah Terima Kasir**, dan jumlahnya ikut di angka menu Shift.

1. Klik chip **Perlu Ditinjau**, lalu buka serah terimanya.
2. Baca alasan selisih yang ditulis penerima.
3. Klik **Tandai Ditinjau**, lalu tulis catatan tindak lanjutnya.

Menandai ditinjau tidak mengubah jurnal atau stok. Kalau selisih perlu dikoreksi, lakukan lewat menu yang sesuai.

## Ambil Alih Kas

Kalau pemegang kas berhalangan (sakit, cuti, atau keluar), klik **Ambil Alih Kas** di **Shift → Serah Terima Kasir** dan tulis alasannya. Semua serah terima yang masih menunggu akan dibatalkan, dan Anda menjadi pemegang kas tanpa hitung fisik.

## Menutup hari

Caranya tergantung setelan perusahaan Anda:

| Setelan perusahaan | Periode | Yang dilakukan di akhir hari |
|---|---|---|
| Metode laba **HPP**, tanpa Rekonsiliasi Harian | Maju otomatis mengikuti tanggal transaksi | Tidak ada langkah khusus. Pastikan faktur hari itu sudah dibayar |
| Metode laba **HPP** dengan **Rekonsiliasi Harian** | Manual | Teller merekonsiliasi, lalu supervisor menjalankan **Tutup Hari**. Lihat [Rekonsiliasi & Tutup Hari](/shift/rekonsiliasi) |
| Metode laba **Square Balance** | Manual | Jalankan [Pengaturan Periode](/periode/pengaturan-periode), atau secara manual: [Square Balance](/periode/square-balance) → [Tutup Periode](/periode/tutup-periode) → Reverse di awal hari berikutnya |

Pada periode manual, transaksi selalu dicatat di tanggal Periode. Jadi kalau hari kemarin belum ditutup, transaksi hari ini masih masuk ke tanggal kemarin. Tutup hari sebelum cabang tutup.
