import styled from 'styled-components';
import Pagesignin from '../src/components/Signin/pagesignin'


const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image:url("/static/images/coin3.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    body{
        margin:0;
        
    }
     

 
`
const index = () => {
    return (

        <StyledWrapper>
            <Pagesignin />
        </StyledWrapper>

    )
}

export default index;