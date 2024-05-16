$(document).ready(function(){
    var gnb = $('.gnb');
    var mainnav = $('.mainnav');
    var subnav = $('.subnav');
    var navbg = $('.nav_bg');
    var telbtn = $('.tel-btn')
    var navwrap = $('.nav-wrap');
    var header = $('header');
    var body = $('body');



    $('.rooms-js a').mouseenter(function(){
        $(this).parent('li').find('p').addClass('active');
    });
    $('.rooms-js a').mouseleave(function(){
        $('.rooms-js p').removeClass('active');
    });
    
    mainnav.mouseenter(function(){
        var i =$(this).parent().index();
        gnb.addClass('active');
        $(this).addClass('active');
        $(this).next().addClass('active');
        navbg.addClass('active');
        navwrap.addClass('active');
        telbtn.addClass('h50');
        $(this).parent().mouseleave(function(){
            $(this).find(subnav).removeClass('active');
            gnb.removeClass('active');
            mainnav.removeClass('active');
            navbg.removeClass('active');
            navwrap.removeClass('active');
            telbtn.removeClass('h50');
        });
    });

    var panel = $('#panel');
    var panelopen = $('#panelbtn');
    var panelclose = $('#panel .close-btn');
    var snav = $('#panel .snav');
    var mnav = $('#panel .mnav');

    // 모바일 패널오픈 메뉴클릭
    panelopen.click(function(){
        panel.addClass('active');
        body.addClass('active');
    });

    panelclose.click(function(){
        panel.removeClass('active');
        body.removeClass('active');
    });

    mnav.eq(1).addClass('active');
    snav.eq(1).addClass('active');
    mnav.click(function(){
        //is(매개변수) : 매개변수에 상태가 맞으면 true, 틀리면 false처리
        //is(':hidden') : 안보이면 true, 보이면 false
        var i = $(this).index();
        var is = $(this).find(snav).is(':hidden');
        mnav.removeClass('active');
        $(this).addClass('active');
        snav.removeClass('active');
        snav.eq(i).addClass('active');
    });

    snav.click(function(){
        panel.removeClass('active');
        menu.removeClass('active');
        header.removeClass('panelopen');
        body.removeClass('panelopen');
    });
        
    


    //header scroll
    var lastScroll = 0;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > $('header').height()) {
            $('header').addClass('scroll');
        }else {
            $('header').removeClass('scroll');
        }

        var scrollTop = $(this).scrollTop();
        if(scrollTop > lastScroll) {
            //down
            $('header').addClass('scrolldown');
            $('header').removeClass('scrollup');
        } else {
            // up
            $('header').removeClass('scrolldown');
            $('header').addClass('scrollup');
        }
        lastScroll = scrollTop;
    });

});



    


