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
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`)
})