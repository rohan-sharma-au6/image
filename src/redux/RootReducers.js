import { combineReducers } from "redux";
import userReducer from "./reducers/userReducers";

const rootReducer = combineReducers({

  userState: userReducer
});



export default rootReducer;