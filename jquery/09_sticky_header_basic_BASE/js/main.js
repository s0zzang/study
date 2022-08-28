$(function () {
    var win = $(window),
        header = $('.page-header'),
        headerOffsetTop = header.offset().top;
        console.log(headerOffsetTop);

    win.scroll(function(){
        if( $(this).scrollTop() >= headerOffsetTop ){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
    })

});
