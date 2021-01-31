$(document).ready(function() {
  $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});