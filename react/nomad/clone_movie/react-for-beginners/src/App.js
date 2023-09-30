import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;

/*

* map 사용할 경우, 꼭 key 사용하기

* 리액트 라우터
- 설치 : npm install react-router-dom (npm i react-router-dom@5.3.0)

1. 라우터 : url을 보고 있는 컴포넌트
ㄴ 라우터 종류
1) 브라우저 라우터 : /movie 보통의 url
2) 해쉬 라우터 : /#/movie

2. 스위치 (리액트v6 삭제됨)
ㄴ 하는 일 : 라우터(url) 찾고 렌더링
ㄴ 한번에 하나의 루트를 렌더링 하기 위해 사용

3. 루트
ㄴ path에 url 작성

4. 루트 > 루트 이동
- <h2><a href="/movie">{title}</a></h2>
ㄴ 작성시 페이지 재실행
- <h2><a Link="/movie">{title}</a></h2>
- 영화별 id 값으로 이동시키기
ㄴ path="/movie/:id"

-----------------------

* async-await
- then 보다 자주 사용

* then을 사용하는 경우
useEffect(() => {
    fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    .then((response) => response.json())
    .then(json => {
        setMovies(json.data.movies);
        setLoading(false)
    });
}, [])

* async-await 사용하는 경우
const getMovies = async() => {
    const response = await fetch (
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false)
}
useEffect(() => {
    getMovies()
}, [])

- 아래처럼 더 단축 가능
const getMovies = async() => {
    const json = await (
        await fetch (
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    ).json());
    setMovies(json.data.movies);
    setLoading(false)
}
useEffect(() => {
    getMovies()
}, [])

*/
