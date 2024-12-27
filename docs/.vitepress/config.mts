import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Datamindo",
  description: "Dokumentasi penggunaan penggunaan software.",
  lang: "id-ID",
  cleanUrls: true,
  themeConfig: {
    logo: { src: "../public/logo.svg", alt: "logo" },

    darkModeSwitchLabel: "Tampilan",
    lightModeSwitchTitle: "Ubah ke tampilan terang",
    darkModeSwitchTitle: "Ubah ke tampilan gelap",
    returnToTopLabel: "Kembali ke atas",

    docFooter: {
      prev: "Sebelumnya",
      next: "Selanjutnya",
    },

    outline: {
      label: "Pada halaman ini",
    },

    notFound: {
      title: "Halaman tidak ditemukan",
      quote:
        "Halaman yang anda cari tidak ditemukan, atau halaman tersebut sudah dihapus.",
      linkText: "Kembali ke beranda",
    },

    nav: [
      { text: "Beranda", link: "/" },
      { text: "Referensi", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Mulai",
        items: [{ text: "Masuk", link: "/transaksi/informasi-kurs" }],
      },

      {
        text: "Transaksi",
        items: [
          { text: "Informasi Kurs", link: "/transaksi/informasi-kurs" },
          { text: "Transaksi Valas", link: "/transaksi/transaksi-valas" },
          {
            text: "Transaksi Antar Cabang",
            link: "/transaksi/transaksi-antarcabang",
          },
          {
            text: "Daftar Transaksi Valas",
            link: "/transaksi/daftar-transaksi",
          },
          { text: "Pembayaran Valas", link: "/transaksi/pembayaran-valas" },
          { text: "Serah Terima Kasir", link: "/transaksi/transaksi-valas" },
          { text: "Penutupan Periode", link: "/transaksi/transaksi-valas" },
        ],
      },

      {
        text: "Inventori",
        items: [
          { text: "Stok Valas", link: "/transaksi/informasi-kurs" },
          { text: "Pinjaman Valas", link: "/transaksi/informasi-kurs" },
          { text: "PB Valas", link: "/transaksi/informasi-kurs" },
          { text: "Riwayat Valas", link: "/transaksi/informasi-kurs" },
        ],
      },

      {
        text: "Example",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
});
