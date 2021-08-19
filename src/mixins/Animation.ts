import { Options, Vue } from "vue-class-component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimationOptions, IsMobileType, ToggleBodyClassType } from "@/models";
import { inject } from "vue";

@Options({
  props: {},
})
export default class Animation extends Vue {
  private gsapTimeline: GSAPTimeline = gsap.timeline();
  toggleBodyClass: ToggleBodyClassType | undefined = inject("toggleBodyClass");
  isMobile: IsMobileType | undefined = inject("isMobile");

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
    console.log("created.registered plugin and timeline", this.gsapTimeline);
  }

  private _to(
    el: string | HTMLElement,
    options: AnimationOptions
  ): GSAPTimeline {
    if (this.isMobile?.() && !options.runInMobile) return this.gsapTimeline;
    console.log("running to", this.gsapTimeline);
    this.gsapTimeline.to(el, options.gsapOptions);
    return this.gsapTimeline;
  }

  private _from(
    el: string | HTMLElement,
    options: AnimationOptions
  ): GSAPTimeline {
    this.gsapTimeline.from(el, options.gsapOptions);
    return this.gsapTimeline;
  }

  // helpers

  private _vh(coef: number): number {
    return window.innerHeight * (coef / 100);
  }

  private _vw(coef: number): number {
    return window.innerWidth * (coef / 100);
  }
}
