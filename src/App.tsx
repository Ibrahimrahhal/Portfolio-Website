import React, { ReactElement, useRef } from "react";
import { Particles } from "@core";
import RootRouter from "@routers";
import ParticleConfig from "@configs/particle.config.json";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import "./base.scss";

function App(): ReactElement {
  return (
    <ParallaxProvider>
      <div className="site-wrapper">
        <div className="site-wrapper__background particles-js">
          <Particles
            params={ParticleConfig as any}
            style={{ height: "100", width: "100%" }}
          />
        </div>
        <div className="site-wrapper__content">
          <RootRouter />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
