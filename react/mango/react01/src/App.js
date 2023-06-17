import './App.css';
import Expenses from "./components/Expenses/Expenses"; // App.js의 자식
import NewExpense from './components/NewExpense/NewExpense';

const expenses = [
  {id: 'e1', title: '화장지', amount: 39900, date: new Date(2023, 4, 5)}, // 0
  {id: 'e2', title: '청바지', amount: 9900, date: new Date(2024, 8, 11)}, // 1
  {id: 'e3', title: '헬리콥터', amount: 99900000, date: new Date(2025, 12, 13)}, // 2
  {id: 'e4', title: '청소기', amount: 300000, date: new Date(2022, 10, 3)} // 3
]

function App() {
  // 리턴 문 안은 jsx, 리턴문 밖은 js
  // { console.log('여긴 js 영역이다') } => 오류
  // console.log('여긴 js 영역이다')

  return ( 
    <div className="App"> 
      <h1>App😅</h1>
      {/* jsx 문법 */}
      <NewExpense />
      <Expenses items={expenses}/>
      {/* js: Expenses(itexpensesems) */}
    </div>
  );
}

export default App;
