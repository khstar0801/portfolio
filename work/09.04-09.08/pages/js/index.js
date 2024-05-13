$(function(){
    const circle = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        circle.style.left = mouseX-64 + 'px';
        circle.style.top = mouseY-64 + 'px';
    });
    $(function(){
        $('a.mousechange').mouseenter(function(){
            $('.cursor').addClass('show');
        });
        $('a.mousechange').mouseleave(function(){
            $('.cursor').removeClass('show');
        });
    });
});