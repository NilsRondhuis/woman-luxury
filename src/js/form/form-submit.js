import refs from "../common/refs";
import {
  showErrorInputNameIsEmpty,
  showErrorInputNumberIsEmpty,
  removeErrorInputNameIsEmpty,
  removeErrorInputNumberIsEmpty,
  showSubmitFormSuccess,
  showSubmitFormError,
} from "./form-messages";

refs.form.addEventListener("submit", onSubmitForm);

const TOKEN = "5534414122:AAHFOiGPr9pLJKmINGOOWp705qDyXaHJiDE";
const CHAT_ID = "-847883587";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function onSubmitForm(e) {
  e.preventDefault();

  const { name, number, text } = e.currentTarget.elements;

  if (name.value === "") {
    showErrorInputNameIsEmpty();
    removeErrorInputNameIsEmpty();
    return;
  }
  if (number.value === "") {
    showErrorInputNumberIsEmpty();
    removeErrorInputNumberIsEmpty();
    return;
  }

  const data = {
    name: name.value,
    number: number.value,
    text: text.value,
  };

  fethTelegram(data);
  console.log(data);

  formReset(refs);
}

function fethTelegram(data) {
  let message = `<b>Заявка з сайту!</b>\n`;
  message += `<b>Відправник: </b> ${data.name}\n`;
  message += `<b>Телефон: </b> ${data.number}\n`;
  message += `<b>Коментар: </b> ${data.text}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  options.body = JSON.stringify(dataTg);

  fetch(URL_API, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then((res) => {
      showSubmitFormSuccess();
    })
    .catch((err) => {
      showSubmitFormError();
    });
}

function formReset(refs) {
  const { form, inputName, inputNumber, labelName, labelNumber } = refs;

  form.reset();
  inputName.classList.remove("success");
  inputNumber.classList.remove("success");

  labelName.classList.remove("placeholder__is-hidden");
  labelNumber.classList.remove("placeholder__is-hidden");
}
