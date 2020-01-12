import styled from 'styled-components';
import Link from 'next/link';
const Menubar = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    height: 60px;
    padding: 0 100px;
    align-items:center;
    font-family:'Roboto-Black';
    font-weight:bold;
    background: #facb00;
    color:white;


    .menu-container{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        width:15%;
        color:white;
        font-weight:bold;
    }

    .menu-button{
        border-radius: 8px;
        width: 100%;
        height: 40px;
        background-color: #fff;
        border-color:white;
        outline: none;
        border:none;
        font-size:20px;
        cursor: pointer;
        background: #facb00;
        color:white;
        font-weight:bold;
        transition: background-color 0.5s;
    }
    .menu-button:hover{
        background-color:white;
        color: black;
        border-radius: 8px;
    }

    .logo{
        font-size:30px;
        transition: font-size 0.4s;
    }
    .logo:hover{
        color: white;
        font-size:40px;
        cursor: pointer;
    }


`
const menubar = () => {
    return (
        <Menubar>
            <div className="logo">
                <Link href="/menu">
                    <p>PSU COIN</p>
                </Link>
            </div>
            <div className="menu-container">
                <div>
                    <Link href="/menu">
                        <button className="menu-button">Home</button>
                    </Link>
                </div>
                <div>
                    <Link href="/profile">
                        <button className="menu-button">profile</button>
                    </Link>
                </div>
                <div>
                    <Link href="/transfer">
                        <button className="menu-button">transfer</button>
                    </Link>
                </div>
            </div>
        </Menubar>
    )
}

export default menubar;