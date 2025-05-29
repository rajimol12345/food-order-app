import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';  // External styles

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-custom-bg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-custom" to="/">
            FoodExpress
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/Restaurants">Restaurants</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#">My Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#">Offers</a>
              </li>
            </ul>

            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search food or restaurants"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>

            <div className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle nav-link-custom"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#">Account Settings</a></li>
                <li><a className="dropdown-item" href="#">Addresses</a></li>
                <li><a className="dropdown-item" href="#">Payment Methods</a></li>
              </ul>
            </div>

            <button className="btn btn-outline-danger">
              🛒 Cart
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
