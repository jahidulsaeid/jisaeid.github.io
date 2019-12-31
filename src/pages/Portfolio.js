import React, { Component } from "react";
import image from "../images/portfolio-image-6.jpg";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { FiLink, FiZoomIn } from "react-icons/fi";
// import PortfolioItem from "../components/PortfolioItem/PortfolioItem";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Portfolios</h2>
              <span>Portfolios</span>
            </div>
            <div className="row mt-30-reverse">
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="T-shirt Mockup" />

                    <ul>
                      <li>
                        <a target="_blank" href="https://dribbble.com/">
                          <FiLink />{" "}
                        </a>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => this.setState({ isOpen: true })}
                        >
                          <FiZoomIn />
                        </button>

                        {isOpen && (
                          <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={
                              images[
                                (photoIndex + images.length - 1) % images.length
                              ]
                            }
                            onCloseRequest={() =>
                              this.setState({ isOpen: false })
                            }
                            onMovePrevRequest={() =>
                              this.setState({
                                photoIndex:
                                  (photoIndex + images.length - 1) %
                                  images.length
                              })
                            }
                            onMoveNextRequest={() =>
                              this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                              })
                            }
                          />
                        )}
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="https://dribbble.com/">
                      T-shirt Mockup
                    </a>
                  </h5>
                  <h6>A beautiful t-shirt mockup.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Coffee Mug" />
                    <ul>
                      <li>
                        <a
                          data-fancybox="gallery"
                          data-src="assets/images/portfolio-image-4-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                        <a
                          data-fancybox="gallery"
                          data-src="assets/images/portfolio-image-4-lg2.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://facebook.com/">
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/link.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="https://facebook.com/">
                      Coffee Mug
                    </a>
                  </h5>
                  <h6>Awesome coffee mug design.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Tea & Coffee Mug" />
                    <ul>
                      <li>
                        <a target="_blank" href="https://pinterest.com/">
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/link.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="https://pinterest.com/">
                      Tea &amp; Coffee Mug
                    </a>
                  </h5>
                  <h6>Beautiful mug with logo.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Pen Holder" />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-3-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/link.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="#">
                      Pen Holder
                    </a>
                  </h5>
                  <h6>A pen holder with beautiful design.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Mug" />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-5-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>Mug</h5>
                  <h6>Mug with awesome style</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img src={image} alt="Pendrive" />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-6-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>Pendrive</h5>
                  <h6>Free pendrive mockup design.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img
                      data-pagespeed-lazy-src="assets/images/portfolio-image-7.jpg"
                      alt="Beautiful Pendrive"
                      src={image}
                      onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                      onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                    />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-7-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com/">
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/link.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src={image}
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a target="_blank" href="https://twitter.com/">
                      Beautiful Pendrive
                    </a>
                  </h5>
                  <h6>Pendrive with great design &amp; flexible.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img
                      data-pagespeed-lazy-src="assets/images/portfolio-image-8.jpg"
                      alt="Sticker"
                      src={image}
                      onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                      onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                    />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-8-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src={image}
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>Sticker</h5>
                  <h6>Clip sticker mockup design.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-portfolio mi-portfolio-visible">
                  <div className="mi-portfolio-image">
                    <img
                      data-pagespeed-lazy-src="assets/images/portfolio-image-9.jpg"
                      alt="Packet"
                      src={image}
                      onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                      onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                    />
                    <ul>
                      <li>
                        <a
                          data-fancybox
                          data-src="assets/images/portfolio-image-9-lg.jpg"
                          href="#"
                        >
                          <img
                            data-pagespeed-lazy-src="assets/images/icons/zoom-in.svg"
                            alt="zoom-in"
                            className="mi-svgimage"
                            src="../../pagespeed_static/1.JiBnMqyl6S.gif"
                            onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                            onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5>Packet</h5>
                  <h6>Beautiful packet &amp; product design.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
