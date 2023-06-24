import { useState } from 'react'
import './Expenses.css'
import ExpenseList from './ExpenseList';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from './ExpenseChart';
import Card from "../UI/Card";

const Expenses = (props) => {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectYearFn = (data) => {
        setFilteredYear(data)
    }
    const filteredYearFn = items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectYear={selectYearFn}/>
                <ExpenseChart expense={filteredYearFn} />
                <ExpenseList items={filteredYearFn}/>
                
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
