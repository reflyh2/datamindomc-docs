# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A VitePress site for the end-user manual of **ValasPro**, a money-changer (KUPVA/valas) web application (live app: https://mc.datamindo.com, docs: https://mc-docs.datamindo.com). All content is in **Indonesian** (`lang: id-ID`) and so are the UI labels in the config. Write new pages in Indonesian.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`).

- `pnpm dev` runs the dev server (`vitepress dev docs`)
- `pnpm build` makes the production build into `docs/.vitepress/dist`. VitePress fails the build on dead internal links, so run this after renaming, moving or deleting pages.
- `pnpm preview` serves the built site
- `pnpm export-pdf` exports the whole manual to one PDF via `vitepress-export-pdf` (output goes to `pdf-vitepress/`, which is gitignored)

There are no tests or linters.

## Layout

- `docs/.vitepress/config.ts` holds the config. `srcDir` is `src`, so the pages live in `docs/src/` and `cleanUrls` is on (links have no `.html`).
- `docs/src/public/` holds every image and the logo. Images are referenced from the root, e.g. `![Informasi Kurs](/informasi-kurs.png)`. The folder is flat, with no subfolders per section.
- `docs/.vitepress/vitepress-pdf.config.ts` sets the PDF page order by walking `themeConfig.sidebar`. **The sidebar is the only thing that decides whether a page is navigable and whether it is in the PDF, and in what order.** A page that is not in the sidebar does not appear in either.

## Sidebar mirrors the app

The "Referensi Menu" groups in the sidebar (Transaksi, Pelanggan, Shift, … ECSys) deliberately copy the **order and names of the ValasPro app's own sidebar** (`valaspro: resources/views/layouts/partials/sidebar.blade.php` in the separate app repo). The folder structure under `docs/src/` follows the same menu hierarchy (e.g. `hutang-piutang/rupiah/deposit.md`, `pengaturan/pengaturan-perusahaan/cabang.md`). When a menu is added, renamed or moved in the app:

1. Add, rename or move the `.md` file so its path matches the new menu location.
2. Update the matching entry in `config.ts`.
3. Fix every internal link to the old path (`grep -rn "/old/path" docs/src`), then run `pnpm build` to catch any link you missed.

The groups that are not menu references are `Mulai` (orientation), `Alur Kerja` (task-oriented, role-based walkthroughs such as kasir, supervisor, akunting, kepatuhan, admin, underlying that link out to the menu pages) and `Bantuan`.

## Page conventions

- Frontmatter usually sets `outline: deep` or `outline: [2, 3]`.
- Callouts use VitePress containers: `::: info`, `::: tip`, `::: warning`.
- Pages whose screenshots come from the old UI start with this notice, placed right under the H1:
  ```md
  ::: info Tampilan versi sebelumnya
  Gambar di halaman ini diambil dari tampilan ValasPro versi sebelumnya. Letak dan warna tombol bisa sedikit berbeda.
  :::
  ```
- Refer to menu paths in bold with arrows, e.g. **Shift → Buka Hari**, and to buttons and fields in bold.
- The newer `alur-kerja/` and `mulai/` pages are written as direct second-person guidance ("Anda"). Several older menu pages still use a rigid "Struktur Halaman / Alur Penggunaan" template. Follow the newer style when rewriting.
