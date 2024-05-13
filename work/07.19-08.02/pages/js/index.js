'use strict';

/* video-fullscreen */
videoParallax.move('.video-fullscreen', '#main-top-video');
videoCtrl.videoOverStopPlay('.video-fullscreen', '#main-top-video');


$(function(){
    // ============================
    // **section02 scroll Section Wipe**
    // ============================
    var breakpoint = window.matchMedia( '(min-width: 992px)' );
    var widW = $(window).width();
	var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
    .fromTo("#section02 .scroll-wrap .two", 1, {y:"100%"}, {y:"0%"} )
    .fromTo("#section02 .scroll-wrap .three", 1, {y:"100%"}, {y:"0%"} )
    .fromTo("#section02 .scroll-wrap .four", 1, {y:"100%"}, {y:"0%"} )

    if(widW > 1024){
        $('#section02').length && indexaction(); 
        function indexaction (){ 
            if ( breakpoint.matches ) {
                new ScrollMagic.Scene({
                    triggerElement: "#section02 .scroll-wrap",
                    offset:0,
                    triggerHook: 'onLeave', 
                    duration: '500%'
                })
                .setPin("#section02 .scroll-wrap")
                .setTween(wipeAnimation) 
                .addTo(controller);   
            } 
        }
    }

    // ============================
    // **section-top-circle-wrap**
    // ============================
    new ScrollMagic.Scene({
        triggerElement: "#trigger01",
        duration: "200%"
    })
    .setTween("#section-top-circle-wrap", {y: "-20%", ease: Linear.easeNone})
    //.addIndicators()
    .addTo(controller);

    var tween = TweenMax.to(".section-top-circle", 1, {borderRadius: 100});
    new ScrollMagic.Scene({
        triggerElement: "#trigger02", 
        duration: "100%", 
        offset: 75
    })
    .setTween(tween)
    //.addIndicators()
    .setPin(".section-top-circle")
    .addTo(controller);

    // ============================
    // **section03 calendar**
    // ============================
    var OpenInfo = $('.open-info');
    var CloseInfo = $('.close-info');
    var Info = $('#day-info');
    var OpenDetail = $('.open-detail');
    var CloseDetail = $('.close-detail');
    var Detail = $('#calendar-detail');
    var Body = $('body');

    OpenInfo.click(function(){
        Info.addClass('show');
        Body.css({'overflow':'hidden'});
    });
    CloseInfo.click(function(){
        Info.removeClass('show');
        Body.css({'overflow':'visible'});
    });
    OpenDetail.click(function(){
        Detail.addClass('show');
        Body.css({'overflow':'hidden'});
    });
    CloseDetail.click(function(){
        Detail.removeClass('show');
        Body.css({'overflow':'visible'});
    });

    // ============================
    // **section03 scroll-wrap img**
    // ============================
    // img01
    var img01animation = new TimelineMax();
        img01animation.add(TweenMax.to("#section03 .scroll-wrap .img01 .img", 1,  {y: "-10%", ease: Linear.easeNone}))
                .add(TweenMax.to("#section03 .scroll-wrap .img01", {y: "-5%", ease: Linear.easeNone}));

    new ScrollMagic.Scene({ triggerElement: '#trigger03', duration: "500%", reverse: false  })
    .setClassToggle('#section03 .scroll-wrap .img01', 'active')
    .addTo(controller)

    new ScrollMagic.Scene({ triggerElement: "#trigger03", duration: "100%", reverse: true  })
    .setTween(img01animation)
    .addTo(controller)

    // img02
    var img02animation = new TimelineMax();
        img02animation.add(TweenMax.to("#section03 .scroll-wrap .img02 .img", 1,  {y: "-10%", ease: Linear.easeNone}))
                .add(TweenMax.to("#section03 .scroll-wrap .img02", {y: "-10%", ease: Linear.easeNone}));

    new ScrollMagic.Scene({ triggerElement: '#trigger04', duration: "500%", reverse: false  })
    .setClassToggle('#section03 .scroll-wrap .img02', 'active')
    .addTo(controller)

    new ScrollMagic.Scene({ triggerElement: "#trigger04", duration: "100%", reverse: true  })
    .setTween(img02animation)
    .addTo(controller)

    // img03
    var img03animation = new TimelineMax();
        img03animation.add(TweenMax.to("#section03 .scroll-wrap .img03 .img", 1,  {y: "-10%", ease: Linear.easeNone}))
            .add(TweenMax.to("#section03 .scroll-wrap .img03", {y: "-30%", ease: Linear.easeNone}));


    new ScrollMagic.Scene({ triggerElement: '#trigger05', duration: "500%", reverse: false  })
    .setClassToggle('#section03 .scroll-wrap .img03', 'active')
    .addTo(controller)

    new ScrollMagic.Scene({ triggerElement: "#trigger05", duration: "100%", reverse: true  })
    .setTween(img03animation)
    .addTo(controller)

    // img04
    var img04animation = new TimelineMax();
        img04animation.add(TweenMax.to("#section03 .scroll-wrap .img04 .img", 1,  {y: "-5%", ease: Linear.easeNone}))
            .add(TweenMax.to("#section03 .scroll-wrap .img04", {y: "-10%", ease: Linear.easeNone}));


    new ScrollMagic.Scene({ triggerElement: '#trigger06', duration: "500%", reverse: false  })
    .setClassToggle('#section03 .scroll-wrap .img04', 'active')
    .addTo(controller)

    new ScrollMagic.Scene({ triggerElement: "#trigger06", duration: "100%", reverse: true  })
    .setTween(img03animation)
    .addTo(controller)

    // ============================
    // **section03 scroll-wrap text**
    // ============================
    // text01
    new ScrollMagic.Scene({ triggerElement: "#text01-trigger", offset: 50, duration: "100%", reverse: true  })
    .setTween("#section03 .scroll-wrap .text01", {y: "30%", ease: Linear.easeNone})
    .addTo(controller)
    // text02
    new ScrollMagic.Scene({ triggerElement: "#text02-trigger", offset: 50, duration: "100%", reverse: true  })
    .setTween("#section03 .scroll-wrap .text02", {y: "25%", ease: Linear.easeNone})
    .addTo(controller)
    // text03
    new ScrollMagic.Scene({ triggerElement: "#text03-trigger", offset: 50, duration: "100%", reverse: true  })
    .setTween("#section03 .scroll-wrap .text03", {y: "90%", ease: Linear.easeNone})
    .addTo(controller)
    // text04
    new ScrollMagic.Scene({ triggerElement: "#text04-trigger", offset: 50, duration: "100%", reverse: true  })
    .setTween("#section03 .scroll-wrap .text04", {y: "15%", ease: Linear.easeNone})
    .addTo(controller)
    // text05
    new ScrollMagic.Scene({ triggerElement: "#text05-trigger", offset: 50, duration: "100%", reverse: true  })
    .setTween("#section03 .scroll-wrap .text05", {y: "10%", ease: Linear.easeNone})
    .addTo(controller)
});