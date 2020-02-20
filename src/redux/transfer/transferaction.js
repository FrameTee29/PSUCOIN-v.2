import { TX_HASH } from "./types";
import getFirebase from "../../lib/firebase";

export const TxHashvalue = {
  HashValue: (data) => {
      console.log("Hash TX คือ " + data)
    return { type: TX_HASH, payload: data };
  }
}





