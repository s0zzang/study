// 데이터 타입 선언하기

// 1. 원시형 : number, string, boolean, null, undefiend, symbol
// number 
let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log('sum', sum, ': 자료형?', typeof sum);
// 현재 파일 위치까지 터미널에서 들어가기, node 01.js 입력

// string
let str1 = "1"; // num 한번에 선택하기 : 블럭 지정 후 ctrl+d
let str2 = "2";
let para = str1 + str2;
console.log('para', para, ': 자료형?', typeof para);

// boolean
let fact = true;
console.log(typeof fact);

// null
let temp = null;
console.log('null :', null, typeof temp);

// undefined
let noName;
console.log('noName', noName, typeof noName);


// 2. 참조 자료형 : object, array, function
// object
let person = {
    name: 'sozzang',
    age: 5
};
console.log('person :', person, person.name, typeof person);

// array
let array = [1,2,3];
console.log('array: ', array, array[1], typeof array);

// function
function addNum(num1, num2){
    return num1 + num2;
}
console.log(typeof addNum, addNum(10,5))


// 3. 참조형(객체/비원시타입) 의 비교
// 얕은 비교
let a = { count: 1 }
// let b = { count: 1 }
let b = a // a의 주소를 b에 할당하기 때문에 === 같음 나음
let a2 = 1;
let b2 = 1;

if(a === b){ // 같다 (X) => 같지 않다 출력됨
    console.log('같다')
} else {
    console.log('같지 않다')
    // a와 b를 비교하라고 했지만, 객체가 저장된 주소를 비교하기 때문에 같지 않음
    // ⭐️ 값이 아닌 자료의 주소를 참조하는 : 객체, 배열, 함수
}

if(a2 === b2){ // 같다 (O)
    console.log('같다')
    // 주소가 아닌 값을 비교하기 때문에 같다
} else {
    console.log('같지 않다')
}