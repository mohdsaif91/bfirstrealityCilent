import { API_ACTION } from "../action/CounterAction";

export function CounterReducer(state = {}, action) {
  switch (action.type) {
    case API_ACTION.RECEIVE_API_DATA:
      return action.data;
    default:
      return state;
  }
}
