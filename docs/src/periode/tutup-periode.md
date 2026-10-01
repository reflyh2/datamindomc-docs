---
outline: deep
---

# Tutup Periode

Menu: **Periode → Tutup Periode** (judul halaman: **Penutupan Periode**)

::: info Untuk perusahaan dengan metode laba Square Balance
Perusahaan dengan metode HPP yang mengaktifkan Rekonsiliasi Harian menutup hari lewat [Rekonsiliasi & Tutup Hari](/shift/rekonsiliasi), bukan lewat menu ini.
:::

Mengakhiri periode berjalan dan memajukan Periode cabang ke tanggal berikutnya. Jalankan setelah [Square Balance](/periode/square-balance) periode ini dibuat.

## Isi halaman

**Data Transaksi**: Total Jual dan Total Beli periode berjalan, dalam USD dan IDR.

**Data Valas & IDR**:

| Baris | Artinya |
|---|---|
| **Saldo Valas (USD)** | Nilai stok valas saat ini, disetarakan ke USD |
| **Modal Valas (USD)** | Nilai modal valas awal cabang |
| **Nett** | Selisih keduanya. Harus **0** sebelum periode bisa ditutup |
| **Saldo IDR**, **Modal IDR**, **Nett IDR** | Sama seperti di atas, untuk rupiah. Hanya diperiksa bila perusahaan menyalakan **Validasi Modal IDR** |

Kalau Nett belum 0, muncul pesan *"Stok Valas dan Modal Valas belum seimbang, proses periode belum dapat dilakukan !"* dan tombol **Proses Periode** tidak aktif. Biasanya ini berarti Square Balance periode ini belum dibuat atau belum lengkap.

## Langkah

Tombol di bawah halaman sebaiknya dijalankan berurutan:

1. **Laporan Valas**: cetak laporan valas periode ini.
2. **Laporan IDR**: cetak laporan rupiah periode ini.
3. **Setor Laba** (opsional): membuat jurnal setor laba periode ini. Hanya bisa sekali per periode, dan hanya bila Nett sudah 0.
4. **Proses Periode**: pilih tanggal di **Periode selanjutnya** (bawaan: hari berikutnya), lalu klik **Simpan**.

Setelah berhasil, Periode cabang pindah ke tanggal yang dipilih. Di awal periode baru, jangan lupa **Reverse** Square Balance periode lalu. Lihat [Square Balance](/periode/square-balance#reverse).

## Terkait

- [Pengaturan Periode](/periode/pengaturan-periode) untuk menjalankan Square Balance, tutup periode, dan reverse sekaligus
- [Square Balance](/periode/square-balance)
