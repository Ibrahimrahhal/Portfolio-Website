import React from "react";
import Particles from "react-particles-js";
import RootRouter from "./routers";
import ParticleConfig from "./particle.config.json";
import "./base.scss";

function App() {
  return (
    <>
      <div className="site-wrapper">
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
