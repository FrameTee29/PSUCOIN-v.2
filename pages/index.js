import styled from 'styled-components';
import Pagesignin from '../components/pagesignin'

const StyledWrapper = styled.div`
    display:flex;
    width:100%;
    margin:-8px;
    justify-content: center;
    align-items: center;
 
`
const index =()=>{
    return(
        <StyledWrapper>
            <Pagesignin />
        </StyledWrapper>
    )
}

export default index;