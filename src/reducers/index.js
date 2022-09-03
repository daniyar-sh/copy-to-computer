import { combineReducers } from "redux";
import authReducer from "./authReducer";
import kitchenReducer from "./kitchenReducer";
import resReducer from "./restaurantReducer";

export default combineReducers({
    authReducer,
    kitchenReducer,
    resReducer
})