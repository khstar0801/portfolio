$(function(){
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#trigger01",
        offset:0,
        triggerHook: 'onLeave', 
        duration: '90%'
    })
    .setTween("#sub-top.full", {opacity: 0, ease: Linear.easeNone}) 
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: '#section01 .wrap1520', reverse: true  })
    .setClassToggle('#btn-scroll-down', 'hide')
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: '#section01 .full-pag', duration: "100%", reverse: true  })
    .setTween("#section01", { backgroundColor: "#181818", ease: Linear.easeNone}) 
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: '#section01 .full-pag',reverse: true  })
    .setTween("#section01 .bgi", {opacity: 1, ease: Linear.easeNone}) 
    .addTo(controller)
    new ScrollMagic.Scene({ triggerElement: '#section01 .con04 .text-wrap',reverse: true  })
    .setTween("#section01 .bgi", {opacity: 0, ease: Linear.easeNone}) 
    .addTo(controller)

    new ScrollMagic.Scene({ triggerElement: ".scroll-trigger01", duration: "100%", reverse: true  })
    .setTween("#section01 .scroll-wrap .con01", {y: "-30%", ease: Linear.easeNone, opacity: 1})
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: ".scroll-trigger02", duration: "100%", reverse: true  })
    .setTween("#section01 .scroll-wrap .con02", {y: "-10%", ease: Linear.easeNone, opacity: 1})
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: ".scroll-trigger03", duration: "100%", reverse: true  })
    .setTween("#section01 .scroll-wrap .con03", {y: "-30%", ease: Linear.easeNone, opacity: 1})
    .addTo(controller)
    //.addIndicators()

    new ScrollMagic.Scene({ triggerElement: ".scroll-trigger04", duration: "100%", reverse: true  })
    .setTween("#section01 .scroll-wrap .con04", {y: "-20%", ease: Linear.easeNone, opacity: 1})
    .addTo(controller)
    //.addIndicators()

});