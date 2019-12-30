import React from "react";
import menuimage from "../images/menuimage.jpg";

import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";

import { Link ,Route} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="animsition-overlay">
        <div className="mi-wrapper">
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
                    <span>Portfolios</span>
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
          <main className="mi-pagecontent">
            <div className="mi-home-area mi-padding-section">
              <div id="particles-js" className="mi-home-particle" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-12">
                    <div className="mi-home-content">
                      <h1>
                        Hi, I am{" "}
                        <span className="color-theme">
                          Jahidul Islam (Saeid)
                        </span>
                      </h1>
                      <p>
                        I am a frontend web developer. I can provide clean code
                        and pixel perfect design. I also make website more &amp;
                        more interactive with web animations.
                      </p>
                      <ul className="mi-socialicons mi-socialicons-bordered">
                        <li>
                          <a href="#" target="_blank">
                            <FiFacebook />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <FiTwitter />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <FiGithub />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
