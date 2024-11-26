const hamburgerBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

hamburgerBtn.addEventListener("click", function () {
  menuList.classList.toggle("menu__list-active");
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".cetrificates__slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon__text");
    accordeonTitle.classList.toggle("accordeon__title--active");
    currentText.classList.toggle("accordeon__text--visible");

    if (currentText.classList.contains("accordeon__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
      currentText.style.opacity = 1;
    } else {
      currentText.style.maxHeight = null;
      currentText.style.opacity = 0;
    }
  });
});
