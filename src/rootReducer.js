import { combineReducers } from "redux";
import { CounterReducer } from "./Redux/Reducers/CounterReducer";

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer;
