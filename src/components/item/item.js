// styles
import './item.scss';

const Item = ({img, name, price}) => {
    return (
        <>
            <div className="item">
                <img src={img} alt="" className="item__img" />
                <p className="item__name">{name}</p>
                <p className="item__price">{price}$</p>
            </div>
        </>
    )
}

export default Item;