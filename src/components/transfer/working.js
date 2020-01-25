import subtransfer from './subtransfer'
import getFirebase from "../../lib/firebase";
import React, { useState } from 'react';

const working = (data) => {
    var from=[];
    var to=[];
    const { db } = getFirebase();
    if (data.fromAddress == '6035512080') {
        var docFrom = db.collection('Admin').doc(data.fromAddress);
    }
    else {
        var docFrom = db.collection('Account').doc(data.fromAddress);
    }
    var docTo = db.collection('Account').doc(data.toAddress);
    docFrom.get().then((doc) => {
        from.push(doc.data());
    })
    docTo.get().then((doc) => {
        to.push(doc.data());
        console.log("Public key ของคนรับ " + to[0].PublicKey)
        console.log("Private key ของคนรับ " + to[0].privateKey)
    })

}
export default working;