$(function(){
    $('.rooms-section').each(function(){
        var roombtn = $(this).find('.room-btn a');
        var roomimg = $(this).find('.room-info .img-wrap .img');
        var widW = $(window).width(); 
        if(widW > 1024){
            roomimg.fadeOut(0);
            roomimg.eq(0).fadeIn(0);
            roombtn.mouseenter(function(){
                var i = $(this).index();
                roomimg.fadeOut(500);
                roomimg.eq(i).fadeIn(500);
            });
        }else{
            roomimg.fadeOut(0);
            roomimg.eq(4).fadeIn(0);
        }
        
    });
    
    
});