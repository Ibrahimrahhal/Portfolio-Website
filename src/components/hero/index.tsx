import React, { ReactElement, useEffect, useRef } from "react";
import Animation from "@components/animation";
import "@components/hero/index.scss";
import Header from "@components/header";
import { Parallax } from "react-scroll-parallax";

const animationOptions = {
  loop: true,
  autoplay: true,
};

export default (): ReactElement => {
  return (
    <>
      <Header />
      <div className="hero">
        <Parallax scaleX={[0, 1.5]} rotate={[0, 360]}>
          <div className="hero__circle" />
        </Parallax>
        <h1 className="hero__title--primary">
          Senior Developer,
          <span> Open Source Enthusiast</span>
        </h1>
        <h3 className="hero__title--secondary">Welcome to My Website</h3>
        <div className="hero__hr" />
        <div className="hero__call-to-action">
          <h2 className="hero__call-to-action__title">
            Have an <span>Interesting</span> Project
          </h2>
          <a
            className="hero__call-to-action__btn"
            href="./form_handle.php?type=prject"
          >
            Start a Project
          </a>
        </div>
      </div>
      <Parallax scale={[1, 0]} opacity={[1.3, 0]}>
        <div className="home__scroll-indicator">
          <Animation
            height={75}
            options={animationOptions}
            animation="scroll"
            width={75}
          />
        </div>
      </Parallax>
    </>
  );
};
