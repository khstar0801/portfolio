$(function(){
    var facswiper = new Swiper( '.fac-swiper', {
        slidesPerView: 1.4,
        spaceBetween: 20,
        
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
                slidesPerView: 4,
            },
            
        },
    });
});