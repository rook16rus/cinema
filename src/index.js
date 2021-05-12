import "normalize.css"
import "../owl_carousel/dist/assets/owl.theme.default.min.css"
import "../owl_carousel/dist/assets/owl.carousel.min.css"
import "../owl_carousel/dist/owl.carousel.min"
import "./scss/style.scss"

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
})