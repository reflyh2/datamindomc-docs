import DefaultTheme from "vitepress/theme";
// @ts-ignore
import { watchEffect, ref } from "vue";
import { useData } from "vitepress";

export default {
  ...DefaultTheme,
  setup() {
    const { theme } = useData();
    const role = ref<string>("");

    /**
     * used for store the guest role and determine the sidebar menu that user can access.
     */
    watchEffect(() => {
      const storedRole = sessionStorage.getItem("role");
      const urlParams = new URLSearchParams(window.location.search);
      const getRole = urlParams.get("role");

      if (!storedRole && getRole) {
        sessionStorage.setItem("role", getRole);
        role.value = getRole;
      } else if (storedRole) {
        role.value = storedRole;
      }

      /**
       * determine the sidebar menu based on role value, ex: guest
       */
      if (role.value === "guest") {
        theme.value.sidebar = [
          {
            text: "Transaksi",
            collapsed: false,
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
              { text: "Pembayaran Hutang Piutang", link: "/transaksi/pembayaran-hutang-piutang" },
              {
                text: "Serah Terima Kasir",
                link: "/transaksi/serah-terima-kasir",
              },
              {
                text: "Penutupan Periode",
                link: "/transaksi/penutupan-periode",
              },
              {
                text: "Deposit",
                link: "/transaksi/deposit",
              },
            ],
          },
        ];
      } else {
        theme.value.sidebar = [
          // {
          //   text: "Mulai",
          //   items: [{ text: "Masuk", link: "/transaksi/informasi-kurs" }],
          // },

          {
            text: "Transaksi",
            collapsed: false,
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
              { text: "Pembayaran Hutang Piutang", link: "/transaksi/pembayaran-hutang-piutang" },
              {
                text: "Serah Terima Kasir",
                link: "/transaksi/serah-terima-kasir",
              },
              {
                text: "Penutupan Periode",
                link: "/transaksi/penutupan-periode",
              },
              {
                text: "Deposit",
                link: "/transaksi/deposit",
              },
            ],
          },

          {
            text: "Inventori",
            collapsed: false,
            items: [
              { text: "Stok Valas", link: "/inventori/stok-valas" },
              { text: "Pinjaman Valas", link: "/inventori/pinjaman-valas" },
              { text: "PB Valas", link: "/inventori/pb-valas" },
              { text: "Riwayat Valas", link: "/inventori/riwayat-valas" },
            ],
          },

          {
            text: "Master",
            collapsed: false,
            items: [
              { text: "Pengaturan Kurs", link: "/master/pengaturan-kurs" },
              { text: "Proses Awal Hari", link: "/master/proses-awal-hari" },
              { text: "Master Valas", link: "/master/master-valas" },
              { text: "Pecahan Valas", link: "/master/pecahan-valas" },
            ],
          },

          // {
          //   text: "Staff",
          //   collapsed: false,
          //   items: [
          //     { text: "Daftar Pengguna", link: "/staff/daftar-pengguna" },
          //     { text: "Daftar Jabatan", link: "/staff/daftar-jabatan" },
          //     { text: "Daftar Akses", link: "/staff/daftar-akses" },
          //   ],
          // },

          {
            text: "Manajemen Cabang",
            collapsed: false,
            items: [
              { text: "Perusahaan", link: "/manajemen-cabang/perusahaan" },
              { text: "Area", link: "/manajemen-cabang/area" },
              { text: "Cabang", link: "/manajemen-cabang/cabang" },
              {
                text: "Pengaturan Cabang",
                link: "/manajemen-cabang/pengaturan-cabang",
              },
            ],
          },

          {
            text: "Pelanggan",
            collapsed: false,
            items: [
              {
                text: "Pengaturan Pelanggan",
                link: "/pelanggan/pengaturan-pelanggan",
              },
              {
                text: "Database Pelanggan",
                link: "/pelanggan/database-pelanggan",
              },
            ],
          },

          {
            text: "Laporan Umum",
            collapsed: false,
            items: [
              {
                text: "Transaksi Valas",
                collapsed: false,
                items: [
                  {
                    text: "Rincian Valas",
                    link: "/laporan-umum/transaksi-valas/rincian-valas",
                  },
                  {
                    text: "Ringkasan Valas",
                    link: "/laporan-umum/transaksi-valas/ringkasan-valas",
                  },
                  {
                    text: "Laporan IDR",
                    link: "/laporan-umum/transaksi-valas/laporan-idr",
                  },
                ],
              },
              {
                text: "Laba",
                collapsed: false,
                items: [
                  {
                    text: "Per Cabang",
                    link: "/laporan-umum/laba/per-cabang",
                  },
                  {
                    text: "Per Valas",
                    link: "/laporan-umum/laba/per-valas",
                  },
                  {
                    text: "Per Marketing",
                    link: "/laporan-umum/laba/per-marketing",
                  },
                ],
              },
            ],
          },

          {
            text: "Keuangan",
            collapsed: false,
            items: [
              { text: "Daftar Akun", link: "/keuangan/daftar-akun" },
              { text: "Jurnal", link: "/keuangan/jurnal" },
              { text: "Laporan Akunting", link: "/keuangan/laporan-akunting" },
            ],
          },
        ];
      }
    });
  },
};
