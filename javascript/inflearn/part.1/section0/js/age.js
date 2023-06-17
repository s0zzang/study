// 함수 calc() 선언과 구현
function calc(){
    var currentYear = 2022,
        // 사용자에게 입력 받은 변수 할당
        birthYear = prompt("태어난 연도를 입력하시오", 'YYYY'), // YYYY = 입력란에 표시되는 문자
        age = currentYear - birthYear + 1;

    document.querySelector('#result').innerHTML = '당신의 나이는 ' + age + '세 임다 ~';
    // querySelector() : 특정 웹 요소를 선택
    // innerHTML : html 문서에 입력한 값으로 대체
}