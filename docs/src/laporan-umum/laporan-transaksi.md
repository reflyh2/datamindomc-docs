---
outline: deep
---

# Laporan Transaksi

Menu: **Operasional → Laporan Transaksi**

Kumpulan laporan transaksi valas dalam satu halaman bertab: rincian faktur, posisi stok, rekap per valas atau per faktur, kas IDR, rekap harian/bulanan, dan pelanggan teratas. Biasa dipakai supervisor dan pemilik untuk memeriksa hasil hari ini atau satu periode.

## Isi halaman

Setiap tab punya susunan yang sama:

| Bagian | Isi |
|---|---|
| **Tab** | Hanya tab yang boleh Anda buka yang muncul. Cabang dan periode yang sedang dipilih ikut terbawa saat pindah tab |
| Kotak ringkasan | Angka utama tab itu, misalnya **Total pembelian**, **Total penjualan**, dan jumlah faktur |
| **Periode** | Rentang tanggal laporan. Tombol **‹** dan **›** langsung memuat periode sebelum atau sesudahnya |
| **Cabang** | Pilih satu, beberapa, atau **Semua cabang**. Hanya muncul bila Anda boleh melihat lebih dari satu cabang |
| **Terapkan** / **Atur ulang** | Perubahan filter baru dimuat setelah **Terapkan** diklik. **Atur ulang** kembali ke filter bawaan |
| Baris keterangan | Cabang, rentang tanggal, dan transaksi apa saja yang dihitung (misalnya *hanya faktur lunas*) |
| **Ekspor** | Unduh laporan sesuai filter yang sedang tampil |

### Tab

| Tab | Isi | Filter tambahan | Ekspor |
|---|---|---|---|
| **Rincian** | Setiap faktur beserta baris valasnya: **Waktu**, **Teller**, **No Faktur**, **Pelanggan**, **Status**, lalu kurs, qty, dan IDR di kolom **Pembelian** atau **Penjualan** | – | Excel, CSV, Cetak |
| **Mutasi Stok** | Per valas: **Stok awal**, **Masuk**, **Keluar**, **Stok akhir**, dan **Setara USD**. Kotak ringkasan menampilkan **Stok valas**, **Posisi bersih** (stok dikurangi modal), dan **Laba transaksi** | – | Excel, PDF |
| **Per Valas** | Jumlah per valas: qty, **Kurs rata-rata**, dan IDR untuk pembelian dan penjualan | **Sertakan square balance** | Excel |
| **Faktur Lunas** | Faktur lunas per baris valas, dengan **Pembayaran** (tunai atau bank) | **Tipe pelanggan**: Semua, Nasabah, atau Antar Cabang | Excel, Cetak |
| **Kas IDR** | Saldo akun kas per tanggal: **Saldo awal**, **Debit**, **Kredit**, **Saldo akhir** | Hanya satu cabang dan satu tanggal | Cetak |
| **Rekap** | Jumlah faktur, pembelian, dan penjualan per hari atau per bulan, beserta grafik dan perbandingan dengan periode sebelumnya | **Rekap**: Harian atau Bulanan | Excel |
| **Pelanggan Teratas** | Peringkat pelanggan menurut volume transaksi | **Urutkan**, **Tampilkan** | Excel |

Penjelasan kolom yang umum di tabel ada di [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Melihat rincian transaksi seorang pelanggan

1. Buka tab **Pelanggan Teratas**, atau buka riwayat pelanggan di menu **Pelanggan**.
2. Klik nama pelanggan.

Tab **Rincian** terbuka dengan faktur lunas milik pelanggan itu saja. Baris keterangan menampilkan *Pelanggan: nama pelanggan*.

## Membandingkan dengan periode sebelumnya

Buka tab **Rekap**. Setiap kotak ringkasan menampilkan persentase naik (hijau) atau turun (merah) dibanding periode sebelumnya yang sama panjangnya. Contohnya, 1–30 September dibandingkan dengan 1–31 Agustus. Baris **Periode sebelumnya** di bawah tabel berisi angka pembandingnya.

- **Harian** dipakai untuk rentang pendek. Rentang lebih dari 92 hari otomatis ditampilkan per bulan.
- Hari tanpa faktur tidak dimunculkan di tabel. Keterangan di atas tabel menyebutkan berapa hari yang disembunyikan, tetapi grafik tetap menampilkan semua hari.
- Kolom laba hanya muncul bila Anda juga boleh membuka **Laba Transaksi**.

## Melihat pelanggan teratas

1. Buka tab **Pelanggan Teratas**.
2. Pilih **Urutkan**: **Volume IDR** (beli + jual) atau **Jumlah faktur**.
3. Pilih **Tampilkan**: **50 teratas**, **100 teratas**, atau **Semua**.
4. Klik **Terapkan**.

Kolom **Porsi** adalah bagian pelanggan itu dari total volume semua pelanggan. Kotak **Porsi 5 teratas** menunjukkan seberapa besar transaksi bergantung pada lima pelanggan terbesar.

## Aturan

- **Periode bawaan.** Tab **Rekap** dan **Pelanggan Teratas** dibuka untuk awal bulan sampai tanggal periode berjalan. Tab lain dibuka untuk tanggal periode berjalan saja.
- **Transaksi yang dihitung berbeda per tab.** **Rincian**, **Mutasi Stok**, dan **Per Valas** menghitung semua transaksi kecuali yang batal. **Faktur Lunas**, **Rekap**, dan **Pelanggan Teratas** hanya menghitung faktur lunas. Baris keterangan di setiap tab menyebutkannya.
- **Square balance.** Transaksi pelanggan square balance tidak dihitung, kecuali di **Per Valas** bila **Sertakan square balance** dicentang.
- **Pelanggan Teratas** tidak memuat transaksi tanpa pelanggan.
- **Ekspor mengikuti layar.** File Excel, CSV, dan cetakan memakai filter yang sedang tampil, dan angkanya sama dengan layar. Angka di Excel berupa angka, jadi bisa langsung dijumlahkan.

## Terkait

- [Laba Transaksi](/laporan-umum/laporan-laba)
- [Square Balance](/periode/square-balance)
- [Alur Kerja Supervisor](/alur-kerja/supervisor)
