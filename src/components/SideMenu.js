import React, { Component } from "react";

import menuimage from "../images/menuimage.jpg";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

class SideMenu extends Component {
  state = {
    isBoxVisible: true
  };
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  render() {
    const { isBoxVisible } = this.state;

    return (
      <div>
        <>
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
                <IoIosMenu/>
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
                  <Link to="/">
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
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
              <p className="mi-header-copyright">© 2020 JAHIDUL ISLAM</p>
            </div>
          </nav>
        </>
      </div>
    );
  }
}

export default SideMenu;
