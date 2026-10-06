---
outline: deep
---

# Laba Transaksi

Menu: **Operasional → Laba Transaksi**

Laba dari transaksi valas per cabang, per valas, atau per teller. Biasa dipakai pemilik dan supervisor untuk melihat cabang, mata uang, atau kasir mana yang menghasilkan laba.

## Isi halaman

Filter dan tombolnya sama dengan [Laporan Transaksi](/laporan-umum/laporan-transaksi#isi-halaman): **Periode** dengan tombol **‹ ›**, **Cabang**, **Terapkan**, **Atur ulang**, dan **Ekspor**.

| Tab | Isi | Filter tambahan | Ekspor |
|---|---|---|---|
| **Per Cabang** | Per cabang: pembelian dan penjualan dalam **IDR**, **Setara USD**, jumlah **Faktur**, dan laba. Bila perusahaan punya beberapa area, cabang dikelompokkan per area beserta subtotalnya | – | Excel, Cetak |
| **Per Valas** | Per mata uang: **Qty beli**, **Beli IDR**, **Qty jual**, **Jual IDR**, dan laba. Bila beberapa cabang dipilih, setiap cabang punya kolomnya sendiri ditambah kolom **Total** | **Tampilkan pecahan** untuk memecah per pecahan (misalnya USD 100 dan USD 50) | Excel, Cetak |
| **Per Teller** | Per teller: pembelian dan penjualan (IDR dan jumlah faktur), laba, dan **Porsi laba**. Kotak ringkasan menampilkan **Teller aktif** dan **Laba tertinggi** | – | Excel |

Laba yang negatif ditulis merah dalam tanda kurung, misalnya **(40.336.000,00)**.

## Cara laba dihitung

Judul kolom menunjukkan cara yang dipakai perusahaan Anda:

| Judul kolom | Rumus | Keterangan di layar |
|---|---|---|
| **Laba** | Penjualan IDR dikurangi pembelian IDR pada periode itu | *jual IDR dikurangi beli IDR* |
| **Laba (HPP)** | Pendapatan penjualan dikurangi harga pokok valas yang terjual | *pendapatan dikurangi HPP* |

Dengan **Laba**, periode yang lebih banyak membeli daripada menjual akan tampak rugi walaupun valasnya masih di stok. Untuk menilai stok yang masih ada, lihat tab **Mutasi Stok** di [Laporan Transaksi](/laporan-umum/laporan-transaksi).

## Melihat laba per teller

1. Buka tab **Per Teller**.
2. Pilih **Periode** dan **Cabang**, lalu klik **Terapkan**.

Baris keterangan menyebutkan siapa yang dianggap teller:

- *teller = pembuat transaksi*: pengguna yang membuat faktur.
- *teller = teller di faktur*: teller yang dipilih di form transaksi. Ini berlaku bila perusahaan memakai pilihan teller manual. Faktur tanpa teller dihitung ke pembuatnya.

Jumlah laba semua teller sama dengan total laba di tab **Per Cabang** untuk periode dan cabang yang sama.

## Aturan

- **Hanya faktur lunas.** Faktur belum dibayar, menunggu, dan batal tidak dihitung. **Per Cabang** dan **Per Teller** juga tidak menghitung transaksi stok awal. **Per Valas** tidak menghitung transaksi antarcabang.
- **Tab Per Teller** hanya muncul bagi pengguna yang punya izin laba per teller. Atur di **Staff → Pengguna & Jabatan**.
- **Ekspor mengikuti layar.** Excel dan cetakan memakai filter yang sedang tampil, termasuk **Tampilkan pecahan**.

## Terkait

- [Laporan Transaksi](/laporan-umum/laporan-transaksi)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
