import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../style/logIn.css'
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post("http://127.0.0.1:5000/login", { email, password })
      .then((res) => {
        console.log("first", res);
        const userJson = JSON.stringify(res.data); 
        localStorage.setItem("user", userJson); 
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  

  return (
    <div className="wrap">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
            className="input"
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
          <div className="form-footer">
          <button type="submit" className="btn-login" >
          <Link id="link" to="/" >logIn</Link>
          </button>
          <Link id="link" to="/Register" >Don’t Have an Account? Sign Up Here!</Link>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default LoginForm;
