import { useEffect, useState } from 'react'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
/**
  useEffect(()=>{
    //컴포넌트 마운트시
  },[]);

  useEffect(()=>{
    //a 업데이트시
  },[a])

  useEffect(()=>{
    return()=>{
      //사라지기전
    }
  },[])
**/
    useEffect(() => {
        return
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginFn = (email, password) => {
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true)
    }
    const logoutFn = () => {
        setIsLoggedIn(false);
      };
    return (
        <>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutFn} />
            <main>
                {!isLoggedIn && <Login onLogin={loginFn} />}
                {isLoggedIn && <Home onLogout={logoutFn} />}
            </main>
        </>
    );
}

export default App;

/*

useEffect 문법
- 상수 선언/할당 없이 바로 함수 작성
- 모듈 호출 : import { useEffect } from 'react'
- 컴포넌트 내 함수 선언 : useEffect(() => { '할일' }, [ '배열 '])
- 1) 의존성 배열을 넣었을 경우, 할 일 : 컴포넌트 마운트 시 '할 일' 실행
- 2) 배열에 값을 넣었을 경우 할 일 : 값이 업데이트 시 '할 일' 실행
- 3) 배열 비운 채 중괄호 내 리턴 함수 전달 : 컴포넌트 사라지기 전에 리턴 내용 실행 후 사라짐 

localStorage
- 

*/