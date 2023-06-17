import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState('')
  const titleFn = (e)=>{
    setTitle(e.target.value)
  }
  const [price, setPrice] = useState('')
  const priceFn = (e)=>{
    setPrice(e.target.value)
  }
  const [date, setDate] = useState('')
  const dateFn = (e)=>{
    setDate(e.target.value)
  }
  
  return (
    <div>
      {title} {price} {date}
      <form action="#">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>제목</label>
            <input type="text" onChange={titleFn}/>
          </div>
          <div className="new-expense__control">
            <label>금액</label>
            <input type="number" min="0" step="100" onChange={priceFn}/>
          </div>
          <div className="new-expense__control">
            <label>날짜</label>
            <input type="date" min="1999-01-01" max="2100-12-31" onChange={dateFn}/>
          </div>
          <div className="new-expense__action">
            <button>추가하기</button>
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

* useState
- const [title, setTitle] = useState('') : title에 빈 문자열 세팅

*/