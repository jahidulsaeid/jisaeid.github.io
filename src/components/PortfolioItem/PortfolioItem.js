import React, { Component } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"
const portfolio1 = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];
const portfolio2 = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];
const portfolio3 = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];



class PortfolioItem extends Component {
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
      <div>
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}

        {isOpen && (
          <Lightbox
            mainSrc={portfolio1[photoIndex]}
            nextSrc={portfolio1[(photoIndex + 1) % portfolio1.length]}
            prevSrc={portfolio1[(photoIndex + portfolio1.length - 1) % portfolio1.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + portfolio1.length - 1) % portfolio1.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % portfolio1.length
              })
            }
          />
        )}
        {isOpen && (
          <Lightbox
            mainSrc={portfolio2[photoIndex]}
            nextSrc={portfolio2[(photoIndex + 1) % portfolio2.length]}
            prevSrc={portfolio2[(photoIndex + portfolio2.length - 1) % portfolio2.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + portfolio2.length - 1) % portfolio2.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % portfolio1.length
              })
            }
          />
        )}

      </div>
    );
  }
}

export default PortfolioItem




