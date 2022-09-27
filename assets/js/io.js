"use strict";

$(document).ready(function(){
    
    $('.slick-banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.slick-carousel-product').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<div class="slick-prev h1 text-primary"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next h1 text-primary"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                }
            },            
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                }
            },            
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


});

function toggle_side_menu() {
    $('.side-menu').toggleClass('active');
}

function show_img_full(img_link){
    $('.img_full_product').attr('src', img_link);
    $('.img_full_product').css('display', 'block');
}   