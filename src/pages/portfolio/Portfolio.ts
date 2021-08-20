import { Options, mixins } from "vue-class-component";
import Modal from "@/components/modal/index.vue";
import { PortfolioItem } from "@/models";
import Animation from "@/mixins/Animation";

@Options({
  components: { Modal },
})
export default class Portfolio extends mixins(Animation) {
  showModal = false;
  items: Array<PortfolioItem> = []; // = items;
  currentItem: PortfolioItem | null = null;

  async mounted(): Promise<void> {
    await this.getProjects();
    this.animateBackground();
    this.animateItems();
  }

  async getProjects(): Promise<void> {
    try {
      const response = await fetch("/static/portfolio-items.json");
      this.items = await response.json();
    } catch (error) {
      console.error("There was an error loading the projects: ", error);
    }
  }

  openModal(item: PortfolioItem): void {
    this.currentItem = item;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  animateBackground(): void {
    const TARGET_SEL = ".Portfolio-background";
    const TRIGGER_ELEMENT_SEL = "#portfolio";

    const animationOptions = {
      runInMobile: true,
      gsapOptions: {
        scrollTrigger: {
          trigger: TRIGGER_ELEMENT_SEL,
          scrub: true,
          start: "center bottom",
          end: "bottom bottom",
        },
        x: this.helpers.vw(100),
      },
    };

    this.timeline.from(TARGET_SEL, animationOptions);
  }

  animateItems(): void {
    const TARGET_SEL = ".Portfolio-item";
    const TRIGGER_ELEMENT_SEL = "#portfolio";

    const items = document.querySelectorAll(TARGET_SEL);
    items.forEach((item, i) => {
      const offset = 1 + i / 5;
      const animationOptions = {
        runInMobile: true,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: `${this.helpers.vh(50) * offset} bottom`,
            end: "bottom bottom",
          },
          y: this.helpers.vh(70),
        },
      };

      this.timeline.from(item as HTMLElement, animationOptions);
    });
  }
}
