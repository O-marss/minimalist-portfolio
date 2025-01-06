import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import "./Navbar.module.css";

export default function Navbar() {
  function handleLinks() {
    $(".nav-link").on("click", function () {
      $(`#navbarNav`).collapse("hide");
    });
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
          <Link className={`navbar-brand ${styles.navbar_brand}`} to={"home"}>
            OM
          </Link>
          <button
            className={`navbar-toggler ${styles.navbar_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid fa-bars`}></i>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.navbar_collapse}`}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-5">
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link ${styles.nav_link}`}
                  to={"about"}
                  onClick={handleLinks}
                >
                  About
                </Link>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link ${styles.nav_link}`}
                  to={"portfolio"}
                  onClick={handleLinks}
                >
                  Portfolio
                </Link>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <Link
                  className={`nav-link ${styles.nav_link}`}
                  to={"contact"}
                  onClick={handleLinks}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
