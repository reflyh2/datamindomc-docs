---
outline: [2, 3]
---

# Alur Kerja Admin

Tugas admin perusahaan: menyiapkan perusahaan di awal, mengelola pengguna dan hak aksesnya, mengatur fitur opsional, lalu memantau apa yang terjadi.

```
SEKALI       Perusahaan → Area → Cabang → Pengaturan Cabang
DI AWAL      Pengaturan Umum → Dokumen → Hari Libur → Pecahan Valas → kurs awal → saldo awal
KETIKA ADA   Karyawan baru:  tambah Pengguna, pilih Jabatan
KEBUTUHAN    Karyawan keluar: Nonaktifkan
             Tugas baru:      buat Jabatan, atur Hak Akses
RUTIN        Periksa Log Aktivitas, tinjau pengguna dan hak akses
```

## Menyiapkan perusahaan baru

Kerjakan berurutan. Tiap langkah menjadi syarat langkah berikutnya.

| # | Langkah | Menu | Panduan |
|---|---|---|---|
| 1 | Isi data perusahaan | **Pengaturan → Perusahaan** | [Perusahaan](/pengaturan/pengaturan-perusahaan/perusahaan) |
| 2 | Buat area | **Pengaturan → Perusahaan**, bagian **Area** | [Area](/pengaturan/pengaturan-perusahaan/area) |
| 3 | Buat cabang | **Pengaturan → Perusahaan**, bagian **Cabang** | [Cabang](/pengaturan/pengaturan-perusahaan/cabang) |
| 4 | Atur modal, shift, dan periode cabang | **Pengaturan → Perusahaan**, bagian **Pengaturan Cabang** (hanya pada metode Square Balance) | [Pengaturan Cabang](/pengaturan/pengaturan-perusahaan/pengaturan-cabang) |
| 5 | Isi setelan perusahaan dan akun akuntansi | **Pengaturan → Umum** | [Pengaturan Umum](/pengaturan/pengaturan-umum) |
| 6 | Atur invoice dan kop surat | **Pengaturan → Dokumen** | [Pengaturan Dokumen](/pengaturan/pengaturan-dokumen) |
| 7 | Isi tanggal libur | **Pengaturan → Hari Libur** | [Hari Libur](/pengaturan/hari-libur) |
| 8 | Daftarkan pecahan valas | **Master → Pecahan Valas** | [Pecahan Valas](/master/pecahan-valas) |
| 9 | Terbitkan kurs pertama | **Master → Pengaturan Kurs** | [Pengaturan Kurs](/master/pengaturan-kurs) |
| 10 | Buat jabatan dan pengguna | **Staff → Pengguna & Jabatan** | Bagian di bawah |
| 11 | Isi saldo awal stok valas, kas IDR dan rekening bank | **Keuangan → Jurnal**, lalu **Transaksi → Transaksi Valas** | [Mengisi Saldo Awal Valas, Kas dan Bank](/alur-kerja/saldo-awal) |

### Yang paling sering terlewat

