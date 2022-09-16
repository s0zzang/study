const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = document.querySelectorAll('.image-list li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

// 버튼 활성화
for(const btn of btns){ // for of
    btn.addEventListener('click', function(){
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active)
        parent.classList.add(active)

        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone)
            imageList.classList.remove(gridView)
            imageList.classList.add(listView)
        } else {
            parent.previousElementSibling.classList.remove(dNone)
            imageList.classList.remove(listView)
            imageList.classList.add(gridView)
        }
    })
}

// 리스트 너비 조절 range 
const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input', function(){ // input, change 모두 가능
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`) // setProperty : minRange 변수는 기존 css 속성이 아닌 내가 지정한 것이기 때문에 사용
})

// 필터 기능
const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = []; // 빈 배열 생성
let counter = 1; // 변하는 값이기 때문에 let , length이기 때문에 0 없음
for(const caption of captions){
    myArray.push({
        id: counter++, // ++이 뒤라면 1 > 2 순서
        text: caption.textContent
    })
}
// 필터 input에 검색하면
const searchInput = document.querySelector('input[type="search"]');
const photoCounter = document.querySelector('.counter span');
searchInput.addEventListener('keyup', keyupHandler) // keydown(한번만), keypress(누르는대로 이벤트)
function keyupHandler(){
    for(const item of imageListItems){
        item.classList.add(dNone)
    }
    // 사용자가 입력한 키워드 찾기
    const keywords = this.value;
    const filteredArray = myArray.filter(el => el.text.toLowerCase().includes(keywords.toLowerCase())) // toLowerCase() : 무조건 소문자로 변환하여 대문자로 검색 가능
    console.log(filteredArray)
    if(filteredArray.length){
        for(const el of filteredArray){
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone)
        }
    }
    // 검색결과 갯수 반환
    photoCounter.textContent = filteredArray.length; 
}


// filter 
var arr = [3, 5, 15, 52];
// var arr2 = arr.filter(function(n){
//     return n % 5 == 0;
// })
// var arr2 = arr.filter(n => {return n % 5 == 0;}) // 어로우 함수
var arr2 = arr.filter(n => n % 5 == 0) // 한줄인 경우 중괄호&리턴도 생략 가능
console.log(arr2)