export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function toggleBodyClass(toggle: boolean): void {
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  body?.classList.toggle("is-blocked", toggle);
  html?.classList.toggle("is-blocked", toggle);
}
