import { Options, mixins } from "vue-class-component";
import Animation from "@/mixins/Animation";
import { inject } from "vue";
import { IsMobileType, ToggleBodyClassType } from "@/models";

@Options({
  props: {
    currentSection: String,
  },
})
export default class SiteHeader extends mixins(Animation) {
  currentSection!: string;
  isMenuOpen = false;
  toggleBodyClass: ToggleBodyClassType | undefined = inject("toggleBodyClass");
  isMobile: IsMobileType | undefined = inject("isMobile");

  mounted(): void {
    this.headerPositionAnimation();
    this.logoAnimation();
  }

  updateLocale($event: MouseEvent): void {
    this.$i18n.locale = ($event.target as HTMLSelectElement).value;
  }

  toggleMenu(toggle?: boolean): void {
    this.isMenuOpen = toggle ?? !this.isMenuOpen;
    this.toggleBodyClass?.(this.isMenuOpen);
  }

  handleNav(): void {
    // TODO: emit event with section
    this.toggleMenu(false);
  }

  headerPositionAnimation(): void {
    const TARGET_SEL = "#site-header";
    const TRIGGER_ELEMENT_SEL = "#about";

    const animationOptions = {
      runInMobile: false,
      animationName: "headerPositionAnimation",
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        },
        y: "80vh",
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  logoAnimation(): void {
    const TARGET_SEL = ".SiteHeader-title";
    const TRIGGER_ELEMENT_SEL = ".Home-title";

    const animationOptions = {
      runInMobile: false,
      animationName: "logoAnimation",
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "bottom top",
          end: this.helpers.vh(80),
        },
        x: () => {
          const el = document.querySelector(TARGET_SEL);
          const width = el?.getBoundingClientRect().width || 0;
          const offset = `-${width - this.helpers.vw(10)}px`;
          console.log("offset ", offset);
          return `-${width + this.helpers.vw(10)}px`;
        },
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }
}
