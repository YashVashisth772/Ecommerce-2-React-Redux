import { combineReducers } from "redux";
import productReducers from "./productReducers";
// import { combineReducers } from "redux";

export default combineReducers({
    products: productReducers
})