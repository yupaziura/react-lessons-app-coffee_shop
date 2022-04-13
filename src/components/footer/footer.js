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
                    <a href="#" className="footer__link">Coffee house</a>
                    <a href="#" className="footer__link">Our coffee</a>
                    <a href="#" className="footer__link">For your pleasure</a>
                </div>
                <Divider theme={'dark'}/>
            </div>
        </>
    )
}

export default Footer;