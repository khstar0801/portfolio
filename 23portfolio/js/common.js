

//gnb
$(document).ready(function(){
    var menu = $('.menu li');
    var content = $('#fullpage > div');
    
    menu.first().addClass('active');
    
    menu.find('a').click(function(e){
        e.preventDefault();
        var i = $(this).parent().index();
        var ct = content.eq(i).offset().top;
        $('html, body').stop().animate({
            scrollTop: ct+10
        },1000);
    });
    
    $(window).scroll(function(){
        var wst = $(window).scrollTop();
        content.each(function(i){
            var tt = $(this).offset().top;
            if(tt < wst){
                menu.removeClass('active');
                menu.eq(i).addClass('active');
            }
        });
        if(wst == $(document).height() - $(window).height()){
          menu.removeClass('active');
          menu.eq(3).addClass('active');
        }
    });
    
});


//word
$(document).ready(function(){
    (d => {
        const word = d.querySelector(".word");
        const shadow = e => {
        const { x, y } = e;
        const gBCR = word.getBoundingClientRect();
        const w = this;
        const xM = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
        const yM = (y - gBCR.top - gBCR.height / 2) / gBCR.height * 5;
        transform(xM, yM);
        };
        const transform = (x, y) => {
            word.style.textShadow = `${x}px ${-y}px 0px rgba(102, 249, 255, 0.7),
                                     ${-x}px ${y}px 0px rgba(255, 35, 251, 0.7),
                                     ${y}px ${-x}px 0px rgba(255, 255, 73, 0.7),
                                     ${-y}px ${x}px 0px rgba(102, 249, 255, 0.7)`;
        };
        window.addEventListener("mousemove", shadow);
    })(document);
});

//main p
$(document).ready(function(){
    const prefix = '안녕하세요! 저는 '
    const skills = [
      
      '웹퍼블리셔 ',
      '웹디자이너 ',
      'UI/UX 디자이너 ',
      '긍정맨 ',
      '열정적 '
    ].map(s => `${s}입니다!`)
    const delay = 2
    const step = 1
    const tail = 5
    const timeout = 75


    const p = document.createElement('p')
    document.getElementsByClassName("main")[0].appendChild(p);

    const colors = [
      'red',
      'green',
      'blue',
      'yellow',
      'cyan',
      'magenta',
    ]
    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)]
    }
    function getRandomChar() {
      return String.fromCharCode(Math.random() * (127 - 33) + 33)
    }
    function getRandomColoredString(n) {
      const fragment = document.createDocumentFragment()
      for (let i = 0; i < n; i++) {
        const char = document.createElement('span')
        char.textContent = getRandomChar()
        char.style.color = getRandomColor()
        fragment.appendChild(char)
      }
      return fragment
    }

    const $ = {
      text: '',
      prefixP: -tail,
      skillI: 0,
      skillP: 0,
      direction: 'forward',
      delay,
      step,
    }

    function render() {
      const skill = skills[$.skillI]

      if ($.step) {
        $.step--
      } else {
        $.step = step
        if ($.prefixP < prefix.length) {
          if ($.prefixP >= 0) {
            $.text += prefix[$.prefixP]
          }
          $.prefixP++
        } else {
          if ($.direction === 'forward') {
            if ($.skillP < skill.length) {
              $.text += skill[$.skillP]
              $.skillP++
            } else {
              if ($.delay) {
                $.delay--
              } else {
                $.direction = 'backward'
                $.delay = delay
              }
            }
          } else {
            if ($.skillP > 0) {
              $.text = $.text.slice(0, -1)
              $.skillP--
            } else {
              $.skillI = ($.skillI + 1) % skills.length
              $.direction = 'forward'
            }
          }
        }
      }

      p.textContent = $.text
      p.appendChild(getRandomColoredString(
        $.prefixP < prefix.length ?
        Math.min(tail, tail + $.prefixP):
        Math.min(tail, skill.length - $.skillP)))
      setTimeout(render, timeout)
    }
    setTimeout(render, 500)

});




//skill
$(document).ready(function(){
    //초기실행
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        $('.box').each(function(index){
            var divTop = $(this).offset().top;
            if(divTop - 800 < top){
                $(this).addClass('active');
            }
        });
    });
});


//textImg
$(document).ready(function(){
    $(window).scroll(function () {
        var imgTop = $('.textImg').offset().top-800;
        var top = $(window).scrollTop();
        
        $('.textImg').css('right',(imgTop-top)*2);
    });
});
