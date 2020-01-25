import { ADD_INFO } from "./types";
import getFirebase from "../../lib/firebase";
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/8d1234baedad4a588a49a51ac993aaf8');

export const ProfileAction = {
  addProfile: (data) => {
    const { db } = getFirebase();

    let info = {
      SID: data[0],
      firstname: data[1],
      lastname: data[2],
      CID: data[3],
    }

    if(data[0] == '6035512080'){
      var docRef = db.collection('Admin').doc(data[0]);
    }
    else{
      var docRef = db.collection('Account').doc(data[0]);
    }
     docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      }
      else {
        console.log("No such document!");
        var account = web3.eth.accounts.create();
        var Adduser={
          SID: data[0],
          firstname: data[1],
          lastname: data[2],
          CID: data[3],
          PublicKey: account.address,
          privateKey: account.privateKey,
        }
        docRef.set({
          Adduser
        })
        console.log("Create wallet :" + data[0] + "Successful");
      }
    })
    return { type: ADD_INFO, payload: data }
  }
}





