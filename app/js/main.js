const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 25,
    navigation: {
        prevEl: '.reviews__btn--prev',
        nextEl: '.reviews__btn--next'
    },
    breakpoints: {
        1100: {
            slidesPerView: 5
        },
        870: {
            slidesPerView: 4,
        },
        690: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        320: {
            slidesPerView: 1
        }
    }
});

Fancybox.bind('[data-fancybox="video-gallery"]', {});