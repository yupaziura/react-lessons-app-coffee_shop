import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({img, title, descr, height}) => {
    const activeClass = (isActive) => {
        return isActive? 'header__link header__link_active' : 'header__link'
    }

    return (
        <header className="header" style={{height: height}}>
            <img src={img} alt="" className="background"/>
            <img src={require ("../../img/logo.png")} alt="logo baens" className="logo"/>
            <nav className="navigation">
                <NavLink className={({isActive}) => activeClass(isActive)}  end to='/'>Coffee house</NavLink>
                <NavLink className={({isActive}) => activeClass(isActive)}  end to='/coffeelist'>Our coffee</NavLink>
                <NavLink className={({isActive}) => activeClass(isActive)}  end to='/pleasure'>For your pleasure</NavLink>
            </nav>
            <h2 className="title">{title}</h2>
            {descr}
        </header>
    )
}

export default Header;