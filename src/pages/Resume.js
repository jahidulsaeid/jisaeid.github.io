import React from "react";

import { GoBook } from "react-icons/go";
import { Line, Circle } from "rc-progress";

const Resume = () => {
  return (
    <div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>My Skills</h2>
            <span>My Skills</span>
          </div>
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">HTML5</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">95%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="95"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">CSS3</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">90%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="90"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Javascript</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">ReactJS</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
           
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Wordpress</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">85%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="85"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Photoshop</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">65%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="65"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          {/* <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <i className="lni-briefcase size-md " />
            </span>
            <h4>Working Experience</h4>
          </div> */}
          {/* <div className="mi-resume-wrapper">
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2018 - Present</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Frontend Web Developer</h5>
                <h6 className="mi-resume-company">Abc Company</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quas, magni mollitia, aspernatur consequatur accusamus vero
                  eum facere exercitationem velit suscipit ipsam placeat libero.
                  Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2016 - 2018</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Frontend Web Developer</h5>
                <h6 className="mi-resume-company">CBA Company</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quas, magni mollitia, aspernatur consequatur accusamus vero
                  eum facere exercitationem velit suscipit ipsam placeat libero.
                  Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2014 - 1016</h6>
              </div>
              <div className="mi-resume-details">
                <h5>UI/UX Designer</h5>
                <h6 className="mi-resume-company">Example Company</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quas, magni mollitia, aspernatur consequatur accusamus vero
                  eum facere exercitationem velit suscipit ipsam placeat libero.
                  Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                </p>
              </div>
            </div>
          </div> */}
          <div className="mt-30" />
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <GoBook style={{ fontSize: "40px" }} />
            </span>
            <h4 style={{ marginBottom: "0px" }}>Educational Qualifications</h4>
          </div>
          <div className="mi-resume-wrapper">
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2016 - 2020</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Bangladesh University</h5>
                <h6 className="mi-resume-company">
                  Bachelor of Computer Science and Engineering (BSc in CSE)
                </h6>
                <p>
                  Bangladesh University is a profit, private university located
                  near the Jatiyo Sangshad Bhaban in Dhaka, Bangladesh. The
                  university was established in 2001 under the Private
                  University Act 1992. The university was established in 2001 by
                  Quazi Azher Ali.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2013 - 2014</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Dr. Khandaker Mosharraf Hossain College</h5>
                <h6 className="mi-resume-company">
                  Higher Secondary Certificate(HSC) - Science
                </h6>

                <p>
                  Dr.khandaker Mosharraf Hossain College is an academic
                  institute located at Daudkandi Comilla.It offers
                  higher-secondary education. It was established on 03 May,
                  2002.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2011 - 2012</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Machhimpur R.R. Institution</h5>
                <h6 className="mi-resume-company">
                  Secondary School Certificate(SSC) - Science
                </h6>
                <p>
                  Machhimpur R.R Institution is an well known Secondary School
                  situated at Machhimpur, Titas Upazila, Cumilla District,
                  Bangladesh. It is one of the oldest educational institution in
                  Cumilla, Bangladesh established in 1930.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
