import _throttle from "lodash.throttle";
import refs from "./common/refs";
import scroll from "./common/scroll";

console.log(_throttle);

window.addEventListener("scroll", _throttle(onShowUpBtn, 300));
refs.upBtn.addEventListener("click", () => {
  scroll(document.body);
});

function onShowUpBtn() {
  const rect = document.body.getBoundingClientRect();

  if (rect.y < -900) {
    refs.upBtn.classList.add("btn-up__is-show");
  } else refs.upBtn.classList.remove("btn-up__is-show");
}
