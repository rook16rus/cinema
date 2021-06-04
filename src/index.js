import 'babel-polyfill';
import "normalize.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../target/blocks-films'
import "./scss/main/style.scss"
import "../target/films-table"
import "../target/present"


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