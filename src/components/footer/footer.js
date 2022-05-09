import { NavLink } from 'react-router-dom';

// components
import Divider from '../dividers/divider';

// styles
import './footer.scss';

const Footer = () => {
    
    return (
        <>
            <div className="footer">

                <div className="wrapper">
                    <img src={require('../../img/logo-dark-outline.png')} alt="" className="footer__logo" />
                    <NavLink end to='/' className="footer__link">Coffee house</NavLink>
                    <NavLink end to='/coffeelist' className="footer__link">Our coffee</NavLink>
                    <NavLink end to='/pleasure' className="footer__link">For your pleasure</NavLink>
                </div>
                <Divider theme={'dark'}/>
            </div>
        </>
    )
}

export default Footer;