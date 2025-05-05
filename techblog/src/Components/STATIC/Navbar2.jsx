import React from 'react';
import '../../Assets/Styles/Navbar2.css';

function Navbar() {
  return (
    <div className="mainNavbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar-bg">
        <div className="container-fluid">

          {/* Logo */}
          <a className="navbar-brand custom-navbar-brand" href="#">
            <i>TechBlog</i>
          </a>

          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-navbar-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-navbar-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-navbar-link" href="#">All Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-navbar-link" href="#">Profile</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle custom-navbar-link" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu custom-dropdown-bg">
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item custom-dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>

            {/* Search Form inside Collapse */}
            <form className="d-flex custom-search-wrapper mt-3 mt-lg-0" role="search">
              <input className="form-control form-control-sm custom-search-input me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-sm custom-search-btn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
