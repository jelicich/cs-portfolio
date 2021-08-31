<template>
  <site-header current-section="home" :links="activeSections"></site-header>
  <!-- <home />
  <about />
  <portfolio />
  <contact /> -->
  <component v-for="(section, i) in activeSections" :key="i" :is="section">
  </component>
  <construction v-if="isMvp"></construction>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SiteHeader from "@/components/site-header/index.vue";
import Home from "@/pages/home/index.vue";
import About from "@/pages/about/index.vue";
import Contact from "@/pages/contact/index.vue";
import Portfolio from "@/pages/portfolio/index.vue";
import Construction from "@/components/construction/index.vue";

@Options({
  components: {
    SiteHeader,
    Home,
    About,
    Portfolio,
    Contact,
    Construction,
  },
})
export default class App extends Vue {
  isMvp = JSON.parse(process.env.VUE_APP_IS_MVP);
  allSections = ["Home", "About", "Portfolio", "Contact"];
  mvpSections = ["Home", "About", "Contact"];
  activeSections = this.isMvp ? this.mvpSections : this.allSections;
}
</script>
