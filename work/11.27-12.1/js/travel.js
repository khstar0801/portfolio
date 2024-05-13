$(function(){
    $('.travel-con').each(function(){
        var more = $(this).find('.more-btn');
        var close = $(this).find('.close-btn');
        var content = $(this).find('.content');
        close.fadeOut(0);
        more.click(function(){
            $(this).fadeOut(0);
            close.fadeIn(0);
            content.addClass('active');
        });
        close.click(function(){
            $(this).fadeOut(0);
            more.fadeIn(0);
            content.removeClass('active');
        });
    });


});