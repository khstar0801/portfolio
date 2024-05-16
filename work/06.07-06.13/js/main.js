$(function(){
    var widW = $(window).width();
    var serviceBtn = $('.service-section .right a.content');
    var serviceImg = $('.service-section .left .img');
    var serviceMoImg = $('.service-section .right a.img-area');
    serviceImg.eq(0).addClass('active');
    if(widW > 1024){
        serviceBtn.mouseenter(function(){
            var i = $(this).parent('li').index();
            serviceImg.removeClass('active');
            serviceImg.eq(i).addClass('active');
        });
    }else{
        serviceMoImg.slideUp(0);
        serviceMoImg.eq(0).slideDown(0);
        serviceBtn.removeAttr("href");
        serviceBtn.click(function(){
            var is = $(this).parent('li').find('a.img-area').is(':hidden');
            if(is){ //안보인다면
                serviceMoImg.stop().slideUp('fast');
                $(this).parent('li').find(serviceMoImg).stop().slideDown('fast');
            }else{ //보인다면
                $(this).parent('li').find(serviceMoImg).stop().slideUp('fast');
            }
        });
    }
    
    // fade
    var fade01swiper = new Swiper( '.fade01-swiper', {
        effect: 'fade',
        speed: 700,
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 4000,
        },
        simulateTouch: false,
    });
    var fade02swiper = new Swiper( '.fade02-swiper', {
        effect: 'fade',
        speed: 700,
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 4000,
          },
        simulateTouch: false,
    });
    var fade03swiper = new Swiper( '.fade03-swiper', {
        effect: 'fade',
        speed: 700,
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 4000,
        },
        simulateTouch: false,
    });

    
});