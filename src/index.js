import 'babel-polyfill'
import "normalize.css"
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import './blocks-films'
import "./scss/main/style.scss"
import "./films-table"
import "./present"
import "./city"


$(document).ready(function(){
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
        },
    },
    nav: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});


$('.to-top').click(function ()
{
    $('html').animate({ scrollTop: 0}, 1500);
});

/* Вариант без jquery */

const scrollToTop = document.querySelector('.to-top');

scrollToTop.addEventListener('click', function ()
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});

window.$ = window.jQuery = require('jquery');
const fancybox = require('@fancyapps/fancybox');
const fancyboxsCSS = require('@fancyapps/fancybox/dist/jquery.fancybox.css');