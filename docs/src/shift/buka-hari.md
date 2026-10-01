---
outline: deep
---

# Buka Hari

Menu: **Shift → Buka Hari**

Checklist pembukaan hari kerja cabang. Biasanya dijalankan supervisor atau kasir pertama, sebelum transaksi pertama hari itu.

## Isi halaman

| Bagian | Isi |
|---|---|
| Kotak atas | **Status** hari kerja (*Belum dibuka* atau sudah dibuka), **Pemegang kas**, dan **Shift berjalan** |
| **Checklist Pembukaan** | Hal yang perlu dicek sebelum mulai. Butir bermasalah bertanda **!** dan punya tombol **Buka** ke halaman terkait |
| **Saldo Awal Sistem** | Kas IDR dan stok per valas menurut sistem |
| **Riwayat Buka Hari** | Tanggal, waktu dibuka, oleh siapa, dan butir yang perlu dicek saat itu |

### Butir checklist

| Butir | Yang diperiksa |
|---|---|
| **Hari kerja** | Apakah hari ini terdaftar sebagai hari libur |
| **Periode cabang** | Apakah Periode sama dengan tanggal hari ini. Hanya muncul bila perusahaan Anda memajukan periode secara manual |
| **Kurs hari ini** | Apakah kurs sudah diterbitkan hari ini |
| **Transaksi tertinggal** | Apakah ada faktur belum dibayar atau menunggu dari hari sebelumnya |
| **Serah terima** | Apakah ada serah terima kasir yang belum diterima |
| **Rekonsiliasi terakhir** | Hasil rekonsiliasi periode sebelumnya. Hanya muncul bila [Rekonsiliasi & Tutup Hari](/shift/rekonsiliasi) aktif |

Checklist ini hanya pengingat. Hari tetap bisa dibuka walaupun masih ada butir bertanda **!**.

## Langkah

1. Periksa checklist. Selesaikan butir bertanda **!** lewat tombol **Buka** di butir itu.
2. Periksa Saldo Awal Sistem.
3. Isi **Catatan** bila perlu.
4. Klik **Buka Hari _tanggal_**.

## Aturan

- **Tidak wajib.** Transaksi tetap bisa berjalan tanpa Buka Hari. Hanya saja, pengingat tetap muncul sampai hari dibuka: tanda **!** kuning di menu, status di Beranda, dan butir di **Perlu Perhatian**.
- **Sekali per tanggal, per cabang.** Buka Hari hanya berlaku untuk cabang Anda sendiri.
- **Shift kembali ke 1.** Pada cabang yang memakai lebih dari satu shift kasir, Buka Hari mengembalikan shift berjalan ke Shift 1.
- **Tidak ada hitung fisik di sini.** Hitung fisik dilakukan saat [Serah Terima Kasir](/shift/serah-terima-kasir) atau [Rekonsiliasi](/shift/rekonsiliasi).

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir)
- [Menerbitkan kurs](/alur-kerja/supervisor#menerbitkan-kurs)
