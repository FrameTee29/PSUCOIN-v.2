import React, { useState, useEffect } from 'react';
import substransfer from './subtransfer';
const Tx = require('ethereumjs-tx').Transaction
import getFirebase from "../../lib/firebase";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8'))

const working = (data) => {

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
            const privateKey = new Buffer(from[0].privateKey.toString().substr(2), 'hex')

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
                    console.log('txHash: ', txHash);
                })
            })
        })
    })
}

export default working;
