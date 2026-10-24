---
outline: deep
---

# Daftar Transaksi

Menu: **Transaksi → Daftar Transaksi** (judul halaman: **Data Transaksi Valas**)

Semua faktur transaksi valas cabang. Dari sini kasir melihat rincian, mencetak ulang faktur dan formulir CDD/EDD, serta mengubah atau membatalkan faktur.

![Daftar Transaksi Valas](/daftar-transaksi-aksi.png)

## Isi halaman

| Bagian | Isi |
|---|---|
| **Faktur**, **Nilai Beli**, **Nilai Jual** | Jumlah faktur dan total rupiah pembelian serta penjualan, sesuai filter yang aktif |
| Chip status | **Semua**, **Belum bayar**, **Menunggu**, **Lunas**, **Batal**, masing-masing dengan jumlahnya. Klik untuk menyaring |
| Filter | Rentang periode, **Semua tipe** (beli atau jual), **Semua kategori** pelanggan, dan kotak cari faktur, pelanggan, atau valas |
| Kotak centang | Untuk tindakan massal seperti **Hapus Transaksi** dan **Reset Pembayaran** |
| **Aksi** | Ikon tindakan per faktur. Lihat tabel di bawah |

Tombol **Tambah** membuka [Transaksi Valas](/transaksi/transaksi-valas). Fitur tabel lainnya dijelaskan di [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter).

## Status faktur

| Status | Artinya |
|---|---|
| **Belum bayar** | Faktur sudah disimpan, tetapi belum dibayar di [Pembayaran Valas](/transaksi/pembayaran-valas) |
| **Menunggu** | Transaksi **Antar Cabang** yang menunggu diproses cabang tujuan. Lihat [Antar Cabang](/transaksi/transaksi-antarcabang) |
| **Lunas** | Faktur sudah dibayar. Stok brankas dan kas sudah bergerak |
| **Batal** | Faktur sudah dihapus. Tetap tersimpan sebagai arsip di [Transaksi Batal](/transaksi/transaksi-batal) |

## Ikon aksi

| Ikon | Kapan muncul | Fungsi |
|---|---|---|
| **Lihat rincian** | Selalu | Membuka **Detail Faktur**: valas, jumlah, kurs, dan total |
| **Cetak faktur** | Faktur selain Batal, untuk pelanggan Retail, Corporate, Money Changer, atau Bank | Mencetak ulang faktur |
| **Cetak CDD** / **Cetak EDD** | Sama dengan Cetak faktur | Membuka [formulir CDD/EDD](/transaksi/cdd-edd). Labelnya EDD bila pelanggan PEP atau pekerjaannya berisiko tinggi |
| **Tandai transaksi mencurigakan (LTKM)** | Bila Anda punya akses laporan PPATK | Menandai faktur untuk dilaporkan sebagai LTKM. Bendera berubah bila sudah ditandai atau dilaporkan |
| **Ubah faktur** | Belum bayar, dan Anda punya akses **Ubah Faktur** | Membuka form transaksi untuk diubah |
| **Hapus faktur** | Belum bayar atau Menunggu, dan Anda punya akses **Hapus Faktur** | Membatalkan faktur. Statusnya menjadi Batal |
| **Reset pembayaran** | Lunas, dan Anda punya aksesnya | Membatalkan pembayaran supaya faktur kembali Belum bayar. Semua jurnal transaksi itu ikut dihapus |

![Jendela Detail Faktur](/daftar-transaksi-rincian.png)

## Mengubah faktur yang sudah lunas

1. Klik **Reset pembayaran**, lalu konfirmasi. Status faktur kembali **Belum bayar**.
2. Klik **Ubah faktur**, perbaiki, lalu simpan.
3. Bayar lagi di [Pembayaran Valas](/transaksi/pembayaran-valas).

## Mengimpor transaksi dari Excel

Dipakai untuk memindahkan transaksi lama dari aplikasi lain. Untuk transaksi harian, tetap pakai [Transaksi Valas](/transaksi/transaksi-valas). Tombol **Impor Excel** hanya tampil bagi pengguna yang jabatannya diberi izin **Impor Transaksi** (di Hak Akses). Bawaannya izin ini hanya dimiliki Super Admin.

