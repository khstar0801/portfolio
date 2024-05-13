$(document).ready(function(){
    

    var widW = $(window).width(); 
    var controller = new ScrollMagic.Controller();
    var img = $('#section01 .list li .img-wrap img');
    var imgTrigger = $('#section01 .list li .trigger');
    var text = $('#section01 .list li .con');
    var textTrigger = $('#section01 .list li .texttrigger');
    if(widW > 1024){
        for (var i=0; i<img.length; i++) {
            var animation = new TimelineMax();
            animation.add(TweenMax.to(img[i], 1,  {
                opacity: 1,
                y: "-80%", 
                ease: Linear.easeNone}));
    
            new ScrollMagic.Scene({ triggerElement: imgTrigger[i], triggerHook: 1, duration: '50%', reverse: true  })
            .setTween(animation)
            .addTo(controller)
            //.addIndicators()
        }
        for (var i=0; i<text.length; i++) {
            var textanimation = new TimelineMax();
            textanimation.add(TweenMax.to(text[i], 1,  {
                opacity: 1,
                y: "-170%", 
                ease: Linear.easeNone}));
    
            new ScrollMagic.Scene({ triggerElement: textTrigger[i], triggerHook: 1, duration: '80%', reverse: true  })
            .setTween(textanimation)
            .addTo(controller)
            //.addIndicators()
        }
    }else{
        for (var i=0; i<img.length; i++) {
            var animation = new TimelineMax();
            animation.add(TweenMax.to(img[i], 1,  {
                opacity: 1,
                y: "-30%", 
                ease: Linear.easeNone}));
    
            new ScrollMagic.Scene({ triggerElement: imgTrigger[i], triggerHook: 1, duration: '50%', reverse: true  })
            .setTween(animation)
            .addTo(controller)
            //.addIndicators()
        }
        for (var i=0; i<text.length; i++) {
            var textanimation = new TimelineMax();
            textanimation.add(TweenMax.to(text[i], 1,  {
                opacity: 1,
                y: "-40%", 
                ease: Linear.easeNone}));
    
            new ScrollMagic.Scene({ triggerElement: textTrigger[i], triggerHook: 1, duration: '80%', reverse: true  })
            .setTween(textanimation)
            .addTo(controller)
            //.addIndicators()
        }
    }
    
});