---
outline: [2, 3]
---

# Alur Kerja Kepatuhan

Tugas petugas kepatuhan (APU-PPT): meninjau kecocokan nama pelanggan, menangani pelanggan berisiko, melapor ke PPATK, dan menyiapkan laporan bulanan untuk Bank Indonesia.

```
HARIAN       Tinjau Riwayat Skrining (kecocokan DTTOT/DPPSPM)
             Tinjau LTKM → Sinyal, dan LTKT yang mendekati tenggat
             Tangani faktur tertahan batas underlying
BERKALA      LTKT: kirim ke PPATK sebelum 14 hari kerja
             LTKM: kirim ke PPATK dalam 3 hari kerja sejak ditandai
AKHIR BULAN  Rekap Bulanan underlying, LKU, Laporan Keuangan BI, KUPVA, SIPESAT
             Tinjau Matriks Resiko
```

## Harian: meninjau skrining

Menu: **Pelanggan → Skrining**. Rincian setiap tab ada di [Ringkasan Skrining](/pelanggan/skrining/ringkasan).

Setiap kali kasir menyimpan transaksi, nama pelanggan dicocokkan otomatis dengan daftar pengawasan. Kasir yang menemui peringatan wajib menulis alasan sebelum melanjutkan. Tugas Anda adalah menilai ulang keputusan itu.

