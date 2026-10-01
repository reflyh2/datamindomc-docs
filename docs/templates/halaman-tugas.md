---
outline: [2, 3]
---

<!--
TEMPLATE HALAMAN TUGAS
Dipakai untuk halaman yang menjawab "bagaimana cara melakukan X?",
misalnya isi folder alur-kerja/ atau bagian tugas di halaman menu.

Cara pakai:
1. Salin file ini ke lokasi tujuan di docs/src/.
2. Ganti semua teks dalam <...>, lalu hapus bagian yang tidak relevan.
3. Hapus semua komentar HTML seperti ini sebelum commit.
4. Daftarkan halaman di sidebar docs/.vitepress/config.ts. Halaman di luar
   sidebar tidak bisa dinavigasi dan tidak ikut ke PDF.
5. Jalankan `pnpm build` untuk memeriksa tautan.

Aturan menulis:
- Sapa pembaca dengan "Anda". Kalimat pendek, satu ide per kalimat.
- Satu tindakan per langkah, diawali kata kerja: "Klik **Simpan**."
- Nama menu, tombol, kolom, dan tab ditulis tebal dan PERSIS seperti label
  di aplikasi. Jalur menu memakai panah: **Transaksi → Transaksi Valas**.
- Pesan dari aplikasi ditulis miring dan persis: *"Stok valas tidak cukup"*.
- Pakai ::: warning hanya untuk hal yang berdampak finansial/hukum atau
  tidak bisa dibatalkan.
-->

# <Kata kerja + objek, mis. "Membatalkan Transaksi">

<Satu atau dua kalimat: apa hasil tugas ini, kapan dilakukan, dan siapa yang biasanya melakukannya.>

Menu: **<Grup → Menu>**

## Sebelum mulai

<!-- Hapus bagian ini bila tidak ada prasyarat. -->

- <Hak akses yang dibutuhkan, mis. "Jabatan Anda punya akses **Batal Transaksi**".>
- <Kondisi yang harus terpenuhi, mis. "Periode cabang masih sama dengan tanggal faktur".>
- <Fitur opsional yang harus aktif, dengan tautan ke [Fitur Opsional](/mulai/fitur-opsional).>

## Langkah

1. Buka **<Grup → Menu>**.
2. <Tindakan.>
3. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   | Kolom | Cara mengisi |
   |---|---|
   | **<Nama Kolom>** \* | <Isi apa, format apa, dari mana datanya> |
   | **<Nama Kolom>** | <Kapan perlu diisi> |

4. Klik **<Tombol>**, lalu jawab konfirmasi *"<teks konfirmasi persis>"*.

<!-- Bila tugasnya punya beberapa tahap besar, pecah jadi subjudul
     "### 1. <Tahap>", "### 2. <Tahap>" seperti di alur-kerja/kasir.md. -->

## Hasilnya

<Apa yang terlihat kalau berhasil: halaman yang terbuka, status yang berubah, data yang muncul di laporan mana. Sebutkan juga langkah berikutnya, bila ada.>

::: warning <Judul singkat, mis. "Tidak bisa dibatalkan">
<Hal berisiko yang perlu diketahui. Hapus blok ini bila tidak ada.>
:::

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"<Pesan persis dari aplikasi>"* | <Penyebab dalam bahasa sederhana> | <Tindakan perbaikan, dengan tautan bila perlu> |

## Terkait

- [<Halaman menu yang dipakai>](/<folder>/<halaman>)
- [<Tugas berikutnya>](/<folder>/<halaman>#<anchor>)
