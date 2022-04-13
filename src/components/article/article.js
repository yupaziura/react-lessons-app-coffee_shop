// components
import Divider from "../dividers/divider";

// styles
import './article.scss';


const Article = ({title, text}) => {
    return (
        <div className="article" >
            <h3 className="article__title">{title}</h3>
            <Divider theme={"dark"}/>
            {text}
        </div>
    )
}

export default Article;