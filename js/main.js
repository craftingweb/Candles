const hamburgerBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

hamburgerBtn.addEventListener("click", function () {
  menuList.classList.toggle("menu__list-active");
});
