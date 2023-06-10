import './App.css';
import ExpenseItem from "./components/ExpenseItem";
const expenses = [
  {id: 'e1', title: '화장지', amount: 39900, date: new Date(2023, 4, 5)}, // 0
  {id: 'e2', title: '청바지', amount: 9900, date: new Date(2023, 8, 5)}, // 1
  {id: 'e3', title: '헬리콥터', amount: 99900000, date: new Date(2025, 12, 13)}, // 2
  {id: 'e4', title: '청소기', amount: 300000, date: new Date(2025, 10, 3)} // 3
]

function App() {
  // 리턴 문 안은 jsx, 리턴문 밖은 js
  // { console.log('여긴 js 영역이다') } => 오류
  console.log('여긴 js 영역이다')

  return ( 
    <div className="App"> 
      <h1>App😅</h1>
      {/* jsx 문법 */}
      { console.log(' 여긴 jsx 문법 영역이다 ') }
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} /> {/* props */}
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} /> {/* props */}
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} /> {/* props */}
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> {/* props */}

    </div>
  );
}

export default App;
