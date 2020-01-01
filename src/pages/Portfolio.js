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
                    {/* <Gallery files={pictures} thumbnails={pictures} /> */}
                    <img src={image} alt="Coffee Mug" />
                    <ul>
                      <li>
                        <a target="_blank" href="https://dribbble.com/">
                          <FiLink />{" "}
                        </a>
                      </li>
                      <li>
                        <Gallery files={pictures} thumbnails={zoomin} />
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
              {/* End */}
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
