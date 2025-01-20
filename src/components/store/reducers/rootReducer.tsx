import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer.tsx";
import {paginationReducer} from "./paginationReducer.tsx";

const rootReducer = combineReducers({
    auth: loginReducer,
    pagination: paginationReducer,
});

export default rootReducer