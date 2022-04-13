// components
import Card from '../card/card';

// styles
import './card-list.scss';

const CardList = ({data}) => {

    const elems = data.map((item) => {
        return (
            <Card  name={item.name}
                   country={item.country}
                   price={item.price}
            />
        )
    })
    return (
        <>
        <div className="card_wrapper">   
                 {elems}
</div>
        </>
    )
}

export default CardList;