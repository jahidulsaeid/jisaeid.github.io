import React, { Component } from "react";
import { FiLink, FiGithub } from "react-icons/fi";

export class PortfolioItem extends Component {
  render() {
    const { name, img, demourl,githuburl, description } = this.props.portfolio;

    return (
      <div className="col-lg-4 col-md-6 col-12 mt-30">
        <div className="mi-portfolio mi-portfolio-visible">
          <div className="mi-portfolio-image">
            <img src={img} alt="Coffee Mug" />
            <ul className="portfolio1">
              <li>
                <a
                  title="Visit Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={demourl}
                >
                  <FiLink />
                </a>
              </li>
              <li>
                <a
                  title="Github Repository"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={githuburl}
                >
                  <FiGithub />
                </a>
              </li>
            </ul>
          </div>
          <h5>
            <a target="_blank" rel="noopener noreferrer" href={demourl}>
              {name}
            </a>
          </h5>
          <p>{description}</p>
    
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
