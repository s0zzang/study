import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import "./GoalInput.css";

const FormControlStyle = styled.div`
margin: 0.5rem 0;

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => { 
            return props.invalid ? 'red' : 'true' 
        }} ;
        // js 표현식 사용하는 방법 : 콜백 함수 사용
    }

    input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => { 
            return props.invalid ? '#ff8585' : '#ccc' 
        }} ;
        background: ${(props) => { 
            return props.invalid ? '#ffb4b4' : '#fff' 
        }} ;
        font: inherit;
        line-height: 1.5rem;
        padding: 0.3rem 0.25rem;
        border-radius: .5rem;
    }

    input:focus {
        outline: none;
        background: #b9c8de;
        border-color: #4171b9;
    }
`;

const Input = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true); // 조건에 따라 화면 노출(상태) 변하게 하기 위한 변수 설정

    const goalInputChangeFn = (event) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitFn = (event) => {
        event.preventDefault(); // button 태그의 새로고침을 방지 - useEffect 추후 설명
        // 빈 값 유효성 검사
        if(enteredValue.trim().length === 0){
            setIsValid(false);
            return
        } else {
            setIsValid(true);
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
    };

    return (
        <form onSubmit={formSubmitFn}>
            <FormControlStyle invalid={ !isValid }>
            {/* 삼항연산 <FormControlStyle className={`form_control ${ !isValid ? 'invalid' : ''}`}> */}
            {/* 단항연산 <FormControlStyle className={ !isValid && "invalid" }> */}
                {/* <label style={{color:'red'}}> 목표달성앱 - 인라인 css</label>  */}
                {/* <label style={{color: isValid ? 'black' : 'red' }}> 목표달성앱</label>
                <input style={{background: isValid ? '#fff' : '#ffb4b4', borderColor: isValid ? '#ccc' : '#ff8585'}}type="text" onChange={goalInputChangeFn} placeholder={ isValid ? '' : '목표를 작성해주세요' } value={enteredValue}/> */}
                <label>목표달성앱</label>
                <input type="text" onChange={goalInputChangeFn} placeholder={ isValid ? '' : '목표를 작성해주세요' } value={enteredValue}/>
            </FormControlStyle>
            <Button type="submit">목표등록</Button>
        </form>
    );
};

export default Input;

/*

- 파일명은 GoalInput, 컴포넌트 이름은 Input
- button preventDefault() 목적 : 버튼 태그도 새로고침이 되기 때문에 리액트에서 막아야 함 !

* react 스타일 지정 방법
1. import css : 기본적인 방법
2. 동적 스타일링
3. style module

* react 인라인 스타일 지정 방법
- style={{ backgroundColor:'red', fontSize:'14px' }}
- return문은 jsx 문법이기 때문에 조금 다름 !!!! 
- 중괄호 두개, 여러개일 경우 객체 표기(,)

* react 인라인 '동적' 스타일 지정 방법
- state 값 활용 = 자스의 변수 선언 : 화면 모양에 변화가 있어야 하기 때문에 useState 사용해야함
- style={{ color: isValid ? 'black' : 'red' }}
- 인라인 스타일보단 클래스로 제어하기 추천 ~

* 동적 클래스 관리 방법
- 정적 : className="form_control"
- 동적1(삼항연산) : className={`form_control ${ !isValid ? 'invalid' : ''} `}
- 동적2(단항연산) : className={ !isValid && "invalid" }
- 정적으로 추가되어야 하는 클래스는 백틱 내 문자열로 작성

* styled Components
- Css-in-JS : js 확장자에서 css 문법을 사용할 수 있도록 만들어진 모듈
- 웹팩 : 웹 리소스(html, css 등)를 js로 사용할 수 있도록 패키지화된 것
- 라이브러리 설치 시 개발 서버 끊고 설치 진행 (control + c)
- 설치 확인 : package.json
- 컴포넌트 연결 : button.js

* sc 적용하기
- form-control에 대한 스타일을 현재 문서에서 FormControlStyle 상수로 지정
- return문 안에서 .form-control의 div > FormControlStyle로 변경

* sc로 props 내용 작성하기
- 기존 : <FormControlStyle className={ !isValid && "invalid" }`}> 
- 변경 : <FormControlStyle invalid={ !isValid && "invalid" }>
- stlye 내 : color: ${(props) => {console.log(props.invalid)}}
- > 콜백함수 활용하여 전달받은 props 활용

* sc 장점
- css 파일이 삭제되어 관리해야하는 파일이 줄어듦


*/
