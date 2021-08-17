import { Options, Vue } from "vue-class-component";
import Modal from "@/components/modal/index.vue";
import { PortfolioItem } from "@/models";

@Options({
  components: { Modal },
})
export default class Portfolio extends Vue {
  showModal = false;
  items: Array<PortfolioItem> = []; // = items;
  currentItem: PortfolioItem | null = null;

  mounted(): void {
    this.getProjects();
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
}
