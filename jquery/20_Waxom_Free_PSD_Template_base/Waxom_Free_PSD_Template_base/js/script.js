$(document).ready(function(){

    // recent post slide
    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth:370,
        slideMargin : 30,
        pager:false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector :'.recent_posts .controls .prev' 
    });
    
    // mobile toggle drop down
    $(".toggle").click(function(){
        $(".main-menu").slideToggle();
    }); 

    // resize menu 호출
    $(window).resize(function(){
        if($(window).width() > 768){
            $(".main-menu").show();
        } else{
            $(".main-menu").hide();
        }
    });				
    
    // 상단 메뉴 고정
    var countersExecuted = false; // 숫자 애니메이션 1번만 실행되도록 스크롤 함수 밖으로

    $(window).scroll(function(){
        var currentSct = $(this).scrollTop();
        var offset = 300;

        if(currentSct >= 100 ){
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }

        // 서비스 아이템 나타나기
        var serviceExecuted = false;
        var serviceItem = $('.services');
        var serviceItemSct = serviceItem.offset().top - offset;

        if(!serviceExecuted){
            if (currentSct > serviceItemSct){
                serviceItem.addClass('active');
                serviceExecuted = true;
            }
        };

        // 숫자 애니메이션
        var counters = $('.counters'),
            countersThreshold = counters.offset().top - offset,
            countersData = counters.find('h3');
            // countersExecuted = false가 여기 있으면 계속 값이 바뀜 = scroll(function)문 밖으로

        if(!countersExecuted){
            if(currentSct > countersThreshold){
                countersData.each(function(){
                    var current = $(this),
                        target = current.attr('data-rate');

                    $({rate:0}).animate({rate:target}, {
                        duration: 1000,
                        progress: function(){
                            var now = this.rate;
                            current.text(Math.ceil(now));
                        }
                    })
                });
                countersExecuted = true;
            }
        }

        // 영상 overlay
        var currentUrl = $('iframe').attr('src');

        $('.video .icon').click(function(a){
            a.preventDefault();
            $('#overlay').addClass("visible")

            // play 버튼 클릭 시 자동재생
            var newStr = '?autoplay=1&mute=1';
            var newUrl = currentUrl.concat(newStr);
            $('iframe').attr('src', newUrl);

        });
        $('.video .close').click(function(a){
            a.preventDefault();
            $('#overlay').removeClass("visible")

            // close 버튼 클릭 시 자동 멈춤
            $('iframe').attr('src', currentUrl);
        });

    }); // scroll event
});