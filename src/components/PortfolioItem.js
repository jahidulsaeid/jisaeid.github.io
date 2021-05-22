import React, { Component } from "react";


class PortfolioItem extends Component {
  render() {
    const { name, img, demourl, description } = this.props.portfolio;

    return (
      <div className="col-lg-4 col-md-6 col-12 mt-30">
        <div className="mi-portfolio mi-portfolio-visible">
          <div className="mi-portfolio-image">
            <img src={img} alt={name} />
            <ul className="portfolio1">
                <a href={demourl} target="_blank" rel="noopener noreferrer" className="mi-buttonPortfolio">Live Demo</a>
            </ul>
          </div>
          <h5>{name}</h5>
		<p>{description}</p>
        
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
