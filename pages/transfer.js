import Menubar from '../src/components/Topbar/menubar'
import styled from 'styled-components';
import Subtranfer from '../src/components/transfer/subtransfer'

const Transfer = () => {
    const StyledWrapper = styled.div`
    width:100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image:url("/static/images/money2.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .container{
        margin-top:50px;
    }
    `
    return (
        <StyledWrapper>
            <Menubar />
            <div className="container">
                <Subtranfer />
            </div>

        </StyledWrapper>
    )
}
export default Transfer;