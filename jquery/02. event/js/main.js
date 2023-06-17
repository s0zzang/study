$(function(){ 
    
    // 실행 지점 제어 - event : mouseover
    // on, off method : bind, unbind(제이쿼리 1.7 이하)의 새로운 버전
    // 체인 method : 연결해서 쓸 수 있음
    
    // 선택자.on('이벤트 종류', 할일);
    // 할일 = 임의 함수 = function(){}


    // 정석 버전
    // $('#typo').on('mouseover', function(){
    //     // $(this).css('background', 'green');
    //     $(this).css({background:'green'});
    // });

    // $('#typo').on('mouseout', function(){
    //     // $(this).css('background', '#3498db');
    //     $(this).css({background:'#3498db'});
    // });


    // 간단 버전 01 : ; $('#typo') 삭제
    // $('#typo').on('mouseover', function(){
    //     $(this).css({background:'green'})
    // }).on('mouseout', function(){
    //     $(this).css({background:'#3498db'});
    // });


    // 간단 버전 02 : on method 삭제
    // $('#typo').mouseover(function(){
    //     $(this).css({background:'green'})
    // }).mouseout(function(){
    //     $(this).css({background:'#3498db'});
    // });


    // 간단 버전 03 : on method 삭제
    // $('#typo').mouseover(function(){
    //     $(this).css({background:'green'})
    // }).mouseout(function(){
    //     $(this).css({background:'#3498db'});
    // });
    

    // 선택자 2개 이상
    $('#typo, h1').mouseover(function(){
        $(this).css({background:'green'})
        // this : 이벤트가 일어난 그 요소!
        // $('#typo, h1').css() : 하나에 마우스 올리면 선택자 모두 변경됨
    }).mouseout(function(){
        $(this).css({background:'#3498db'});
    });
    

})