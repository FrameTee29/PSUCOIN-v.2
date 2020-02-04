import styled from 'styled-components';
import Luckydraw from '../src/components/Lucky/luckydraw'

const Lucky = () => {
    const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    height: 100vh;
    flex-direction:column;
    background: linear-gradient(to top,#644080, #251f4a);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content:center;
    align-items:center;

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
            
            <div className="Homecontainer">
                <Luckydraw />
            </div>
        </StyledWrapper>
    )
}
export default Lucky;