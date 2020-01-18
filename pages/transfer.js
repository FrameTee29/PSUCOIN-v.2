import Menubar from '../src/components/Topbar/menubar'
import styled from 'styled-components';
const Transfer=()=>{
    const StyledWrapper = styled.div`
    width:100%;
    height: 100vh;
    background-image:url("/static/images/money2.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `
    return(
        <StyledWrapper>
            <Menubar/>
            Transfer
        </StyledWrapper>
    )
}
export default Transfer;