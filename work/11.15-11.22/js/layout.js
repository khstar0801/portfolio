// header

$(document).ready(function(){
	var main = $('.mainnav');
    var sub = $('.gnb-btm .wrap1400 > ul > li');

    main.mouseenter(function(){
        var i = $(this).index();
        $('.gnb-btm').addClass('show');
        sub.removeClass('active');
        sub.eq(i).addClass('active');
        $('.gnb-btm').mouseleave(function(){
            sub.removeClass('active');
            main.removeClass('active');
            $('.gnb-btm').removeClass('show');
        });
        $('.gnb-top').mouseleave(function(){
            sub.removeClass('active');
            main.removeClass('active');
            $('.gnb-btm').removeClass('show');
        });
    });


    //header scroll
    $(window).scroll(function(){ 
        var top = $(window).scrollTop(); 

        if(top > 0){
            $('header').addClass('scroll');
            $('#to-top a').addClass('show');
        }else{
            $('header').removeClass('scroll');
            $('#to-top a').removeClass('show');
        }
    });

    $('#to-top a').click(function(){
        $('html, body').stop().animate({scrollTop: 0}, 1000);
    });

});


    //패널
$(document).ready(function(){
    var panelIcon = $('#panelbtn');
    var panel = $('.panel');
    var mainNav = $('.topNav');
    var subNav = $('.subNav');
    var blackbg = $('#blackbg');
    subNav.slideUp(0);
    panelIcon.click(function(){
        panel.toggleClass('active');
        panelIcon.toggleClass('active');
        mainNav.removeClass('active');
        subNav.slideUp(0);
        blackbg.fadeToggle(300);
    });

    blackbg.click(function(){
        blackbg.fadeOut(300);
        panel.removeClass('active');
        panelIcon.removeClass('active');
    });
    
    
    
    
    //서브메뉴
    

    
    mainNav.click(function(){
        //is(매개변수) : 매개변수에 상태가 맞으면 true, 틀리면 false처리
        //is(':hidden') : 안보이면 true, 보이면 false
        var is = $(this).next().is(':hidden');
        
        if(is){ //안보인다면
            subNav.stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
            
            mainNav.removeClass('active');
            $(this).addClass('active');
        }else{ //보인다면
            $(this).next().stop().slideUp('fast');
            $(this).removeClass('active');
        }
    });
    subNav.click(function(){
        panel.stop().slideUp(0);
        panelIcon.removeClass('active');
    });
    
});