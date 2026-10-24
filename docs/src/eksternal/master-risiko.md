---
outline: deep
---

# Master Risiko

Menu: **Eksternal → Lainnya → Master Risiko** (judul halaman: **Master Tingkat Risiko**)

Daftar tingkat risiko untuk **pekerjaan**, **kewarganegaraan**, dan **kabupaten/kota**. Angka ini menjadi dasar skor pada [Matriks Resiko](/pelanggan/skrining/tingkat-resiko) dan menentukan pelanggan mana yang wajib mengisi [Formulir CDD / EDD](/transaksi/cdd-edd).

## Cara kerjanya

Setiap isian diberi satu tingkat, dan tingkat itu menjadi skor:

| Tingkat | Skor |
|---|---|
| **Tinggi** | 3 |
| **Menengah** | 2 |
| **Rendah** | 1 |

Skor ini mengisi tiga dari enam parameter penilaian risiko pelanggan:

| Tab | Parameter di Matriks Resiko |
|---|---|
| **Pekerjaan** | **PEP** (bersama status PEP pelanggan) |
| **Kewarganegaraan** | **NEG** |
| **Kabupaten/Kota** | **KOTA**, yaitu kabupaten/kota cabang tempat transaksi terjadi |

Tiga parameter lainnya (nominal, frekuensi, dan valas) dihitung otomatis dan tidak diatur di sini.

## Melihat daftar

1. Buka **Eksternal → Lainnya → Master Risiko**.
2. Pilih tab **Pekerjaan**, **Kewarganegaraan**, atau **Kabupaten/Kota**.
3. Ketik di kolom **Cari …** untuk mencari satu isian.
4. Klik **Semua**, **Tinggi**, **Menengah**, atau **Rendah** untuk menyaring. Angka di tombol adalah jumlah isian pada tingkat itu.

Jabatan yang bukan Super Admin hanya melihat tabel, tanpa pilihan untuk mengubah.

## Mengubah tingkat

Hanya **Super Admin** yang bisa mengubah. Yang lain mendapat pesan akses ditolak bila memaksa.

1. Di tab yang dituju, ubah **Tingkat Risiko** pada baris yang perlu. Perubahan baru tersimpan setelah langkah 2.
2. Klik **Simpan [nama tab]**, misalnya **Simpan Pekerjaan**.

Muncul pesan seperti *"Pekerjaan: 3 tingkat risiko diperbarui."* Setiap tab disimpan sendiri, jadi simpan satu tab dulu sebelum pindah ke tab lain. Perubahan di tab yang belum disimpan tidak ikut terkirim.

Bila tidak ada yang berubah, jumlah yang diperbarui adalah 0. Setiap perubahan tercatat di [Log Aktivitas](/staff/log-aktivitas) lengkap dengan tingkat lama dan barunya.

::: warning Berlaku untuk seluruh pengguna ValasPro
Daftar pekerjaan, kewarganegaraan, dan kabupaten/kota dipakai bersama oleh semua perusahaan di ValasPro. Mengubah tingkat di sini mengubah penilaian **Nasabah Beresiko** dan pemicu formulir EDD untuk semuanya, bukan hanya perusahaan Anda. Ubah dengan hati-hati dan hanya bila kebijakan risiko Anda memang berubah.
:::

## Aturan

- **Hanya mengubah skor ke depan.** Penilaian yang tampil mengikuti tingkat saat ini, jadi bulan lalu pun ikut berubah bila dilihat ulang.
- **Tidak ada penambahan atau penghapusan isian.** Daftar pekerjaan, negara, dan kabupaten/kota sudah tersedia. Yang diatur hanya tingkatnya.
- Menu ini muncul bagi jabatan yang punya akses menu Master Risiko. Atur di [Daftar Akses](/staff/daftar-akses).

## Terkait

- [Matriks Resiko](/pelanggan/skrining/tingkat-resiko): hasil penilaian per pelanggan
- [Formulir CDD / EDD](/transaksi/cdd-edd)
- [PEP](/pelanggan/skrining/pep)
- [Alur Kerja Kepatuhan](/alur-kerja/kepatuhan)
