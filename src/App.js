import { useDispatch, useSelector } from "react-redux";

import imge1 from "./images/image1.webp";
import { requestApiData2 } from "./Redux/action/Action";
import {
  decreaseCounter,
  fetchUserReq,
  increaseCounter,
  requestApiData,
} from "./Redux/action/CounterAction";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.CounterReducer.count);

  return (
    <div className="app">
      Property Pistol
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(requestApiData())}>CALL API</button>
      <button onClick={() => dispatch(requestApiData2())}>CallAPI 2</button>
      <img src={imge1} />
    </div>
  );
}

export default App;
