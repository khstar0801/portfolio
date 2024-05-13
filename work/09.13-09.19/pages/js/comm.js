$(function(){
   
    // #####section01
    // var tween1 = TweenMax.to('#section01 .videoWrap', 0.5, {
    //     opacity: "0"
    // });
    var tween2 = TweenMax.to('#section01 .tween-opacity', 0.5, {
    opacity: "0"
    });

    // var scene = new ScrollMagic.Scene({
    // triggerElement: "#trigger01",
    // duration: "200%"
    // })
    // .setTween(tween1)
    // .addTo(controller)
    // .addIndicators({
    // name: "1"
    // }) 

    var scene2 = new ScrollMagic.Scene({
    triggerElement: "#reser-trigger02",
    duration: "200%"
    })
    .setTween(tween2)

    new ScrollMagic
    .Scene({triggerElement: "#reser-trigger01", duration: "200%"})
    .setTween("#sub-top .img", {y: "0%", ease: Linear.easeNone})


    var fade = $('.content');
    var open = $('.charge-tit');
    fade.slideUp(0);
    open.click(function(){
        var is = $(this).next().is(':hidden');
        
        if(is){ //안보인다면
            $(this).next(fade).stop().slideDown('fast');
            $('.charge-tit').removeClass('active');
            $(this).addClass('active');
        }else{ //보인다면
            $(this).next(fade).stop().slideUp('fast');
            $(this).removeClass('active');
        }
    });
});