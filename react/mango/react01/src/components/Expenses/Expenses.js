import { useState } from 'react'
import './Expenses.css'
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectYearFn = (data) => {
        console.log('Expenses', data)
        setFilteredYear(data)
        console.log(filteredYear)
    }

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onSelectYear={selectYearFn}/>
            <Card className="expenses">
                
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    );
};
export default Expenses;

/* 

자동으로 아이템 추가가 안되는 상황
- 현재 : 
    <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
    <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
- 변경 :


*/
