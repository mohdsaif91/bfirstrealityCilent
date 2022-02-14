import { combineReducers } from "redux";
import { AuthReducer } from "./Redux/Reducers/AuthReducer";
import { CounterReducer } from "./Redux/Reducers/CounterReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AuthReducer,
});

export default rootReducer;
