import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import Profile from "./redux/profile/profileReducer";

export default combineReducers({
  counterReducer,
  Profile
});
