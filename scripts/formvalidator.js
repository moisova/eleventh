class FormValidator {
    constructor(formValid) {
      this.formValid = formValid;
      this.setEventListeners = this.setEventListeners.bind(this);
    }
  
    checkInputValidity(inputElem, errorMessage) {
      if (inputElem.validity.valueMissing) {
        errorMessage.textContent = 'Это обязательное поле';
        return false;
        } 
        if (inputElem.validity.tooShort || inputElem.validity.tooLong) {
          errorMessage.textContent = 'Должно быть от 2 до 30 символов';
        return false;
        }  
        if (inputElem.validity.typeMismatch && inputElem.type === 'url') {
          errorMessage.textContent = 'Здесь должна быть ссылка';
          return false;
        } else {
          errorMessage.textContent = '';
        return true;
      }
    }
  

    setSubmitButtonState(state) {
      const button = this.formValid.querySelector("button");
      if (state) {
        button.removeAttribute("disabled");
        button.classList.add("popup__button_valid");
      } else {
        button.setAttribute("disabled", true);
        button.classList.remove("popup__button_valid");
      }
    }

    isFieldValid(input) {
      const errorElem = this.formValid.querySelector(`#${input.id}-error`);
      const valid = this.checkInputValidity(input, errorElem);
      return valid;
    }
  
    setEventListeners() {
      const inputs = [...this.formValid.querySelectorAll("input")];
      this.formValid.addEventListener("input", (event) => {
        const inputForValidation = event.target;
        this.isFieldValid(inputForValidation);
        if (inputs.every((input) => input.validity.valid)) {
          this.setSubmitButtonState(true);
        } else {
          this.setSubmitButtonState(false);
        }
      });
    }

    checkFormValid() {
      const inputs = [...this.formValid.querySelectorAll('input')];
      this.isFieldValid(inputs);
        if (inputs.every((input) => input.validity.valid)) {
          this.setSubmitButtonState(true);
          } else {
          this.setSubmitButtonState(false);
          }
    }
   
  }

