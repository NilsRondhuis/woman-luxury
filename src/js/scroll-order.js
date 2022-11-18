import refs from "./common/refs";
import scroll from "./common/scroll";

refs.heroOrderBtn.addEventListener("click", onClickScrollProduct);
refs.productOrderBtn.addEventListener("click", onClickScrollForm);

function onClickScrollProduct() {
  scroll(refs.sectionProduct);
}

function onClickScrollForm() {
  const currentBtnSize = document.querySelector(".size-btn__is-current");

  refs.textarea.value = "";

  if (currentBtnSize) {
    const size = currentBtnSize.textContent;
    refs.textarea.value = `Розмір: ${size}`;
  }

  scroll(refs.sectionForm);
}
