import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <span>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Hannah Hughes</a>
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
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className={
                      currentPage === "About" ? "nav-link active" : "nav-link"
                    }
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={
                      currentPage === "Portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={
                      currentPage === "Resume" ? "nav-link active" : "nav-link"
                    }
                  >
                    Resume
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
