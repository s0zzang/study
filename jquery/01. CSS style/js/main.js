$(function(){ //문서가 준비되면!
    
    // css 속성 여러가지 변경
    //$('h1').css({'color':'blue', 'background':'red'});
    
    // css 속성 한가지 변경
    $('h1').css('color','blue');
    $('#typo .inner').css('text-decoration','underline');
    $('#typo .inner').css('border-bottom','5px solid red');
    $('#typo .inner').css('transform','rotate(45deg)');
    $('#typo .inner').css('transform','translateY(-10%)');
    $('#typo .inner').css('opacity',0.5); //숫자 앞에 따옴표 필요 없음
    
    // css 속성 여러가지 변경
    $('#typo .inner').css({'color':'red', 'border':'1px solid #000', 'background':'red'});
    $('#typo .inner').css({color:'red', borderBottom:'1px solid #000', background:'red'}); 
        // 이렇게 속성:'속성값' 가능
})
