
let textarea = document.querySelectorAll('textarea')
document.addEventListener('load', resize(textarea));
textarea.forEach(function(value, idx, arr){
    value.addEventListener('focusout', value => resize(arr))
})

function resize(obj) {
    for(let i=0;i<obj.length;i++){
        // textarea 높이 변경
        obj[i].style.height = "1px";
        obj[i].style.height = (obj[i].scrollHeight)+"px";

        // textarea 내용을 script로 변경
        let txt = document.createTextNode(obj[i].textContent); // textarea 컨텐츠
        const script = document.createElement("script");
        script.appendChild(txt); // script 태그에 txt 추가
        document.body.appendChild(script); // script 태그 body에 추가
        obj[i].closest('section').nextSibling.nextSibling.nextSibling.nextSibling.appendChild(script) // script 태그 각 섹션 내로 위치 변경
    }

}