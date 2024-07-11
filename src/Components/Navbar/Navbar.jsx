import React from "react";
import fullsmclogo from "../../assets/logo/fullsmclogo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={fullsmclogo} alt="searchmycollege" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5 gap-4">
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/topcolleges">
                TopColleges
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/topcourses">
                TopCourses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/exams">
                Exam
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/boards">
                Boards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/admission">
                Admission
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black text-uppercase font-weight-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/about">About Us</a></li>
                <li><a className="dropdown-item" href="/contact">Contact</a></li>
                <li><a className="dropdown-item" href="/faq">FAQ</a></li>
                <li><a className="dropdown-item" href="/terms">Terms & Conditions</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="https://searchmycolleges.com">
                IELTS
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu d-lg-none">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
