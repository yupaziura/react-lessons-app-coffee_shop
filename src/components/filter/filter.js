// basic
import { Component } from 'react';

// styles
import './filter.scss';

class Filter extends Component {

    constructor (props) {
        super (props);


    }

    render () {

        const list = [
            {name: 'Brazil', id: 0, active: false},
            {name: 'Kenya', id: 1, active: false},
            {name: 'Columbia', id: 2, active: false}    
        ];

        const elems = list.map((item) => {

            const setValue = () => {
                this.props.setFilter(item.name)
            }

            return (
              <button className= {`filter__button`} 
                      key={item.id}
                      onClick={setValue}
                      >{item.name}</button>  
            )
        })

        return (
            <>
                <div className="filter">
                    <div className="filter__text">Or filter</div>
    
                    <div className="filter__group">
                        <div className="filter__wrapper">
                            {elems}
                        {/* <button className="filter__button">Brazil</button>
                        <button className="filter__button">Kenya</button>
                        <button className="filter__button">Columbia</button> */}
                        </div>
                    </div>
                </div>
            </>
        )
    
    }
}

export default Filter;