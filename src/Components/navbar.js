import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import mainLogo from "../assets/14-removebg-preview.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={mainLogo} alt="Fitness Tracker" width={190} />
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercise"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/teacherList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trackers
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
