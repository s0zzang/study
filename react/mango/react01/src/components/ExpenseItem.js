import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem (props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} /> {/* 값 전달 */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
        </Card>
        // return 값이 태그인 경우 === 컴포넌트 (함수로 만든 태그)
    )
}

export default ExpenseItem;
