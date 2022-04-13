// styles
import './card.scss';

const Card = ({img, name, country, price}) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" className="card__img" />
                <p className="card__name">{name}</p>
                <p className="card__country">{country}</p>
                <p className="card__price">{price}$</p>
            </div>
        </>
    )
}

export default Card;