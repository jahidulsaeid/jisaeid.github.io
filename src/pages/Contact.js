import React from "react";

import NetlifyForm from "react-netlify-form";


import { FiPhone, FiMail, FiMapPin} from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                

                <NetlifyForm name="contact" method="post">
                  {({ loading, error, success }) => (
                    <div>
                      {loading && <div>Loading...</div>}
                      {error && (
                        <div style={{color:'#eb3434'}}>
                          Your information was not sent. Please try again later.
                        </div>
                      )}
                      {success && <div style={{color: '#3aeb34'}}>Thank you for contacting us!</div>}
                      {!loading && !success && (
                        <div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-name">
                              Enter your name*
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="contact-form-name"
                              required
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-email">
                              Enter your email*
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="contact-form-email"
                              required
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-subject">
                              Enter your subject*
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="contact-form-subject"
                              required
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-message">
                              Enter your Message*
                            </label>
                            <textarea
                              name="message"
                              id="contact-form-message"
                              cols={30}
                              rows={3}
                              required
                            />
                          </div>

                          <div className="mi-form-field">
                            <input
                              type="submit"
                              className="mi-button"
                              value="Submit"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </NetlifyForm>


                <div className="form-message alert" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
              
                    <FiPhone className="mi-svgimage"/>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Phone</h6>
                    <p>
                      <a href="tel:+8801829738891">+8801829738891</a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
              
                    <FiMail className="mi-svgimage"/>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    <p>
                      <a href="mailto:jahidul.saeid@gmail.com">
                        jahidul.saeid@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
              
                    <FiMapPin className="mi-svgimage"/>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Address</h6>
                    <p>
                      Dhaka Housing, North Adabor, Mohammadpur, Dhaka,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
