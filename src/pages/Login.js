import React from "react";
import { useState } from "react";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // debugger;
        if (data.message === "Logged In") {
          props.setIsAuthenticated(true);
        } else {
          props.setIsAuthenticated(false);
          alert("fail");
        }
      })
      .catch((err) => console.error("Login Error: ", err));
  }

  return (
    <div className="page-wrapper">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username or Email"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={!userName || !password} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
