import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// 컴포넌트 밖에 선언 필수 !
const router = createBrowserRouter([
    {
        path: '/', // 최상위 경로 root로 설정한 경우 children path에 절대경로(/products) > 상대경로(products)로 변경
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            { index: true, element: <Home/> }, // path: ''  = index: true
            { path: 'products', element: <Products/> }, // 대괄호(객체), 중괄호(children 배열)로 한번 더 묶음
            { path: 'products/:id', element: <ProductDetail/> }, // 동적 연결 방법
            // { path: '/products/product-1', element: <ProductDetail/> }, // 정적 연결 방법
        ]
    } 
])

function App() {
    // router를 이 안에서 선언하면 적용되는 범위가 작아지기 때문에 꼭 컴포넌트 바깥에 선언 !
    return (
        <RouterProvider router={router}/>
    );
}

export default App;

/*

createBrowserRouter 
- createBrowserRouter(routes: RouteObject[], opts?: DOMRouterOpts)
- 인자 : 배열({객체}), 옵션 ...
- 배열 내 객체 value는 배열, 함수 등 뭐든 가능함
- 컴포넌트의 경로를 생성
- 라우터 생성만 가능 / 연결은 따로 불러와야함

createBrowserRouter 사용법
- path : 경로 
- element : 해당 목적지로 경로를 연결할게
- 예시 : {path: '/', element: <Home/>}
- 상대경로
    - path: '/root' 라고 입력한 경우, 해당 문자를 기준으로 아래 children 경로를 찾기 때문에 not found
    - 최상위 경로 root로 설정한 경우 children path에 절대경로(/products) > 상대경로(products)로 변경
    - 현재 products, products/:id는 형제 관계 = detail에서 ..로 가라하면 products가 아닌 home으로 이동

RouterProvider
- 라우터를 연결하는 역할
- return문 내에서 호출
- <RouterProvider router={router}/>

Link
- html이 물리적으로 존재, 자동으로 링크 - url이 존재함
- react는 싱글 페이지 : 자동으로 가지 않음
- relative='path' : 라우터가 아닌 이동 경로에 따라 링크투 경로 설정 (ProductDetail.js 참고)

useNavigate
- link 없이 button으로 링크이동 
- const navi = useNavigate(); 상수 할당
- const navigateFn = () => {
    navi("/products")
  } : 함수 내 인자로 이동을 희망하는 path 입력 

useParams
- 동적 경로 만들기
- path: '/products/:id : 동적 경로
- const params = useParams(); : id값 반환

*/