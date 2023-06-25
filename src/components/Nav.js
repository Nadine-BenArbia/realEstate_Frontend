import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";
import logoImage from "./../assets/logo.jpg";
const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Link to="/" className="Nav__brand">
          <img src={logoImage} className="Nav__logo" alt="Logo" />
        </Link>

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            {localStorage.length !== 0 && (
              <li className="Nav__item">
                <Link className="Nav__link" to="/UserOffer">
                  My Offer
                </Link>
              </li>
            )}

            <li className="Nav__item">
              <Link className="Nav__link" to="/posts">
                Offer
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/login">
                LogIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
