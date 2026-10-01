---
outline: deep
---

# Informasi Kurs

Menu: **Transaksi → Informasi Kurs**

Papan kurs cabang: kurs beli dan jual yang sedang berlaku, beserta stok setiap valas. Kasir biasanya membukanya di awal hari dan menjadikannya pegangan sepanjang hari.

![Informasi Kurs: papan kurs cabang](/informasi-kurs-papan.png)

## Isi halaman

| Kolom | Artinya |
|---|---|
| **Valas** | Kode dan nama valas |
| **Beli** | Kurs saat cabang membeli valas dari pelanggan |
| **Jual** | Kurs saat cabang menjual valas ke pelanggan |
| **Brankas** | Saldo berjalan di brankas, termasuk titipan valas pelanggan |
| **Akhir** | Saldo akhir periode, termasuk transaksi yang belum dibayar. Klik angkanya untuk membuka riwayat mutasi valas itu |
| **Akhir (USD)** | Saldo akhir yang disetarakan ke USD memakai kurs BI |
| **Total Akhir (USD)** | Jumlah kolom Akhir (USD) untuk semua valas |

Kurs yang tampil adalah kurs yang sudah **diterbitkan** di **Master → Pengaturan Kurs**. Kurs yang masih draf belum tampil di sini dan belum dipakai di form transaksi. Kurs berganti otomatis menurut jam: kurs **shift 1** berlaku sebelum pukul 10.00, dan kurs **shift 2** sesudahnya.

## Melihat riwayat mutasi valas

Klik angka di kolom **Akhir**. Jendela **Riwayat Valas** menampilkan stok awal, setiap faktur yang menambah (**Masuk**) atau mengurangi (**Keluar**) stok, dan stok akhirnya. Klik nomor faktur untuk membuka fakturnya.

![Jendela Riwayat Valas untuk USD](/informasi-kurs-riwayat.png)

## Mencetak

Klik **Ekspor Cetak** untuk membuka papan kurs dalam tampilan siap cetak.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#memastikan-kurs-sudah-terbit)
- [Menerbitkan kurs](/alur-kerja/supervisor#menerbitkan-kurs)
- [Transaksi Valas](/transaksi/transaksi-valas)
