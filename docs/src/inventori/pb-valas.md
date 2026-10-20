---
outline: deep
---

# Pindah Pecahan

Menu **Inventori → Pindah Pecahan** memindahkan stok dari satu pecahan ke pecahan lain dalam mata uang yang sama, misalnya menukar 100 lembar USD 100 menjadi USD 50 di brankas. Jumlah stok mata uangnya tidak berubah; yang bergeser hanya pecahannya.

![Pindah Pecahan](/pb-valas.png)

## Memindahkan stok

1. Pilih **Mata Uang**.
2. Pilih **Dari Pecahan**, yaitu pecahan yang stoknya dikurangi. Stok tiap pecahan tampil di sampingnya, misalnya *USD - USD | Stok : 950.00*.
3. Pilih **Ke Pecahan**, yaitu pecahan yang stoknya ditambah. Daftarnya hanya berisi pecahan lain dari mata uang yang sama.
4. **Kurs** otomatis terisi kurs beli pecahan asal. Anda boleh mengubahnya.
5. Isi **Jumlah**. Di bawahnya tampil *Stok tersedia* pecahan asal. Klik **Pindahkan semua** untuk mengisi jumlah dengan seluruh stok itu.
6. Periksa kotak **Pratinjau stok** di sebelah kanan. Kotak ini menunjukkan stok kedua pecahan sebelum → sesudah dipindahkan, dan ikut berubah saat Anda mengetik jumlah.
7. Klik **Simpan**, lalu **Simpan** lagi di konfirmasi *Apakah data ini sudah benar?*

Setelah tersimpan muncul pesan seperti *Pindah Pecahan PB/…/00001: USD → USD5 sebesar 100.00 berhasil disimpan.* Dokumennya langsung tampil di Riwayat di bawah form, dan stok di pilihan pecahan ikut diperbarui.

::: tip Jumlah melebihi stok
Bila jumlah lebih besar dari stok pecahan asal, pratinjau menampilkan *Jumlah melebihi stok …* dan tombol **Simpan** tidak bisa diklik. Kurangi jumlahnya atau klik **Pindahkan semua**.

Perusahaan yang mematikan penguncian stok tetap bisa menyimpan. Pratinjau hanya memberi tahu bahwa stok asal akan menjadi minus.
:::

## Riwayat Pindah Pecahan

Panel **Riwayat Pindah Pecahan** di bawah form menampilkan dokumen cabang Anda. Awalnya yang tampil adalah periode berjalan. Ubah rentang **Periode** untuk melihat tanggal lain.

| Kolom | Isi |
|---|---|
| No. Dokumen | Nomor dokumen, diawali `PB/` |
| Tanggal | Periode dokumen dan jam disimpan |
| Dari → Ke | Pecahan asal dan tujuan |
| Jumlah, Kurs | Jumlah yang dipindahkan dan kursnya |
| Petugas | Pengguna yang menyimpan |
| Status | **Dibatalkan (PB/…)** untuk dokumen yang sudah dibatalkan, beserta nomor pembatalnya. **Pembatalan PB/…** untuk dokumen pembatal, beserta nomor dokumen yang dibatalkannya |

## Membatalkan Pindah Pecahan

Salah memindahkan? Buka menu aksi di baris dokumen pada Riwayat, lalu pilih **Batalkan** dan konfirmasi.

Dokumen asal **tidak dihapus**. Sistem membuat dokumen Pindah Pecahan baru dengan arah terbalik di periode berjalan, jadi stok kembali seperti semula dan kedua dokumen tetap tercatat di [Riwayat Valas](/inventori/riwayat-valas). Setelah berhasil muncul pesan seperti *PB/…/00001 dibatalkan dengan PB/…/00002.*

Tombol **Batalkan** hanya muncul bila:

- jabatan Anda memiliki hak akses **Batalkan Pindah Pecahan** (diatur di Hak Akses);
- dokumen itu belum pernah dibatalkan;
- dokumen itu bukan dokumen pembatalan.

## Bila Simpan atau Batalkan ditolak

| Pesan | Penyebab | Yang dilakukan |
|---|---|---|
| *Kolom Jumlah harus lebih dari 0.* / *Kolom Kurs harus lebih dari 0.* | Jumlah atau kurs kosong atau 0 | Isi angka lebih dari 0 |
| *Pecahan tujuan harus berbeda dari pecahan asal.* | Pecahan asal dan tujuan sama | Pilih pecahan tujuan lain |
| *Stok … tidak mencukupi (tersedia …).* | Stok pecahan asal kurang | Kurangi jumlahnya |
| *Stok … tinggal …, kurang dari … yang harus dikembalikan.* | Saat membatalkan, stok pecahan tujuan sudah terpakai | Batalkan sebagian dengan Pindah Pecahan biasa, atau tunggu stoknya cukup |
| *Serah terima kasir sedang berlangsung, jadi stok valas belum bisa dipindahkan.* | Ada [serah terima kasir](/shift/serah-terima-kasir) yang belum diterima | Selesaikan serah terima dulu |
| *Tidak dapat memindahkan stok valas ! …* / *Tidak dapat membatalkan Pindah Pecahan ! …* | Periode berjalan sudah ditutup | Minta supervisor membuka kembali penutupannya |
| *Dokumen ini sudah dibatalkan oleh …* | Dokumen sudah pernah dibatalkan | Tidak perlu dibatalkan lagi |

## Terkait

- [Stok Valas](/inventori/stok-valas): cek stok seluruh pecahan
- [Riwayat Valas](/inventori/riwayat-valas): kedua sisi Pindah Pecahan tercatat di sini
- [Pecahan Valas](/master/pecahan-valas)
