import React, { useState } from "react";
import axios from "axios";
import RegistrationForm from "./Register";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/login", { email, password })
      .then((res) => {
        console.log(res.data);
        // Perform any necessary actions after successful login
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <div>
            <span>if you don't have account </span>
            <RegistrationForm/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
