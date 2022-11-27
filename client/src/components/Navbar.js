import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import iconImg from '../images/icon.png';
import auth from '../utils/auth';

function Nav() {
  return (
    <header className="flex-row px-1">
      <div className="fixed-top">
        <header className="display-inline-flex justify-space-between align-center p-2">
          <span>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand">
                <img src={iconImg} className="icon" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    {auth.loggedIn() ? (
                      <a
                        href="/"
                        onClick={() => Auth.logout()}
                        className="nav-link"
                      >
                        Logout
                      </a>
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
                  </li>
                  <li className="nav-item">
                    <Link to="combo">Combo</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart">🛒</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </span>
        </header>
      </div>
    </header>
  );
}

export default Nav;
