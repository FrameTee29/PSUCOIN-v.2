import styled from 'styled-components';
import Link from 'next/link';
const Container = styled.div`
    display:flex;
    width:800px;
    height:600px;
    background-color:#FFF;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    border-radius: 10px;
    font-family:'Roboto-Black';

    .Heading{
        font-size:60px;
    }
    .LayoutBox{
        display:flex;
        width:800px;
        justify-content:space-around;
        align-items: center;
    }
    .BoxOrder{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items: center;
        width:180px;
        height:180px;
        background-color:#FFF;
        border-style: solid;
        border-color: black;
        border-radius: 10px;
        
    }
    .BoximgActivity{
        width:100px;
        height:100px;
    }
`
const Home = () => {
    return (
        <Container>
            <div className="Heading">
                Menu
            </div>
            <div className="LayoutBox">
                <div className="BoxOrder">
                    New Activity
                    <img className="BoximgActivity" src='../static/images/ACTIVITY.png' />
                </div>
                <div className="BoxOrder">
                    Profile
                    <img className="BoximgActivity" src='../static/images/ACCOUNT.png' />
                </div>
                <div className="BoxOrder">
                    Transfer
                    <img className="BoximgActivity" src='../static/images/TRANSFER.png' />
                </div>
            </div>
            <div className="LayoutBox">
                <div className="BoxOrder">
                    Transaction History
                    <img className="BoximgActivity" src='../static/images/HISTORY.png' />
                </div>
                <div className="BoxOrder">
                    Exchange hours
                    <img className="BoximgActivity" src='../static/images/EXCHANGE.png' />
                </div>
                <div className="BoxOrder">
                    Contract
                    <img className="BoximgActivity" src='../static/images/CONTACT.png' />
                </div>
            </div>

        </Container>
    )
}
export default Home;