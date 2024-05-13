$(function(){
    var widW = $(window).width();

    $('.con').each(function(index){
        var serviceContainer = $(this).find('.service-swiper');
        var serviceNext = $(this).find('.service-next');
        var servicePrev = $(this).find('.service-prev');
        var servicePag = $(this).find('.service-pag');
        serviceContainer.addClass("slider-" + index);
        serviceNext.addClass('next-' + index);
        servicePrev.addClass('prev-' + index);
        servicePag.addClass('pag-' + index);
        var subpagtopswiper = new Swiper( ".slider-" + index, {
            navigation: {
                nextEl: '.next-' + index,
                prevEl: '.prev-' + index,
            },
            pagination: {
                el: '.pag-' + index,
            },
            touchRatio: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
    });

    
});