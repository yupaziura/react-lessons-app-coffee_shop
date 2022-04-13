import './header.scss';

const Header = ({img, title, descr, height}) => {
    return (
        <header className="header" style={{height: height}}>
            <img src={img} alt="" className="background"/>
            <img src={require ("../../img/logo.png")} alt="logo baens" className="logo"/>
            <nav className="navigation">
                <a href="#">Coffee house</a>
                <a href="#">Our coffee</a>
                <a href="#">For your pleasure</a>
            </nav>
            <h2 className="title">{title}</h2>
            {descr}
        </header>
    )
}

export default Header;