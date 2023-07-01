import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = (props)=>{
    return (
        <header>
            <nav>
                <ul className={styles.nav}>
                    <li>
                        <NavLink to='/' className={({isActive})=>{
                            // return isActive ? 'a' : 'b'
                            return isActive && styles.active
                        }} 
                        style={({isActive})=>{
                            return {backgroundColor:isActive?'yellow':'gray'}
                        }} end>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={({isActive})=>{return isActive && styles.active}}>PRODUCKS</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;

/*

NavLink
- isActive : 기본 값
- 변경하면 undefined 반환

end
- / 로 시작하는 주소가 모두 같아서 navLink 클래스가 잘 작동하지 않음
- /로 동일한 home 열는태그 마지막에 end 추가

*/