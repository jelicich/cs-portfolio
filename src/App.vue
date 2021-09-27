<template>
  <site-header current-section="home" :links="activeSections"></site-header>
  <!-- <home />
  <about />
  <portfolio />
  <contact /> -->
  <component v-for="(section, i) in activeSections" :key="i" :is="section">
  </component>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SiteHeader from "@/components/site-header/index.vue";
import Home from "@/pages/home/index.vue";
import About from "@/pages/about/index.vue";
import Contact from "@/pages/contact/index.vue";
import Portfolio from "@/pages/portfolio/index.vue";

@Options({
  components: {
    SiteHeader,
    Home,
    About,
    Portfolio,
    Contact,
  },
})
export default class App extends Vue {
  activeSections = ["Home", "About", "Portfolio", "Contact"];
}
</script>
