import React, { useState } from "react";
import "./styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [phone, setUsername] = useState();
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    // console.log(phone, password);
    const formdata = { phone: phone, password: password };
    try {
      await axios
        .post("http://localhost:8000/login", formdata)
        .then((res) => {
          if (res.data === "data found") {
            history("/");
          } else if (res.data === "data not found") {
            alert("entered email and password doesn't match");
          }
        })
        .catch((e) => {
          alert("unable to fetch");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="phone">phone number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p> Don't have an Account</p>
        <a href="/register">
          <button type="button" className="button-secondary">
            Register Here
          </button>
        </a>
      </form>
    </div>
  );
};
