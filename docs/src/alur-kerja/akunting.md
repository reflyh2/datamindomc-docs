---
outline: [2, 3]
---

# Alur Kerja Akunting

Tugas bagian akunting cabang: mencatat jurnal yang tidak dibuat otomatis, memeriksa laporan keuangan, lalu mengunci bulan dan tahun yang sudah final.

```
HARIAN       Catat biaya dan kas masuk lain lewat Jurnal
             Pinjam/bayar kas antarcabang bila perlu
AKHIR BULAN  Periksa jurnal tidak seimbang → Neraca Saldo → Neraca, Laba Rugi
             Tutup Buku Bulanan
AWAL TAHUN   Selesaikan koreksi tahun lalu → Tutup Buku Tahunan
```

Jurnal transaksi valas, deposit, dan pembayaran hutang piutang dibuat otomatis. Bagian akunting tidak perlu mencatatnya lagi.

## Harian: mencatat jurnal

Menu: **Keuangan → Jurnal**. Rincian lengkapnya ada di [Jurnal](/keuangan/jurnal).

| Kejadian | Pilihan di **Tambah** |
|---|---|
| Membayar biaya dari kas atau bank, misalnya listrik dan gaji | **Kas Keluar** |
| Menerima uang selain dari transaksi valas, misalnya setoran modal | **Kas Masuk** |
| Koreksi atau pemindahan saldo antarakun | **Jurnal Umum** |
| Meminjamkan kas ke cabang lain | **Buat Piutang** |
| Membayar hutang ke cabang lain | **Bayar Hutang** |

Akun yang belum ada ditambahkan di [Daftar Akun](/keuangan/daftar-akun). Saldo pinjaman antarcabang dipantau di [Hutang Piutang Cabang](/keuangan/hutang-piutang-cabang).

## Akhir bulan: memeriksa laporan

Menu: **Keuangan → Laporan Keuangan**. Rincian lengkapnya ada di [Laporan Keuangan](/keuangan/laporan-keuangan).

1. Di tab **Jurnal**, pilih periode satu bulan dan pastikan kotak **Jurnal tidak seimbang** bernilai nol. Bila tidak, perbaiki jurnalnya di menu Jurnal.
2. Di tab **Neraca Saldo**, pastikan status **Seimbang**.
3. Periksa saldo akun kas dan bank di tab **Buku Kas/Bank**, lalu cocokkan dengan uang fisik dan rekening koran.
4. Periksa **Laba Rugi** dan **Neraca** bulan itu. Ekspor bila perlu dilaporkan.

## Akhir bulan: tutup buku bulanan

Menu: **Keuangan → Tutup Buku**, tab **Bulanan**. Rincian lengkapnya ada di [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan).

Setelah laporan final, tutup bulan itu. Transaksi, jurnal, dan posting aset di bulan itu terkunci, sehingga laporan yang sudah diserahkan tidak berubah lagi. Bulan ditutup berurutan, per cabang.

Bila jurnal bulan yang sudah ditutup perlu diperbaiki, penutupan terakhir bisa dibuka kembali, lalu ditutup lagi setelah diperbaiki.

## Awal tahun: tutup buku tahunan

Menu: **Keuangan → Tutup Buku**, tab **Tahunan**. Rincian lengkapnya ada di [Tutup Buku Tahunan](/keuangan/penutupan-tahunan).

Setelah tahun buku berakhir dan semua koreksinya selesai, jalankan tutup buku tahunan. Saldo pendapatan dan beban dipindahkan ke akun Laba Ditahan lewat jurnal Penutupan Tahunan, dan tahun itu terkunci.

## Terkait

- [Daftar Akun](/keuangan/daftar-akun)
- [Jurnal](/keuangan/jurnal)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
- [Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan)
- [Tutup Buku Tahunan](/keuangan/penutupan-tahunan)
