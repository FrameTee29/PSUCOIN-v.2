import { ADD_INFO } from "./types";
import firebase from "../../lib/firebase";
import React, { useState } from 'react';


export function addProfile(data) {
  return function(dispatch) {
    console.log("้ข้อมูลที่จะเก็บลง Store"+data);
    dispatch({  type:ADD_INFO,
      payload: data});
    var firebaseinfo= firebase.database().ref("Account");
    let info={
      SID:data[0],
      firstname:data[1],
      lastname:data[2],
      CID:data[3],
    }
    firebaseinfo.push(info);
  };
}




