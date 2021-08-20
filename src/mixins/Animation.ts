import { Options, Vue } from "vue-class-component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { AnimationOptions, IsMobileType, ToggleBodyClassType } from "@/models";
import { inject } from "vue";

@Options({
  props: {},
})
export default class Animation extends Vue {
  private gsapTimeline: GSAPTimeline = gsap.timeline();
  toggleBodyClass: ToggleBodyClassType | undefined = inject("toggleBodyClass");
  isMobile: IsMobileType | undefined = inject("isMobile");
  gsap = gsap;

  timeline = {
    to: this._to.bind(this),
    from: this._from.bind(this),
  };

  helpers = {
    vh: this._vh,
    vw: this._vw,
  };

  created(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
  }

  private _to(
    el: string | HTMLElement | Window,
    options: AnimationOptions
  ): void {
    if (this.isMobile?.() && !options.runInMobile) return;
    this.gsapTimeline.to(el, options.gsapOptions);
    this.gsapTimeline.progress(1).progress(0);
  }

  private _from(
    el: string | HTMLElement | Window,
    options: AnimationOptions
  ): void {
    if (this.isMobile?.() && !options.runInMobile) return;
    this.gsapTimeline.from(el, options.gsapOptions);
    this.gsapTimeline.progress(1).progress(0);
  }

  // helpers

  private _vh(coef: number): number {
    return window.innerHeight * (coef / 100);
  }

  private _vw(coef: number): number {
    return window.innerWidth * (coef / 100);
  }
}
