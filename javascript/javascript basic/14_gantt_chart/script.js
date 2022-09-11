window.addEventListener('load', creatChart); // 투명도 + 너비
window.addEventListener('resize', creatChart); // 너비만

function creatChart(e){ // e로 나중에 load인지 resize인지 구분함
    const days = document.querySelectorAll('.chart-values li')
    const tasks = document.querySelectorAll('.chart-bars li')

    var testarray = [1, 2, 34, 5]
    // 유사배열 : NodeList(7) [li, li, li, li, li, li, li] 
    console.log(days) 
    // 배열 : (4) [1, 2, 34, 5] > forEach 반복문 사용에 용이
    console.log(testarray)
    // NodeList > array (1)
    Array.from(days)
    // NodeList > array (2)
    const daysArray = [...days]
    // const daysArray = [...document.querySelectorAll('.chart-bars li')]

    // tasks.forEach(function(currentvalue, index, array){})
    tasks.forEach(el => { // el : tasks
        const duration = el.dataset.duration.split('-');
        const startDay = duration[0];
        const endDay = duration[1];
        let left = 0,
            width = 0; // let : { } 안에서만 사용하는 변수 지정

        // 시작일의 left값 확인
        if(startDay.endsWith('2')){
            const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth/2;
        } else {
            const filteredArray = daysArray.filter(day => day.textContent == startDay);
            left = filteredArray[0].offsetLeft;
        }

        // 종료일의 left값 + width값 확인
        if(endDay.endsWith('2')){
            const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth/2 - left;
        } else {
            const filteredArray = daysArray.filter(day => day.textContent == endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }
        
        // task css에 left, width 지정
        el.style.left = `${left}px`
        el.style.width = `${width}px`
        if(e.type == 'load'){
            el.style.backgroundColor = el.dataset.color;
            el.style.opacity = 1;
        }
    })

}