// 변수 지정
var sliderWrapper = document.getElementsByClassName('container');
var sliderContainer = document.getElementsByClassName('slider-container');
var slides = document.getElementsByClassName('slide');
var slidesCount = slides.length;
var currentIndex = 0;
var topHeight = 0; // 젤 높이가 높은 슬라이드 높이 가져옴
var navPrev = document.getElementById('prev');
var navNext = document.getElementById('next');


// 슬라이드 높이 확인하여 부모의 높이로 지정
function calculateTallestSlide(){
    for(var i=0; i<slidesCount; i++){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight
        }
    }   
    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}
calculateTallestSlide();


// 슬라이드 가로로 배열
for(var i=0; i<slidesCount; i++){
    slides[i].style.left = i*1 + '00%';
}


// 슬라이드 이동 함수
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx;
    updateNav(); // 처음 슬라이드인지 마지막 슬라이드인지 확인
}


// 버튼 기능 업데이트 함수
function updateNav(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled')
    } else {
        navPrev.classList.remove('disabled')
    }

    if(currentIndex == slidesCount - 1){
        navNext.classList.add('disabled')
    } else {
        navNext.classList.remove('disabled')
    }
}


// 버튼 클릭하면 슬라이드 이동
navPrev.addEventListener("click",function(e){
    e.preventDefault();
    if(currentIndex != 0){
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slidesCount - 1)
    }
})
navNext.addEventListener("click",function(e){
    e.preventDefault();
    if(currentIndex < slidesCount-1){
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0)
    }
})


// 첫번째 슬라이드 먼저 보이도록
goToSlide(0)