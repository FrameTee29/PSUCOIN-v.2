import styled from 'styled-components';
import Pagesignin from '../components/pagesignin'
import Home from './home'
import Router from 'react-router-dom'

const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    background-image:url("/static/images/bg-01.jpg");
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    body{
        margin:0;
        
    }
     

 
`
const index = () => {
    return (
        <div className="div55">
            <StyledWrapper>
                <Pagesignin />
            </StyledWrapper>
        </div>
    )
}

export default index;