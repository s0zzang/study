import "./ExpenseItem.css"

function ExpenseItem (props){
    console.log(props)
    // const expenseDate = new Date(2023, 5, 5);
    // const expenseTitle = '자동차 보험';
    // const expenseAmount = '290,000';

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
        </div>
        // return 값이 태그인 경우 === 컴포넌트
    )
}

export default ExpenseItem;