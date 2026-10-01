---
outline: deep
---

# Pengaturan Periode

Menu: **Periode → Pengaturan Periode**

::: info Untuk perusahaan dengan metode laba Square Balance
Lihat [Square Balance](/periode/square-balance) untuk konsepnya.
:::

Halaman ini menjalankan siklus akhir hari Square Balance dalam satu proses: membuat Square Balance, menutup periode, lalu membuat Reverse Square Balance untuk periode baru. Kalau perlu, jurnal setor laba juga dibuat sekaligus. Halaman ini juga dipakai untuk **mereset** periode yang sudah ditutup.

## Tab Ganti Periode

1. Lihat **Periode Aktif Saat Ini**.
2. Pilih **Periode Berikutnya**. Kalau tanggal itu hari libur atau akhir pekan, muncul peringatan kuning. Anda tetap boleh memilihnya.
3. Klik **Proses & Lihat Preview**. Jendela **Konfirmasi Pengaturan Periode** terbuka.
4. Periksa isinya:
   - **Detail Square Balance yang Akan Dibuat**: valas, qty, rate, dan subtotal. Kolom **Rate** boleh diubah. Total dan estimasi laba langsung dihitung ulang.
   - **Adjustment Stok Minus**: hanya muncul bila ada valas yang stoknya minus.
   - **Estimasi Laba Periode**: *Realized Gain* dari transaksi harian, *Unrealized Gain* dari Square Balance, dan totalnya.
5. Centang **Buat jurnal setor laba secara otomatis** bila perlu.
6. Klik **Konfirmasi & Proses**.

::: warning Tidak dapat dibatalkan lewat tombol Batal
Proses ini mengubah periode cabang dan membuat transaksi Square Balance beserta reverse-nya. Untuk mengembalikannya, pakai **Reset Periode** di bawah.
:::

Panel **Histori** mencatat setiap penutupan: periode, dibuat oleh, dan dibuat pada. Saring per tanggal lewat **Filter periode...**.

## Tab Reset Periode

Dipakai bila ada periode yang terlanjur ditutup dan perlu diulang, misalnya karena kurs penutupannya salah.

1. Di **Pilih Tanggal Reset**, pilih tanggal sebelum periode aktif. Alternatifnya, klik **Reset dari sini** di baris Histori.
2. Baca peringatan di jendela **Konfirmasi Reset Periode**, lalu klik **Ya, Reset**.

Yang **dihapus permanen** mulai dari tanggal itu sampai periode terbaru: semua Square Balance, Reverse Square Balance, jurnal terkait (termasuk setor laba), dan data closing. Periode aktif dikembalikan ke tanggal yang dipilih, lalu Anda perlu menutup periode ulang dari sana.

Transaksi valas biasa dengan pelanggan **tidak** terpengaruh.

## Terkait

- [Square Balance](/periode/square-balance)
- [Tutup Periode](/periode/tutup-periode)
