import React, { Component } from "react";

import menuimage from "../images/menuimage.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

class SideMenu extends Component {
  state = {
    isBoxVisible: true,
  };
  toggleBox = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  render() {
    const { isBoxVisible } = this.state;

    return (
      <div>
        <div className="mi-bglines">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <nav className={`mi-header ${isBoxVisible ? "" : "is-visible"}`}>
          {this.state.isBoxVisible ? (
            <button className="mi-header-toggler" onClick={this.toggleBox}>
              <IoIosMenu />
            </button>
          ) : (
            <button className="mi-header-toggler" onClick={this.toggleBox}>
              <IoMdClose />
            </button>
          )}
          <div className="mi-header-inner">
            <div className="mi-header-image">
              <Link to="/">
                <img src={menuimage} alt="brandimage" />
              </Link>
            </div>
            <ul className="mi-header-menu">
              <li>
                <NavLink to="/" exact activeClassName="mi-header-menu-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="mi-header-menu-active"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  exact
                  activeClassName="mi-header-menu-active"
                >
                  <span>Resume</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  exact
                  activeClassName="mi-header-menu-active"
                >
                  <span>Portfolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  exact
                  activeClassName="mi-header-menu-active"
                >
                  <span>Blogs</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  exact
                  activeClassName="mi-header-menu-active"
                >
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
            <p className="mi-header-copyright">© 2020 JAHIDUL ISLAM</p>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideMenu;