Impor dengan urutan ini: [pecahan valas](/master/pecahan-valas), lalu [pelanggan](/pelanggan/daftar-pelanggan#mengimpor-pelanggan-dari-excel), baru transaksi. Pelanggan dan valas tidak dibuat otomatis.

1. Klik **Impor Excel**, lalu klik **Unduh Template**.
2. Isi template. Klik **Panduan Kolom** untuk melihat aturannya:
   - Kolom wajib: `customer_id_number`, `period`, `transaction_type`, `forex`, `quantity`, `rate`. Kolom `sub_total` boleh kosong; isinya dihitung dari `quantity` × `rate`.
   - `transaction_type` diisi `buy`/`beli` atau `sell`/`jual`. `period` ditulis `yyyy-mm-dd` (`dd/mm/yyyy` juga diterima). `forex` diisi kode pecahan, misalnya `USD-100`.
   - Baris dengan pelanggan, tanggal, dan tipe yang sama digabung menjadi **satu faktur**.
   - Berkas harus .xlsx atau .xls dengan satu sheet saja.
3. Tarik berkas ke jendela **Impor Transaksi Valas**, atau klik kotaknya untuk memilih. Berkas langsung diperiksa; belum ada yang disimpan.
4. Periksa hasilnya. Jendela menampilkan jumlah faktur **Siap diimpor**, **Bermasalah**, dan **Mungkin duplikat**, nilai beli dan jual yang akan masuk, serta tabel per faktur dengan nomor baris Excel dan pesannya.
   - Pakai chip **Bermasalah**, **Mungkin duplikat**, **Ada catatan**, atau **Siap** untuk menyaring tabel.
   - Klik **Unduh faktur bermasalah (.xlsx)** untuk mendapatkan baris-baris faktur yang bermasalah dalam format template yang sama, dengan kolom `keterangan` di paling kanan berisi masalahnya. Perbaiki isinya, lalu impor berkas itu. Kolom `keterangan` tidak perlu dihapus.
   - Klik **Unduh daftar masalah (.csv)** untuk melihat semua pesan, termasuk catatan dan faktur yang mungkin duplikat.
   - Setelah berkas diperbaiki, klik **Periksa ulang** atau **Ganti berkas**.
5. Klik **Impor N faktur**. Hanya faktur yang siap yang disimpan. Nomor faktur yang terbentuk ditampilkan, dan daftar transaksi langsung diperbarui.

| Status | Artinya |
|---|---|
| **Siap** | Faktur akan diimpor. Bila ada catatan di bawahnya (misalnya pecahan sedang nonaktif, atau `sub_total` berbeda dengan `quantity` × `rate`), cek dulu sebelum mengimpor |
| **Mungkin duplikat** | Cabang ini sudah punya faktur dengan pelanggan, tanggal, tipe, dan total yang sama. Pesannya menyebut nomor faktur tersebut. Hanya diimpor bila Anda mencentang **Tetap impor faktur yang mungkin duplikat** |
| **Bermasalah** | Faktur tidak diimpor. Pesannya menyebut baris mana yang salah dan apa salahnya |

::: warning Satu baris salah, satu faktur dilewati
Bila satu baris dalam faktur bermasalah, **seluruh faktur** itu dilewati, bukan hanya barisnya. Perbaiki baris tersebut lalu impor ulang berkas yang sama. Faktur yang sudah masuk sebelumnya akan muncul sebagai **Mungkin duplikat**, jadi tidak tergandakan.
:::

Faktur hasil impor berstatus **Belum bayar** dan tidak melalui pemeriksaan stok. Selesaikan pembayarannya di [Pembayaran Valas](/transaksi/pembayaran-valas). Tanggal yang sudah ditutup ditolak, dan batas faktur bulanan paket langganan tetap berlaku. Setiap impor tercatat di [Log Aktivitas](/staff/log-aktivitas).

## Aturan

- **Hapus berarti batal.** Faktur yang dihapus tidak bisa dikembalikan, tetapi tetap tercatat di Transaksi Batal.
- **Periode tertutup terkunci.** Faktur pada tanggal yang sudah direkonsiliasi atau ditutup tidak bisa diubah, dihapus, atau di-reset.
- **Faktur hasil penyelesaian deposit valas** tidak bisa diubah atau dihapus dari sini.
- **Ubah dan hapus punya hak akses sendiri.** Bisa membuka Daftar Transaksi tidak otomatis berarti bisa mengubah atau menghapus faktur. Admin mengaturnya di Staff → Daftar Jabatan → Hak Akses, kategori Transaksi: **Ubah Faktur** dan **Hapus Faktur**. Tombol **Hapus Transaksi** untuk faktur yang dicentang juga butuh **Hapus Faktur**.
- **Bisa wajib disetujui atasan.** Bila perusahaan menyalakan [Persetujuan Atasan](/mulai/fitur-opsional#fitur-lain), hapus faktur dan reset pembayaran membuka jendela **Persetujuan Atasan**. Atasan mengisi username dan kata sandinya sendiri, lalu klik **Setujui**. Untuk faktur yang dicentang, satu persetujuan berlaku untuk semuanya. Bila salah 5 kali, tunggu beberapa menit sebelum mencoba lagi.

## Terkait

- [Alur Kerja Kasir](/alur-kerja/kasir#mengubah-atau-membatalkan)
- [Pembayaran Valas](/transaksi/pembayaran-valas)
- [Transaksi Batal](/transaksi/transaksi-batal)
