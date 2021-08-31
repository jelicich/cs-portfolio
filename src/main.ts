import { createApp } from "vue";
import App from "./App.vue";
import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";
import { toggleBodyClass, isMobile } from "@/globals/device-helper";
import { ca, es, en } from "@/i18n";
import SiteSection from "@/components/site-section/index.vue";
import "@/styles/index.scss";

enum LOCALE {
  CA = "ca",
  ES = "es",
  EN = "en",
}

const messages: { [lang: string]: LocaleMessages<VueMessageType> } = JSON.parse(
  process.env.VUE_APP_IS_MVP
)
  ? { es, en }
  : { es, ca, en };

const i18n = createI18n({
  locale: LOCALE.ES,
  fallbackLocale: LOCALE.EN,
  messages,
});

const app = createApp(App);
app.use(i18n);
app.provide("toggleBodyClass", toggleBodyClass);
app.provide("isMobile", isMobile);
app.provide("baseUrl", process.env.BASE_URL);
app.component("site-section", SiteSection);
app.mount("#app");
