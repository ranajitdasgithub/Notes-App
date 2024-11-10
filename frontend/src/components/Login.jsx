import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          required // Optional: make the field required
        />
        <br />
        <label>Password:</label>
        <input
          className="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password" // Change type to password
          placeholder="Enter password"
          required // Optional: make the field required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
