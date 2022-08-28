$(function(){

    var $aside = $('aside'),
        $btn = $aside.find('button'),
        duration = 300;
        // 개빠르게 찾기 가능 = 성능 up!
        console.log( $btn.find('img').attr('src'));

    // btn click, aside 나오도록
    $btn.click(function(){

        // btn 하나에 직접 명령(1개)
        // $aside.stop().animate({left:0}, duration)

        // btn 하나로 두가지 일 시키기 = 클래스 추가
        $aside.toggleClass('open');

        if( $aside.hasClass('open') ){
            // $aside.stop().animate({left:'-70px'}, duration, 'easeOutBack');
            $btn.find('img').attr('src','img/btn_close.png');

        }else{
            // $aside.stop().animate({left:'-350px'}, duration, 'easeInBack');
            $btn.find('img').attr('src','img/btn_open.png');
        }

        // jQuery animate = CPU (두뇌) > 성능저하!
        // css transition = GPU (비디오카드) > 성능괜츈!

    })

})