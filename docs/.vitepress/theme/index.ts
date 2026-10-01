import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import Alur from "./components/Alur.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Alur", Alur);
  },
} satisfies Theme;
