import React, { Component } from 'react'

class BlogItem extends Component {

    render() {
        const { title, img, blogurl, date, monthAndYear } = this.props.blog;
        return (
            <div className="col-lg-4 col-md-6 col-12 mt-30">
        <div className="mi-blog">
          <div className="mi-blog-image">
            <a href={blogurl}>
              <img
                src={img}
                alt={title}
              />
            </a>

            <div className="mi-blog-date">
              <span className="date">{date}</span>
              <span className="month">{monthAndYear}</span>
            </div>
          </div>
          <div className="mi-blog-content">
            <h4 title={title}>
              <a href={blogurl}>
                {title}
              </a>
            </h4>
          </div>
        </div>
      </div>
        )
    }
}

export default BlogItem