import refs from "../common/refs";
import {
  showErrorInputNameIsNumber,
  showErrorInputNameLength,
  showErrorInputNumberIsWord,
  removeErrorInputName,
  removeErrorInputNumber,
} from "./form-messages";

refs.inputName.addEventListener("input", onCheckInputName);
refs.inputNumber.addEventListener("input", onCheckInputNumber);

function onCheckInputName(e) {
  const inputName = e.target;

  if (/\d/g.test(inputName.value)) {
    inputName.classList.remove("success");
    showErrorInputNameIsNumber();
    inputName.classList.add("error");
  } else {
    inputName.classList.remove("error");
    removeErrorInputName();
    inputName.classList.add("success");
  }

  if (inputName.value.length < 2) {
    showErrorInputNameLength();
    inputName.classList.remove("success");
    inputName.classList.add("error");
  }

  if (inputName.value === "") {
    removeErrorInputName();
    inputName.classList.remove("error");
    inputName.classList.remove("success");
  }

  checkInputOnError();
}

function onCheckInputNumber(e) {
  const inputTel = e.target;

  if (/[а-яА-ЯёЁЇїІіЄєҐґa-zA-Z]/g.test(inputTel.value)) {
    showErrorInputNumberIsWord();
    inputTel.classList.remove("success");
    inputTel.classList.add("error");
  } else {
    removeErrorInputNumber();
    inputTel.classList.add("error");
  }

  if (
    /^((0|\+3|\+38|38))?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g.test(
      inputTel.value
    )
  ) {
    inputTel.classList.remove("error");
    inputTel.classList.add("success");
  } else inputTel.classList.remove("success");

  if (inputTel.value === "") {
    removeErrorInputNumber();
    inputTel.classList.remove("error");
    inputTel.classList.remove("success");
  }

  checkInputOnError();
}

function checkInputOnError() {
  if (
    refs.inputName.classList.contains("error") ||
    refs.inputNumber.classList.contains("error")
  ) {
    refs.submitBtn.setAttribute("disabled", "true");
  } else refs.submitBtn.removeAttribute("disabled");
}
