import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { reqLogin } from "../../Redux/action/AuthLogin";

const initialLogin = {
  userName: "",
  password: "",
  role: "admin",
};

export default function Login() {
  const [login, setLogin] = useState({ ...initialLogin });

  const Auth = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(Auth, "<>? ");
    if (Auth.loggedIn) {
      navigate("/adminHome");
    }
  }, [Auth]);

  const submitform = () => {
    console.log(login);
    const { role, ...rest } = login;
    dispatch(reqLogin(rest));
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="userName"
            id="email"
            placeholder="Enter your Email"
            value={login.userName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={login.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button onClick={() => submitform()} type="submit">
          Login
        </button>
        <br />
        {/* <p id>
            Don't have an Account?
            <Link to="/Registration">Register</Link>
          </p> */}
      </div>
    </div>
  );
}
