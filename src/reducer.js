import { combineReducers } from "redux";
import Profile from "./redux/profile/profileReducer";
import Trans from "./redux/User/Userreducer";
import TransHash from "./redux/transfer/transferreducer"

export default combineReducers({
  Profile,
  Trans,
  TransHash
});
