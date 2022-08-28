$(function(){

    var $selectEmail = $('.select_domain'),
        $targetInput = $('.email_domain'),
        $count = $('.count'),
        // $unitPrice = $('.unitprice').attr('data-unitprice'),
        
        // 천단위 구분
        $unit = $('.unitprice').text(),
        // A.replace(B,C) : A의 B를 C로 변경함
        $unitPrice = $unit.replace(',',''),
        
        // 정수로 바꾸기 parseInt(값)
        $currentNumber = parseInt($count.text()),
        $total = $('.total');

    // change = input(select) 값이 변경되면 (사용자가 변경하는 모든 것에 사용 가능)
    $selectEmail.change(function(){
        // val() = value 값 가져오기/변경하기
        var domain = $(this).val();
        $targetInput.val(domain);
    })

    // 수량
    $('span a').click(function(e){
        e.preventDefault();
        if( $(this).hasClass('plus') ){
            $currentNumber += 1;
        } else{
            if ($currentNumber > 0){ // 0 이하로 내려가지 않도록
                $currentNumber -= 1;
            }
        }
        // html에 결과 넣기
        $count.text($currentNumber);

        var semiTotal = $unitPrice * $currentNumber;
        // 영문권 로컬 문자로 변경 
        var total = Number(semiTotal).toLocaleString('en');

        $total.text(total);
        // 1000 단위 구분 
    });

});