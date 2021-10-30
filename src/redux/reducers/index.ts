import { combineReducers } from "redux";
import { todoReducer } from "./todoReducers";

const initialState = [];

export default  combineReducers({
    todo : todoReducer
})