import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

function ExpenseItem (props){
    let title = props.title;
    // let title = props.title;
    // const click = () => { 
    //     // title = '📞📞📞'
    //     setTitle('📞📞📞') // 리랜더
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} /> {/* 값 전달 */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
            {/* <button onClick={click}>클릭</button> */}
        </Card>
        // return 값이 태그인 경우 === 컴포넌트 (함수로 만든 태그)
    )
}

export default ExpenseItem;

/* 
// onClick : jsx

- onClick={console.log('클릭했심')} 
: onClick인데 클릭 전에 실행되고 클릭했을 땐 실행 안됨, 함수 안에 실행하면 클릭했을 때 실행됨
- onClick={()=>{console.log('클릭했심')}} 
: 이렇게 작성해야 클릭 후 콘솔

* js 문법과의 차이
- js : onclick > js문법을 리액트에서 사용하려면 카멜 케이슬로 모두 작성 !
- react(jsx) : onClick - 카멜케이스

- onClick={click()} : 클릭 전 실행되고 클릭했을 땐 실행 안됨
- onClick={click} : 클릭 후 실행

* 원인
- index.js에서 <App /> 함수가 실행되는데 이때 함수가 가진 모든 값이 호출되며 실행됨 = 평가됨
- ExpenseItem 함수가 실행되며 내부 모든 함수(click())가 호출됨 => click() 역시 실행
- onClick={ click } : click()이 아닌 해당 함수가 작성된 지점으로 가겠다.

*/

/*
// useState : 값 변경 추적하여 컴포넌트 재호출

- 상태 관리를 도와주는 리액트 함수
- js 함수의 특징 : 호출해야만 실행됨, 한 번 실행하면 끝, 함수 내 값을 업데이트하려면 계속 호출해야함
- ExpenseItem 의 return 문은 이미 태그를 그리고 종료됨 => 값이 변경될 때 컴포넌트를 다시 호출하도록 하는 함수가 필요함
- import { useState } from 'react'; 호출하여 사용

* 문법
1. import useState
2. let [상태값 저장 변수, 상태값 갱신 함수] = useState(상태 초기값)
- 갱신 함수로 상태값 저장 변수를 업데이트 해줌
3. 호출 
- let [변수명, set함수] = useState(0)
- 변수명 = 0
- set함수(1) // 변수명 = 1, 컴포넌트 리랜더
4. 반환값 : [값, 함수]

* use로 시작하는 리액트 내장함수 = hook || 라이브러리
- 함수형 컴포넌트에만 사용
- 컴포넌트 선언문 내에, 리턴문 밖에 작성

*/