import { App } from "vue";

export default {
  install: (app: App): void => {
    app.config.globalProperties.$isMobile = (): boolean => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    app.config.globalProperties.$toggleBodyClass = (toggle: boolean): void => {
      const body = document.querySelector("body");
      body?.classList.toggle("is-blocked", toggle);
    };
  },
};
