import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Change this line to use named import

import { reducer } from "./AuthReducer/reducer";

const store = legacy_createStore(reducer, applyMiddleware(thunk));
export { store };
