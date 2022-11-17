import refs from "../common/refs";

refs.inputName.addEventListener("focus", onFocusInputName);
refs.inputName.addEventListener("blur", onNotFocusInputName);

refs.inputNumber.addEventListener("focus", onFocusInputTel);
refs.inputNumber.addEventListener("blur", onNotFocusInputTel);

function onFocusInputName() {
  refs.labelName.classList.add("placeholder__is-hidden");
}
function onNotFocusInputName(e) {
  if (e.target.value === "") {
    refs.labelName.classList.remove("placeholder__is-hidden");
  } else return;
}

function onFocusInputTel() {
  refs.labelNumber.classList.add("placeholder__is-hidden");
}
function onNotFocusInputTel(e) {
  if (e.target.value === "") {
    refs.labelNumber.classList.remove("placeholder__is-hidden");
  } else return;
}
