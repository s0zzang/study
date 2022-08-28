$(function () {
    var $win = $(window),
        $header = $('.page-header'),
        $headerClone = $header.contents().clone(),
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),
        // 아직 html에 없는 요소이기 때문에 만듦과 동시에 객체로 만들었음
        $threshold = $header.offset().top + $header.outerHeight();
        // threshold : 문지방 (기준)

        console.log($headerClone);
        console.log($headerCloneContainer);
        console.log($threshold);

        // A.append(B)
        // clone된 요소를 컨테이너에 담기
        $headerCloneContainer.append($headerClone);

        // A.appendTo(B)
        // 컨테이너를 body에 담기
        $headerCloneContainer.appendTo('body');

        // $win.scroll(function(){
        //     if( $win.scrollTop() >= $threshold ){
        //         $headerCloneContainer.addClass('visible');
        //     }else{
        //         $headerCloneContainer.removeClass('visible');
        //     }
        // })

        // 브라우저 스크롤 로드 줄여주기 : throttle-debounce.min.js
        // $win.on('scroll', $.throttle(1000/15, function(){
        //     if( $win.scrollTop() >= $threshold ){
        //         $headerCloneContainer.addClass('visible');
        //     }else{
        //         $headerCloneContainer.removeClass('visible');
        //     }
        // }));

        // throttle-debounce.min.js - on 생략
        $win.on('scroll', $.throttle(1000/15, function(){
            if( $win.scrollTop() >= $threshold ){
                $headerCloneContainer.addClass('visible');
            }else{
                $headerCloneContainer.removeClass('visible');
            }
        }))

});
