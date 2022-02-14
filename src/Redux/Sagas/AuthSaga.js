import Axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { API } from "../../api/index";
import { AUTH_LOGIN_ACTION, logInSuccess } from "../action/AuthLogin";

function* signUpUser(data) {
  try {
    console.log(data, " SAGA");
    const result = yield Axios.post(`${API.auth}/signUp`, data.data);
    console.log(result, "<>?");
  } catch (error) {
    console.log(error);
  }
}

function* loginUser(data) {
  try {
    const result = yield Axios.post(`${API.auth}/login`, data.data);
    console.log(result.status === 200);
    if (result.status === 200) {
      document.cookie = `futureToken=${result.data.token}`;
      console.log();
      yield put(logInSuccess(result.data));
    } else {
    }
  } catch (error) {}
}

export default function* AuthSaga() {
  yield takeLatest(AUTH_LOGIN_ACTION.USER_SIGNUP_REQ, signUpUser);
  yield takeLatest(AUTH_LOGIN_ACTION.USER_LOGIN_REQ, loginUser);
}
