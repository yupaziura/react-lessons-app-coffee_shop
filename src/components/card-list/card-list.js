// components
import Card from '../card/card';

// styles
import './card-list.scss';

const CardList = ({data}) => {

    const elems = data.map((item, i) => {
        return (
            <Card  name={item.name}
                   country={item.country}
                   price={item.price}
                   key={i}
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