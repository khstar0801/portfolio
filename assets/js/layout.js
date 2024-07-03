'use strict';

//window.onload
window.onload = () => $('body').removeClass('preload');

// coding...
// header
$(function(){
    $(window).scroll(function(){ 
        
        var top = $(window).scrollTop(); 
        var widW = $(window).width(); 
        
        // $('.box').each(function(index){
        //     var divTop = $(this).offset().top;
        //     if(divTop - 800 < top){
        //         $(this).addClass('active');
        //     }
        // });

        if(top > 0){
            $('header').addClass('scroll');
            $('#top-btn').addClass('show');
        }else{
            $('header').removeClass('scroll');
            $('#top-btn').removeClass('show');
        }

        // if(widW > 1024){
        //     if(top > 0){
        //         $('header').addClass('scroll');
        //         $('#to-top a').addClass('show');
        //     }else{
        //         $('header').removeClass('scroll');
        //         $('#to-top a').removeClass('show');
        //     }
        // }else{
        //     if(top > 0){
        //         $('header').addClass('scroll');
        //         $('#to-top a').addClass('show');
        //     }else{
        //         $('header').removeClass('scroll');
        //         $('#to-top a').removeClass('show');
        //     }
        // }
    });
    window.addEventListener("scroll", function () {
        const scrollTop = document.querySelector("html").scrollTop;
        const scrollHeight = document.querySelector("html").scrollHeight;
        const clientHeight = document.querySelector("html").clientHeight;

        const progress = ((scrollTop + clientHeight) / scrollHeight) * 100;
        document.querySelector(".progress-bar").style.width = progress + "%";
        });
});