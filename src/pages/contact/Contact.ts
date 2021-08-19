import { Options, mixins } from "vue-class-component";
import Animation from "@/mixins/Animation";

@Options({
  components: {},
})
export default class Home extends mixins(Animation) {
  mounted(): void {
    this.animateFrame();
    this.animateAction();
  }

  animateFrame(): void {
    const TARGET_SEL = ".Contact-frame";
    const TRIGGER_ELEMENT_SEL = "#contact";

    const animationOptions = {
      runInMobile: false,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: `${this.helpers.vh(25)} bottom`,
          end: "bottom bottom",
        },
        width: 0,
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  animateAction(): void {
    const TARGET_SEL = ".Contact-action";
    const TRIGGER_ELEMENT_SEL = "#contact";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: `${this.helpers.vh(25)} bottom`,
          end: "bottom bottom",
        },
        x: this.helpers.vw(50),
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }
}
