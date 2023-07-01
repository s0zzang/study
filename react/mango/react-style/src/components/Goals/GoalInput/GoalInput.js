import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from './GoalInput.module.css'

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
            <div className={`${styles.form_control} ${!isValid && styles.invalid}`}>
                <label>목표달성앱</label>
                <input type="text" onChange={goalInputChangeFn} placeholder={ isValid ? '' : '목표를 작성해주세요' } value={enteredValue}/>
            </div>
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

-----

* styled Components (src_styledComponents)
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

-----

* style module
- npm에 자동으로 설치되어 있어서 라이브러리 따로 설치하지 않아도 됨
- goalList.js 참고
- 생성된 클래스 : class="GoalList_goal_list__ysabG"
- > 컴포넌트이름_지정한클래스__모듈시스템이지정한암호
- 클래스 동적 + 정적인 클래스 동시에 작성하기 : <div className={`${styles.form_control} ${!isValid && styles.invalid}`}>
- invalid (동적) 클래스 넣을 때도 styled. 를 붙여야함
- 미디어 쿼리 넣기 : media로 그냥 넣으면 됨

*/
