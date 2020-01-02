import React, { Component } from "react";
import { portfolioData } from "../portfolioData";
import PortfolioItem from "../components/PortfolioItem";

class Portfolio extends Component {
  state = {
    portfolios: portfolioData
  };
  render() {
    // console.log(this.state.portfolo);
    const { portfolios } = this.state;

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
              {portfolios.map(portfolio => (
                <PortfolioItem key={portfolio.id} portfolio={portfolio} />
              ))}
              {/* End */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
