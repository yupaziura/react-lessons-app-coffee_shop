// styles
import './filter.scss';

const Filter = () => {
    return (
        <>
            <div className="filter">
                <div className="filter__text">Or filter</div>

                <div className="filter__group">
                    <div className="filter__wrapper">
                    <button className="filter__button">Brazil</button>
                    <button className="filter__button">Kenya</button>
                    <button className="filter__button">Columbia</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;