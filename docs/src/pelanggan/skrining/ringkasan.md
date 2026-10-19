---
outline: deep
---

# Skrining

Menu: **Pelanggan → Skrining**

Kumpulan halaman kepatuhan APU-PPT untuk memeriksa pelanggan terhadap daftar pengawasan dan menilai risikonya. Biasanya dipakai petugas kepatuhan atau supervisor. Kasir tidak perlu membuka menu ini, karena pemeriksaan nama berjalan otomatis di form transaksi.

## Isi halaman

Menu Skrining membuka satu halaman dengan lima tab:

| Tab | Isi |
|---|---|
| [DTTOT](/pelanggan/skrining/dttot) | Daftar Terduga Teroris dan Organisasi Teroris dari PPATK |
| [DPPSPM](/pelanggan/skrining/dppspm) | Daftar Pendanaan Proliferasi Senjata Pemusnah Massal dari PPATK |
| [PEP](/pelanggan/skrining/pep) | Pelanggan yang ditandai *Politically Exposed Person* |
| [Matriks Resiko](/pelanggan/skrining/tingkat-resiko) | Skor risiko pelanggan per bulan |
| [Riwayat](/pelanggan/skrining/riwayat) | Catatan setiap kecocokan nama dengan DTTOT atau DPPSPM, beserta keputusan petugas |

Tab yang tampil mengikuti hak akses Anda. DTTOT, PEP, dan Riwayat tampil bersama, sedangkan DPPSPM dan Matriks Resiko punya hak akses sendiri.

## Cara kerja skrining

1. Setiap kali kasir menyimpan transaksi, nama pelanggan dicocokkan dengan daftar DTTOT dan DPPSPM, termasuk alias. Pencocokan memakai **kemiripan nama**, bukan nama yang persis sama.
2. Bila ada nama yang mirip, form transaksi menampilkan kotak peringatan dengan label dan skor kemiripan:

   | Skor | Label | Akibat di form transaksi |
   |---|---|---|
   | 90% ke atas | **Sangat mirip** | Simpan terkunci sampai kasir mengonfirmasi dan menulis alasan |
   | 75–89% | **Mirip** | Simpan terkunci sampai kasir mengonfirmasi dan menulis alasan |
   | 60–74% | **Perlu dicek** | Simpan tetap aktif |

3. Setiap kecocokan dicatat di tab [Riwayat](/pelanggan/skrining/riwayat). Transaksi dengan pelanggan yang bersih tidak dicatat.

Langkah kasir saat peringatan muncul ada di [Indikasi DTTOT](/alur-kerja/kasir#indikasi-dttot).

## Terkait

- [Daftar Pelanggan](/pelanggan/daftar-pelanggan), tempat status PEP dan blacklist diatur
- [Master Risiko](/eksternal/master-risiko), sumber nilai parameter Matriks Resiko
- [Formulir CDD / EDD](/transaksi/cdd-edd)
