import React from "react";
import iconImg from "../images/icon.png";
export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <span>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">
              <img className="logo" src={iconImg} />
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
                  <a
                    href="#login"
                    onClick={() => handlePageChange("Login")}
                    className={
                      currentPage === "Login" ? "nav-link active" : "nav-link"
                    }
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#logout"
                    onClick={() => handlePageChange("Logout")}
                    className={
                      currentPage === "Logout" ? "nav-link active" : "nav-link"
                    }
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    className={
                      currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#cart"
                    onClick={() => handlePageChange("Cart")}
                    className={
                      currentPage === "Cart" ? "nav-link active" : "nav-link"
                    }
                  >
                    🛒
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </span>
      </header>
    </div>
  );
}
