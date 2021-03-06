import {combineReducers, createStore} from "redux";
import tableReducer from "./table-reducer";

let reducers = combineReducers({
    tableArea: tableReducer})

let store = createStore(reducers);

export default store;