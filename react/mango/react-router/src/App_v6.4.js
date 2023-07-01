import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

// 컴포넌트 밖에 선언 필수 !
const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/products', element: <Products/>}
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
- 라우터 생성만 가능 / 연결은 따로 불러와야함

- path : 경로 
- element : 해당 목적지로 경로를 연결할게
- 예시 : {path: '/', element: <Home/>}

- RouterProvider
- 라우터를 연결하는 역할
- return문 내에서 호출

*/