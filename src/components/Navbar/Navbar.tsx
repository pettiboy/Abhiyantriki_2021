import React from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-3">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src="/assets/logos/ab-name-right-white.png"
            width="130"
            alt="abhiyantriki"
            className="d-inline-block align-middle mr-2"
          />
        </a>

        {/* <!-- toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- links --> */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 highlight">
              <a href="/" className="box foo text-decoration-none">
                Home
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a href="/events" className="box foo text-decoration-none">
                Events
              </a>
            </li>
            <li className="dropdown nav-item px-2 highlight">
              <a
                className="foo box text-decoration-none"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <span className="truncate-expo">Expos & Speakers </span>
                <span> </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill expo-nav-ka-dropdown-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </a>
              <ul
                className="dropdown-menu fade-down dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/expos/tech/">
                    Tech Expo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/expos/internship/">
                    Internship Expo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/sessions/speaker/">
                    Speaker Session
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/sessions/panel/">
                    Panel Session
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item px-2 highlight">
              <a href="/get-involved/" className="box foo text-decoration-none">
                <span className="truncate-get-involved">Get Involved</span>
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a href="/parvaah/" className="box foo text-decoration-none">
                Parvaah
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a href="/sponsors/" className="box foo text-decoration-none">
                Sponsors
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a href="#contact" className="box foo text-decoration-none">
                Contact
              </a>
            </li>

            {/* <!-- right images --> */}
            <ul className="d-flex me-auto">
              <li className="nav-item somaiya left-wala-somaiya-logo">
                <a href="#" className="navbar-brand">
                  <img
                    src="/assets/logos/somaiya-trust.png"
                    width="50"
                    alt=""
                    className="d-inline-block align-middle mr-2"
                  />
                </a>
              </li>
              <li className="nav-item somaiya right-wala-somaiya-logo">
                <a href="#" className="navbar-brand">
                  <img
                    src="/assets/logos/somaiya-white-logo.png"
                    width="125"
                    alt=""
                    className="d-inline-block align-middle mr-2"
                  />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
