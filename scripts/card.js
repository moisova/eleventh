class Card {
  
    constructor(name, link, openImagePopup, itemTemplate) {
      this.name = name;
      this.link = link;
      this.itemTemplate = itemTemplate;
      this.openImagePopup = openImagePopup;

    }
  
    createNewCard() {
    
       const card = this.itemTemplate.cloneNode(true).children[0];
       const cardName = card.querySelector('.place-card__name');
       const cardImage = card.querySelector('.place-card__image');
       cardName.textContent = this.name;
       cardImage.style.backgroundImage = `url(${this.link})`;  
       this.cardElement = card;
       this.setEventListeners();
       return this.cardElement;
    }
  
    setEventListeners() {
      this.cardElement
        .querySelector(".place-card__like-icon")
        .addEventListener("click", this.like);
  
      this.cardElement
        .querySelector(".place-card__delete-icon")
        .addEventListener("click", this.remove.bind(this));
  
      this.cardElement.addEventListener("click", this.openImage);
    }

    openImage = (event) => {
     this.openImagePopup(event.target);
    }
  
    like = (event) => {
      event.stopPropagation();
      event.target.classList.toggle('place-card__like-icon_liked');
  }
  
    remove = (event) => {
      this.cardElement.remove();
      event.stopPropagation();
      this.removeEventListeners(this.cardElement);
    }

    removeEventListeners = (card) => {
      card.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
      card.querySelector('.place-card__image').removeEventListener('click', this.openImage);
      card.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
    }

  }