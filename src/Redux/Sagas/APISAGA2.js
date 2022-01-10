import { call, put, takeLatest } from "redux-saga/effects";

import { fetchData2 } from "../../api";
import { API_ACTION2, receiveApiData2 } from "../action/Action";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData2(action) {
  try {
    // do api call
    const data = yield call(fetchData2);
    yield put(receiveApiData2(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga2() {
  yield takeLatest(API_ACTION2.REQUEST_API_DATA2, getApiData2);
}
