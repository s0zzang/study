// script >> textarea
document.addEventListener('load', toTextarea());
function toTextarea(){
    let scripts = document.querySelectorAll('script');
    for (let script of scripts){
        let text = script.outerText;
        let solve = script.previousElementSibling;
        if(solve.className == 'answer_wr'){
            console.log(solve)
            let before = solve.firstElementChild.lastElementChild.firstElementChild;
            before.innerHTML = text;

        }
    }
}

// textarea 내용에 맞게 높이 조절
let textarea = document.querySelectorAll('textarea')
document.addEventListener('load', resize(textarea));
// textarea.forEach(function(value, idx, arr){
//     value.addEventListener('focusout', value => resize(arr))
// })
function resize(obj) {
    for(let i=0;i<obj.length;i++){
        // textarea 높이 변경
        obj[i].style.height = "1px";
        obj[i].style.height = (obj[i].scrollHeight)+"px";
    }
}

