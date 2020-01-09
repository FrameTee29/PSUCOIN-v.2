import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const StyledWrapper = styled.div`
    height:600px;
    max-width: 500px;
    margin: 0 auto;
    padding:10px;
    box-shadow:0 0 6px 0 rgba(0,0,0,0.15);
    font-family:'RobotoSlab-Medium';
    background:-webkit-linear-gradient(top, orange, #f6c700);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    font-size:42px;
     input{

     }
     .formlayout{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        width:390px;
        height:590px;
        padding: 8px;
     }
     .input100{
        font-size: 20px;
        color: #fff;
        line-height: 1.2;
        display: block;
        width:100%;
        height: 45px;
        background: transparent;
        border:none;
        outline: none;
        font-weight:bold;
     }
     .wrap-input{
        width: 100%;
        position: relative;
        border-bottom: 2px solid rgba(255,255,255,0.24);
        margin-bottom: 30px;
     }
     .login100-form-title{
        font-size: 40px;
        font-weight:bold;
        color: #fff;
        line-height: 1.2;
        text-align: center;
        text-transform: uppercase;
        display: block;
     }
     .login100-form-btn{
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-color: #fff;
        border:none;
        outline: none;
    }
    .wrap-inputbutton{
        width: 60%;
        position: relative;
        border-bottom: 2px solid rgba(255,255,255,0.24);
        margin-bottom: 30px;
     }

     img{
         width:220px;
         height:169px;

     }
     
`


const Pagesignin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('Not yet logged in');

    const login = async () => {
        const res = await axios.post('/api/psu', { username, password });
        try {
            //listing messages in users mailbox 
            setLoginStatus(JSON.stringify(res.data))
        } catch (err) {
            next(err);
        }
    }

    return (
        <StyledWrapper>
            <div className="formlayout">
                <img src='../static/images/CoinHEAH.png' />
                <p className="login100-form-title">PSU Passport</p>
                <div className="wrap-input">
                    <input className="input100" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="wrap-input">
                    <input className="input100" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="wrap-inputbutton">
                    <button className="login100-form-btn" onClick={login}>Login</button>
                </div>
                <div style={{ color: 'blue' }}>
                    {loginStatus}
                </div>
            </div>
        </StyledWrapper>
    )
}

export default Pagesignin;