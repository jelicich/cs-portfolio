<template>
  <site-header current-section="home"></site-header>
  <home />
  <about />
  <portfolio />
  <contact />
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
export default class App extends Vue {}
</script>
