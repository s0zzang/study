import styled from 'styled-components' // export default인 경우, 중괄호 없이 import
import React from "react";

// import "./Button.css";

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
const Button = styled.button`

    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #0b49a6;
    color: white;
    background: #0b49a6;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    border-radius: .5rem;
    width: 100%;
    @media (max-width: 768px){
        display: block;
        width: 50%;
        margin: 0 auto;
    }
  
    &:focus {
        outline: none;
    } 
    
    &:hover,
    &:active {
        background: #0d4fb3;
        border-color: #0d4fb3;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`

export default Button; // default 사용하는 경우 Button만 내보내기 때문에 임포트 시 이름을 아무렇게나 불러도 됨

/*

styled 문법

- styled.button : 자스 내에서 사용할 button 태그를 생성하는 메서드
- styled.button() == styled.button``
- `` : 태그드 템플릿 리터럴 (es6)
- 적용된 스타일 sc로 시작하는 경우 styled Components 사용한 경우 !

- 자신 스타일 : 중괄호 없이 사용
- 자신 지칭 : &

*/