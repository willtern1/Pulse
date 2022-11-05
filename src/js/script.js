$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron%20left%20solid.svg" alt="стрелка"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron%20right%20solid.svg" alt="стрелка"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});


//number
//string
//true/false
//null
//undefined
//object
//symbol
