import React from "react";
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="landing page" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <Link
            to="/gallery"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            gallery
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
