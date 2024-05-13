$(function(){
    var widW = $(window).width();

    $('.con').each(function(index){
        var serviceContainer = $(this).find('.service-swiper');
        var serviceNext = $(this).find('.service-next');
        var servicePrev = $(this).find('.service-prev');
        serviceContainer.addClass("slider-" + index);
        serviceNext.addClass('next-' + index);
        servicePrev.addClass('prev-' + index);
        var subpagtopswiper = new Swiper( ".slider-" + index, {
            navigation: {
                nextEl: '.next-' + index,
                prevEl: '.prev-' + index,
            },
            touchRatio: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
    });

    $('.con-btn-wrap a').eq(0).addClass('active');
    $('.left .con').eq(0).fadeIn(0);
    $('.con-btn-wrap a').click(function(){
        var txt = $(this).html();
        var i = $(this).index();
        $('.con-btn-wrap a').removeClass('active');
        $(this).addClass('active');
        $('.left .con').fadeOut(0);
        $('.left .con').eq(i).fadeIn(300);
        $('.right .top .change').empty().append(txt);
    });
    if(widW < 1024){
        $('.con-btn-wrap').slideUp(0);
        $('.right .top').click(function(){
            var is = $(this).next().is(':hidden');
            if(is){ //안보인다면
                $(this).stop().addClass('open');
                $('.con-btn-wrap').stop().slideDown(300);
            }else{ //보인다면
                $(this).stop().removeClass('open');
                $('.con-btn-wrap').stop().slideUp(300);
            }
        });
        $('.con-btn-wrap a').click(function(){
            $('.con-btn-wrap').stop().slideUp(300);
            $('.right .top').removeClass('open');
        });
    }
    
});