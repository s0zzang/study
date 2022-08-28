$(function(){
   
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');

        // console.log($menu)
        // console.log($contents)

    // 메뉴 클릭 시
    $menu.click(function(x){
        x.preventDefault();
        // $menu.removeClass('on');
        // $(this).addClass("on");
        // $(this).addClass('on').siblings().removeClass('on')
        
        // 1. 메뉴의 index와 동일한 contents 부르기
        var idx = $(this).index()
            section = $contents.eq(idx),
            sectionDistance = section.offset().top;

        // 2. 스크롤 양만큼 animate
        // A.scrollTop() = 스크롤 양 확인
        // html, body 둘다 쓰면 정확 (body만 적으면 안됨)
        $('html, body').stop().animate({scrollTop:sectionDistance}, 300);
    })

    // 스크롤 했을 때
    // * window는 '' 없음 주의
    $(window).scroll(function(){
        $contents.each(function(){
            // console.log($contents)
            if ( $(this).offset().top - 100 <= $(window).scrollTop() ){
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        })
    })

});


