import React, { useState } from "react";

export const Registration = (props) => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
  });

  const [records, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const Value = e.target.value;
    console.log(name, Value);

    setUserRegistration({ ...userRegistration, [name]: Value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecord([...records, newRecord]);
    console.log(records);
    setUserRegistration({
      username: " ",
      email: " ",
      phone: " ",
      password: " ",
      ConfirmPassword: " ",
    });
  };

  return (
    <>
      <div className="Signup" id="Registraion">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Name"
              value={userRegistration.username}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={userRegistration.email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="username">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your Phone Number"
              value={userRegistration.phone}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              value={userRegistration.password}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="passwords"
              placeholder="Enter your Confirm Password"
              value={userRegistration.ConfirmPassword}
              onChange={handleInput}
            />
          </div>

          <div>
            <button type="submit">SingUp</button>
            <br />
            <a href="/Login">back to login</a>
          </div>
        </form>
      </div>
    </>
  );
};
