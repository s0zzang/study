import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=>{
    // form 에서 데이터 받기
    const [edit, setEdit] = useState(false);
    const EditFn = () => {
        setEdit(!edit);
    }
    const saveExpenseFn = (data) => {
        // 반복되는 div에 id가 없으면 오류남
        const expense = data;
        const expenseData = {
            ...expense, 
            id:Math.random().toString(),
        }
        props.onAddExpense(expenseData) // app.js로 올리기
    }

    return (
        <div className='new-expense'>
            {/* ExpenseForm(onSaveExpense) : saveExpenseFn 값을 넘기며 함수 실행 */}
            <ExpenseForm onSaveExpense={saveExpenseFn}/>
            {edit === false && <button onClick={EditFn}>지출추가</button>}
            {edit === true && <ExpenseForm onSaveExpenses={saveExpenseFn} onCancle={EditFn}/>}
        </div>
    );
};

export default NewExpense;


/* 

* 리프팅
- props : 하향식 전달방식 
    > app.js에서 작성한 속성을 하위 js로 전달
- lifting : 상향식 전달방식 
    > form에서 입력받은 값을 app.js로 전달

- js 함수 : 함수 호출시 어디서든 활용 가능 (관계의존 X, 호출 방식)
- 리액트 컴포넌트 == 함수 => 호출 방식으로 컴포넌트 값을 주고 받을 수 있음
- form.js --- (newExpense) ---> app.js
- 함수는 매개변수 전달 !



*/
