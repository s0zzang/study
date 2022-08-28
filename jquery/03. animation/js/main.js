$(function(){ 
    
    $('#typo .inner').click(function(){

        // 선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른 할 일);

        // 이징 : linear, swing(css의 ease 느낌)
        // 이징 여러가지 효과 : https://api.jqueryui.com/easings/
        // $(this).animate({opacity:0, fontSize:0}, 3000, 'easeOutBounce');

        // 다른 할 일 : function(){실제할일}
        $(this).animate({opacity:0, fontSize:0}, 3000, 'easeOutBounce', function(){
            $(this).animate({opacity:1, fontSize:'110px'},3000)
        });

        // 유의점
        $('div').mouseover(function(){
            $(this).stop().animate({background:'blue'})
        }).mouseout(function(){
            $(this).stop().animate({background:'green'})
        })
    });

})