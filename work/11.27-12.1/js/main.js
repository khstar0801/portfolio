$(function(){
	$('#section03 .right .text > div').eq(0).addClass('on');
    new Swiper('#section03 .room-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'none',
		speed : 1000,
		autoplay : false,
		navigation: {
			nextEl:"#section03 .room-next",
			prevEl:"#section03 .room-prev",
		},
		on: {
			slideChange: function(e){
				$('#section03 .right .text > div').removeClass('on');
				$('#section03 .right .text > div').eq(e.realIndex).addClass('on'); 

			},
			slideChangeTransitionEnd: function(e){},
		}
	});

	new Swiper( '.service-swiper', {
        slidesPerView: 2,
		spaceBetween: 18,
		effect: "none",
        navigation: {
            nextEl: '.service-next',
            prevEl: '.service-prev',
        },
		breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
	$('#section06 .left .text > div').eq(0).addClass('on');
	new Swiper('.fac-swiper', {
		slidesPerView: 1,
		spaceBetween: 24,
		effect: 'none',
		speed : 1000,
		autoplay : false,
		navigation: {
			nextEl:".fac-next",
			prevEl:".fac-prev",
		},
		on: {
			slideChange: function(e){
				$('#section06 .left .text > div').removeClass('on');
				$('#section06 .left .text > div').eq(e.realIndex).addClass('on'); 

			},
			slideChangeTransitionEnd: function(e){},
		}
	});
	$('#section07 .right .text > div').eq(0).addClass('on');
	new Swiper('.travel-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'none',
		speed : 1000,
		autoplay : false,
		navigation: {
			nextEl:".travel-next",
			prevEl:".travel-prev",
		},
		on: {
			slideChange: function(e){
				$('#section07 .right .text > div').removeClass('on');
				$('#section07 .right .text > div').eq(e.realIndex).addClass('on'); 

			},
			slideChangeTransitionEnd: function(e){},
		}
	});

});