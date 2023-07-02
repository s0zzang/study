import {Link} from 'react-router-dom';
const PRODUCT = [ // 더미 데이터 생성
    {id: '1', title: '상품1'},
    {id: '2', title: '상품2'},
    {id: '3', title: '상품3'},
    {id: '4', title: '상품4'},
    {id: '5', title: '상품5'},
    {id: '6', title: '상품6'},
]

export const Products = (props)=>{
    return (
        <>
            <div>Products</div>
            <Link to="..">home !</Link>
            <ul>
                {PRODUCT.map((prd) => {
                    return <li key={prd.id}><Link to={prd.id}>{prd.title}</Link></li>
                })}
            </ul>
            {/* <ul>
                <li>상품1</li>
                <li>상품2</li>
                <li>상품3</li>
            </ul> */}
        </>
    );
};

/*

더미 데이터 map으로 뿌리기
- 더미 데이터 배열로 작성
- map으로 태그 생성, 태그 내 동적 데이터 변수로 작성
- {PRODUCT.map((prd) => {return <li>{prd.title}</li>})}
- key : jsx > js > html 변환과정을 거칠 때 li가 몇번째 li인지 식별할 수 있는 값
- key={prd.id} : 1, 2, 3으로 중복되지 않는 값 key로 할당

리액트에서 메서드 사용하기
- 모듈을 import 했는지 꼭 확인하기

*/