import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ''){
            return;
        }
        // toDos.push(); // state를 직접 수정할 수 없기 때문에 불가능
        setToDos(currentArray => [toDo, ...currentArray])
        setToDo("");
    }
    // console.log(toDos)
    return <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do ~!" />
            <button>Add To Do</button>
        </form>
        <ul>
            {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}


export default App;

/*

setToDos(currentArray => [toDo, ...currentArray])
ㄴ 현재 state를 currentArray로 받아와서 새로운 array로 return 함

*/