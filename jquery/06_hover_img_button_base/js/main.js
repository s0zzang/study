$(function(){

    var duration = 300,
        $buttons = $('#buttons2 button');
    
    // btn 높이 지정 - 자바스크립트 ver
    // var btns = document.getElementsByTagName('button');
    // console.log(btns);

    // // 자바스크립트 반복문
    // for (var i = 0; i<=btns.length; i++){
    //     btns[i].style.top = i*40 - 40 + 'px';
    // }

    // btn 높이 지정 - 제이쿼리 ver
    // 제이쿼리 each문
    $buttons.each(function(idx){ 

        // () 안에 작성시, 순번을 물고 들어옴
        $(this).css({top: idx * 40 - 40 + 'px'});

    }).mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, duration);
        $(this).find('img:first-child').stop().animate({opacity:0}, duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:1}, duration);
        
    }).mouseout(function(){
        $(this).stop().animate({backgroundColor:'white', color:'#01b169'}, duration);
        $(this).find('img:first-child').stop().animate({opacity:1}, duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:0}, duration);

    }) 

})