import React, {useEffect, useState} from 'react'

function Timer(){
    console.log('타이머 실행 전');
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('⏰')
        }, 1000);
        // cleanup : 컴포넌트가 사라질 때 실행
        return () => { 
            clearInterval(timer);
            console.log('타이머 종료')
        }
    })
    return <p>타이머 진행중</p>
}

const MangoEffect = (props)=>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [start, setStart] = useState(false);

    // 1) 두번째 인자 없음 : 컴포넌트 최초 렌더 + 리렌더될 때 마다 실행
    useEffect(()=>{console.log('짜장 바보')})
    // 2) 두번째 인자로 [] 전달 : 컴포넌트 최초 렌더(컴포넌트 마운트) 시에만 실행
    useEffect(() => {console.log('🕹️ 게임을 시작하지')}, [])
    // 3) 두번째 인자로 [의존성 배열] 전달 : 의존성 배열의 값이 변경될 때 실행
    useEffect(() => {console.log('😎 메롱 인풋')}, [text])
    useEffect(() => {console.log('😎 메롱 카운트')}, [count])

    const textChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }

    return (
        <>
            {start && <Timer/> ? start && <Timer/> : <><p>타이머 준비중</p></>}
            <button onClick={() => {setStart(!start)}}>타이머 시작</button>
            <h2>클릭한 횟수 {count}</h2>
            <button type='button' onClick={() => {
                setCount(() => count + 1)
            } }>클릭</button>
            <div>
                <input type="text" value={text} onChange={textChange} />
                <h2>{text}</h2>
            </div>
        </>
    );
};

export default MangoEffect;


/*

useEffect
- react hook
- 컴포넌트 렌더링 시 이후 동작 함수를 작성 가능
- useEffect (콜백함수)

*/