// components
import Header from '../header/header';
import PageMainDescr from './main_page_decr';
import Article from '../article/article';
import Item from '../item/item';
import Footer from '../footer/footer';

// styles
import './page_main.scss';

const MainPage = () => {

    const textElem = () => {
        return(
        <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid a highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            <br/><br/>
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
        </p>
        )
    }

    return (
        <>
            <Header img={require ('../../img/background/main-bckgr.jpg')} 
                    header={"Everything You Love About Coffee"}
                    descr={<PageMainDescr/>}
                    height={'640px'}
            />
        
            <section className='article_section'>
                <Article title={'About Us'}
                        text={textElem()}
                        />
            </section>

            <section className="best_section">
                    <div className="container">
                        <h3 className="title">Our best</h3>
                        <div className="cards">
                            <Item img ={require('../../img/cards/card-1.png')}
                                  name={'Solimo Coffee Beans 2 kg'}
                                  price={10.73}
                            />
                            <Item img ={require('../../img/cards/card-2.png')}
                                  name={'Presto Coffee Beans 1 kg'}
                                  price={15.99}
                            />
                            <Item img ={require('../../img/cards/card-3.png')}
                                  name={'AROMISTICO Coffee 1 kg'}
                                  price={6.99}
                            />
                        </div>
                </div>
            </section>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default MainPage;