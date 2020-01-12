import Menubar from '../src/components/menubar'
import styled from 'styled-components';


const menu = () => {
    const StyledWrapper = styled.div`
    width:100%;
    height: 100vh;
    background-image:url("/static/images/money.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `
    return (
        <StyledWrapper>
            <Menubar />
        </StyledWrapper>
    )
}
export default menu;