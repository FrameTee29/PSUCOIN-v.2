import styled from 'styled-components';
import React, { useState } from 'react';
import Route, { Router } from 'next/router'
import axios from 'axios';
import { connect } from 'react-redux'
import { addProfile } from '../redux/profile/profileaction'
import { bindActionCreators } from 'redux';

const StyledWrapper = styled.div`
    height:600px;
    max-width: 500px;
    margin: 0 auto;
    padding:10px;
    justify-content: center;
    align-items: center;
    font-family:'Roboto-Black';
    background:white;
    font-size:42px;
    box-shadow:0 0 6px 0 rgba(0,0,0,0.15);
    border-radius: 30px;
    border-color:gray;
    border-style: solid;
    border-width: 10px;

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
        color: black;
        line-height: 1.2;
        display: block;
        width:100%;
        height: 45px;
        background: transparent;
        border:none;
        outline: none;
        font-weight:bold;
        transition: transform .2s;
        text-align:center;
        
     }
     .input100:hover{
         transform: scale(1.5);  
     }
     .wrap-input{
        width: 50%;
        position: relative;
        border-bottom: 2px solid rgba(0,0,0,0.24);
        margin-bottom: 30px;
        transition: width 1.5s,border-bottom 1.5s;
     }
     .wrap-input:hover{
        width: 50%;
        border-bottom: 2px solid rgba(0,0,0,0.8);
     }
     

     .login100-form-title{
        font-size: 40px;
        font-weight:bold;
        color: black;
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
        border-color:black;
        outline: none;
        font-size:20px;
        cursor: pointer;
    }
    .login100-form-btn:hover{
        background-color: black;
        color: white;
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
     .fff{
        font-family:'RobotoSlab-Medium';
        color:red;
        font-size:20px;
     }
     
`


const Pagesignin = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrong, setWrong] = useState('')
    const [loginStatus, setLoginStatus] = useState('');
    const login = async () => {
        const res = await axios.post('/api/psu', { username, password });

        //listing messages in users mailbox 
        setLoginStatus(res.data)
        

        // ส่วนเงื่อนไขในการ login
        if (res.data[1] != '') {
            console.log(res.data);
            props.addProfile(res.data)
            Route.push('/profile')
        }
        else {
            var text = " Wrong !!"
            setWrong([...text]);
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
                    <button className="login100-form-btn" onClick={login}><span>Login</span></button>
                </div>
                <div className="fff">
                    {wrong}
                </div>
            </div>
        </StyledWrapper>
    )
}

const mapStateToProps = state => ({
    info: state.Profile.user
});

const mapDispatchToProps = dispatch => {
    return {
        addProfile: (props) =>dispatch(addProfile(props))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagesignin);