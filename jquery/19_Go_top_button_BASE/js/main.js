$(function () {

    var $btn = $('.go_top');

    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
        }
    })

    $btn.click(function(a){
        a.preventDefault();
        $('html, body').stop().animate({scrollTop:0}, 500)
    })
	
});
