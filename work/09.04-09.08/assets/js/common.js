$(function(){
    var widW = $(window).width();
    // full
    var fullswiper = new Swiper( '.full-swiper', {
        navigation: {
            nextEl: '.full-next',
            prevEl: '.full-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.full-pag',
            type: 'custom',
                renderCustom: function (swiper, current, total) {
                return '<span class="number font1">' + ('0' + current).slice(-2) + '</span>' + '<span class="bar font1">/</span>' + ('0' + total).slice(-2);}
        },
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    $(".play-pause a.pause").click(function(){
        fullswiper.autoplay.stop();
        $(this).addClass('hide');
        $(".play-pause a.play").removeClass('hide');
      });
    
      $(".play-pause a.play").click(function(){
        fullswiper.autoplay.start();
        $(this).addClass('hide');
        $(".play-pause a.pause").removeClass('hide');
      });

    // sub
    $('.sub-slide-wrap').each(function(index){
        var subContainer = $(this).find('.sub-swiper');
        var subNext =  $(this).find('.sub-next');
        var subPrev =  $(this).find('.sub-prev');
        subContainer.addClass("slider-" + index);
        subNext.addClass('next-' + index);
        subPrev.addClass('prev-' + index);
        var subswiper = new Swiper( ".slider-" + index, {
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
                nextEl: '.next-' + index,
                prevEl: '.prev-' + index,
            },
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 1.3,
                    spaceBetween: 9,
                },
                
            },
        });
    });

    //fac
    var facswiper = new Swiper( '.fac-swiper', {
        slidesPerView: 3,
        spaceBetween: 16,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 1.2,
                spaceBetween: 9,
            },
            
        },
    });

    $('.open-view-all').click(function(){
        $('#img-view-all').addClass('active');
        $('body').addClass('active');
    });
    $('.close-view-all').click(function(){
        $('#img-view-all').removeClass('active');
        $('body').removeClass('active');
    });
});
