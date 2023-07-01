// 공통 라우터 설정을 가진 최상위 부모
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './Root.module.css';

const RootLayout = (props)=>{
    return (
        <>
            <Navigation />
            <div className={styles.content}>RootLayout</div>
            <Outlet/>
        </>
    );
};

export default RootLayout;

/*

Outlet
- outlet을 reutrn문에서 호출하면 하위 컴포넌트가 모두 노출됨

*/