---
outline: deep
---

# Square Balance

Menu: **Periode → Square Balance**

::: info Untuk perusahaan dengan metode laba Square Balance
Menu ini dipakai perusahaan yang menghitung laba dengan metode **Square Balance**. Lihat [Fitur Opsional](/mulai/fitur-opsional).
:::

## Konsep

Pada metode Square Balance, laba harian dihitung dengan "menjual" posisi stok valas yang tersisa di akhir periode memakai kurs penutupan. Transaksi ini dicatat atas nama pelanggan internal bertipe **Square Balance**, dan jurnalnya dibuat otomatis.

Contoh sederhana:

| | Jumlah | Kurs | Nilai |
|---|---|---|---|
| Beli USD dari pelanggan | 1.000 | 17.000 | 17.000.000 |
| Jual USD ke pelanggan | 500 | 17.500 | 8.750.000 |
| Square Balance sisa stok | 500 | 17.250 (kurs penutupan) | 8.625.000 |
| **Laba periode** | | | (8.750.000 + 8.625.000) − 17.000.000 = **375.000** |

Satu siklus harian terdiri dari tiga langkah:

1. **Akhir hari**: buat transaksi Square Balance untuk sisa stok.
2. **Akhir hari**: jalankan [Tutup Periode](/periode/tutup-periode). Periode cabang maju ke hari berikutnya.
3. **Awal hari berikutnya**: **Reverse** Square Balance periode lalu, supaya stok valas kembali ke posisi sebelum di-square.

::: tip Cara yang lebih ringkas
[Pengaturan Periode](/periode/pengaturan-periode) menjalankan ketiga langkah itu sekaligus: membuat Square Balance, menutup periode, dan membuat reverse untuk periode baru. Halaman ini untuk cara manual langkah demi langkah.
:::

## Isi halaman

Halaman berisi dua tabel:

- **Periode sebelumnya**: Square Balance dari periode lalu. Di sinilah tombol **Reverse** muncul.
- **Periode saat ini**: Square Balance yang dibuat di periode berjalan.

Kolomnya **Tipe**, **Faktur**, **Total**, **Status**, dan **Action**.

| Ikon | Muncul di | Fungsi |
|---|---|---|
| **Show** | Kedua tabel | Melihat rincian valas dalam faktur itu |
| **Delete** | Periode saat ini | Menghapus Square Balance beserta jurnalnya |
| **Reverse** | Periode sebelumnya | Membuat transaksi kebalikannya di periode berjalan. Hanya muncul bila Square Balance itu belum pernah di-reverse |

## Membuat Square Balance

1. Klik **Create**. Halaman **Transaksi Square Balance** terbuka dengan **Tipe Pelanggan** dan **Pelanggan** sudah terisi *Square Balance*.
2. Pilih **Tipe Transaksi**.
3. Di **Data Valas**, klik **Cari**, pilih valasnya, lalu isi **Jumlah**. **Kurs** terisi otomatis.
4. Klik **Tambah ke Tabel**. Ulangi untuk setiap valas.
5. Periksa **Total (Rp)**, lalu klik **Simpan**.

Kalau ada valas yang stoknya minus, aplikasi otomatis membuat transaksi penyesuaian (pembelian) untuk valas itu. Transaksi ini terhubung dengan Square Balance-nya.

## Reverse

Di awal hari berikutnya, klik ikon **Reverse** di tabel **Periode sebelumnya**, lalu konfirmasi *"Anda akan menambahkan transaksi square balance baru berdasarkan transaksi ini."* Transaksi kebalikannya muncul di tabel **Periode saat ini**.

Kalau lupa melakukan reverse, stok valas di periode baru tetap berada pada posisi setelah di-square, dan laporan stok serta laba menjadi tidak tepat.

## Terkait

- [Tutup Periode](/periode/tutup-periode)
- [Pengaturan Periode](/periode/pengaturan-periode)
