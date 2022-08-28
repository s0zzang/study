$(function(){

    $(window).resize(function(){

        var container = $('.full-bg');

        // 브라우저 비율, 이미지 비율 비교하기
        var currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowheight = currentWindow.height(),
            browserRatio = windowWidth / windowheight,
            imgRatio = 854 / 480;

        // height > width
        if(imgRatio > browserRatio){
            container.css({
                height:'100%', 
                width: windowheight * imgRatio, // 현재 윈도우 높이 * 이미지 비율
                top: 0,
                left: (windowWidth - windowheight * imgRatio ) / 2 // (윈도우 너비 - 이미지 너비) / 2
            });
        }
        // width > height
        else {
            container.css({
                height: windowWidth / imgRatio, // 현재 윈도우 너비 / 이미지 비율 
                width: '100%',
                top: ( windowheight - windowWidth / imgRatio ) / 2, // (윈도우 높이 - 이미지 높이) / 2
                left: 0 
            });
        }
    });

    // 열자마자 바로 뜨도록
    $(window).trigger('resize');

})