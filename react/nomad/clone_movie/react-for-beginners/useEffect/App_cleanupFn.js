import { useState, useEffect } from "react";

function Hello(){
    useEffect(() => { // 기본 버전
        console.log("created ! :)")
        return () => console.log("destroyed ! :(") // cleanup function
    }, [])
    // function hiFn(){
    //     console.log("created ! :)")
    //     return byFn;
    // }
    // function byFn(){
    //     console.log("destroyed ! :(")
    // }
    // useEffect(hiFn, [])
    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick =() => {
        setShowing(prev => !prev);
    }
    return <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
}


export default App;

/*

cleanup function
ㄴ 컴포넌트가 파괴, 삭제될 때 할 일 
ㄴ 컴포넌트의 생성 및 삭제 시점을 알 수 있음
ㄴ 자주 사용하는 함수는 아님

* 작성방법
    useEffect(() => { 
        console.log("created ! :)")
        return () => console.log("destroyed ! :(") // cleanup function
    }, [])
* 아래 함수 버전과 동일하게 작동함
    function hiFn(){
        console.log("created ! :)")
        return byFn;
    }
    function byFn(){
        console.log("destroyed ! :(")
    }
    useEffect(hiFn, [])

*/