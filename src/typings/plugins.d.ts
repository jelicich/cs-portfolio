/* eslint-disable */
import Vue from "vue"; 

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $isMobile: () => boolean;
    $toggleBodyClass: (toggle: boolean) => void;
  }
}
