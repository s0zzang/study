import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('I run all the time') // state 변할 때마다 실행

  const iRunOnlyOnce = () => { // function
    console.log("I run only once")
}
useEffect(iRunOnlyOnce, [])
useEffect(() => {
    if(keyword !== ''){
        console.log(`SEARCH FOR ${keyword}`)
    }
}, [keyword])

  return (
    <div>
        <input onChange={onChange} value={keyword} type="text" placeholder="Search here .."/>
        <h1 className={styles.title}>Welcome back !!! <span>{counter}</span></h1>
        <button onClick={onClick}>Click Me</button>
        <Button text={'merong'}></Button>
    </div>
  );
}

export default App;

/*

useState 
ㄴ counter 값이 변경될 때다 render 콘솔 로그
ㄴ state 변화시 컴포넌트 전체 리렌더

useEffect
ㄴ state값이 업데이트 되어도 처음 render 될 때만 실행
ㄴ 단 한번만 호출해야하는 api 호출, change 이벤트가 있는 input 등 사용
ㄴ function, argument 2
ㄴ argument1: 한 번만 실행시키길 원하는 코드
ㄴ argument2: [] 의 state 값이 변경되면, (조건) 함수 실행
    ㄴ [ 빈 값 ] : 단 한번만 실행됨

*/