import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Crypto Analytics&nbsp;
          <FontAwesomeIcon icon={faChartBar} />
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
            <Link to="/btc" className="nav-links" onClick={closeMobileMenu}>
              Bitcoin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/eth" className="nav-links" onClick={closeMobileMenu}>
              Ethereum
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bnb" className="nav-links" onClick={closeMobileMenu}>
              BNB
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ada" className="nav-links" onClick={closeMobileMenu}>
              Cardano
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sol" className="nav-links" onClick={closeMobileMenu}>
              Solana
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
