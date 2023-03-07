//Открытие мобильного меню
$('.header__burger').click(function(event){
    $('.header__menu').addClass('header__menu_open');
    $('.page').addClass('page_fixed');
});
//Закрытие мобильного меню
$('.header__close-button').click(function(event){
  $('.header__menu').removeClass('header__menu_open');
  $('.page').removeClass('page_fixed');
});

//Слайдер главного баннера
const mainBannerSlider = new Swiper('.main-banner__slider', {
  loop: true,

  pagination: {
    el: '.main-banner .swiper-pagination',
  },

  navigation: {
    nextEl: '.main-banner .slider__button-next',
    prevEl: '.main-banner .slider__button-prev',
  },
});
//Слайдер в футере
const footerSlider = new Swiper('.footer__slider', {
  loop: true,

  navigation: {
    nextEl: '.footer__slider-wrapper .slider__button-next',
    prevEl: '.footer__slider-wrapper .slider__button-prev',
  },
});
