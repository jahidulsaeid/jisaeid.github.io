import React from "react";

// import { FaChevronRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Recent Blogs</h2>
            <span>Recent Blogs</span>
          </div>
          <div className="row mt-30-reverse">
            {/* Start */}
            <div className="col-lg-6 col-md-6 col-12 mt-30">
              <div className="mi-blog">
                <div className="mi-blog-image">
                  <a href="/blogs/blog-details/1/markdown-html-supported-blog">
                    <img
                      src="https://user-images.githubusercontent.com/33094067/107173334-c51d5200-69f1-11eb-96c2-877c88b2d6f5.png"
                      alt="Markdown & Html supported blog."
                    />
                  </a>

                  <div className="mi-blog-date">
                    <span className="date">8</span>
                    <span className="month">Feb 2021</span>
                    {/* <span className="month">2020</span> */}
                  </div>
                </div>
                <div className="mi-blog-content">
                  <h5>
                    <a href="/blogs/blog-details/1/markdown-html-supported-blog">
                      Markdown &amp; Html supported blog.
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
          {/* <div className="mi-pagination mt-50">
            <ul>
              <li className="is-active">
                <a href="!#">1</a>
              </li>
              <li>
                <a href="!#">2</a>
              </li>
              <li>
                <a href="!#">3</a>
              </li>
              <li>
                <a href="!#">
                  <FaChevronRight/>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
