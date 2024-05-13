$(function(){
    var widW = $(window).width();
    var list = $('#section07 ul.list li');
    var rooms = $('#section07 .right .rooms');
    var roomName = $('#section07 .left .mo-top p');

    list.eq(0).addClass('active');
    rooms.eq(0).addClass('active');
    list.click(function(){
        var i = $(this).index();
        var p = $(this).find('p').text();
        list.removeClass('active');
        $(this).addClass('active');
        rooms.removeClass('active');
        rooms.eq(i).addClass('active');
        roomName.text(p);
    });
    
    if(widW > 1024){
        var leftHeight = $('#section07 > .flex-wrap > .left').height();
        $('#section07 > .flex-wrap > .right').height(leftHeight);
    }
    if(widW < 1024){
        list.parent('ul').slideUp(300);
        roomName.parent('.mo-top').click(function(){
            list.parent('ul').slideToggle(300);
        });
        list.click(function(){
            list.parent('ul').slideUp(300);
        });
    }
});