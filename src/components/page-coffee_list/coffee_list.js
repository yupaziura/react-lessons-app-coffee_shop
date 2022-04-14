// basic
import { Component } from "react";

// components
import Header from "../header/header";
import Article from "../article/article";
import CardList from "../card-list/card-list";
import Footer from '../footer/footer';
import Filter from "../filter/filter";
import Search from "../search/search";

// styles
import './coffee_list.scss';


class CoffeeList extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            data:  [
                {name:'MISTICO Coffee 1 kg', country: 'Brazil', price:6.99, id: 0},
                {name:'MISTICO Coffee 2 kg', country: 'Columbia', price:7.99, id: 1},
                {name:'AROMISTICO Coffee 3 kg', country: 'Kenya', price:6.99, id: 2},
                {name:'Coffee 1 kg', country: 'Brazil', price:6.99, id: 3},
                {name:'AROM Coffee 5 kg', country: 'Kenya', price:3.99, id: 4},
                {name:'AROM Coffee 7 kg', country: 'Columbia', price:10.99, id: 5}
            ],
            search: '',
            filter: ''
        }
    }

    onSearch = (data, text) => {
        const newArr = data.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase())
        })

        if (text.length === 0){
            return data
        }
        else {
            return newArr
        }
    }

    setSearch = (text) => {
        return this.setState({search: text})
    }

    onFilter = (data, filter) => {
        const newArr = data.filter(item => {
            return item.country === filter
        })
        if (filter) {
            return newArr
        }
        else {
            return data
        }
    }

    setFilter = (filter) => {
        if (this.state.filter === filter) {
            return this.setState({filter: ''}) 
        }
        else {
            return this.setState({filter: filter})
        }
    } 


    render () {

        const newData =  this.onFilter(this.onSearch(this.state.data, this.state.search), this.state.filter)

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
    
    
        return (
            <>
                <Header img={require('../../img/background/our-coffee-bckgr.png')}
                        title={'Our Coffee'}
                        height={'260px'}
                />
    
                <section className="info">
                    <div className="info__wrapper">
                        <div>
                            <img src={require('../../img/photos/our-beans.png')} alt="" />
                        </div>
                        <Article title ={'About our beans'}
                                 text={text()}
                        />
                    </div>
                </section>
    
                <div className="div"></div>
    
                <section className="list">
                    <div className="list__filter">
                        <Search setSearch={this.setSearch}/>
                        <Filter setFilter={this.setFilter}/>
                    </div>
                    <CardList data={newData}/>
                </section>
    
                <Footer/>
    
            </>
        )    
    }

}

export default CoffeeList;