$(function () {

    $('.header__slider').slick({

        dots: true,
        /* fade: true, */
        arrows: false,
        speed: 1000,
        draggable: false,
        autoplay: true
    });

    $("#slick-slide-control00").html('01');
    $("#slick-slide-control01").html('02');
    $("#slick-slide-control02").html('03');

    $('.members__slider').slick({


        arrows: true

    });
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__list-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
});