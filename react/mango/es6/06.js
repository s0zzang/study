// module : 프로그램 구성요소의 일부, 코드 일부

function funcA(){
    console.log('funcA')
}
function funcB(test){
    console.log(test, 'funcB')
}
const varC = '😆😆😆😆😆😆'

// 여러개 한 번에 export
export {funcA, funcB, varC} // default문은 한 문서에 하나이기 때문에 여러개 export 할 땐 사용하면 안됨