import React from "react";
import menuimage from "../images/menuimage.jpg";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <>
      <div className="mi-bglines">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <nav className="mi-header">
        <button className="mi-header-toggler">
          <i className="lni-menu" />
        </button>
        <div className="mi-header-inner">
          <div className="mi-header-image">
            <a href="index.html">
              <img src={menuimage} alt="brandimage" />
            </a>
          </div>
          <ul className="mi-header-menu">
            <li>
              <Link to="/" className="active">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <p className="mi-header-copyright">© 2019 JAHIDUL ISLAM</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
