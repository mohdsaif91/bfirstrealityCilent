// import { useDispatch, useSelector } from "react-redux";

// import imge1 from "./images/image1.webp";
// import { requestApiData2 } from "./Redux/action/Action";
// import {
//   decreaseCounter,
//   fetchUserReq,
//   increaseCounter,
//   requestApiData,
// } from "./Redux/action/CounterAction";

import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";

function App() {
    return (
    <>
    <Router>
      <NavBar />
      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
