import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// 컴포넌트 밖에 선언 필수 !
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            { path: '/', element: <Home/> },
            { path: '/products', element: <Products/> } // 대괄호(객체), 중괄호(children 배열)로 한번 더 묶음
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

RouterProvider
- 라우터를 연결하는 역할
- return문 내에서 호출
- <RouterProvider router={router}/>

링크
- html이 물리적으로 존재, 자동으로 링크 - url이 존재함
- react는 싱글 페이지 : 자동으로 가지 않음

*/