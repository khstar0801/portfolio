$(function(){
    var widW = $(window).width(); 

    //event
    var eventswiper = new Swiper( '.event-swiper', {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.event-next',
            prevEl: '.event-prev',
        },
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            
        },
    });


    // full
    var fullswiper = new Swiper( '.full-swiper', {
        navigation: {
            nextEl: '.full-next',
            prevEl: '.full-prev',
        },
        pagination: {
            el: '.full-pag',
        },
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                pagination: {
                    el: '.full-pag',
                    type: 'progressbar',
                },
            },
            
        },
    });


    // rooms
    $('.rooms-wrap .rooms').each(function(index){
        var roomsContainer = $(this).find('.rooms-swiper');
        var roomsNext =  $(this).find('.rooms-next');
        var roomsPrev =  $(this).find('.rooms-prev');
        var roomsPag =  $(this).find('.rooms-pag');
        roomsContainer.addClass("slider-" + index);
        roomsNext.addClass('next-' + index);
        roomsPrev.addClass('prev-' + index);
        roomsPag.addClass('pag-' + index);
        var roomsswiper = new Swiper( ".slider-" + index, {
            navigation: {
                nextEl: '.next-' + index,
                prevEl: '.prev-' + index,
            },
            pagination: {
                el: '.pag-' + index,
            },
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    pagination: {
                        el: '.pag-' + index,
                        type: 'progressbar',
                    },
                },
                
            },
        });
    });

    //subpag
    var subpagswiper = new Swiper( '.subpag-swiper', {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
            nextEl: '.subpag-next',
            prevEl: '.subpag-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
                pagination: {
                    el: '.subpag-pag',
                    type: 'progressbar',
                },
            },
            
        },
    });
});
