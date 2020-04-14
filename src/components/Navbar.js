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
    <nav>
      {user ? (
        <div>
          <Link to="/tasks">Tasklist</Link>
          <Link to="/add">Add task</Link>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
