// sperad-operator ... 
// 펼침 연산자 : 기존 배열을 유지하면서, 요소 값의 추가, 수정을 쉽게

// array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)

// object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };
const obj3 = {...obj1, ...obj2}; // { a: 1, b: 2, c: 1, d: 2 }
// const obj3 = {obj1, obj2}; // { obj1: { a: 1, b: 2 }, obj2: { c: 1, d: 2 } }
console.log(obj3)
