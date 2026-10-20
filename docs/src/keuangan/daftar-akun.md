---
outline: [2, 3]
---

# Daftar Akun

Menu: **Keuangan → Daftar Akun**

Daftar Akun adalah bagan akun (chart of accounts) cabang Anda: semua akun yang dipakai jurnal, beserta saldonya. Di menu ini bagian akunting menambah akun, mengubah nama atau nomornya, dan melihat saldo per akun.

![Daftar Akun: ringkasan dan bagan akun](/daftar-akun.png)

## Isi halaman

### Ringkasan

| Kotak | Isi |
|---|---|
| **Jumlah akun** | Jumlah akun di bagan, dengan rincian berapa akun induk dan berapa sub-akun |
| **Aktiva** | Total saldo akun 1xxxx di cabang ini |
| **Kewajiban** | Total saldo akun 2xxxx di cabang ini |
| **Ekuitas** | Total saldo akun 3xxxx di cabang ini |

### Bagan Akun

Akun ditampilkan sebagai pohon: akun induk di atas, sub-akunnya menjorok di bawahnya. Klik tanda panah di depan akun induk untuk melipat atau membuka sub-akunnya. **Buka semua** dan **Lipat semua** melakukannya untuk seluruh bagan.

| Kolom | Isi |
|---|---|
| **Kode** | Nomor akun |
| **Nama Akun** | Nama akun. Akun induk ditulis tebal |
| **Kategori** | Jenis akun, misalnya *Kas & Bank* atau *Akun Piutang* |
| **Mata Uang** | Mata uang akun. Akun valas punya saldo valas sendiri |
| **Penanda** | Label **Modal** untuk akun modal, tombol **Multi Cabang** untuk akun antarcabang, dan ikon gembok untuk akun yang terkunci |
| **Saldo (Rp)** | Saldo akun dalam rupiah |
| **Saldo Valas** | Saldo dalam mata uang akun. Tertulis *—* bila nol atau akun rupiah |

Saldo dihitung dari seluruh jurnal cabang yang sedang aktif. Saldo akun induk adalah jumlah sub-akunnya. Angka dalam kurung berarti saldonya berlawanan dengan sisi normal akun.

Klik **Multi Cabang** untuk membuka jendela **Saldo Multi Cabang**: saldo akun itu di setiap cabang, dikelompokkan per area. Hanya cabang yang punya saldo yang tampil.

### Menyaring bagan

| Filter | Cara mengisi |
|---|---|
| **Cari** | Ketik kode atau nama akun |
| **Kategori** | Pilih satu atau beberapa kategori. Awalnya **Semua kategori** |
| **Sembunyikan saldo nol** | Centang untuk membuang akun yang saldonya nol |

Bagan langsung tersaring saat Anda mengetik atau memilih. Klik **Hapus saringan** untuk kembali ke bagan lengkap.

### Menu aksi

Menu di ujung setiap baris berisi:

