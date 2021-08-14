<template>
  <site-header current-section="home"></site-header>
  <home msg="Home" />
  <about msg="About" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SiteHeader from "@/components/site-header/index.vue";
import Home from "@/pages/home/index.vue";
import About from "@/pages/about/index.vue";

@Options({
  components: {
    SiteHeader,
    Home,
    About,
  },
})
export default class App extends Vue {}
</script>
