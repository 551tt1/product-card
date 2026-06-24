export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
  }

  open() {
    if(this.modal.classList.contains('modal-showed')) return;
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay");
    document.body.append(this.overlay); 
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.remove();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();  
    })
  }

  #initClose() {
    const closeButton = this.modal.querySelector('.modal-close-button')

    closeButton.addEventListener('click', () => {
      this.close();
    })
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', () => {
        this.close();
      })
    }
  }
}