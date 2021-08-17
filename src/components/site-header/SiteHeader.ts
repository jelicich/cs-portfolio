import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    currentSection: String,
  },
})
export default class SiteHeader extends Vue {
  currentSection!: string;
  isMenuOpen = false;

  mounted(): void {
    console.log("mounted header", this.currentSection);
    console.log("is mobile? ", this.$isMobile());
  }

  updateLocale($event: MouseEvent): void {
    this.$i18n.locale = ($event.target as HTMLSelectElement).value;
  }

  toggleMenu(toggle?: boolean): void {
    this.isMenuOpen = toggle ?? !this.isMenuOpen;
    this.$toggleBodyClass(this.isMenuOpen);
  }

  handleNav(): void {
    // TODO: emit event with section
    this.toggleMenu(false);
  }
}
