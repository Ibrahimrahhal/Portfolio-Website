import React from "react";
import { Parallax } from "react-scroll-parallax";
import "@components/portfolio/index.scss";

export default () => {
  return (
    <div className="portfolio">
      <div className="portfolio__wrapper">
        <h1 className="portfolio__title">
          <Parallax
            scale={[5, 0.5]}
            opacity={[0, 1]}
            className="portfolio__title__wrapper"
          >
            <span>My Portfolio</span>
          </Parallax>
        </h1>
      </div>
    </div>
  );
};
