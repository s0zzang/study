import { useParams, Link } from 'react-router-dom'

const ProductDetail = (props)=>{
    const params = useParams();
    return (
        <>
            <div>ProductDetail</div>
            <h1>Product {params.id}</h1>
            <Link to=".." relative='path'>Back !</Link>
        </>
    );
};

export default ProductDetail;

/*

useParams
- const params = useParams(); : id값 반환

relative="path"
- 목록으로 가야할 때 to=".."은 라우터 기준 home으로 이됭
- relative 설정하여 라우터 기준이 아닌 이동 경로 기준으로 .. 상위 경로로 이동

*/