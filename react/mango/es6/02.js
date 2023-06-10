/* map */

// map : 배열 내 요소를 순환하며 새 배열을 리턴 
// map 문법 : arr.map( () => {} )
// 매개변수로 식별자를 아무거나 사용하고, 해당 매개변수에 실행문을 실행함
const numbers = [1, 2, 3, 4, 5, 6];
const double = numbers.map( (num) => num * 2 ); // { } 사용시 return 해야 값 반환됨

console.log(double)