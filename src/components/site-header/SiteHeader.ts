import { Options, mixins } from "vue-class-component";
import Animation from "@/mixins/Animation";
import { inject, PropType } from "vue";
import { IsMobileType, ToggleBodyClassType } from "@/models";
import ScrollTrigger from "gsap/ScrollTrigger";

@Options({
  props: {
    links: {
      type: Array as PropType<string[]>,
      required: true,
      default: [],
    },
  },
})
export default class SiteHeader extends mixins(Animation) {
  currentSection = "";
  isMenuOpen = false;
  toggleBodyClass: ToggleBodyClassType | undefined = inject("toggleBodyClass");
  isMobile: IsMobileType | undefined = inject("isMobile");
  links: Array<string> = [];

  get linkList(): Array<string> {
    const result = this.links.map((link: string) => link.toLowerCase());
    return result;
  }

  mounted(): void {
    this.headerPositionAnimation();
    this.logoAnimation();
    this.setSmoothScroll();
    this.setActiveLinks();
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
          return `-${width + this.helpers.vw(10)}px`;
        },
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  setSmoothScroll(): void {
    const LINKS_SELECTOR = ".SiteHeader-nav a";
    const links = document.querySelectorAll(LINKS_SELECTOR);
    links.forEach((link) => {
      (link as HTMLAnchorElement).onclick = (e: MouseEvent) => {
        e.preventDefault();
        const target = (e?.currentTarget as HTMLElement)?.getAttribute("href");
        const scrollTo =
          target && (document?.querySelector(target) as HTMLElement).offsetTop;

        const gsapOptions = {
          duration: 1.5,
          scrollTo: scrollTo,
          ease: "power2.inOut",
        };

        this.gsap.to(window, gsapOptions as GSAPTweenVars);
      };
    });
  }

  setActiveLinks(): void {
    const links = document.querySelectorAll(".SiteHeader-nav a");
    links.forEach((link) => {
      ScrollTrigger.create({
        trigger: link.getAttribute("href"),
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: (e) => {
          this.currentSection = e.trigger?.id || "";
        },
        onEnterBack: (e) => {
          this.currentSection = e.trigger?.id || "";
        },
      });
    });
  }
}
