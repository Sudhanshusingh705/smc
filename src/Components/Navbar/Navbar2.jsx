import React from 'react';

function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent d-none d-lg-block">
      <div className="container-fluid justify-content-end" style={{ marginLeft: '350px' }}>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4" style={{ marginTop: '10px' }}>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/engineering">Engineering</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/management">Management</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/medical">Medical</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/science">Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/commerce">Commerce</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="https://studyabroad.searchmycollege.com/index.php/study-abroad/">Study Abroad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black font-weight-bold" href="/more">More</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
