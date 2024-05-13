$(function(){
    var btn = $('#section03 .a-wrap a');
    var txt = $('#section03 .text-wrap p');
    var img = $('#section03 .img-wrap .img');
    btn.mouseenter(function(){
        var i = $(this).index();
        btn.removeClass('active');
        $(this).addClass('active');
        txt.removeClass('active');
        txt.eq(i).addClass('active');
        img.removeClass('active');
        img.eq(i).addClass('active');
    });
});