document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 5,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});

