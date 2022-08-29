// const : 한 번 지정하면 다신 바뀌지 않는 상수
const target = document.querySelector('.target');
const links = document.querySelectorAll('nav a');
const colors = ['deepblue', 'skyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue']

// link
for(let i=0; i<links.length; i++){ // 해당 중괄호 안에서만 사용되는 i
    // links[i].addEventListener('click', function(e){ alert('x') })
    // links[i].addEventListener('click', => alert('x'))
    links[i].addEventListener('click', (e) => e.preventDefalut())
    links[i].addEventListener('mouseenter', mouseenterFunc)
    links[i].addEventListener('mouseleave', mouseleaveFunc)
} 
window.addEventListener('resize', resizeFunc)

function mouseenterFunc(){
    if(!this.parentNode.classList.contains('active')){
        for(let i=0; i<links.length; i++){
            links[i].parentNode.classList.remove('active')
            links[i].style.opacity = '0.25'
        }
        this.parentNode.classList.add('active')
        this.style.opacity = 1;
        
        // target
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random()*colors.length)];
        
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
    }
}

function resizeFunc(){
    const active = document.querySelector('nav li.active');
    if(active){
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`
        target.style.top = `${top}px`
    }
}

function mouseleaveFunc(){
    this.parentNode.classList.remove('active')
    console.log(this)
    for(let i=0; i<links.length; i++){
        links[i].style.opacity = '1'
    }
    target.style.borderColor = 'transparent'
}