import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

const reviews = new Swiper(".reviews-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
