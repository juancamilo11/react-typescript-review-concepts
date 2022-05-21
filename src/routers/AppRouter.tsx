import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import icon from "../assets/images/icon.png";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={icon} alt="react-logo" className="main-icon" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />

          <Route path="/*" element={<h1>404-not-found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
