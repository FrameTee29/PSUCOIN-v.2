import Menubar from '../src/components/Topbar/menubar'
import styled from 'styled-components';
import Home from '../src/components/Home/home'

const menu = () => {
    const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    height: 100vh;
    flex-direction:column;
    background-image:url("/static/images/money.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .Homecontainer{
        display:flex;
        width:100%;
        height: 80vh;
        justify-content:center;
        align-items:center;
    }
    `
    return (
        <StyledWrapper>
            <Menubar />
            <div className="Homecontainer">
                <Home />
            </div>
        </StyledWrapper>
    )
}
export default menu;