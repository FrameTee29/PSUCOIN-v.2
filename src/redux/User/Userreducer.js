import { ADD_FROMADDRESS, ADD_TOADDRESS } from "./types";

const initialState = {
    From: {name:"Frame"},
    To: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FROMADDRESS:
            return {
                ...state,
                From: action.payload
            };
        case ADD_TOADDRESS:
            return {
                ...state,
                To: action.payload
            };
        default:
            return state;
    }
}