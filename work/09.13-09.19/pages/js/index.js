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
    triggerElement: "#trigger02",
    duration: "200%"
    })
    .setTween(tween2)
    .addTo(controller)

    new ScrollMagic
    .Scene({triggerElement: "#trigger01", duration: "200%"})
    .setTween(".videoWrap #ei-video-frame", {y: "0%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);
});