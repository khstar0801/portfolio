$(document).ready(function(){
    var header = $('.header');
    var headerbg = $('#header-bg');
    var body = $('body');
    var widW = $(window).width(); 


    if(widW > 1024){
        header.mouseenter(function(){
            $('header').addClass('hover');
            headerbg.addClass('hover');
        });
        header.mouseleave(function(){
            $('header').removeClass('hover');
            headerbg.removeClass('hover');
        });
        
    }
    


    var panel = $('#panel-area');
    var panelopen = $('#panelbtn');
    var panelclose = $('.close-btn');
    var snav = $('#panel .subNav');
    var mnav = $('#panel .topNav');
    
    // 모바일 패널오픈 메뉴클릭
    panelopen.click(function(){
        panel.addClass('active');
        body.addClass('active');
        headerbg.addClass('panelopen');
    });

    panelclose.click(function(){
        panel.removeClass('active');
        body.removeClass('active');
        headerbg.removeClass('panelopen');
    });
    snav.slideUp(0);
    mnav.click(function(){
        //is(매개변수) : 매개변수에 상태가 맞으면 true, 틀리면 false처리
        //is(':hidden') : 안보이면 true, 보이면 false
        var is = $(this).next().is(':hidden');
        if(is){ //안보인다면
            snav.stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
            
            mnav.removeClass('active');
            $(this).addClass('active');
        }else{ //보인다면
            $(this).next().stop().slideUp('fast');
            
            $(this).removeClass('active');
        }
    });

    snav.click(function(){
        panel.removeClass('active');
        menu.removeClass('active');
        header.removeClass('panelopen');
        body.removeClass('panelopen');
    });
    
    if(widW > 1024){
        mnav.removeAttr('href');
    }
    


    //header scroll
    var lastScroll = 0;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > $('header').height()) {
            if(widW > 1024){
                $('header').addClass('scroll');
            }else{
                $('header').addClass('scroll');
                headerbg.addClass('hover');
            }
        }else {
            if(widW > 1024){
                $('header').removeClass('scroll');
            }else{
                $('header').removeClass('scroll');
                headerbg.removeClass('hover');
            }
        }
    });


    // 팝업 열기
    $('.rural-click').click(function(){
        $('.footer-popup').addClass("show");
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){
        var LayerPopup = $(".footer-popup");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("show");
        }
    });
});



    


