import "./ExpensesFilter.css"

const ExpensesFilter = (props)=>{
    const selectYearFn = (e) => {
        // console.log('filter', e.target.value)
        props.onSelectYear(e.target.value)
    }

    return (
        <>
            <h1>ExpenseFilter</h1>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>연도별</label>
                    <select onChange={selectYearFn} value={props.selected}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2000">2022</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default ExpensesFilter;