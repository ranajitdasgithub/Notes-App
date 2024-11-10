import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log(email, password);
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          required // Optional: make the field required
        />
        <br />
        <label>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          required // Optional: make the field required
        />
        <br />
        <label>Password:</label>
        <input
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

export default Register;
