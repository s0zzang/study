// destructuring : 구조분해할당

// 1. array
const arr = [1, 2, 3];

// index 번호로 값에 접근
const a = arr[0]; // 1
const b = arr[1]; // 1
const c = arr[2]; // 1
console.log(`a : ${a}, b : ${b}, c : ${c}`)

// 구조분해할당 ⭐️ 값 분해 기준 = 순서
const [d, f, e] = arr; // 변수명 아무거나 선언해도 가능, 변수 선언 순서와 동일하게 할당됨
console.log(d, e, f);

////////////////////////////////////////////////////

// 2. object
let obj = {x:1, y:2, z:3};
// let x = obj.x;
// let y = obj.y;
// let z = obj.z;
// console.log(`xx: ${xx} xy: ${xy} xz: ${xz}\n `)

// 구조분해할당 ⭐️ 값 분해 기준 = 이름
let { x, z, y } = obj; // 주의점 : 객체 내 키와 이름이 같아야 함 !!!!!!!!!, 순서 상관 없음
// 새 속성(이름)에 재할당
let { z: nz, x: nx, y: ny } = obj; // 변수: 새로운 변수
console.log(`x: ${x} y: ${y} z: ${z}`)
console.log(`nx: ${nx} ny: ${ny} nz: ${nz}`)
console.log(z === nz) // true : 할당한 것이기 때문에