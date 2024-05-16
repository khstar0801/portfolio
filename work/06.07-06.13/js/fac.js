$(function(){
    //fac
    var facSlide = new Swiper( '.fac-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 700,
        centeredSlides: true,
        navigation: {
            nextEl: '.fac-next',
            prevEl: '.fac-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            
        },
    });
});