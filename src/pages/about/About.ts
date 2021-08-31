import { Options, mixins } from "vue-class-component";
import Animation from "@/mixins/Animation";
import { inject } from "vue";

@Options({
  props: {
    msg: String,
  },
})
export default class About extends mixins(Animation) {
  msg!: string;
  baseUrl = inject("baseUrl");

  mounted(): void {
    this.animateImage();
    this.animateBackground();
  }

  animateBackground(): void {
    const TARGET_SEL = ".About-background";
    const TRIGGER_ELEMENT_SEL = "#about";

    const introAnimationOptions = {
      runInMobile: false,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        },
        width: this.helpers.vw(100),
      },
    };

    const outroAnimationOptions = {
      runInMobile: false,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
        x: -this.helpers.vw(15),
      },
    };

    this.timeline.from(TARGET_SEL, introAnimationOptions);
    this.timeline.to(TARGET_SEL, outroAnimationOptions);
  }

  animateImage(): void {
    const TARGET_SEL = ".About-portrait";
    const TRIGGER_ELEMENT_SEL = "#about";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "center bottom",
          end: "bottom bottom",
        },
        y: this.helpers.vh(100),
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }
}
