import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/AuthReducer/action";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../redux/AuthReducer/actionType";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handling Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(LoginAction({ email, password })).then((r) => {
        if (r.type === LOGIN_SUCCESS) {
          alert("Login successful");
          navigate("/");
        } else if (r.type === LOGIN_FAILED) {
          alert("Login failed. Please check your credentials.");
        } else {
          alert("An unexpected error occurred.");
        }
      });
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          required
        />
        <br />
        <label>Password:</label>
        <input
          className="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
