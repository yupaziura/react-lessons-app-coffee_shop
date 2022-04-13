// components
import Divider from '../dividers/divider';

// styles
import './page_main.scss';

const PageMainDescr = () => {
    return (
        <>
            <Divider theme={'light'}/>

            <div className='descr__text'>We makes every day full of energy and taste
                <br/>
                Want to try our beans?</div>


            <button className='descr__button'>More</button>
        </>
    )
}

export default PageMainDescr;