import styled from 'styled-components';
import React, { useState } from 'react';
import { connect } from 'react-redux'
const StyledWrapper = styled.div`
    height:600px;
    max-width: 700px;
    margin: 0 auto;
    padding:20px;
    justify-content: center;
    align-items: center;
    font-family:'Kanit-Bold';
    background:white;
    font-size:36px;
    box-shadow:0 0 6px 0 rgba(0,0,0,0.3);
    border-radius: 50px;
    border-color:white;
    border-style: solid;
    border-width: 2px;

    img{
        width:10%;
        height:12%;
    }
    .toptransfer{
        display:flex;
        align-items: center;
    }
    .boxfrom{
        display:flex;
        font-size:25px;
        margin-left:30px;
        padding:0px 0px 0px 30px;
        width:50%;
        height:180px;
        flex-direction:column;
        justify-content: center;
        font-family:'Roboto-Black';
        border-radius: 40px;
        border-color:gray;
        border-style: solid;
        border-width: 2px;
        font-family:'Kanit-Bold';
        color:gray;

        p{
            margin:5px;
        }
    }

    .boxinput{
        display:flex;
        margin-left:30px;
        

        input{
            border-radius: 15px;
            width:80%;
            height:40px;
            font-size:25px;
            font-family:'Kanit-Bold';
            border-color:gray;
            outline: none;
   
            padding: 0px 10px 0px 0px;
            border-color:gray;
        }
    }

    .boxinput2{
        display:flex;
        margin-left:30px;
        input{
            border-radius: 15px;
            width:40%;
            height:40px;
            font-size:25px;
            font-family:'Kanit-Bold';
            border-color:gray;
            outline: none;
            text-align:center;
            padding: 0px 10px 0px 0px;
            border-color:gray;
        }
    }

    .insideTran{

        margin-top:15px;

    }
    .boxbutton{
        display:flex;
        width:100%;
        height:80px;
        justify-content: center;
        align-items: center;
        margin-right:0px;

    }
    .setbutton{
        cursor: pointer;
        width:60%;
        height:40px;
        border: none;
        outline:none;
        font-family:'Kanit-Bold';
        transition: font-size 0.6s,width 0.6s,border-radius 0.5s;
    }
    .setbutton:hover{
        background-color: #5afe30;
        color: white;
        font-size:20px;
        width:80%;
        border-radius:20px;
    }
`

const subtransfer = props => {

    const [toAdrress, setToAddress] = useState('');
    const [Amount, setAmount] = useState(0);

    const checkInfo=props=>{
        console.log(""+Amount+toAdrress);
    }
    return (
        <StyledWrapper>
            <div className="toptransfer">
                <img src='../static/images/TRANSFER.png' />Transfer
            </div>
            <div className="insideTran">
                <div>
                    FROM
                <div className="boxfrom">
                        <p>{props.info.SID}</p>
                        <p>{props.info.firstname} {props.info.lastname}</p>
                        <p>Coin:</p>
                    </div>
                </div>

                <div>
                    TO
                <div className="boxinput">
                        <input type="text" onChange={e => setToAddress(e.target.value)} />
                    </div>
                </div>

                <div>
                    Amount of coin
                <div className="boxinput2">
                        <input type="number" min="0" placeholder="0.00" onChange={e => setAmount(e.target.value)} />
                    </div>
                </div>
                <div className="boxbutton">
                    <button className="setbutton" onClick={checkInfo}>Confirm</button>
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

export default connect(mapStateToProps)(subtransfer);