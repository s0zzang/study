
let textarea = document.querySelectorAll('textarea')
document.addEventListener('load', resize(textarea))

function resize(obj) {
    for(let i=0;i<=obj.length;i++){
        obj[i].style.height = "1px";
        obj[i].style.height = (obj[i].scrollHeight)+"px";
    }
}