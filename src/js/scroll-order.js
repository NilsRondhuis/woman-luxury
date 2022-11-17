import refs from "./common/refs";
import scroll from "./common/scroll";

window.addEventListener("click", onClickOrderBtn);

function onClickOrderBtn(e) {
  if (e.target.classList.contains("scroll-order-btn")) {
    scroll(refs.sectionForm);
  }

  return;
}
