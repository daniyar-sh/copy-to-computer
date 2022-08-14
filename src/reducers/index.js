import { combineReducers } from "redux";
import authReducer from "./authReducer";
import kitchenReducer from "./kitchenReducer";


export default combineReducers({
    authReducer,
    kitchenReducer
})