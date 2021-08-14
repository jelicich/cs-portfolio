import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Portfolio extends Vue {
  data() {
    return {
      items: [
        {
          title: "portfolio.items.item1.title",
          img: require("@/assets/item1.png"),
          description: "portfolio.items.item1.description",
        },
        {
          title: "portfolio.items.item2.title",
          img: require("@/assets/item2.png"),
          description: "portfolio.items.item2.description",
        },
        {
          title: "portfolio.items.item3.title",
          img: require("@/assets/item3.png"),
          description: "portfolio.items.item3.description",
        },
      ],
    };
  }
  mounted(): void {
    console.log("mounted Portfolio");
  }
}
