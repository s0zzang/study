import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
    // router를 이 안에서 선언하면 적용되는 범위가 작아지기 때문에 꼭 컴포넌트 바깥에 선언 !
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/products' element={<Products/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

/*

createBrowserRouter 
- createBrowserRouter(routes: RouteObject[], opts?: DOMRouterOpts)
- 인자 : 배열({객체}), 옵션 ...
- 배열 내 객체 value는 배열, 함수 등 뭐든 가능함
- 라우터 생성만 가능 / 연결은 따로 불러와야함

v6.3
- 구조 유의 : BrowserRouter > Routes > Route

*/