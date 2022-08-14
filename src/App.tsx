import React, { ReactElement, useRef } from "react";
import { Particles } from "@core";
import RootRouter from "@routers";
import ParticleConfig from "@configs/particle.config.json";
import "./base.scss";
import parallax from "@services/parallax";

function App(): ReactElement {
  const deepScroll = useRef(null);
  parallax.deepScroll = deepScroll;
  return (
    <>
      <div className="site-wrapper">
        <div className="site-wrapper__deep-scroll" ref={deepScroll} />
        <Particles
          className="site-wrapper__background particles-js"
          params={ParticleConfig as any}
        />
        <div className="site-wrapper__content">
          <RootRouter />
        </div>
      </div>
    </>
  );
}

export default App;
