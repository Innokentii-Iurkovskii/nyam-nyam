// Мобильное меню
// Открытие мобильного меню
$(".header__burger").click(function (event) {
  $(".header__menu").addClass("header__menu_open");
  $(".page").addClass("page_fixed");
});
// Закрытие мобильного меню
$(".header__close-button").click(function (event) {
  $(".header__menu").removeClass("header__menu_open");
  $(".page").removeClass("page_fixed");
});

// Слайдеры
// Слайдер главного баннера
const mainBannerSlider = new Swiper(".main-banner__slider", {
  loop: true,

  pagination: {
    el: ".main-banner .swiper-pagination",
  },

  navigation: {
    nextEl: ".main-banner .slider__button-next",
    prevEl: ".main-banner .slider__button-prev",
  },
});
// Слайдер блога
$(".blog-main__filter").on("click", "a", function () {
  var filter = $(this).attr("data-filter");

  $(".blog-main__slider .swiper-slide").css("display", "none");
  $(".blog-main__slider .swiper-slide" + filter).css("display", "");
  $(".blog-main__filter a").removeClass("blog-main__link_active");
  $(this).addClass("blog-main__link_active");

  blogMainSlider.updateSize();
  blogMainSlider.updateSlides();
  blogMainSlider.updateProgress();
  blogMainSlider.updateSlidesClasses();
  blogMainSlider.slideTo(0);
  blogMainSlider.scrollbar.updateSize();

  return false;
});

const blogMainSlider = new Swiper(".blog-main__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".blog-main .slider__button-next",
    prevEl: ".blog-main .slider__button-prev",
  },
});
// Слайдер наши клиенты
const clientsSlider = new Swiper(".clients__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1279: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".clients__slider-wrapper .slider__button-next",
    prevEl: ".clients__slider-wrapper .slider__button-prev",
  },
});
// Слайдер наши отзывы
const feedbackSlider = new Swiper(".feedback__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".feedback__slider-wrapper .slider__button-next",
    prevEl: ".feedback__slider-wrapper .slider__button-prev",
  },
});
// Слайдер комплексных обедов
var initOne = false;
let mobile = 767;
function catalogComplexSliderInit() {
  let mobile = 767;
  let allWorks = document.querySelectorAll(".catalog__complex-slider");

  const catalogComplexSlider = (element, id) => {
    return new Swiper(element, {
      slidesPerView: 2.2,
      spaceBetween: 16,
    });
  };

  if (document.body.clientWidth <= mobile) {
    if (!initOne) {
      initOne = true;
      allWorks.forEach((item, id) => {
        const slider = catalogComplexSlider(item, id);
      });
    }
  }
  if (document.body.clientWidth > mobile) {
    allWorks.forEach(function (item) {
      if (item.swiper) item.swiper.destroy(true, true);
    });
    initOne = false;
  }
}
window.addEventListener("load", function () {
  catalogComplexSliderInit();
});
window.addEventListener("resize", function () {
  catalogComplexSliderInit();
});
// Слайдер любимых продуктов в личном кабинете
var initTwo = false;
function catalogFavoriteFoodSliderInit() {
  let allWorks = document.querySelectorAll(".cabinet__favorite-food-slider");

  const catalogFavoriteFoodSlider = (element, id) => {
    return new Swiper(element, {
      slidesPerView: 1.2,
      spaceBetween: 16,
    });
  };

  if (document.body.clientWidth <= mobile) {
    if (!initTwo) {
      initTwo = true;
      allWorks.forEach((item, id) => {
        const slider = catalogFavoriteFoodSlider(item, id);
      });
    }
  }
  if (document.body.clientWidth > mobile) {
    allWorks.forEach(function (item) {
      if (item.swiper) item.swiper.destroy(true, true);
    });
    initTwo = false;
  }
}
window.addEventListener("load", function () {
  catalogFavoriteFoodSliderInit();
});
window.addEventListener("resize", function () {
  catalogFavoriteFoodSliderInit();
});
// Слайдер фото блог
$(".blog__slider-box").each(function (index, element) {
  var $this = $(this);
  $this.find(".blog__slider").addClass("blog__slider-" + index);
  $this.find(".slider__button-next").addClass("slider__button-next-" + index);
  $this.find(".slider__button-prev").addClass("slider__button-prev-" + index);
  var swiper = new Swiper(".blog__slider-" + index, {
    slidesPerView: 1,
    spaceBetween: 0,
    uniqueNavElements: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1279: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".slider__button-next-" + index,
      prevEl: ".slider__button-prev-" + index,
    },
  });
});
// Слайдер видео
const videoSlider = new Swiper(".blog__video-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".blog__slider-box .slider__button-next",
    prevEl: ".blog__slider-box .slider__button-prev",
  },
});
// Функция для появления слайдера только на мобильных разрешениях
var mySwiper = undefined;
function initSwiper(sliderClass, sliderButtonName, sliderGap, sliderSlides) {
  var screenWidth = $(window).width();
  var nextButton = sliderButtonName + " .slider__button-next";
  var prevButton = sliderButtonName + " .slider__button-prev";
  var gap = sliderGap;
  var slides = sliderSlides;
  if (screenWidth < 768 && mySwiper == undefined && $(sliderClass).length) {
    if (sliderButtonName != undefined) {
      mySwiper = new Swiper(sliderClass, {
        spaceBetween: gap,
        slidesPerView: slides,
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
      });
    } else {
      mySwiper = new Swiper(sliderClass, {
        spaceBetween: gap,
        slidesPerView: slides,
      });
    }
  } else if (
    screenWidth > 768 &&
    mySwiper != undefined &&
    $(sliderClass).length
  ) {
    mySwiper.destroy(true, true);
    mySwiper = undefined;
  }
}
// Слайдер в личном кабинете
initSwiper(".cabinet__slider", undefined, 16, 1.2);
$(window).on("resize", function () {
  initSwiper(".cabinet__slider");
});
// Слайдер в личном кабинете
initSwiper(".shipment__slider", ".shipment__slider-box", 0, 1);
$(window).on("resize", function () {
  initSwiper(".shipment__slider", ".shipment__slider-box");
});
// Слайдер документов
$(".documents__tabs").on("click", "a", function () {
  var filterDocuments = $(this).attr("data-filter");
  $(".documents__slider .swiper-slide").css("display", "none");
  $(".documents__slider .swiper-slide" + filterDocuments).css("display", "");
  $(".documents__tabs a").removeClass("tab_active");
  $(this).addClass("tab_active");
  documentsSwiper.updateSize();
  documentsSwiper.updateSlides();
  documentsSwiper.updateProgress();
  documentsSwiper.updateSlidesClasses();
  documentsSwiper.slideTo(0);
  documentsSwiper.scrollbar.updateSize();
  return false;
});
var documentsSwiper = new Swiper(".documents__slider", {
  spaceBetween: 0,
  slidesPerView: 1,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".documents__slider-wrapper .slider__button-next",
    prevEl: ".documents__slider-wrapper .slider__button-prev",
  },
});
// Слайдер в футере
const footerSlider = new Swiper(".footer__slider", {
  loop: true,

  navigation: {
    nextEl: ".footer__slider-wrapper .slider__button-next",
    prevEl: ".footer__slider-wrapper .slider__button-prev",
  },
});

