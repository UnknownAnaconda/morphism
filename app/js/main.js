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

const sections = document.querySelectorAll('.my-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) { // Установка порога на 20%
            entry.target.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // Изменение порога на 20%

sections.forEach(section => {
    observer.observe(section);
});
