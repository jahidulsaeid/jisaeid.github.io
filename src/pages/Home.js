import React from "react";
import { AiOutlineMedium } from "react-icons/ai";

import { FiFacebook, FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

// import { FiInstagram} from "react-icons/fi";
// import Particles from 'react-particles-js';


const Home = () => {
  return (
  
    <div className="mi-home-area mi-padding-section">
{/*       
      <Particles params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} id="particles-js" className="mi-home-particle" /> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="mi-home-content">
              <h1>
                Hi, I am{" "}
                <span className="color-theme">Jahidul Islam (Saeid)</span>
              </h1>
              <p>
                I am a Web Designer and Developer . I can provide clean code and
                pixel perfect design. I also make website more &amp; more
                interactive with web animations.
              </p>
              <ul className="mi-socialicons mi-socialicons-bordered">
                <li>
                  <a href="https://www.facebook.com/jahidulsaeid" target="_blank" rel="noopener noreferrer">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/jahidulsaeid" target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.github.com/jahidulsaeid" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jahidulsaeid" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.instagram.com/jahidulsaeid" target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
                  </a>
                </li> */}
                <li>
                  <a href="https://jahidulsaeid.medium.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineMedium />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Particles>
  );
};

export default Home;
