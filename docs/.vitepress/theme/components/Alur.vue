<script setup lang="ts">
/*
Diagram alur untuk halaman panduan.

Dipakai langsung di markdown:

  <Alur judul="..." :langkah="[
    { fase: 'Pagi' },
    { judul: 'Buka Hari', menu: 'Shift → Buka Hari', ket: '...', peran: 'Supervisor' },
    { judul: 'Cocokkan', cabang: [
        { jika: 'Semua cocok', judul: 'Terima Kas', nada: 'ok' },
        { jika: 'Ada selisih', judul: 'Isi alasan', nada: 'warn' },
    ] },
  ]" />

Item { fase } adalah label pemisah dan tidak diberi nomor. nada: ok | warn | alert.
Warna memakai variabel tema VitePress, jadi ikut mode terang/gelap dan ekspor PDF.
*/
interface Cabang {
  jika: string;
  judul: string;
  ket?: string;
  nada?: "ok" | "warn" | "alert";
}
interface Langkah {
  fase?: string;
  judul?: string;
  menu?: string;
  ket?: string;
  peran?: string;
  nada?: "ok" | "warn" | "alert";
  cabang?: Cabang[];
}
defineProps<{ langkah: Langkah[]; judul?: string }>();
</script>

<template>
  <figure class="alur">
    <figcaption v-if="judul" class="alur-judul">{{ judul }}</figcaption>
    <ol class="alur-list">
      <template v-for="(s, i) in langkah" :key="i">
        <li v-if="s.fase" class="alur-fase">{{ s.fase }}</li>
        <li v-else class="alur-step" :class="s.nada ? 'is-' + s.nada : ''">
          <div class="alur-kartu">
            <div class="alur-kepala">
              <strong class="alur-nama">{{ s.judul }}</strong>
              <span v-if="s.peran" class="alur-peran">{{ s.peran }}</span>
            </div>
            <div v-if="s.menu" class="alur-menu">{{ s.menu }}</div>
            <p v-if="s.ket" class="alur-ket">{{ s.ket }}</p>
          </div>
          <div v-if="s.cabang" class="alur-cabang">
            <div
              v-for="(c, j) in s.cabang"
              :key="j"
              class="alur-hasil"
              :class="c.nada ? 'is-' + c.nada : ''"
            >
              <span class="alur-jika">{{ c.jika }}</span>
              <strong>{{ c.judul }}</strong>
              <p v-if="c.ket" class="alur-ket">{{ c.ket }}</p>
            </div>
          </div>
        </li>
      </template>
    </ol>
  </figure>
</template>

<style scoped>
.alur {
  margin: 24px 0;
  padding: 20px 20px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.alur-judul {
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
.alur-list {
  list-style: none;
  margin: 0;
  padding: 0;
  counter-reset: alur;
}
.alur-list > li {
  margin: 0;
}
.alur-fase {
  margin: 4px 0 10px !important;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.alur-fase:not(:first-child) {
  margin-top: 6px !important;
}
.alur-step {
  position: relative;
  padding: 0 0 18px 44px;
  counter-increment: alur;
}
/* Nomor langkah */
.alur-step::before {
  content: counter(alur);
  position: absolute;
  left: 0;
  top: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-bg);
  background: var(--vp-c-brand-1);
}
/* Garis penghubung ke langkah berikutnya */
.alur-step::after {
  content: "";
  position: absolute;
  left: 13px;
  top: 40px;
  bottom: 2px;
  width: 2px;
  background: var(--vp-c-divider);
}
.alur-step:last-child::after {
  display: none;
}
.alur-kartu {
  padding: 10px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
.alur-kepala {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 12px;
}
.alur-nama {
  font-size: 15px;
  color: var(--vp-c-text-1);
}
.alur-peran {
  font-size: 12px;
  font-weight: 600;
  padding: 1px 8px;
  border-radius: 999px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
}
.alur-menu {
  margin-top: 2px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.alur-ket {
  margin: 4px 0 0 !important;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}
.alur-step.is-warn .alur-kartu {
  border-color: var(--vp-c-warning-3);
}
.alur-step.is-ok .alur-kartu {
  border-color: var(--vp-c-tip-1);
}
.alur-cabang {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
  margin-top: 8px;
}
.alur-hasil {
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid var(--vp-c-divider);
  background: var(--vp-c-default-soft);
  font-size: 14px;
  color: var(--vp-c-text-1);
}
.alur-hasil.is-ok {
  border-left-color: var(--vp-c-tip-1);
  background: var(--vp-c-tip-soft);
}
.alur-hasil.is-warn {
  border-left-color: var(--vp-c-warning-3);
  background: var(--vp-c-warning-soft);
}
.alur-hasil.is-alert {
  border-left-color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}
.alur-jika {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.alur-hasil strong {
  display: block;
}
</style>
