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

gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({defaults: {duration: 0.8}});
timeline.from(".header", {opacity: 0, y: -100});
timeline.from(".start", {opacity: 0, y: 800});

const timelineBenefits = gsap.timeline({defaults: {duration: 0.6}});
timelineBenefits.pause();
timelineBenefits.from('.benefits', {opacity: 0, y: 530});
ScrollTrigger.create({
    trigger: '.benefits',
    once: true,
    onEnter: () => {
        timelineBenefits.play();
    },
});

const timelineReviews = gsap.timeline({defaults: {duration: 0.8}});
timelineReviews.pause();
timelineBenefits.from('.reviews', {opacity: 0, y: 530});
ScrollTrigger.create({
    trigger: '.reviews',
    start: 'top 170%',
    once: true,
    onEnter: () => {
        timelineBenefits.play();
    },
});

const timelineCertificados = gsap.timeline({defaults: {duration: 0.8}});
timelineCertificados.pause();
timelineCertificados.from('.certificados', {opacity: 0, y: 330});
ScrollTrigger.create({
    trigger: '.certificados',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineCertificados.play();
    },
});

const timelineFooter = gsap.timeline({defaults: {duration: 0.4}});
timelineFooter.pause();
timelineFooter.from('.footer', {delay: 1, opacity: 0});
ScrollTrigger.create({
    trigger: '.footer',
    start: 'top 170%',
    once: true,
    onEnter: () => {
        timelineFooter.play();
    },
});