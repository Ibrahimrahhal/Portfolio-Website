import React, { ReactElement } from "react";
import { Particles } from "@core";
import RootRouter from "@routers";
import ParticleConfig from "@configs/particle.config.json";
import "./base.scss";

function App(): ReactElement {
  return (
    <>
      <div className="site-wrapper">
        <Particles
          className="site-wrapper__background particles-js"
          params={ParticleConfig as never}
        />
        <div className="site-wrapper__content">
          <RootRouter />
        </div>
      </div>
    </>
  );
}

export default App;
