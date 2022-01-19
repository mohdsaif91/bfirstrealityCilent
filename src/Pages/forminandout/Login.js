import React, {useState} from "react";
// import { Registration } from "./Registration";
import { Link } from 'react-router-dom';
import "./Login.scss";
export const Login = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [allEntry, setAllEntry] = useState("")
  
const submitform = (e) =>{
  e.preventDefault();

  const newEntry = {email:email, password:password};
  setAllEntry([...allEntry , newEntry]);
  console.log(allEntry);

}
  return (
    <>
      <div className="login">
        <form action="" onSubmit={submitform}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter your Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}            
            />
          </div>
          <button type="submit">Login</button>
          <br />
          <p id>Don't have an Account?
          <Link to="/Registration">Register</Link></p>
        </form>
      </div>
    </>
  );
  // }
};
