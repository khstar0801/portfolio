'use strict';
/* video-fullscreen */
videoParallax.move('.video-fullscreen', '#main-top-video');

$(function(){
    var ctrl = new ScrollMagic.Controller();
    var testAction = new TimelineMax()
    .fromTo(".horizontal-wrap", 2, {x: "0%"}, {x: "-100%"}, 0.1)
    
      var test = new ScrollMagic.Scene({
          triggerElement: ".pin",
          triggerHook: "onLeave",
          start: "top top",
          end: "bottom center",
          ease: "none",
          duration: "1500%"
        }).setPin(".pin")
        .setTween(testAction)
        .addTo(ctrl);

  // ============================
  // **section-top-circle-wrap**
  // ============================
  new ScrollMagic.Scene({
    triggerElement: "#trigger01",
    duration: "200%"
  })
  .setTween("#section-top-circle-wrap", {y: "-20%", ease: Linear.easeNone})
  //.addIndicators()
  .addTo(ctrl);

  var tween = TweenMax.to(".section-top-circle", 1, {borderRadius: 100});
  new ScrollMagic.Scene({
      triggerElement: "#trigger02", 
      duration: "100%", 
      offset: 75
  })
  .setTween(tween)
  //.addIndicators()
  .setPin(".section-top-circle")
  .addTo(ctrl);
});

