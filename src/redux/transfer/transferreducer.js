import { TX_HASH } from "./types";

const initialState = {
  HASH:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TX_HASH:
      return {
        ...state,
        HASH: action.payload
      };
    default:
      return state;
  }
}