- **Akun di Penghubung Akun.** Transaksi baru baru bisa dibayar setelah akun wajib terisi: Akun Pembelian, Akun Penjualan, dan Akun Kas IDR (di mode HPP ditambah Akun Persediaan Valas). Kartu **Kesiapan konfigurasi** di Pengaturan Umum menunjukkan apa yang kurang.
- **Metode Laba.** Memilih HPP atau Square Balance menentukan menu yang muncul dan cara periode berjalan. Putuskan sebelum ada transaksi. Mengganti belakangan punya aturan sendiri, lihat [Pengaturan Umum](/pengaturan/pengaturan-umum#mengganti-metode-laba).
- **Batas paket.** Jumlah pengguna dan cabang dibatasi paket langganan. Saat batas tercapai, tombol **Tambah** tidak bisa diklik.
- **Hari libur.** Isi sebelum pelaporan PPATK dimulai, karena tenggat LTKT dan LTKM dihitung dalam hari kerja.

## Mengelola pengguna dan akses

Menu: **Staff → Pengguna & Jabatan**. Rincian di [Pengguna & Jabatan](/staff/pengguna-jabatan).

Hak akses diberikan ke **jabatan**, bukan ke pengguna. Satu pengguna punya satu jabatan, dan jabatan menentukan menu serta tindakan yang boleh dibuka.

### Karyawan baru

1. Pastikan jabatan yang cocok sudah ada. Bila belum, buat atau **Salin** dari jabatan yang mirip di tab **Jabatan**, lalu atur hak aksesnya.
2. Di tab **Pengguna**, klik **Tambah**. Isi **Nama**, **Cabang**, **Jabatan**, **Username**, **Email**, dan **Kata Sandi** (minimal 8 karakter), lalu **Simpan**.
3. Minta karyawan mengganti kata sandinya sendiri setelah masuk pertama kali.

### Karyawan keluar atau cuti

Pilih **⋮ → Nonaktifkan**. Pengguna tidak bisa masuk lagi dan sesinya langsung berakhir, tetapi riwayat transaksinya tetap utuh. **Hapus** hanya bisa untuk pengguna yang belum pernah membuat transaksi, jurnal, serah terima kasir, atau tutup periode.

::: warning Pengguna nonaktif tetap memakai kursi
Kursi paket baru lepas setelah pengguna **dihapus**. Bila kursi penuh dan akun lama tidak punya riwayat, hapus akunnya.
:::

Untuk perangkat yang hilang atau komputer bersama yang lupa ditinggal, pakai **⋮ → Paksa keluar**. Bila kata sandi mungkin sudah diketahui orang lain, ganti juga kata sandinya lewat **Ubah**.

### Mengatur hak akses

Di tab **Jabatan**, pilih **⋮ → Atur hak akses**. Katalog seluruh hak akses beserta jabatan yang memakainya ada di [Daftar Akses](/staff/daftar-akses).

Beberapa pasangan hak sebaiknya tidak dipegang satu orang, misalnya yang membuat sekaligus menyetujui. ValasPro menampilkan peringatan saat Anda mengaturnya atau memakai **Bandingkan jabatan**, tetapi tidak memblokir. Keputusan akhir ada pada Anda.

Contoh hak yang sering diminta:

| Kebutuhan | Hak akses |
|---|---|
| Petugas kepatuhan mencatat nomor LTKT dan LTKM | **Mencatat nomor laporan PPATK** |
| Pegawai boleh berpindah ke cabang lain | **Pindah ke cabang lain**. Lihat [Pindah Cabang](/pengaturan/pindah-cabang) |
| Atasan boleh menyetujui hapus faktur | **Setujui Hapus Faktur** |

## Mengatur fitur opsional

Menu: **Pengaturan → Umum**. Panduan lengkapnya di [Fitur Opsional](/mulai/fitur-opsional).

Beberapa fitur mengubah menu dan form transaksi untuk seluruh perusahaan. Nyalakan sesuai kebijakan kantor, bukan sekadar karena tersedia:

| Fitur | Akibatnya |
|---|---|
| **Rekonsiliasi Harian** | Menu **Rekonsiliasi & Tutup Hari** muncul, dan periode maju manual |
| **Otorisasi Kurs** | Kurs yang jauh dari kurs terbit harus disetujui supervisor |
| **Peringatan Underlying** | Faktur pelanggan yang melewati batas bulanan tertahan. Lihat [Menangani Batas Underlying](/alur-kerja/underlying) |
| **Persetujuan Atasan** | Hapus faktur, reset pembayaran, dan terbitkan kurs memerlukan pengguna kedua |

Setelan berlabel **Super Admin** terkunci bagi admin biasa. Hubungi Super Admin bila perlu mengubahnya.

### Persetujuan Atasan

Bila fitur ini dinyalakan, pastikan ada pengguna lain yang jabatannya punya hak **Setujui …** yang sesuai. Tanpa itu, aksi terkait tidak bisa diselesaikan. Atasan harus pengguna lain di perusahaan yang sama. Nama atasan yang menyetujui tercatat di Log Aktivitas.

## Rutin: memantau

### Log Aktivitas

Menu: **Staff → Log Aktivitas**. Rincian di [Log Aktivitas](/staff/log-aktivitas).

Periksa berkala, misalnya mingguan:

- **Gagal login (7 hari)** yang tinggi pada satu pengguna: kemungkinan ada yang mencoba menebak kata sandi.
- Aktivitas **Staf & Hak Akses**: siapa menambah pengguna atau mengubah hak akses.
- Aktivitas berwarna merah (pembatalan dan penghapusan) pada **Transaksi** dan **Jurnal**.
- Perubahan **Pengaturan** dan **Kurs**: siapa mengubah setelan perusahaan atau menerbitkan kurs.

### Pindah Cabang

Untuk memeriksa transaksi atau laporan cabang lain tanpa keluar, lihat [Pindah Cabang](/pengaturan/pindah-cabang). Ingat kembali ke cabang asal setelah selesai, supaya transaksi berikutnya tidak tercatat di cabang yang salah.

## Menu lain di sidebar

Beberapa menu dipakai admin hanya sesekali dan belum punya panduan sendiri di sini, misalnya **Hutang Piutang**, **Tagihan Langganan**, dan **ECSys**. Tanyakan ke kami bila perusahaan Anda memakainya.

## Kejadian → menu

| Kejadian | Menu |
|---|---|
| Karyawan baru | **Staff → Pengguna & Jabatan**, tab **Pengguna** |
| Karyawan keluar | **Staff → Pengguna & Jabatan → ⋮ → Nonaktifkan** |
| Tugas baru yang butuh hak tambahan | **Staff → Pengguna & Jabatan**, tab **Jabatan** |
| Ingin tahu siapa mengubah sesuatu | **Staff → Log Aktivitas** |
| Cabang baru dibuka | **Pengaturan → Perusahaan**, bagian **Cabang** |
| Tanggal libur nasional | **Pengaturan → Hari Libur** |
| Ganti tampilan invoice atau kop surat | **Pengaturan → Dokumen** |
| Menyalakan atau mematikan fitur | **Pengaturan → Umum** |

## Terkait

- [Mengisi Saldo Awal Valas, Kas dan Bank](/alur-kerja/saldo-awal)
- [Pengguna & Jabatan](/staff/pengguna-jabatan)
- [Daftar Akses](/staff/daftar-akses)
- [Log Aktivitas](/staff/log-aktivitas)
- [Pengaturan Umum](/pengaturan/pengaturan-umum)
- [Fitur Opsional](/mulai/fitur-opsional)
