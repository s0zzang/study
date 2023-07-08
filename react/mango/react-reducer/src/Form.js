import { useReducer } from 'react'

// 전역 속성값을 다루는 reducer 함수는 컴포넌트 외부에 작성
function reducer(state, action) {
    if(action.type === "WORK"){
        return { type: 'WORK', state: '1', payload: '리액트' }
    }
}
const inputReducer = (state, action) => {
    if(action.type === "plus"){
        return { name: state.name, age: state.age + 1 }
    }
    if(action.type === "change"){
        return { name: action.newName, age: state.age }
    }
}
const Form = (props)=>{
    // useReducer는 훅이기 때문에 컴포넌트 내부에 useReducer 작성
    const [state, dispatch] = useReducer(reducer, '0');
    const init = { name: '짜장', age: 6 }
    const [input, inputDispatch] = useReducer(inputReducer, init);
    const handleInputChange = (e) => {
        inputDispatch({ type: 'change', newName: e.target.value })
    }
    const handleButtonClick = (e) => {
        inputDispatch({ type: 'plus', age: e.target.value })
    }
    return (
        <>
            <button onClick={ () => {
                // dispatch({type: "WORK", state: '1'})
                dispatch({ type: 'WORK' })
            }}>click{state.payload}</button>
            <div>Form</div>

            <input type="text" value={input.name} onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>+</button>
            <p>안녕 {input.name} ~ 넌 {input.age}살이야 !</p>
        </>
    );
};

export default Form;

/*

* useReducer
- 상태관리 훅
    ㄴ 훅 : 컴포넌트 안에 작성
    ㄴ reducer : 컴포넌트와 별개로 전역 속성값을 사용하는 경우가 많음 (예시) 로그인
                컴포넌트 내에 존재한다면, 컴포넌트 리렌더 될 때마다 하위 변수 모두 초기화됨
                = 컴포넌트에 종속되는 값이 아니기 때문에 ⭐️ 컴포넌트 외부에 작성 ! ⭐️
- const [state, dispatch] = useReducer(reducer, initialState);
    ㄴ 컴포넌트 내부 작성
    ㄴ dispatch : 컴포넌트 내 state 값을 컴포넌트 밖 reducer 함수를 통해 변경하는 역할
- function reducer( state, action ){}
    ㄴ 컴포넌트 외부 작성
    ㄴ state: 컴포넌트 내 state 반환
    ㄴ action : dispatch를 통해 전달된 액션의 내용이 reducer 함수에게 전달됨
    ㄴ 타입 별 상태값 세팅
- dispatch({type: "WORK", state: '1'})
    ㄴ despatch : 요청
    ㄴ type이 sleep이면 3, eat이면 4 등 상태관리의 타입에 따라 상태값 변경 가능
    ㄴ payload : 같이 딸려들어가는 값

* useState와의 차이
- useReducer : 좀 더 복잡한 데이터를 다룰 때 사용
- 콘솔창 차이
    ㄴ useState(initialState) : setState
    ㄴ useReducer(reducer, initialArg, init) : reducerAction
- 문법 차이
    ㄴ useState : (기본값, 기본값 변경 함수)
    ㄴ useReducer : (기본값, 기본값 변경 함수)

*/