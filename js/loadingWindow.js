export class loadingWindow {
  constructor() {
    this.create();
  }
  create() {
    this.el = document.createElement("p");
    this.el.classList.add("loading");
    document.body.append(this.el);
    this.el.textContent = "Loading...";
    this.overlay = document.createElement("div");
    this.overlay.classList.add("loading-overlay");
    document.body.append(this.overlay);
  }
  windowRemove() {
    this.overlay.remove();
    setTimeout(() => {
      this.el.remove();
    }, 60);
  }
  windowError() {
    const divError = document.createElement("div");
    divError.classList.add("div-error");
    divError.textContent = "Ошибка при загрузке данных";
    document.body.append(divError);
  }
}
