
  const modules = (function () {
  const itemTemplate = document.querySelector(".item_template").content;
  const cardsContainer = document.querySelector(".places-list");
  const popup = document.querySelector(".popup");
  const closeForm = document.querySelector(".popup__close");
  const popupProfileWindow = document.querySelector(".popup_profile");
  const popupForm = document.querySelector(".popup__form");
  const openAddForm = document.querySelector(".user-info__button_add");
  const openEditForm = document.querySelector(".user-info__button_edit");
  const popupImageWindow = document.querySelector(".popup_image");
  const popupProfileForm = document.querySelector(".popup__form_profile");
  const name = document.querySelector(".popup__input_type_name");
  const link = document.querySelector(".popup__input_type_link-url");
  const formNew = document.forms.new;
  const formProfile = document.forms.profile;
  const nameInput = formProfile.elements.name;
  const aboutMe = formProfile.elements.aboutMe;
  const authorUrl = 'https://nomoreparties.co/cohort12/users/me'

  function addNewCard(event) {
    event.preventDefault();
    cardList.addCard(name.value, link.value);
    popupAddCard.close();
    popupForm.reset();
    sendFormAdd.setSubmitButtonState(false);
  }


  function openImagePopup (target) {
    if (event.target.classList.contains("place-card__image")) {
    const formImage = document.querySelector('.popup__content_image');
    formImage.style = event.target.getAttribute('style');
    popupImage.open();}
  };

  function formUserSubmit(event) {
    event.preventDefault();
    api.changeProfile(authorUrl, nameInput.value, aboutMe.value)
    .then(() => { 
      userInfoInitial.updateUserInfo();
      popupUser.close()
    })
    .catch(err => console.log(err));
  }

  const userInfoInitial = new UserInfo(
    document.querySelector(".user-info__name"),
    document.querySelector(".user-info__job"),
    document.querySelector(".user-info__photo"),
     nameInput,
     aboutMe
  );

  const popupAddCard = new Popup(popup, "popup_is-opened");

  const popupProfile = new Popup(popupProfileWindow, "popup_is-opened");

  const popupImage = new Popup(popupImageWindow, "popup_is-opened");

  const sendFormAdd = new FormValidator(formNew);
  sendFormAdd.setEventListeners();

  const sendFormProfile = new FormValidator(formProfile);
  sendFormProfile.setEventListeners();

  const api = new Api({
    url:'https://nomoreparties.co/cohort12/cards',
    authorization: 'c5d15176-ba3c-408c-a963-a59d661e485b'
  }); 

  const createCardFunc = (...args) => {
    const card = new Card(...args, openImagePopup, itemTemplate);
    return card.createNewCard();
  };

  const cardList = new CardList(cardsContainer, api, createCardFunc);
  cardList.render(initialCards);

  api.sendRequest(authorUrl)
.then((res) => {
  userInfoInitial.setUserInfo(res.name, res.about, res.avatar)
})
.catch(err => console.log(err));


  popupForm.addEventListener("submit", addNewCard);
  popupProfileForm.addEventListener("submit", () => {
    formUserSubmit(event);
  });
  openAddForm.addEventListener("click", () => {
    popupAddCard.open();
  });
  openEditForm.addEventListener("click", () => {
    popupProfile.open(); userInfoInitial.actualInputInfo(); sendFormProfile.checkFormValid()
  });
  closeForm.addEventListener("click", () => {
    popupForm.reset();
    sendFormAdd.setSubmitButtonState(false);
  });
})();


/* REVIEW:

Доброго времени суток!

В целом, у вас получилась отличная работа, в проект добавлены взаимодействия с сервером. 
Cоздан класс Api, отвечающий за обработку запросов к серверу, весь функционал реализован и работает как указано в задании, 
видно общее понимание принципов ООП, в коде используются стрелочные функции из ES6, здорово!

Критические замечания по работе отсутствуют, работа принята, поздравляю!

Спасибо за усилия и старания, удачи в следующем спринте и успехов в дальнейшем обучении 
*/