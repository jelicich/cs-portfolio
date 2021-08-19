import { Options, mixins } from "vue-class-component";
import Animation from "@/mixins/Animation";
@Options({
  components: {},
})
export default class Home extends mixins(Animation) {
  mounted(): void {
    this.animateIntroFrame();
    this.animateIntroTitle();
    this.animateIntroSubtitle();
    this.animateFrame();
    this.animateTitle();
    this.animateSubtitle();
  }

  animateIntroFrame(): void {
    const TARGET_SEL = ".Home-frame";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        width: this.helpers.vw(100),
        height: this.helpers.vh(100),
        delay: "0.5",
        top: 0 + this.helpers.vh(35),
        left: 0,
        opacity: 0,
        ease: "power4",
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  animateIntroTitle(): void {
    const TARGET_SEL = ".Home-titleLine";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        y: this.helpers.vh(20),
        ease: "power4",
        delay: "0.5",
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  animateIntroSubtitle(): void {
    const SUBTITLE_SEL = ".Home-subtitle";

    const subtitleEl = document.querySelector(SUBTITLE_SEL);
    const elWidth = subtitleEl?.getBoundingClientRect().width || 0;

    const subtitleAnimationOptions = {
      runInMobile: true,
      gsapOptions: {
        // width: 0,
        x: -(elWidth + this.helpers.vw(10)),
        ease: "power4",
        delay: "-1",
      },
    };
    this.timeline.from(SUBTITLE_SEL, subtitleAnimationOptions);
  }

  animateFrame(): void {
    const TARGET_SEL = ".Home-frame";
    const TRIGGER_ELEMENT_SEL = "#about";
    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        },
        y: -this.helpers.vh(10),
        scale: 0,
      },
    };

    this.timeline.to(TARGET_SEL, animationOptions);
  }

  animateTitle(): void {
    const TARGET_SEL = ".Home-title";
    const TRIGGER_ELEMENT_SEL = "#about";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        },
        x: -this.helpers.vh(80),
      },
    };

    this.timeline.to(TARGET_SEL, animationOptions);
  }

  animateSubtitle(): void {
    const TARGET_SEL = ".Home-subtitle";
    const TRIGGER_ELEMENT_SEL = "#about";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "top bottom",
          end: "top center",
        },
        y: `-=${this.helpers.vh(50)}`,
        width: 0,
      },
    };
    this.timeline.to(TARGET_SEL, animationOptions);
  }
}
