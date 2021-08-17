import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    closeButtonText: {
      type: String,
      required: false,
      default: "X",
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["update:show"],
  watch: {
    show: {
      immediate: true,
      handler(isShown) {
        this.toggleBodyClass(isShown);
      },
    },
  },
})
export default class Modal extends Vue {
  show!: boolean;
  title!: string;
  closeButtonText!: string;
  description!: string;

  mounted(): void {
    console.log("mounted modal", this.show);
  }

  close(): void {
    this.$emit("update:show", false);
  }

  toggleBodyClass(toggle: boolean): void {
    const body = document.querySelector("body");
    body?.classList.toggle("is-blocked", toggle);
  }
}
