$(function(){
    var breakpoint = window.matchMedia( '(min-width: 992px)' );
    var widW = $(window).width();
	var controller = new ScrollMagic.Controller();

    if(widW > 1024){
        $('#section01').length && indexaction(); 
	function indexaction (){ 
		if ( breakpoint.matches ) {
			new ScrollMagic.Scene({
				triggerElement: "#section01 .flex-wrap",
				offset:0,
				triggerHook: 0, 
				duration: 3000
			})
			.setPin("#section01 .flex-wrap")
			.setTween("#section01 .right", {
				'bottom':'0',
				'top':'auto'
			}) 
			.addTo(controller);   
		} 
	}
    }
});