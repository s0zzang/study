import './ExpenseDate.css'

const ExpenseDate = (props) => { 
    // porps(js:매개변수)로 값 전달받기
    // console.log(props)

    // 년,월,일 구분
    const year = props.date.getFullYear();
    const month = props.date.getMonth().toString().padStart(2,'0');
    const day = props.date.getDate().toString().padStart(2,'0');
    // console.log(typeof day)

  return (
    // 리턴 아래 최상위 div는 무조건 하나여야함 하나가 아니라면, 
    // 1) <></> 빈 꺽쇠로 감싸기 : 속성 작성 불가
    // 2) <fragment>로 감싸기  : 속성 전달 가능, 사용시 import { fragment } from 'reat'; 선언 필요
    // 리턴문이 여러줄이라면 소괄호로 감싸기
    <div className="expense-date"> 
      <div className="expense-date__year">{month == 0 ? year - 1 : year}년</div>
      <div className="expense-date__month">{month == 0 ? "12" : month}월</div>
      <div className="expense-date__day">{day}일</div>
    </div>
  );
};

export default ExpenseDate;
