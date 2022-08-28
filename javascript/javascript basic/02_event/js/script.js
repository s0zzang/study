var btn = document.getElementById('submit'),
    container = document.querySelector('.container');

btn.addEventListener('click', function(){
    // 클릭하면 실제 할 일
    btn.style.background = 'gray'
})
container.addEventListener('mouseenter', function(){
    // 클릭하면 실제 할 일
    btn.style.color = 'red'
})
container.addEventListener('mouseleave', function(){
    // 클릭하면 실제 할 일
    btn.style.color = 'black'
})

window.addEventListener('keydown', function(e){
    console.log(e.key)
    console.log(e.keycode)
})