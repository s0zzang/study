// 배열로 모든 선택자 선택하기 위해 all
const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

// for(var i; i<lnks.length; i++)과 같은 뜻
for (const link of links){
    // 없어도 기능 구현 가능하지만, 이미지를 미리 로드해둬서 기능 속도 빠르게 구현 (개발자모드 - network)
    const img = new Image();
    img.src = link.dataset.bg;

    // link 각각에 마우스 올리면
    link.addEventListener('mouseenter', function(){
        // html 그대로 가져오기 ``
        // bg.style.backgroundImage = 'url(' + this.dataset.bg + ')';
        bg.style.backgroundImage = `url(${this.dataset.bg})`
        document.body.classList.add(showClass)
    });
    link.addEventListener('mouseleave', function(){
        document.body.classList.remove(showClass)
    })
}