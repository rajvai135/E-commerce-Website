const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
