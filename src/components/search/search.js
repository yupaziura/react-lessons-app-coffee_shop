// basic
import {Component} from 'react';

// styles
import './search.scss';



class Search extends Component {

    constructor (props) {
        super(props);

        this.state = {
            value: ''
        } 
    }

    setValue = (e) => {
        const val = e.target.value;
        console.log(val);
        this.setState({value: val});
        this.props.setSearch(val);
    }

    render() {
        return (
            <>
                <div className="search">
    
                    <div className="search__text">Looking for</div>
    
                    <input type="text" 
                           placeholder="star typing here"
                           onChange={this.setValue}
                           value={this.state.value}
                           />
                    
                </div>
            </>
        )
    
    }
}

export default Search;