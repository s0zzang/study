// border-radius 형태 적용 컴포넌트
import "./Card.css";

const Card = (props) => {
    console.log(props)
    const classes = `card ${props.className}`
    return <div className={classes}>{props.children}</div>;
};

export default Card;

// props.children : 리액트 속성 - 모든 하위 속성을 포함한 속성값

// Q. <Card className="expense-item"> 에서 expense-item 클래스가 사라짐
// A. props의 클래스 네임이 expenses, expense-item 이므로 동적으로 데이터 받기
