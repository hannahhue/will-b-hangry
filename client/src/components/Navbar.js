import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import iconImg from '../images/icon.png';
import auth from '../utils/auth';

function Nav({ currentPage, handlePageChange }) {
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
              <div
                className="collapse navbar-collapse flex-md-row d-inline-flex"
                id="navbarText"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a
                      href="#home"
                      onClick={() => handlePageChange('Home')}
                      className={
                        currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Home
                    </a>
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
                      <a
                        href="#login"
                        onClick={() => handlePageChange('Login')}
                        className={
                          currentPage === 'Login'
                            ? 'nav-link active'
                            : 'nav-link'
                        }
                      >
                        Login
                      </a>
                    )}
                  </li>

                  <li className="nav-item">
                    <a
                      href="#products"
                      onClick={() => handlePageChange('Products')}
                      className={
                        currentPage === 'Products'
                          ? 'nav-link active'
                          : 'nav-link'
                      }
                    >
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#cart"
                      onClick={() => handlePageChange('Cart')}
                      className={
                        currentPage === 'Cart' ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Cart 🛒
                    </a>
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
