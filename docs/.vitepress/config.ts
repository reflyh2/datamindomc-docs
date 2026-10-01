import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ValasPro",
  description: "Dokumentasi penggunaan Aplikasi.",
  lang: "id-ID",
  srcDir: "src",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/logo.ico" }]],
  themeConfig: {
    logo: { src: "/logo-wordmark.png", alt: "ValasPro" },
    siteTitle: false,

    darkModeSwitchLabel: "Tampilan",
    lightModeSwitchTitle: "Ubah ke tampilan terang",
    darkModeSwitchTitle: "Ubah ke tampilan gelap",
    returnToTopLabel: "Kembali ke atas",

    // Urutan dan nama grup "Referensi Menu" sengaja sama persis dengan sidebar
    // aplikasi (valaspro: resources/views/layouts/partials/sidebar.blade.php).
    // Menu baru di aplikasi = entri baru di sini.
    sidebar: [
      {
        text: "Mulai",
        items: [
          { text: "Mengenal Layar ValasPro", link: "/mulai/mengenal-layar" },
          { text: "Masuk ke Aplikasi", link: "/mulai/masuk" },
          { text: "Tabel, Filter, dan Ekspor", link: "/mulai/tabel-dan-filter" },
          { text: "Fitur Opsional", link: "/mulai/fitur-opsional" },
        ],
      },
      {
        text: "Alur Kerja",
        items: [
          { text: "Kasir", link: "/alur-kerja/kasir" },
          { text: "Menangani Batas Underlying", link: "/alur-kerja/underlying" },
          { text: "Supervisor", link: "/alur-kerja/supervisor" },
          { text: "Akunting", link: "/alur-kerja/akunting" },
          { text: "Kepatuhan", link: "/alur-kerja/kepatuhan" },
          { text: "Admin", link: "/alur-kerja/admin" },
        ],
      },

      // ============ Referensi Menu: Operasional ============
      {
        text: "Transaksi",
        collapsed: true,
        items: [
          { text: "Informasi Kurs", link: "/transaksi/informasi-kurs" },
          { text: "Transaksi Valas", link: "/transaksi/transaksi-valas" },
          { text: "Daftar Transaksi", link: "/transaksi/daftar-transaksi" },
          { text: "Formulir CDD / EDD", link: "/transaksi/cdd-edd" },
          { text: "Pembayaran Valas", link: "/transaksi/pembayaran-valas" },
          { text: "Antar Cabang", link: "/transaksi/transaksi-antarcabang" },
          { text: "Transaksi Batal", link: "/transaksi/transaksi-batal" },
        ],
      },
      {
        text: "Pelanggan",
        collapsed: true,
        items: [
          { text: "Daftar Pelanggan", link: "/pelanggan/daftar-pelanggan" },
          { text: "Laporan", link: "/pelanggan/laporan" },
          {
            text: "Skrining",
            collapsed: true,
            items: [
              { text: "Ringkasan", link: "/pelanggan/skrining/ringkasan" },
              { text: "DTTOT", link: "/pelanggan/skrining/dttot" },
              { text: "PEP", link: "/pelanggan/skrining/pep" },
            ],
          },
          { text: "Blacklist", link: "/pelanggan/blacklist" },
          { text: "Data Duplikat", link: "/pelanggan/data-duplikat" },
        ],
      },
      {
        text: "Shift",
        collapsed: true,
        items: [
          { text: "Buka Hari", link: "/shift/buka-hari" },
          { text: "Rekonsiliasi & Tutup Hari", link: "/shift/rekonsiliasi" },
          { text: "Serah Terima Kasir", link: "/shift/serah-terima-kasir" },
        ],
      },
      {
        text: "Periode",
        collapsed: true,
        items: [
          { text: "Square Balance", link: "/periode/square-balance" },
          { text: "Tutup Periode", link: "/periode/tutup-periode" },
          { text: "Pengaturan Periode", link: "/periode/pengaturan-periode" },
        ],
      },
      {
        text: "Inventori",
        collapsed: true,
        items: [
          { text: "Stok Valas", link: "/inventori/stok-valas" },
          { text: "Riwayat Valas", link: "/inventori/riwayat-valas" },
          { text: "Pinjaman Valas", link: "/inventori/pinjaman-valas" },
          { text: "PB Valas", link: "/inventori/pb-valas" },
        ],
      },

      // ============ Referensi Menu: Master & Keuangan ============
      {
        text: "Master",
        collapsed: true,
        items: [
          { text: "Pengaturan Kurs", link: "/master/pengaturan-kurs" },
          { text: "Parameter Kurs", link: "/master/parameter-kurs" },
          { text: "Master Valas", link: "/master/master-valas" },
          { text: "Pecahan Valas", link: "/master/pecahan-valas" },
          { text: "Papan Kurs", link: "/master/papan-kurs" },
        ],
      },
      {
        text: "Keuangan",
        collapsed: true,
        items: [
          { text: "Daftar Akun", link: "/keuangan/daftar-akun" },
          { text: "Jurnal", link: "/keuangan/jurnal" },
          { text: "Laporan Keuangan", link: "/keuangan/laporan-keuangan" },
          { text: "Hutang Piutang Cabang", link: "/keuangan/hutang-piutang-cabang" },
          { text: "Penutupan Tahunan", link: "/keuangan/penutupan-tahunan" },
        ],
      },
      {
        text: "Aset",
        collapsed: true,
        items: [
          { text: "Kategori Aset", link: "/aset/kategori-aset" },
          { text: "Daftar Aset", link: "/aset/daftar-aset" },
          { text: "Proses Penyusutan & Amortisasi", link: "/aset/penyusutan" },
          { text: "Inventarisasi Aset", link: "/aset/inventarisasi" },
          { text: "Pelepasan Aset", link: "/aset/pelepasan" },
          { text: "Mutasi Aset", link: "/aset/mutasi" },
          { text: "Laporan Aset", link: "/aset/laporan" },
        ],
      },

      // ============ Referensi Menu: Laporan ============
      {
        text: "Laporan Umum",
        collapsed: true,
        items: [
          {
            text: "Transaksi Valas",
            collapsed: true,
            items: [
              { text: "Rincian Valas", link: "/laporan-umum/transaksi-valas/rincian-valas" },
              { text: "Ringkasan Valas", link: "/laporan-umum/transaksi-valas/ringkasan-valas" },
              { text: "Laporan IDR", link: "/laporan-umum/transaksi-valas/laporan-idr" },
              { text: "Per Valas", link: "/laporan-umum/transaksi-valas/per-valas" },
              { text: "Per Faktur", link: "/laporan-umum/transaksi-valas/per-faktur" },
            ],
          },
          {
            text: "Laba",
            collapsed: true,
            items: [
              { text: "Per Cabang", link: "/laporan-umum/laba/per-cabang" },
              { text: "Per Valas", link: "/laporan-umum/laba/per-valas" },
            ],
          },
        ],
      },
      {
        text: "Eksternal",
        collapsed: true,
        items: [
          {
            text: "Underlying",
            collapsed: true,
            items: [
              { text: "Perlu Underlying", link: "/eksternal/underlying/otorisasi-underlying" },
              { text: "Dokumen", link: "/eksternal/underlying/lapor-underlying" },
              { text: "Rekap Bulanan", link: "/eksternal/underlying/list-underlying" },
            ],
          },
          {
            text: "PPATK",
            collapsed: true,
            items: [
              { text: "LTKT", link: "/eksternal/ppatk/ltkt" },
              { text: "LTKM", link: "/eksternal/ppatk/ltkm" },
              { text: "SIPESAT", link: "/eksternal/laporan-sipesat" },
            ],
          },
          {
            text: "Bank Indonesia",
            collapsed: true,
            items: [
              { text: "Kegiatan Usaha (LKU)", link: "/eksternal/lku" },
              { text: "Laporan Keuangan", link: "/eksternal/laporan-keuangan-bi" },
            ],
          },
          {
            text: "Lainnya",
            collapsed: true,
            items: [
              { text: "Laporan KUPVA", link: "/eksternal/laporan-kupva" },
              { text: "Master Risiko", link: "/eksternal/master-risiko" },
            ],
          },
        ],
      },

      // ============ Referensi Menu: Administrasi ============
      {
        text: "Staff",
        collapsed: true,
        items: [
          { text: "Pengguna & Jabatan", link: "/staff/pengguna-jabatan" },
          { text: "Daftar Akses", link: "/staff/daftar-akses" },
        ],
      },
      {
        text: "Pengaturan",
        collapsed: true,
        items: [
          {
            text: "Pengaturan Perusahaan",
            collapsed: true,
            items: [
              { text: "Perusahaan", link: "/pengaturan/pengaturan-perusahaan/perusahaan" },
              { text: "Area", link: "/pengaturan/pengaturan-perusahaan/area" },
              { text: "Cabang", link: "/pengaturan/pengaturan-perusahaan/cabang" },
              { text: "Pengaturan Cabang", link: "/pengaturan/pengaturan-perusahaan/pengaturan-cabang" },
            ],
          },
          { text: "Pengaturan Umum", link: "/pengaturan/pengaturan-umum" },
          { text: "Hari Libur", link: "/pengaturan/hari-libur" },
          { text: "Pindah Cabang", link: "/pengaturan/pindah-cabang" },
        ],
      },

      {
        text: "Bantuan",
        items: [
          { text: "Masalah Umum", link: "/bantuan/masalah-umum" },
          { text: "Daftar Istilah", link: "/bantuan/istilah" },
        ],
      },
    ],

    docFooter: {
      prev: "Sebelumnya",
      next: "Selanjutnya",
    },

    outline: {
      label: "Pada halaman ini",
    },

    search: {
      provider: "local",
    },

    notFound: {
      title: "Halaman tidak ditemukan",
      quote:
        "Halaman yang anda cari tidak ditemukan, atau halaman tersebut sudah dihapus.",
      linkText: "Kembali ke beranda",
    },

    nav: [
      { text: "Beranda", link: "/" },
      { text: "Mulai", link: "/mulai/mengenal-layar" },
    ],

    footer: {
      copyright: "©2026 | ValasPro",
    },
  },
});
