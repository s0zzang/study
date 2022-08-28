// html 마지막에 script를 불렀기 때문에, "문서가 준비되면" 필요 없음

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg';

    // shrink class 붙이기
    $window.scroll(function(){
        if( $(this).scrollTop() > 100 ){
            if( !$mainHeader.hasClass('shrink')){
                $mainHeader.addClass('shrink');
                // 스크롤 값이 100보다 클 때 newPath에 small logo
                switchImages($smallLogo);
            }
        }else{
            if($mainHeader.hasClass('shrink')){
                $mainHeader.removeClass('shrink');
                 // 스크롤 값이 100보다 클 때 newPath에 default logo
                switchImages($defaultLogo);
            }
        }
    });

    // logo change
    function switchImages(newPath){
        var $logo = $('#logo');
        
        // fadeOut = .fadeOut(duration, 끝나고 할 일)
        $logo.fadeOut(300, function(){
            $(this).attr('src', newPath).fadeIn(300);
        });

    };