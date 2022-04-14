// basic
import { Component } from 'react';

// styles
import './filter.scss';

class Filter extends Component {

    constructor (props) {
        super (props);

        this.state = {
            filter: ''
        }
    }

    render () {

        const list = [
            {name: 'Brazil', id: 0, active: false},
            {name: 'Kenya', id: 1, active: false},
            {name: 'Columbia', id: 2, active: false}    
        ];

        const elems = list.map((item) => {

            let activClass = ''

            const setValue = () => {
                if (this.state.filter === item.name) {
                    this.setState(() => {return {filter:''}})
                }
                else {
                    this.setState(() => {return {filter: item.name}}) 
                }
                this.props.setFilter(item.name)
            }

            if (this.state.filter === item.name) {
                activClass = ' active'
            }
            else {
                activClass = ''
            }

            return (
              <button className= {`filter__button ${activClass}`} 
                      key={item.id}
                      onClick={()=>setValue()}
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