- **Detail**: membuka halaman **Detail Akun**.
- **Buku Besar**: membuka [Buku Besar](/keuangan/laporan-keuangan#buku-besar) akun itu. Hanya bila Anda punya akses Laporan Keuangan.
- **Ubah**: membuka form akun.
- **Hapus**: hanya untuk akun yang bukan induk dan tidak terkunci.

Klik **Ekspor**, lalu **Excel** atau **Cetak**, untuk mengunduh atau mencetak bagan akun.

## Menambah akun

1. Klik **Tambah Akun**.
2. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   ![Form Tambah Akun](/daftar-akun-tambah.png)

   **Identitas akun**

   | Kolom | Cara mengisi |
   |---|---|
   | **Kategori** \* | Jenis akun. Lihat [Kategori akun](#kategori-akun) |
   | **Sub-akun dari akun lain** | Centang bila akun ini berada di bawah akun induk |
   | **Induk akun** \* | Muncul bila **Sub-akun dari akun lain** dicentang. Hanya akun yang belum pernah dijurnal yang bisa menjadi induk |
   | **Nama akun** \* | Paling panjang 125 karakter |
   | **Nomor akun** \* | Terisi otomatis dengan nomor berikutnya saat kategori dipilih. Boleh diganti, paling panjang 10 karakter, dan tidak boleh sama dengan akun lain |

   **Pengaturan**

   | Kolom | Cara mengisi |
   |---|---|
   | **Akun modal** | **Ya** bila akun ini dihitung sebagai modal |
   | **Mata uang** | Awalnya **IDR**. Pilih valas untuk akun yang menyimpan saldo valas |
   | **Hanya ada di cabang** | Pilih cabang bila akun ini hanya dipakai cabang tertentu. Kosongkan untuk semua cabang |
   | **Tidak tampak di cabang** | Pilih cabang yang tidak boleh melihat akun ini |
   | **Keterangan** | Catatan bebas, paling panjang 225 karakter |
   | **Multi cabang** | Hanya untuk Super Admin. Centang untuk menghubungkan akun ini dengan akun lawan di transaksi antarcabang |
   | **Akun terhubung** \* | Muncul bila **Multi cabang** dicentang. Akun lawan di cabang lain |

3. Klik **Simpan**. Muncul pesan *Akun … berhasil disimpan.*

### Kategori akun

| Awalan nomor | Kategori |
|---|---|
| 1 | Aktiva |
| 2 | Kewajiban |
| 3 | Ekuitas |
| 4 | Pendapatan |
| 5 | Harga Pokok Penjualan |
| 6 | Beban |
| 7 | Pendapatan Lainnya |
| 8 | Beban Lainnya |
| 9 | Pajak |

Kategori menentukan letak akun di [Laporan Keuangan](/keuangan/laporan-keuangan), misalnya di Neraca atau di Laba Rugi.

## Mengubah akun

Pilih **Ubah** di menu aksi, ganti isinya, lalu klik **Simpan**. Muncul pesan *Akun … berhasil diubah.*

Pada akun induk, hanya nama, nomor, dan keterangan yang bisa diubah. Kategori, posisi, dan pengaturan cabangnya terkunci, dan saldonya selalu jumlah saldo sub-akunnya.

Selain Super Admin, pengguna tidak bisa mengubah **Akun terhubung**.

## Menghapus akun

1. Pilih **Hapus** di menu aksi.
2. Klik **Hapus** di konfirmasi *Hapus akun?*

Muncul pesan *Akun … berhasil dihapus.* Akun itu tidak tampil lagi di bagan dan tidak bisa dipilih di jurnal.

Akun hanya bisa dihapus bila:

- bukan akun induk,
- tidak terkunci, dan
- saldonya kosong.

## Detail akun

**Detail** membuka halaman **Detail Akun**, yang berisi:

- saldo rupiah dan saldo valas akun,
- kategori, mata uang, dan induk akun,
- jenis akun (**Akun induk** atau **Akun transaksi**), dengan label **Modal** atau **Terkunci** bila berlaku,
- pengaturan cabang, akun terhubung, dan keterangan,
- daftar sub-akun, bila akun ini induk.

Dari halaman ini Anda bisa langsung klik **Ubah** atau **Buku Besar**.

## Aturan

- **Akun terkunci** adalah akun bawaan yang dibuat bersama perusahaan dan dipakai jurnal otomatis, misalnya Kas IDR, Penjualan, dan Pembelian. Akun ini tidak bisa dihapus, tetapi tetap bisa diubah.
- Akun yang sudah punya jurnal tidak bisa dijadikan induk. Buat akun induk baru, lalu pindahkan sub-akun ke bawahnya.
- Saldo di Daftar Akun dan Laporan Keuangan berasal dari jurnal yang sama, jadi angkanya selalu sama.

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *Nomor akun … sudah dipakai oleh …* | Nomornya sama dengan akun lain | Pakai nomor lain |
| *Akun … sudah punya jurnal, jadi tidak bisa dijadikan induk. …* | Induk yang dipilih sudah pernah dijurnal | Pilih induk lain |
| *Induk akun tidak boleh akun itu sendiri atau sub-akunnya.* | Akun dipindah ke bawah dirinya sendiri | Pilih induk lain |
| *Akun induk tidak bisa dihapus. Pindahkan atau hapus sub-akunnya dulu.* | Akun masih punya sub-akun | Pindahkan atau hapus sub-akunnya |
| *Akun … terkunci karena dipakai sistem, jadi tidak bisa dihapus.* | Akun bawaan sistem | Biarkan akunnya. Ganti namanya bila perlu |
| *Saldo akun harus kosong sebelum bisa dihapus.* | Akun masih bersaldo | Pindahkan saldonya lewat [Jurnal](/keuangan/jurnal) dulu |
| *Tidak ada akun yang cocok dengan saringan.* | Saringan terlalu sempit | Klik **Hapus saringan** |

## Terkait

- [Jurnal](/keuangan/jurnal)
- [Laporan Keuangan](/keuangan/laporan-keuangan)
- [Hutang Piutang Cabang](/keuangan/hutang-piutang-cabang)
- [Pengaturan Umum](/pengaturan/pengaturan-umum)
