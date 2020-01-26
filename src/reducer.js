import { combineReducers } from "redux";
import Profile from "./redux/profile/profileReducer";
import Trans from "./redux/User/Userreducer";

export default combineReducers({
  Profile,
  Trans
});
