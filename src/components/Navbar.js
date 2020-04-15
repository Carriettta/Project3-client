import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../utils/auth";
import { logout } from "../utils/auth";

function Navbar() {
  let user = getUser();
  function handleLogout() {
    logout(user);
  }
  return (
    <div>
      {user ? (
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/tasks" className="navbar-item">
                Tasklist
              </Link>
              <Link to="/add" className="navbar-item">
                Add task
              </Link>
            </div>
            <div className="navbar-end">
              <Link to="/login" onClick={handleLogout} className="navbar-item">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/signup" className="navbar-item">
                Signup
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
