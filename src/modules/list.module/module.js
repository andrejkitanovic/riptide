'use strict';

const swiperObj = document.querySelector('.swiper');

if (swiperObj) {
  const swiper = new Swiper(swiperObj, {
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
