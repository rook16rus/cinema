import "normalize.css"
import "../owl_carousel/dist/assets/owl.theme.default.css"
import "../owl_carousel/dist/assets/owl.carousel.css"
import "../owl_carousel/dist/owl.carousel"
import "./scss/style.scss"
import "./films-table"

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    items: 3,
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
});
