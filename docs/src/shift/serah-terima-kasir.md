---
outline: deep
---

# Serah Terima Kasir

Menu: **Shift → Serah Terima Kasir**

Mencatat perpindahan kas IDR dan valas dari satu kasir ke kasir lain, misalnya saat pergantian shift atau saat pulang. Penerima menghitung fisiknya sebelum menerima, jadi tanggung jawab atas kas berpindah dengan jelas.

## Isi halaman

| Bagian | Isi |
|---|---|
| **Pemegang kas** | Kasir yang terakhir menerima kas. Hanya orang ini yang bisa menyerahkan |
| **Shift berjalan** | Hanya tampil di cabang dengan lebih dari satu shift. Shift naik lewat serah terima bertanda ganti shift |
| **Menunggu Anda** | Serah terima yang menunggu Anda terima. Bagi supervisor, termasuk selisih yang belum ditinjau |
| **Riwayat Serah Terima** | Semua serah terima. Saring dengan chip **Semua**, **Menunggu Diterima**, **Diterima**, **Ditolak / Dibatalkan**, atau **Perlu Ditinjau** |

Tombol di atas riwayat: **Serahkan Kas**, **Hitung & Terima**, **Pindah Shift**, dan **Ambil Alih Kas**. Tombol yang tampil bergantung pada peran Anda saat itu.

## Menyerahkan kas

Syarat menyerahkan:

- Anda adalah pemegang kas. Kalau cabang belum pernah melakukan serah terima, siapa pun boleh menyerahkan.
- Tidak ada serah terima lain yang masih menunggu.
- Tidak ada transaksi **belum dibayar** atau **menunggu**, pada tanggal berapa pun.

Langkahnya:

1. Klik **Serahkan Kas**.
2. Pilih **Kasir penerima**. Yang bisa dipilih adalah pengguna aktif di cabang ini yang punya akses Serah Terima Kasir.
3. Di cabang dengan lebih dari satu shift, biarkan tanda centang **Ganti shift** bila serah terima ini sekaligus pergantian shift.
4. Periksa **Aktivitas Sejak Serah Terima Terakhir** (transaksi jual dan beli yang sudah lunas), **Kas IDR diserahkan**, dan **Valas Diserahkan**.
5. Isi **Catatan** bila perlu, misalnya *ada uang rusak yang disisihkan di amplop*.
6. Klik **Serahkan**, lalu konfirmasi.

Angka kas dan valas diambil dari sistem saat Anda menekan Serahkan. Penerima tidak melihat angka ini sampai selesai menghitung.

::: warning Transaksi terkunci sementara
Selama serah terima belum diterima atau ditolak, transaksi baru, PB Valas, dan pinjaman valas di cabang tidak bisa dibuat. Pesan yang muncul: *Peringatan!! Proses Serah Terima Kasir Sedang Berlansung Transaksi Tidak Dapat Dilakukan*.
:::

Serah terima yang belum diterima masih bisa dibatalkan oleh penyerahnya. Buka serah terima itu, klik **Batalkan**, lalu **Batalkan Serah Terima**.

## Menerima kas

1. Klik **Hitung & Terima**. Halaman **Hitung & Terima Kas** terbuka.
2. Hitung fisik setiap valas dan kas IDR, lalu isi kolom **Fisik**. Semua baris wajib diisi. Isi 0 bila fisiknya memang tidak ada.
3. Klik **Cocokkan**. Kolom **Diserahkan** dan **Selisih** baru muncul setelah langkah ini.
4. Kalau hasilnya *Semua cocok.*, klik **Terima Kas**.
5. Kalau hasilnya *Ada selisih:*, hitung ulang baris yang berbeda. Kalau selisihnya memang nyata, isi **Alasan selisih** di setiap baris itu, lalu klik **Terima Kas**. Serah terima ini akan ditandai **Perlu Ditinjau** untuk supervisor.

Kalau Anda tidak bersedia menerima, misalnya karena selisihnya terlalu besar untuk dijelaskan, klik **Tolak** dan tuliskan **Alasan penolakan**. Kas tetap di tangan penyerah.

## Pindah Shift

Di cabang dengan lebih dari satu shift, **Pindah Shift** dipakai bila kasir yang sama melanjutkan ke shift berikutnya. Kasirnya tidak berganti, jadi tidak ada hitung fisik. Kalau kasirnya berganti, pakai **Serahkan Kas**.

Shift tidak bisa naik melewati jumlah shift cabang. Shift kembali ke 1 saat [Buka Hari](/shift/buka-hari).

## Untuk supervisor

- **Tandai Ditinjau**: buka serah terima berlabel **Perlu Ditinjau**, baca alasan selisihnya, klik **Tandai Ditinjau**, lalu tulis catatan tindak lanjut. Tindakan ini tidak mengubah jurnal atau stok.
- **Ambil Alih Kas**: dipakai bila pemegang kas berhalangan, misalnya sakit atau sudah keluar, supaya cabang tidak terkunci. Tulis **Alasan**-nya. Semua serah terima yang masih menunggu akan dibatalkan, dan Anda menjadi pemegang kas tanpa hitung fisik.

## Berita acara

Setiap serah terima punya tombol **Cetak Berita Acara** di halaman detailnya, untuk ditandatangani penyerah dan penerima.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#serah-terima-kasir)
- [Mencetak faktur](/alur-kerja/kasir#mencetak-faktur): nama kasir di faktur diambil dari pemegang kas terakhir.
