import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem';

const ExpenseList = (props) => {
	console.log('ExpenseList', props);
	let expenseContent = '';
	if (props.items.length > 0) {
		expenseContent = props.items.map((i) => {
			return <ExpenseItem key={i.id} title={i.title} amount={i.amount} date={i.date} />;
		});
	} else {
		expenseContent = <h2 className='expense-list__fallback'>조회결과가 없습니다</h2>;
	}
	return (
		<>
			<div className='expense-list'>{expenseContent}</div>
		</>
	);
};
export default ExpenseList;
