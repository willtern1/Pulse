//скрипт slick-slider jquery
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
// скрипт табов jquery
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list ').eq(i).toggleClass('catalog-item__list_active');

            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Модальные окна
    //открытие окна
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    // закрытие по кнопке и оверу
    $('.modal__close, .overlay').on('click', function (e) {
        if (e.target === this) {
            $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
        }
    });
    //открытие попапа заказа
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });
    //Валидация
    function validateForms (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введи свое имя",
                    minlength: jQuery.validator.format("Введите более {0}-х символов")
                },
                phone: "Пожалуйста, введи свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свой E-mail",
                    email: "Неправильно введен E-mail адресс"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form')
    //Маска для телефоны
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});


//number
//string
//true/false
//null
//undefined
//object
//symbol
