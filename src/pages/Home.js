import React from "react";

import { FiFacebook, FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Home = () => {
  return (
    <div className="mi-home-area mi-padding-section">
      <div id="particles-js" className="mi-home-particle" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="mi-home-content">
              <h1>
                Hi, I am{" "}
                <span className="color-theme">Jahidul Islam (Saeid)</span>
              </h1>
              <p>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more &amp; more
                interactive with web animations.
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
                <li>
                  <a href="#" target="_blank">
                    <FiLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FiInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
