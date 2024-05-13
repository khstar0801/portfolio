// header

$(document).ready(function(){
	var main = $('.mainnav');
    var sub = $('.subnav');
    

    main.mouseenter(function(){
        $(this).addClass('active');
        $(this).next().addClass('active');
        $(this).parent().mouseleave(function(){
            $(this).find(sub).removeClass('active');
            main.removeClass('active');
        });
    });


    //header scroll
    $(window).scroll(function(){ 
        var top = $(window).scrollTop(); 

        if(top > 0){
            $('header').addClass('scroll');
            $('#panelbtn').addClass('scroll');
            $('#to-top a').addClass('show');
        }else{
            $('header').removeClass('scroll');
            $('#panelbtn').removeClass('scroll');
            $('#to-top a').removeClass('show');
        }
    });

    $('#to-top a').click(function(){
        $('html, body').stop().animate({scrollTop: 0}, 1000);
    });

});


    //패널
$(document).ready(function(){
    var panelopen = $('#panelbtn');
    var panel = $('.panel');
    var mainNav = $('.topNav');
    var subNav = $('.subNav');
    var panelimg = $('.panel .img-wrap .img');

    subNav.slideUp(0);
    panelopen.click(function(){
        $(this).toggleClass('active');
        panel.toggleClass('active');
        mainNav.removeClass('active');
        subNav.slideUp(0);
    });
    $('.subNav a').click(function(){
        panelopen.removeClass('active');
        panel.removeClass('active');
        mainNav.removeClass('active');
        subNav.slideUp(0);
    });
    
    
    //서브메뉴
    mainNav.mouseenter(function(){
        var i = $(this).parent('li').index();
        panelimg.removeClass('active');
        panelimg.eq(i).addClass('active');
    });

    
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
            mainNav.removeClass('active');
            $(this).removeClass('active');
        }
    });
    
    
});