var header = document.querySelector('header'),
    nav = document.querySelector('nav'),
    submenu = document.querySelectorAll('ul li ul'),
    mainlist = document.querySelectorAll('.clearfix > li'),
    height = 0,
    hh = header.offsetHeight;

// 가장 높은 서브메뉴 높이 구하기
for(var i=0; i<submenu.length; i++){
    if(submenu[i].offsetHeight > height){
        height = submenu[i].offsetHeight;
    }
}

// 방법1. 각각 서브메뉴에 마우스가 올라가면 할 일
for(var i =0; i<mainlist.length; i++){
    mainlist[i].addEventListener('mouseover', function(){
        header.style.height = hh + height + 'px'
    })
    mainlist[i].addEventListener('mouseout', function(){
        header.style.height = hh + 'px'
    })
}

// 방법2. 2dep ul 높이를 구해서 그만큼만 늘어나도록
for(var i =0; i<mainlist.length; i++){
    mainlist[i].addEventListener('mouseover', function(){
        submenuH = this.querySelector('ul').offsetHeight;
        header.style.height = hh + submenuH + "px"
    })
    mainlist[i].addEventListener('mouseout', function(){
        header.style.height = hh + 'px'
    })
}