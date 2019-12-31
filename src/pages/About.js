import React from "react";

import AboutImage from "../images/jisaeid.jpg";
import { IoIosColorPalette } from "react-icons/io";
import { FiCode } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>About Me</h2>
            <span>About Me</span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="mi-about-image"
                data-fancybox
                data-src="assets/images/about-image-lg.jpg"
              >
                <img src={AboutImage} alt="about" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am{" "}
                  <span className="color-theme">Jahidul Islam (Saeid)</span>
                </h3>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more &amp; more
                  interactive with web animations.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Jahidul Islam (Saeid)
                  </li>
                  <li>
                    <b>Age</b> 23 Years
                  </li>
                  <li>
                    <b>Nationality</b> Bangladesh
                  </li>
                  <li>
                    <b>Languages</b> English, Bangla,Hindi
                  </li>
                  <li>
                    <b>Address</b>Dhaka Housing, North Adabor, Mohammadpur,
                    Dhaka, Bangladesh
                  </li>
                </ul>
                <a href="assets/media/empty.html" className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Services</h2>
            <span>Services</span>
          </div>
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <IoIosColorPalette />
                  </span>
                  <h5>Web Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <FiCode />
                  </span>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <AiOutlineMobile />
                  </span>
                  <h5>Mobile Application</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
