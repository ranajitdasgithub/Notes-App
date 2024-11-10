import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../components/Homepage";
import Register from "../components/Register";
import Login from "../components/Login";
import Notes from "../components/Notes";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
      </Routes>
    </div>
  );
};

export default Navbar;
