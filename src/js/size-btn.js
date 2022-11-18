import refs from "./common/refs";

refs.boxBtnSize.addEventListener("click", onClickBtnSize);

let prevBtn;

function onClickBtnSize(e) {
  if (prevBtn) {
    prevBtn.classList.remove("size-btn__is-current");
  }

  if (e.target.classList.contains("size-btn")) {
    if (e.target === prevBtn) {
      e.target.classList.remove("size-btn__is-current");

      return;
    }

    prevBtn = e.target;
    e.target.classList.add("size-btn__is-current");
  }
}
