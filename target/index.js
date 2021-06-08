"use strict";

require("babel-polyfill");

require("normalize.css");

require("owl.carousel/dist/assets/owl.carousel.css");

require("owl.carousel");

require("../target/blocks-films");

require("./scss/main/style.scss");

require("../target/films-table");

require("../target/present");

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  items: 3,
  center: true,
  loop: true,
  responsive: {
    820: {
      items: 3
    },
    560: {
      items: 2
    },
    0: {
      items: 1,
      center: true
    }
  },
  nav: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut'
});