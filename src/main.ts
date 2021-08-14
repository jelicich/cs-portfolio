import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { ca, es, en } from "@/i18n";
import SiteSection from "@/components/site-section/index.vue";
import "@/styles/index.scss";

enum LOCALE {
  CA = "ca",
  ES = "es",
  EN = "en",
}

const messages = { ca, es, en };

const i18n = createI18n({
  locale: LOCALE.CA,
  fallbackLocale: LOCALE.ES,
  messages,
});

const app = createApp(App);
app.use(i18n);
app.component("site-section", SiteSection);
app.mount("#app");
