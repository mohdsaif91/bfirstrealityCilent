import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ReduxStore from "./Redux-config-store";
import App from "./App";

import "./index.scss";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={ReduxStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
