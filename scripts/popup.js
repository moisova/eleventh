class Popup {
    constructor(element, openClassName) {
      this.element = element;
      this.openClassName = openClassName;
      this.element.querySelector('.popup__close').addEventListener("click", () => this.close());
    }
  
    open() {
      this.element.classList.add(this.openClassName);
    }
  
    close() {
      this.element.classList.remove(this.openClassName);
    }
  }
  

