// components
import Header from '../header/header';
import PageMainDescr from './main_page_decr';
import Article from '../article/article';


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

                        </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;