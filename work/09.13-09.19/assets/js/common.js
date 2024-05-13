$(function(){
    var widW = $(window).width();
    const circle = document.querySelector(".cursor");
    var widW = $(window).width(); 
    var controller = new ScrollMagic.Controller();


    document.addEventListener("mousemove", (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        circle.style.left = mouseX-64 + 'px';
        circle.style.top = mouseY-64 + 'px';
    });
    $(function(){
        $('.mousechange').mouseenter(function(){
            $('.cursor').addClass('show');
        });
        $('.mousechange').mouseleave(function(){
            $('.cursor').removeClass('show');
        });
    });
    var thumbswiper = new Swiper('.thumb-swiper', {
        observer: true,  
        observeParents: true,  
        watchSlidesVisibility: true,  
        watchSlidesProgress: true,
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
            prevEl: '.thumb-prev',
            nextEl: '.thumb-next',
        },
        breakpoints: {
            1024: {
                spaceBetween: 9,
            },
            
        },
    });
    
    var landSwiper = new Swiper('.landscape-pag-swiper', {
        observer: true,  
        observeParents: true,  
        watchSlidesVisibility: true,  
        watchSlidesProgress: true,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.landscape-pag-pag',
            type: 'bullets',
        },
        navigation: {
            prevEl: '.landscape-pag-prev',
            nextEl: '.landscape-pag-next',
        },
        thumbs: {
            swiper: thumbswiper,
        },

    });

    $('.thumb-swiper .swiper-slide').eq(0).addClass('active');
    landSwiper.on('slideChange', function () {
        var i = this.activeIndex;
        var thumb = $('.thumb-swiper .swiper-slide');
        thumb.removeClass('active');
        thumb.eq(i-1).addClass('active');
    });
    $('.landscape-pag-prev').click(function(){
        $('.thumb-prev').click();
    });
    $('.landscape-pag-next').click(function(){
        $('.thumb-next').click();
    });



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
    var subswiper = new Swiper( ".sub-swiper", {
        slidesPerView: 3,
        spaceBetween: 16,
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
    $('.rooms-tab a').click(function(){
        var i = $(this).index();
        $('.rooms-tab a').removeClass('active');
        $(this).addClass('active');
        subswiper.slideTo(i, 300);
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
