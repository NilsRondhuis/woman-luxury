import refs from "../common/refs";

function showErrorInputNameIsNumber() {
  refs.nameBoxMessage.classList.remove("visually-hidden");
  refs.nameMessage.textContent = "Поле Ім'я може містити тільки букви.";
}
function showErrorInputNameLength() {
  refs.nameBoxMessage.classList.remove("visually-hidden");
  refs.nameMessage.textContent =
    "Поле Ім'я може містити 2 або більше символів.";
}

function showErrorInputNumberIsWord() {
  refs.numberBoxMessage.classList.remove("visually-hidden");
  refs.numberMessage.textContent = "Поле Телефон може містити тільки цифри.";
}

function showErrorInputNameIsEmpty() {
  refs.nameBoxMessage.classList.remove("visually-hidden");
  refs.nameMessage.textContent = "Заповніть це поле.";
  refs.submitBtn.setAttribute("disabled", "true");
}

function showErrorInputNumberIsEmpty() {
  refs.numberBoxMessage.classList.remove("visually-hidden");
  refs.numberMessage.textContent = "Заповніть це поле.";
  refs.submitBtn.setAttribute("disabled", "true");
}

function removeErrorInputName() {
  refs.nameBoxMessage.classList.add("visually-hidden");
}
function removeErrorInputNumber() {
  refs.numberBoxMessage.classList.add("visually-hidden");
}

function showSubmitFormSuccess() {
  refs.submitMessageSuccess.classList.add("submit-message__is-show");

  setTimeout(() => {
    refs.submitMessageSuccess.classList.remove("submit-message__is-show");
  }, 5000);
}
function showSubmitFormError() {
  refs.submitMessageError.classList.add("submit-message__is-show");

  setTimeout(() => {
    refs.submitMessageError.classList.remove("submit-message__is-show");
  }, 5000);
}

function removeErrorInputNameIsEmpty() {
  setTimeout(() => {
    refs.nameBoxMessage.classList.add("visually-hidden");
    refs.submitBtn.removeAttribute("disabled");
  }, 3000);
}
function removeErrorInputNumberIsEmpty() {
  setTimeout(() => {
    refs.numberBoxMessage.classList.add("visually-hidden");
    refs.submitBtn.removeAttribute("disabled");
  }, 3000);
}

export {
  showErrorInputNameIsNumber,
  showErrorInputNameLength,
  showErrorInputNumberIsWord,
  showErrorInputNameIsEmpty,
  showErrorInputNumberIsEmpty,
  removeErrorInputName,
  removeErrorInputNumber,
  removeErrorInputNameIsEmpty,
  removeErrorInputNumberIsEmpty,
  showSubmitFormSuccess,
  showSubmitFormError,
};
