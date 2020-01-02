import React, { Component } from "react";
import image from "../images/portfolio-image-6.jpg";
import viewin from "../images/view.png";
import { FiLink, FiZoomIn } from "react-icons/fi";
import Gallery from "lightbox-alex-react";

const pictures = [image];
const zoomin = [viewin];

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Portfolios</h2>
              <span>Portfolios</span>
            </div>
            <div className="row mt-30-reverse">
              {/* Start */}
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Coffee Mug" />
                    <ul>
                      <li>
                        <a target="_blank" href="#">
                          <FiLink />{" "}
                        </a>
                      </li>
                      <li>
                        <Gallery files={pictures} thumbnails={zoomin} />
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="#">
                      T-shirt Mockup
                    </a>
                  </h5>
                  <h6>A beautiful t-shirt mockup.</h6>
                </div>
              </div>
              {/* End */}

              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
