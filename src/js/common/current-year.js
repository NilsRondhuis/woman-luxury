import refs from "./refs";

function currentYear(element) {
  const year = new Date();
  element.textContent = String(year.getFullYear());
}

currentYear(refs.currentYear);
