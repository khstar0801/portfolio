'use strict';

//window.onload
window.onload = () => $('body').removeClass('preload');

// coding...
// header
$(function(){
    var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
        var header = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
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
    const menu = $('.menu-icon');
    const headerMenu = $('.nav-item');
    var img = $('.nav-content .img-wrap img');
    var widW = $(window).width(); 
    menu.click(function(){
        headerMenu.removeClass('active-nav');
        img.removeClass('show');
        headerMenu.eq(1).addClass('active-nav');
        img.eq(0).addClass('show');
        if(widW > 1024){
            headerMenu.children('.sub-links').removeClass('show');
            headerMenu.eq(1).children('.sub-links').addClass('show');
        }else{
            headerMenu.children('.sub-links').stop().slideUp(300);
            headerMenu.eq(1).children('.sub-links').stop().slideDown(300);
        }
    });
    headerMenu.each(function(){
        var widW = $(window).width(); 
        var i = $(this).index();
        var img = $('.nav-content .img-wrap img');
        headerMenu.eq(1).addClass('active-nav');
        
        img.eq(0).addClass('show');
        if(widW > 1024){
            headerMenu.eq(1).children('.sub-links').addClass('show');
            $(this).click(function(){
                if( $(this).hasClass('active-nav') ){
                    $(this).removeClass('active-nav');
                    $(this).children('.sub-links').removeClass('show');
                }else{
                    img.removeClass('show');
                    img.eq(i-1).addClass('show');
                    headerMenu.removeClass('active-nav');
                    $(this).addClass('active-nav');
                    $('.sub-links').removeClass('show');
                    $(this).children('.sub-links').addClass('show');
                }
            });
        }else{
            headerMenu.eq(1).children('.sub-links').stop().slideDown(300);
            $(this).click(function(){
                if( $(this).hasClass('active-nav') ){
                    $(this).removeClass('active-nav');
                    $(this).children('.sub-links').stop().slideUp(300);
                }else{
                    img.removeClass('show');
                    img.eq(i+1).addClass('show');
                    headerMenu.removeClass('active-nav');
                    $(this).addClass('active-nav');
                    $('.sub-links').stop().slideUp(300);
                    $(this).children('.sub-links').stop().slideDown(300);
                }
            });
        }
    });
    $('.sub-links a').click(function(){
        $('body').removeClass('nav-active');
    });
    
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
});