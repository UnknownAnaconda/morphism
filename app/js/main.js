const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    navigation: {
        prevEl: '.reviews__btn--prev',
        nextEl: '.reviews__btn--next'
    },
});