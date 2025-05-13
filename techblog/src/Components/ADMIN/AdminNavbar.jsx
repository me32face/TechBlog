import React from "react";
import "../../Assets/Styles/AdminNavbar.css";

function AdminNavbar() {
  return (
    <header className="unique-admin-navbar">
      <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />
      <label htmlFor="menu-toggle" className="menu-toggle-label">
        &#9776; {/* Hamburger icon */}
      </label>

      <div className="unique-navbar-logo">
        <h3>Admin Panel</h3>
      </div>

      <nav className="unique-navbar-links">
        <a href="/ManageUsers" className="unique-navbar-link">Manage Users</a>
        <a href="/ManagePosts" className="unique-navbar-link">Manage Posts</a>
        <a href="/approve-blogs" className="unique-navbar-link">Approve Blogs</a> 
      </nav>
    </header>
  );
}

export default AdminNavbar;
