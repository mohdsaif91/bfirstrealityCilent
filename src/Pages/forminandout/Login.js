import React from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import "./Login.scss";
export const Login = () => {
  
  return (
    <>
      <h1>I am login page</h1>
       <div className="login">
         <form action="">
        <div>
          <label htmlFor="email">Email</label>
         <input type="text" placeholder="Enter your Email" />
         </div>
         <br />
         <div>

          <label htmlFor="password">Password</label>

         <input type="password" placeholder="Enter your password" /> 
         </div>
         <button type="submit">Login</button><br />
         <a href="#">CREATE ACCOUNT</a>
         </form>
         </div>
    </>
  );
// }
};
