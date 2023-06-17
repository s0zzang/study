$(function(){

    var duration = 300,
        $images = $('#images p');
        // $, _ 사용 가능 / js 예약어와 겹치지 않기 위해 

    // 첫번째 캡션, span animate
    $images.mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity:1}, duration);
        // css 공백 - p span = find() 
        // css 공백 - p.span x = filter()
    }).mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0}, duration);
    });

    // 두번째 캡션
    $images.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, duration);
        $(this).find('strong').stop().animate({opacity:1, left:0}, duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, duration);
        $(this).find('strong').stop().animate({opacity:0, left:'-200%'}, duration);
    });

    // 세번째 캡션
    $images.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, duration);
        $(this).find('strong').stop().animate({opacity:1, bottom:0}, duration);
        $(this).find('img').stop().animate({top:'-40px'}, duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, duration);
        $(this).find('strong').stop().animate({opacity:1, bottom:'-80px'}, duration);
        $(this).find('img').stop().animate({top:0}, duration);
    });

});