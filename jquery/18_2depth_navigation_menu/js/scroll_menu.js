$(function(){
   
    var $firstMenu = $('nav > ul > li'),
        $header = $('header'),
        $headerHeight = $header.outerHeight();

    // 2 depth 모두 한번에 보여지기 (sub li 'display:block' )
    // $firstMenu.mouseenter(function(){
    //     $header.stop().animate({height:'300px'},300);
    // }).mouseleave(function(){
    //     $header.stop().animate({height:'50px'},300);
    // })

    // 각 메뉴만 보여지기 ( sub li 'display:none' )
    $firstMenu.mouseenter(function(){
        var submenu = $(this).find('ul');
        var submenuHeight = submenu.outerHeight(true);
        $header.stop().animate({height:submenuHeight + $headerHeight + 'px'},300);
        submenu.addClass('on')
    }).mouseleave(function(){
        var submenu = $(this).find('ul');
        $header.stop().animate({height:'50px'},300);
        submenu.removeClass('on')
    })

    // 높이 구하기
    // A.height() 알맹이
    // A.innerHeight() 알맹이 + 패딩
    // A.outerHeight() 알맹이 + 패딩 + 보더
    // A.outerHeight(true) 알맹이 + 패딩 + 보더 + 마진

});


