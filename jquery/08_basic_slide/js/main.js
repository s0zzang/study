$(function(){

    // 일정시간마다 할 일 = 현재 이미지 사라지고 다음 이미지 나타나기 ...
    var slides = $('.slideshow img'),
        slideCount = slides.length,
        currentIndex = 0;
  
    // 일정 시간마다 할 일
    // jQuery 집합개체 (object) 중 특정요소 선택 = .eq(n)
    slides.eq(currentIndex).fadeIn();
  
    //타이머의 값을 undefined(지정되어 있지 않다)라고 지정
    var timer = undefined;  
  
    //타이머의 값이 undefined이면 showNextslide를 1s 마다 실행하라
    if (timer == undefined) { 
      timer = setInterval(showNextSlide, 1000);
    }         
  
    function showNextSlide(){
        
        var nextIndex = (currentIndex +1) % slideCount; 
        // slideCount = 4
        // (0+1) % 4 = 1
        // (1+1) % 4 = 2
        // (2+1) % 4 = 3
        // (3+1) % 4 = 0 = 다시 처음으로!
  
        // 현재 슬라이드 사라지고, 다음 슬라이드 보여줘
        slides.eq(currentIndex).fadeOut();
        slides.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
  
        console.log(currentIndex);
  
    }
  
    //타이머의 값이 undefined이면 showNextslide를 1s 마다 실행하라
    function timeron(){
      if (!timer) { 
        timer = setInterval(showNextSlide, 1000);
        } 
            }
            function timeroff(){
        //타이머의 값이 있으면 즉 setInterval(showNextSlide, 3500)값이 있으면 클리어하고 값을 다시 undefined로 저장.
        if (timer) { 
        clearInterval(timer);
        timer = undefined;				
        }	
            }
  
    slides.mouseover(function(){
      timeroff();
    }).mouseout(function(){
      timeron();
    })
  })