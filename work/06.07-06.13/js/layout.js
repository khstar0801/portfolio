// header
$(function(){
    var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
        var header = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon_wrap');
			menuItems = document.querySelectorAll('.nav-item');
            header = document.querySelectorAll('.header');

			applyListeners();
		};

        

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};

		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};

		init();
	}();

    const menuHover = $('.nav-item > a');
    const menu = $('.menu-icon_wrap');
    const headerMenu = $('.nav-item');
    var img = $('.nav-content .img-wrap img');
    menu.click(function(){
        headerMenu.removeClass('active-nav');
        headerMenu.children('.sub-links').stop().slideUp();
        img.removeClass('show');
        headerMenu.eq(1).addClass('active-nav');
        headerMenu.eq(1).children('.sub-links').stop().slideDown();
        img.eq(1).addClass('show');
    });
    headerMenu.each(function(){
        var widW = $(window).width(); 
        var i = $(this).index();
        var img = $('.nav-content .img-wrap img');
        headerMenu.eq(1).addClass('active-nav');
        headerMenu.eq(1).children('.sub-links').stop().slideDown();
        img.eq(1).addClass('show');
        if(widW > 1024){
            $(this).mouseenter(function(){
                if( $(this).hasClass('active-nav') ){
                    $(this).removeClass('active-nav');
                    $(this).children('.sub-links').stop().slideUp();
                }else{
                    img.removeClass('show');
                    img.eq(i).addClass('show');
                    headerMenu.removeClass('active-nav');
                    $(this).addClass('active-nav');
                    $('.sub-links').stop().slideUp();
                    $(this).children('.sub-links').stop().slideDown();
                }
            });
        }else{
            $(this).click(function(){
                if( $(this).hasClass('active-nav') ){
                    $(this).removeClass('active-nav');
                    $(this).children('.sub-links').stop().slideUp();
                }else{
                    img.removeClass('show');
                    img.eq(i).addClass('show');
                    headerMenu.removeClass('active-nav');
                    $(this).addClass('active-nav');
                    $('.sub-links').stop().slideUp();
                    $(this).children('.sub-links').stop().slideDown();
                }
            });
        }
    });
    $('.sub-links a').click(function(){
        $('body').removeClass('nav-active');
    });
    
});



$(function(){
	//header scroll
    // var scrollbar = $('.c-scrollbar_thumb');
    // if (scrollbar.css('transform') == 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'){
    //     $('header').removeClass('scroll');
    // }else{
    //     $('header').addClass('scroll');
    // }
    $(window).scroll(function(){ 
        
        var top = $(window).scrollTop(); 
        var widW = $(window).width(); 
        
        if(widW > 1024){
            if(top > 0){
                $('header').addClass('scroll');
                $('#to-top a').addClass('show');
            }else{
                $('header').removeClass('scroll');
                $('#to-top a').removeClass('show');
            }
        }else{
            if(top > 0){
                $('header').addClass('scroll');
                $('#to-top a').addClass('show');
            }else{
                $('header').removeClass('scroll');
                $('#to-top a').removeClass('show');
            }
        }
        
        

    });

    $('#to-top a').click(function(){
        $('html, body').stop().animate({scrollTop: 0}, 1000);
    });

});