// Календарь
$(".form__input_type_calendar").datepicker({
  altFormat: "dd/mm/yy",
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  dayNamesMin: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Февр",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сент",
    "Окт",
    "Нояб",
    "Дек",
  ],
});

// Счетчик количества у карточки товара
// Убавляем кол-во по клику
$(".order .order__minus").click(function () {
  let $input = $(this).parent().find(".order__quantity");
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
// Прибавляем кол-во по клику
$(".order .order__plus").click(function () {
  let $input = $(this).parent().find(".order__quantity");
  let count = parseInt($input.val()) + 1;
  count =
    count > parseInt($input.data("max-count"))
      ? parseInt($input.data("max-count"))
      : count;
  $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$(".order .order__quantity").bind("change keyup input click", function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, "");
  }
  if (this.value == "") {
    this.value = 1;
  }
  if (this.value > parseInt($(this).data("max-count"))) {
    this.value = parseInt($(this).data("max-count"));
  }
});

// Попапы
// Попап отзывов
$(".feedback__link").magnificPopup({
  type: "image",
  mainClass: "magnific-custom",
});
// Попап корзины
$(".header__cart").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "magnific-custom",
  showCloseBtn: false,
});
// Попап скачать меню
$(".catalog__download-button").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "magnific-custom",
});
// Попап карточки товара
$(".card__link").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "magnific-custom",
});
// Попап документы
$(".documents__link").magnificPopup({
  type: "image",
  mainClass: "magnific-custom",
});

// Смена вида отображения карточек товара
$(".catalog__view-change").click(function () {
  $(this).addClass("catalog__view-change_active");
  $(".catalog__view-change")
    .not(this)
    .removeClass("catalog__view-change_active");
});
$(".catalog__view-change_type_list").click(function () {
  $(".catalog__view-box").addClass("catalog__view-box_type_list");
});
$(".catalog__view-change_type_tile").click(function () {
  $(".catalog__view-box").removeClass("catalog__view-box_type_list");
});

// Открытие табов в адаптиве каталога
$(".catalog__mobile-link").click(function () {
  $(this).toggleClass("catalog__mobile-link_open");
  $(".catalog__mobile-link").not(this).removeClass("catalog__mobile-link_open");
  if ($(".catalog__mobile-link").hasClass("catalog__mobile-link_open")) {
    $(".page").addClass("page_type_dark");
  } else {
    $(".page").removeClass("page_type_dark");
  }
});

// Табы на странице доставки
$(".shipment__tabs-box, .shipment__subtabs-box").tabs();

// Аккордеон в FAQ
$(".faq__item").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  if (!$this.hasClass("faq__item_active")) {
    $(".faq__content").slideUp(400);
    $(".faq__item").removeClass("faq__item_active");
  }
  $this.toggleClass("faq__item_active");
  $this.find(".faq__content").slideToggle();
});
