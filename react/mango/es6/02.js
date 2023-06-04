// map : 배열 내 요소를 순환하며 새 배열을 리턴 
// map 문법 : arr.map( () => {} )
const numbers = [1, 2, 3, 4, 5, 6];
const double = numbers.map( () => {number*number} );

console.log(double)