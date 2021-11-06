import { all, fork, spawn } from "@redux-saga/core/effects";
import mySaga from "./Redux/Sagas/APISagas";
import mySaga2 from "./Redux/Sagas/APISAGA2";

export default function* rootSaga() {
  yield all([fork(mySaga), fork(mySaga2)]);
}
