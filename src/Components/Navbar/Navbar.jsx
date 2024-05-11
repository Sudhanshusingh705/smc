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
              <a className="nav-link text-black text-uppercase font-weight-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="#">
                TopColleges
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="#">
                TopCourses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/exams">
                Exam
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/admission">
                Admission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="#">
                More
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="https://ieltsmaterial.com">
                IELTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/login">
                Login
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
