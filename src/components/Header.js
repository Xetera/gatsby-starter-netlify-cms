import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import "./HeaderStyles.css";

const Header = () => (
  <nav className="header">
    <div className="container">
      <Link to="/" className="logo">
        <img src={logo} alt="Racine Carree" className="logo__svg" />
      </Link>
      <div className="menu">
        <Link className="menu__item" to="/qui-sommes-nous">
          Qui sommes-nous?
        </Link>
        <Link className="menu__item" to="/contacts">
          Contacts
        </Link>
        <Link className="menu__item" to="/photos">
          Photos
        </Link>
        <Link className="menu__item" to="/recettes">
          Recettes
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
