import { Link, useNavigate } from 'react-router-dom';

export const Home = (props)=>{
    const navi = useNavigate();
    const navigateFn = () => {
        navi("products")
    }
    return (
        <>
            <div>Home</div>
            <div>
                <Link to='products'>~ products ~</Link>
            </div>
            {/* 리액트에서 a 태그 사용 금지 ! <a href="/products">products</a> */}
            <button onClick={navigateFn}>Product</button>
        </>
    );
};

// export default 없이 Home을 export

/*

a태그
- app에서 createBrowserRouter로 선언한 페이지를 연결 가능
- 새로고침 발생

함수
- 비원시형 자료이기 때문에 컴포넌트 렌더링(새로고침) 될 때마다 함수가 호출됨
- 함수 호출시 내부 변수가 초기화됨 > 예상하지 못한 결과값 발생
- 불필요한 메모리 사용, 속도 저하
- 새로고침 없이 링크 변경 => Link

Link
- 새로고침 없이 링크 이동 가능하게 하는 칭구 ~
- <Link to='/products'>products</Link>

useNavigate
- link 없이 button으로 링크이동 
- const navi = useNavigate(); 상수 할당
- const navigateFn = () => {
    navi("/products")
  } : 함수 내 인자로 이동을 희망하는 path 입력 

*/