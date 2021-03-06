import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
const working = require('./working.js');
const Tx = require('ethereumjs-tx').Transaction;
import getFirebase from "../../lib/firebase";
const contractAddressCoin = require('./Abicoin');
const contractAbiCoin = require('./Abicoin');
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'))


const StyledWrapper = styled.div`
    height:650px;
    max-width: 800px;
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
        width:77%;
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
            text-align:center;
            padding: 0px 10px 0px 0px;
            border-color:gray;
        }
    }

    .boxinput2{
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
        flex-direction:column;
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
        font-size:20px;
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
    .hash{
        display:flex;
        justify-content: center;
        margin-top:10px;
        p{
            font-size:15px;
        }
    }
`

const subtransfer = props => {

    const [toAddress, setToAddress] = useState('');
    const [Amount, setAmount] = useState(0);
    const [PublickeyFrom, setPublickeyFrom] = useState('');
    const [PrivateKeyFrom, setPrivateKeyFrom] = useState('');
    const [PublickeyTo, setPublickeyTo] = useState('');
    const [PrivateKeyTo, setPrivateKeyTo] = useState('');
    const [hashTX, setHashTX] = useState("");
    const [URLhashTX, setURLhashTX] = useState("");

    const CreateTransfer = () => {
        var infotran = {
            fromAddress: props.info[0],
            toAddress: toAddress,
            Amount: Amount,
        }
        if (props.info[0] == toAddress) {
            console.log('เปลี่ยนที่อยู่คนรับ');
        }
        else {
            // working(infotran);
            Transing(infotran);
        }
    }

    const Transing = (data) => {
        const { db } = getFirebase();
        if (data.fromAddress == '6035512080') {
            var docFrom = db.collection('Admin').doc(data.fromAddress);
        }
        else {
            var docFrom = db.collection('Account').doc(data.fromAddress);
        }
        var docTo = db.collection('Account').doc(data.toAddress);

        // ดึงข้อมูลจาก Firebase 5555+
        docFrom.onSnapshot((doc) => {
            var from = [];
            var to = [];
            from.push(doc.data())
            docTo.onSnapshot((doc) => {
                to.push(doc.data())


                // ข้อมูลคนส่ง คนรับ



                const addressFrom = from[0].PublicKey;
                const addressTo = to[0].PublicKey;
                const privateKey = new Buffer(from[0].privateKey.toString().substr(2), 'hex');

                const contractAddr = '0x0E618c94FC648369810e0ae581964E5e631a6d82';
                const contractAbi = [
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "name": "_owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "name": "balance",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    }
                ];
                const contractOwner = {
                    addr: '0x35dd8Bcd4f864835cc1D23Eb459506bdA8983cB2',
                    key: 'FDF13FBAAD8BD1E5266AC964930B9A7D49CEEF974C87BC161481413447D258C5'
                };

                sendToken(addressTo, '1');

                async function sendToken(receiver, amount) {
                    console.log(`Start to send ${amount} tokens to ${receiver}`);
                    var count = await web3.eth.getTransactionCount(contractOwner.addr);
                    var contract = new web3.eth.Contract(contractAbi, contractAddr, { from: addressFrom });
                    console.log('Receiver = ' + receiver + 'Amount = ' + amount);
                    var weiTokenAmount = web3.utils.toWei(amount, 'ether');

                    var Transaction = {
                        "from": addressFrom,
                        "nonce": "0x" + count.toString(16),
                        "gasPrice": "0x003B9ACA00",
                        "gasLimit": "0x250CA",//151754
                        "to": contractAddr,
                        "value": "0x0",
                        "data": contract.methods.transfer(receiver, weiTokenAmount).encodeABI(),
                        "chainId": 0x03
                    };


                    const privKey = new Buffer.from(privateKey, 'hex');
                    const tx = new Tx(Transaction, { chain: 'ropsten' });
                    tx.sign(privKey);
                    var serializedTx = tx.serialize();
                    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function (err, txHash) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('txHash: ', txHash);
                        setHashTX(txHash)
                        setURLhashTX([...("https://ropsten.etherscan.io/tx/" + txHash)])
                    });

                }
            })
        })
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
                        <p>{props.info[0]}</p>
                        <p>{props.info[1]} {props.info[2]}</p>
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
                    <button className="setbutton" onClick={CreateTransfer}>Confirm</button>
                    <div className="hash">
                        <p><a href={`https://ropsten.etherscan.io/tx/${hashTX}`}>{URLhashTX}</a></p>
                    </div>
                </div>
            </div>


        </StyledWrapper>
    )
}

const mapStateToProps = state => ({
    info: state.Profile.user
});


export default connect(mapStateToProps)(subtransfer);