import { all, fork } from "@redux-saga/core/effects";
import mySaga from "./Redux/Sagas/APISagas";
import mySaga2 from "./Redux/Sagas/APISAGA2";
import AuthSaga from "./Redux/Sagas/AuthSaga";

export default function* rootSaga() {
  yield all([fork(mySaga), fork(mySaga2), fork(AuthSaga)]);
}
