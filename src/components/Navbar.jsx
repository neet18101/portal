import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const stickyToggle = () => {
      if (window.scrollY > 20) {
        // alert("hello");
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", stickyToggle);
    return () => window.removeEventListener("scroll", stickyToggle);
  }, []);

  return (
    <header
      className="header sticky-bar"
     
    >
      <div className="container">
        <div className="main-header d-flex justify-content-between align-items-center py-3">
          <div className="header-left d-flex align-items-center">
            <Link className="header-logo d-flex align-items-center" to="/">
              {/* <img src="/assets/imgs/template/jobhub-logo.svg" alt="jobBox" height="30" /> */}
              <span className="ms-2 fw-bold fs-5 text-dark">OPSBRIDGES</span>
            </Link>
          </div>

          <nav className="header-nav d-none d-lg-block">
            {/* <ul className="nav main-menu">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active" to="#">
                  Home
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Home 2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Home 3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Home 4
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  Find a Job
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Jobs Grid
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Jobs List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Job Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  Recruiters
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Recruiters
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Company Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Pricing Plan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Register
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://example.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dashboard
                </a>
              </li>
            </ul> */}
          </nav>

          <div className="header-right d-flex align-items-center">
            <Link className="text-decoration-none me-3 text-dark" to="/signup">
              Register
            </Link>
            <Link
              className="btn btn-primary btn-sm rounded-pill shadow-sm"
              to="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
