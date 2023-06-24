import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    console.log(props)
  
    // state 각자 관리
    const [title, setTitle] = useState(''); // 상태 관리를 위한 기초 세팅 - 값 저장할 장소 준비
    const [num, setNum] = useState(0); 
    const [date, setDate] = useState('');

    const titleFn = (e) => {
        setTitle(e.target.value)
    }
    const numFn = (e) => {
        setNum(e.target.value)
    }
    const dateFn = (e) => {
        setDate(e.target.value)
    }

    const submitFn = (e) => {
        e.preventDefault();
        const expenseData = { title:title, amout:+num, date:new Date(date) }; // state를 각자 관리하기 때문에 한 번에 묶어서 정보 받음
        props.onSaveExpense(expenseData); // 상향 전달
        // 값 초기화하기 == 화면에 보여지는 값 변경은 무조건 useState ! > set어쩌구 사용해야함
        setTitle('')
        setNum(0)
        setDate('') 
    }

  return (
        <div>
            <form action="#" onSubmit={submitFn}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>제목</label>
                        <input type="text" onChange={titleFn} value={title}/> 
                        {/* input으ㅣ value 속성을 통해 양방향 바인딩이 가능해짐(onSubmit 이벤트 발생시) = input 요소들을 state와 연결 */}
                    </div>
                    <div className="new-expense__control">
                        <label>금액</label>
                        <input type="number" min="0" step="100" onChange={numFn} value={num}/>
                    </div>
                    <div className="new-expense__control">
                        <label>날짜</label>
                        <input type="date" min="1999-01-01" max="2100-12-31" onChange={dateFn} value={date}/>
                    </div>
                    <div className="new-expense__action">
                        <button type="cancle" onClick={props.onCancle}>취소하기</button>
                        <button type="submit">추가하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;

/* 

* 이벤트 객체 - js
- 브라우저 내 모든 이벤트 정보를 가지고 있음
- 매개변수 (e)로 사용했던 !

* useState : 상태 관리를 도와주는 함수
- const [title, setTitle] = useState('') : title에 빈 문자열 세팅

* 😅 자동 state 관리
- 하나의 컴포넌트는 상태값을 여러개 가질 수 있음
1. 상태관리 따로 관리하는 방법
    const titleFn = (e) => {
        setTitle(e.target.value);
    };
    const numFn = (e) => {
        setNum(e.target.value);
    };
    const dateFn = (e) => {
        setDate(  e.target.value);
    };

2. 다중 속성 관리
    - 초기값을 객체로 할당
    const [userInput, setUserInput] = useState({ inputTitle: '', inputNum: '', inputDate: '' });
    - userInput을 호출할 때 타이틀 넘버 데이트 모두 다 들어와야 함 (아래 참고)
    - const titleFn = (e) => {
        // setTitle(e.target.value);
        setUserInput({ inputTitle: e.target.value, inputNum: '', inputDate: '' })
    };

- ... 스프레드 연산자 : 하나씩 꺼내서 다른 아이들과 연결해주고, 먼저 작성하지 않으면 덮어씌워져서 답 변경 안됨 (for문 처럼 사용가능)

- 콜백함수(prev)
    - 위의 경우 3개의 폼 요소가 동기화가 되지 않았음 
    > 서버로 값이 제대로 전달되지 않을 수 있음 (뒤로가기 등)
    > 유지보수에 힘이 듦
    => setUserInput 콜백함수 사용 : 안에서 함수 한번 더 호출
    => prev: setUserInput에 인자로 전달하면 업데이트 이전 값을 전달해줌

* 

*/