1. Buka tab [Riwayat](/pelanggan/skrining/riwayat). Mulai dari kecocokan **Kemiripan Tinggi** (skor 90% ke atas), lalu **Kemiripan Menengah**.
2. Baca keputusan dan alasan kasir. Bila alasannya tidak meyakinkan, tindak lanjuti: hubungi kasir, minta dokumen pelanggan, atau pertimbangkan [LTKM](#bila-curiga-ltkm).
3. Bila daftar pengawasan berubah, perbarui [DTTOT](/pelanggan/skrining/dttot) dan [DPPSPM](/pelanggan/skrining/dppspm) dari berkas terbaru PPATK. Skrining selalu sekuat daftar yang dipakainya.
4. Tinjau [PEP](/pelanggan/skrining/pep) untuk pelanggan yang ditandai orang terpapar politik.

### Blacklist

Menu: **Pelanggan → Blacklist**. Rincian di [Blacklist](/pelanggan/blacklist).

Pelanggan **Diblokir** tidak bisa bertransaksi, sedangkan **Peringatan** hanya memunculkan kotak kuning. Tinjau daftar ini berkala dan kembalikan pelanggan ke status normal bila alasannya sudah tidak berlaku.

## Harian: pelanggan yang perlu perhatian

| Kejadian | Yang dilakukan |
|---|---|
| Pelanggan berstatus PEP atau berpekerjaan berisiko tinggi | Pastikan formulir **EDD** dicetak dan ditandatangani. Lihat [Formulir CDD / EDD](/transaksi/cdd-edd) |
| Pelanggan melewati batas underlying | Faktur tertahan sampai dokumen underlying didaftarkan. Lihat [Menangani Batas Underlying](/alur-kerja/underlying) |
| Data pelanggan ganda atau salah | Rapikan di [Data Duplikat](/pelanggan/data-duplikat) dan [Daftar Pelanggan](/pelanggan/daftar-pelanggan) |

## Berkala: lapor ke PPATK

Hanya jabatan dengan hak **Mencatat nomor laporan PPATK** yang bisa mencatat nomor, mengecualikan, dan menjadikan sinyal kandidat. Menu: **Eksternal → PPATK**.

### LTKT: transaksi tunai besar

Menu: **Eksternal → PPATK → LTKT**. Rincian di [LTKT](/eksternal/ppatk/ltkt).

Sistem menghitung sendiri nasabah yang total faktur lunasnya pada satu tanggal mencapai **Rp500.000.000**, dijumlahkan lintas cabang. Tenggatnya **14 hari kerja** sejak tanggal transaksi.

1. Buka tab **Perlu Dilaporkan**. Urutkan dari tenggat terdekat dan perhatikan baris merah (*Lewat … hari kerja*).
2. Unduh XML goAML, kirim lewat goAML PPATK, lalu catat **Nomor LTKT** dan **Tanggal Lapor**.
3. Baris yang menurut Anda tidak perlu dilaporkan, **Kecualikan** dengan alasan tertulis. Jangan dibiarkan menumpuk.

### Bila curiga: LTKM

Menu: **Eksternal → PPATK → LTKM**. Rincian di [LTKM](/eksternal/ppatk/ltkm).

LTKM tidak punya ambang nilai. Dasarnya penilaian Anda, dibantu **Sinyal** (kecocokan DTTOT, PEP, pemecahan transaksi, dan transaksi besar yang dibatalkan). Tenggatnya **3 hari kerja** sejak Anda menandai, bukan sejak tanggal transaksi.

1. Tinjau tab **Sinyal**. Jadikan kandidat bila patut dicurigai, atau **Abaikan** dengan alasan tertulis.
2. Lengkapi draf di **Dalam Proses**: **Nama Pihak Terlapor**, **Indikator**, dan **Uraian Kecurigaan**.
3. Unduh XML, kirim lewat goAML, lalu catat **Nomor LTKM**.

::: warning Jangan memberi tahu pelanggan
Pelanggan yang dilaporkan tidak boleh diberi tahu. Karena itu [Log Aktivitas](/staff/log-aktivitas) hanya mencatat nomor draf LTKM, tanpa nama pihak terlapor.
:::

Kasir dan supervisor juga bisa menandai faktur mencurigakan langsung dari [Daftar Transaksi](/transaksi/daftar-transaksi). Tandanya masuk ke draf LTKM Anda.

### Hari libur

Tenggat dihitung dalam hari kerja. Pastikan [Hari Libur](/pengaturan/hari-libur) perusahaan sudah diisi, kalau tidak tenggat tampak lebih longgar dari yang sebenarnya.

## Berkala: lapor ke Bank Indonesia

| Laporan | Menu | Isi |
|---|---|---|
| [LKU](/eksternal/lku) | **Eksternal → Bank Indonesia → Kegiatan Usaha (LKU)** | Laporan kegiatan usaha, per bulan |
| [Laporan Keuangan BI](/eksternal/laporan-keuangan-bi) | **Eksternal → Bank Indonesia → Laporan Keuangan** | Neraca dan laba rugi dengan nilai kurs tengah BI |
| [Laporan KUPVA](/eksternal/laporan-kupva) | **Eksternal → Lainnya → Laporan KUPVA** | Data transaksi untuk pelaporan KUPVA BI |
| [SIPESAT](/eksternal/laporan-sipesat) | **Eksternal → PPATK → SIPESAT** | Data pelaporan SIPESAT dari riwayat transaksi |

Mintalah bagian akunting menutup bulan lebih dulu ([Tutup Buku Bulanan](/keuangan/tutup-buku-bulanan)) supaya angka laporan tidak berubah setelah diserahkan.

## Akhir bulan: Rekap Bulanan dan risiko

1. Buka **Eksternal → Underlying → Rekap Bulanan** untuk melihat nasabah yang melewati batas underlying beserta total USD-nya. Lihat [Menangani Batas Underlying](/alur-kerja/underlying).
2. Buka [Matriks Resiko](/pelanggan/skrining/tingkat-resiko) untuk bulan itu. Pelanggan **Tinggi** wajib uji tuntas lanjutan (EDD), pelanggan **Menengah** dipantau berkala.
3. Bila kebijakan risiko berubah, tingkat pekerjaan, negara, dan kabupaten/kota diatur di [Master Risiko](/eksternal/master-risiko) oleh Super Admin.

## Kejadian → menu

| Kejadian | Menu |
|---|---|
| Nama pelanggan mirip daftar teroris | **Pelanggan → Skrining → Riwayat** |
| Pelanggan transaksi tunai besar | **Eksternal → PPATK → LTKT** |
| Pelanggan atau transaksi mencurigakan | **Eksternal → PPATK → LTKM** |
| Pelanggan perlu dibatasi | **Pelanggan → Blacklist** |
| Faktur tertahan underlying | **Eksternal → Underlying** |
| Perlu laporan bulanan BI | **Eksternal → Bank Indonesia** dan **Eksternal → Lainnya** |
| Perlu bukti kegiatan petugas | **Staff → Log Aktivitas** |

## Terkait

- [Ringkasan Skrining](/pelanggan/skrining/ringkasan)
- [LTKT](/eksternal/ppatk/ltkt) dan [LTKM](/eksternal/ppatk/ltkm)
- [Menangani Batas Underlying](/alur-kerja/underlying)
- [Formulir CDD / EDD](/transaksi/cdd-edd)
- [Alur Kerja Admin](/alur-kerja/admin): mengatur hak akses petugas kepatuhan
