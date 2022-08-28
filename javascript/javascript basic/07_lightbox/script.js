
document.addEventListener('click',lightbox);

function lightbox(e){
    e.preventDefault();
    var elem = e.target; // $(this) 요소 저장
    var lightBox = document.getElementById('lightbox-overlay'),
        lightBoxImg = document.getElementById('lightbox-image'),
        newImg = new Image(); // 새로운 이미지 생성

        if(elem.hasAttribute('data-lightbox')){
            newImg.onload = function(){ // 이미지가 로드되면
                lightBoxImg.src = this.src; // 새로 생성된 이미지에 src속성을 빈속성
            }
            newImg.src = elem.getAttribute('data-lightbox');
            lightBox.classList.add('visible')
        }

        if(elem == lightBox || elem == lightBoxImg ){
            lightBox.classList.remove('visible')
        }

        // a.getAttribute(b) : a요소의 b라는 속성값
        // a.hasAttribute(b) : a요소가 b라는 속성 가지고 있는지
        // onload : 화면에 로드가 되면 할일
    
}