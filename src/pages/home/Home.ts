import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  mounted(): void {
    console.log("mounted Home");
  }
}
