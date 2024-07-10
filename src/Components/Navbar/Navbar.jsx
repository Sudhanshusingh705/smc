import React from "react";
import fullsmclogo from "../../assets/logo/fullsmclogo.png";
import "./Navbar.css";

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
                Top Colleges
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="/topcourses">
                Top Courses
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
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <h6 className="text-uppercase">Category 1</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="/about">About Us</a></li>
                      <li><a className="dropdown-item" href="/contact">Contact</a></li>
                      <li><a className="dropdown-item" href="/faq">FAQ</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h6 className="text-uppercase">Category 2</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="/terms">Terms & Conditions</a></li>
                      <li><a className="dropdown-item" href="/privacy">Privacy Policy</a></li>
                      <li><a className="dropdown-item" href="/careers">Careers</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h6 className="text-uppercase">Category 3</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="/blogs">Blogs</a></li>
                      <li><a className="dropdown-item" href="/events">Events</a></li>
                      <li><a className="dropdown-item" href="/news">News</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black text-uppercase font-weight-bold" href="https://searchmycolleges.com">
                IELTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
