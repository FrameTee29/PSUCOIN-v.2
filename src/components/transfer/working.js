import React, { useState, useEffect } from 'react';
// import substransfer from './subtransfer';
// const Tx = require('ethereumjs-tx').Transaction
// import getFirebase from "../../lib/firebase";
// const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'))
import getFirebase from "../../lib/firebase";

const working = (data) => {
    const Tx = require('ethereumjs-tx').Transaction
    const Web3 = require("web3");
    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'))
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
                // var contractAddress = "0x0E618c94FC648369810e0ae581964E5e631a6d82";
                // var contractAbi = [
                //     {
                //         "constant": true,
                //         "inputs": [],
                //         "name": "totalSupply",
                //         "outputs": [
                //             {
                //                 "name": "",
                //                 "type": "uint256"
                //             }
                //         ],
                //         "payable": false,
                //         "stateMutability": "view",
                //         "type": "function"
                //     },
                //     {
                //         "constant": true,
                //         "inputs": [
                //             {
                //                 "name": "_owner",
                //                 "type": "address"
                //             }
                //         ],
                //         "name": "balanceOf",
                //         "outputs": [
                //             {
                //                 "name": "balance",
                //                 "type": "uint256"
                //             }
                //         ],
                //         "payable": false,
                //         "stateMutability": "view",
                //         "type": "function"
                //     },
                //     {
                //         "constant": false,
                //         "inputs": [
                //             {
                //                 "name": "_to",
                //                 "type": "address"
                //             },
                //             {
                //                 "name": "_value",
                //                 "type": "uint256"
                //             }
                //         ],
                //         "name": "transfer",
                //         "outputs": [],
                //         "payable": false,
                //         "stateMutability": "nonpayable",
                //         "type": "function"
                //     },
                //     {
                //         "anonymous": false,
                //         "inputs": [
                //             {
                //                 "indexed": true,
                //                 "name": "from",
                //                 "type": "address"
                //             },
                //             {
                //                 "indexed": true,
                //                 "name": "to",
                //                 "type": "address"
                //             },
                //             {
                //                 "indexed": false,
                //                 "name": "value",
                //                 "type": "uint256"
                //             }
                //         ],
                //         "name": "Transfer",
                //         "type": "event"
                //     }
                // ];

                // var contract = new web3.eth.Contract(contractAbi, contractAddress, { from: addressFrom });
                // var weiTokenAmount = web3.utils.toHex(web3.utils.toWei(data.Amount, 'ether'));
                // var txData = {
                //     "from": addressFrom,
                //     "nonce": web3.utils.toHex(web3.eth.getTransactionCount(addressFrom)),
                //     "gasPrice": web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                //     "gasLimit": web3.utils.toHex(150000),
                //     "to": contractAddress,
                //     "value": 0,
                //     "data": contract.methods.transfer(addressTo, weiTokenAmount),
                //     "chainId": 1
                // };

                // web3.eth.getTransactionCount(addressFrom).then(txCount => {
                //     const transaction = new Tx(txData);
                //     transaction.sign(privateKey);
                //     const serializedTx = '0x' + transaction.serialize().toString('hex')
                //     console.log('Raw ', serializedTx);
                //     //มันส่งตรงนี้แหละครับพี่น้อง 
                //     web3.eth.sendSignedTransaction(serializedTx, (err, txHash) => {
                //         console.log('txHash: ', txHash);
                //         setHashTX(txHash)
                //         setURLhashTX([...("https://ropsten.etherscan.io/tx/" + txHash)])

                //     })
                // })
                //ส่งให้ใคร , จำนวน eth , gasLimit , gasPrice
                const txData = {
                    to: addressTo,
                    value: web3.utils.toHex(web3.utils.toWei(data.Amount, 'ether')),
                    gasLimit: web3.utils.toHex(21000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                }
                console.log(txData);

                //ทำ Transaction
                web3.eth.getTransactionCount(addressFrom).then(txCount => {
                    const newNonce = web3.utils.toHex(txCount);
                    const transaction = new Tx({ ...txData, nonce: newNonce }, { chain: 'ropsten' });
                    transaction.sign(privateKey);
                    const serializedTx = '0x' + transaction.serialize().toString('hex')
                    console.log('Raw ', serializedTx);
                    //มันส่งตรงนี้แหละครับพี่น้อง 
                    web3.eth.sendSignedTransaction(serializedTx, (err, txHash) => {
                        const HHash = txHash
                        console.log('txHash: ', txHash);
                        // setHashTX(txHash)
                        // setURLhashTX([...("https://ropsten.etherscan.io/tx/"+txHash)])
                    })
                })
            })
        })

       
}


module.exports = working;
