// components
import Header from "../header/header";
import Article from "../article/article";
import CardList from "../card-list/card-list";
import Footer from '../footer/footer';

// styles
import './pleasure.scss';


const Pleasure = () => {

    const text = () => {
        return (
            <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br/> <br/>
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. <br/>
                As greatly removed calling pleased improve an. <br/> Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
        )
    }

    const data = [
        {name:'AROMISTICO Coffee 1 kg', country: 'Brazil', price:6.99},
        {name:'AROMISTICO Coffee 1 kg', country: 'Columbia', price:7.99},
        {name:'AROMISTICO Coffee 1 kg', country: 'Kenya', price:6.99},
        {name:'AROMISTICO Coffee 1 kg', country: 'Brazil', price:6.99},
        {name:'AROMISTICO Coffee 1 kg', country: 'Kenya', price:3.99},
        {name:'AROMISTICO Coffee 1 kg', country: 'Columbia', price:10.99}
    ];

    return (
        <>
            <Header img={require('../../img/background/pleasure-bckgr.png')}
                    title={'For your pleasure'}
                    height={'260px'}
            />

            <section className="info">
                <div className="info__wrapper">
                    <div>
                        <img src={require('../../img/photos/pleasure.png')} alt="" />
                    </div>
                    <Article title ={'About our goods'}
                             text={text()}
                    />
                </div>
            </section>

            <div className="div"></div>

            <section className="list">
                <CardList data={data}/>
            </section>

            <Footer/>

        </>
    )
}

export default Pleasure;