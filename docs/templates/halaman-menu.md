---
outline: deep
---

<!--
TEMPLATE HALAMAN MENU (REFERENSI)
Dipakai untuk halaman di grup "Referensi Menu" (Transaksi, Pelanggan, Shift, ...).
Halaman ini menjawab "layar ini isinya apa, dan apa yang bisa saya lakukan di
sini?". Contoh yang sudah memakai pola ini: shift/buka-hari.md,
periode/tutup-periode.md.

Cara pakai:
1. Salin isi file ini ke halaman yang akan ditulis ulang.
2. Path file harus mengikuti letak menu di sidebar aplikasi (lihat CLAUDE.md).
3. Judul H1 = nama menu di sidebar config.ts. Bila judul layar di aplikasi
   berbeda, sebutkan di baris "Menu:" (lihat contoh).
4. Ganti teks dalam <...>, hapus bagian yang tidak relevan dan semua komentar.
5. Jalankan `pnpm build`.

Bedanya dengan template lama ("Struktur Halaman / Alur Penggunaan"):
- Tidak perlu menjelaskan judul halaman, breadcrumb, atau letak tombol satu
  per satu. Jelaskan ARTI isi layar dan CARA memakainya.
- Tidak ada lagi bagian "Lainnya" yang menautkan ke transaksi-valas. Isi
  "Terkait" dengan halaman yang benar-benar berhubungan.

Screenshot:
- Opsional. Pakai hanya bila layarnya membingungkan tanpa gambar.
- Simpan di docs/src/public/ (datar, tanpa subfolder), beri nama
  <folder>-<halaman>-<isi>.png, mis. transaksi-batal-form.png.
- Pakai data contoh fiktif, jangan data nasabah asli.
-->

# <Nama Menu>

Menu: **<Grup → Menu>** (judul halaman: **<judul di aplikasi, bila berbeda>**)

<Satu atau dua kalimat: untuk apa menu ini, siapa yang biasa memakainya, dan kapan.>

<!-- Bila menu ini hanya muncul untuk setelan tertentu: -->
::: info Fitur opsional
Menu ini hanya muncul bila **<nama setelan>** aktif di **Pengaturan → Pengaturan Umum**. Lihat [Fitur Opsional](/mulai/fitur-opsional).
:::

## Isi halaman

| Bagian | Isi |
|---|---|
| **<Nama bagian/tab/kolom>** | <Apa artinya bagi pengguna, bukan sekadar letaknya> |
| **<Nama bagian/tab/kolom>** | <...> |

<!-- Untuk tabel data, jelaskan kolom yang tidak jelas maknanya saja.
     Fitur tabel umum (cari, filter, ekspor) cukup ditautkan:
     [Tabel, Filter, dan Ekspor](/mulai/tabel-dan-filter). -->

## <Kata kerja + objek, mis. "Menambah pelanggan">

1. Klik **<Tombol>**.
2. Isi kolom berikut. Kolom bertanda \* wajib diisi.

   | Kolom | Cara mengisi |
   |---|---|
   | **<Nama Kolom>** \* | <...> |

3. Klik **Simpan**.

<!-- Ulangi bagian "## <Kata kerja + objek>" untuk setiap tindakan utama:
     menambah, mengubah, menghapus, mencetak, mengekspor, dst. -->

## Aturan

- **<Aturan singkat dalam huruf tebal>.** <Penjelasan dan akibatnya.>
- **<...>.** <...>

## Jika gagal

| Yang muncul | Penyebab | Yang dilakukan |
|---|---|---|
| *"<Pesan persis dari aplikasi>"* | <...> | <...> |

## Terkait

- [<Alur kerja yang memakai menu ini>](/alur-kerja/<peran>#<anchor>)
- [<Menu terkait>](/<folder>/<halaman>)
