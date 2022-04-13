// styles
import styled from 'styled-components';

const Div = styled.div `
margin: 0 auto;
position: relative;
width: 43px;
height: 43px;
display: flex;

img {
    display: block;
    margin: 0 auto;
    align-self: center;
}

&::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    position: absolute;
    background-color: ${props => props.theme === 'light'? 'white' : 'black'};
    top: 50%;
    left: -85px;
    // right: 128px;
}

&::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    position: absolute;
    background-color: ${props => props.theme === 'light'? 'white' : 'black'};
    top: 50%;
    left: 68px;
}

`

const Divider = ({theme}) => {

    let img;
    if(theme === 'light') {
        img = require('../../img/logo.png')
    }
    else {
        img = require('../../img/logo-dark.png')   
    }

    return (
        <>
            <Div theme={theme}>
                <img src={img} alt="" />
            </Div>
        </>
    )
}

export default Divider;