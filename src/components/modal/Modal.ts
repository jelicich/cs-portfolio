import { Options, Vue } from "vue-class-component";
import { ToggleBodyClassType } from "@/models";
import { inject } from "vue";

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
      handler(isShown: boolean): void {
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

  toggleBodyClass: ToggleBodyClassType | undefined = inject("toggleBodyClass");

  close(): void {
    this.$emit("update:show", false);
  }
}
