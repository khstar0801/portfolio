$(function(){
    // section04
	var btn = $('#section04 .btm .text-wrap ul a');
	var img = $('#section04 .btm .img-wrap .img');
	btn.eq(0).addClass('active');
	btn.mouseenter(function(){
		var i = $(this).parent('li').index();
		btn.removeClass('active');
		$(this).addClass('active');
		img.removeClass('active');
		img.eq(i).addClass('active');
	});


	var mainfacswiper = new Swiper( '.main-fac-swiper', {
        slidesPerView: 1,
		effect: "fade",
        navigation: {
            nextEl: '.main-fac-next',
            prevEl: '.main-fac-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

	var all = $('.main-fac-swiper .text-wrap .all');
	var all_num = $('.main-fac-swiper .swiper-slide').length;
	var all_num_in = String(all_num).padStart(2, "0");
	all.empty().prepend(all_num_in);
});