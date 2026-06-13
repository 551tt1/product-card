export class Modal {
  constructor(id) {
    this.id = id;
    this.element = document.getElementById(this.id);
    this.overlay = document.querySelector('.overlay');
    this.openModalBtn = document.querySelector("#registration-modal-btn");
    this.closeModalBtn = document.querySelector("#close-modal-btn");
    this.listenBtnCloseModal();
    this.openModalBtn.addEventListener('click', () => {
      this.open();
    });
  }

  open() {
    this.overlay.classList.add('modal-showed');
  }
  close() {
    this.overlay.classList.remove('modal-showed');
  }
  isOpen() {
    return this.overlay.classList.contains('modal-showed');
  }
  listenBtnCloseModal() {
    this.closeModalBtn.addEventListener('click', () => {
      this.close();
    });
  }
}
