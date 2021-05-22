import React, { Component } from "react";
import { blogData } from "../blogData";
import BlogItem from "../components/BlogItem";

// import { FaChevronRight } from "react-icons/fa";

class Blog extends Component {
  state = {
    blogs: blogData
  };
  render() {
    const { blogs } = this.state;
    return (
      <>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Recent Blogs</h2>
            <span>Recent Blogs</span>
          </div>
          <div className="row mt-30-reverse">
            {/* Start */}
            {blogs.map(blog => (
              <BlogItem key={blog.id} blog={blog}/>
            ))}
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
    </>
    )
  }
}

export default Blog



