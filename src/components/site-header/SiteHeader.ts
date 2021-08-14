import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    currentSection: String,
  },
})
export default class SiteHeader extends Vue {
  currentSection!: string;

  mounted(): void {
    console.log("mounted header", this.currentSection);
  }

  updateLocale($event: MouseEvent): void {
    this.$i18n.locale = ($event.target as HTMLSelectElement).value;
  }
}
