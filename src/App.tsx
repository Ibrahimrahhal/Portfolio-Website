import { ReactElement } from "react";
import { Particles } from "@core";
import RootRouter from "@routers";
import ParticleConfig from "@configs/particle.config.json";
import { ParallaxProvider } from "react-scroll-parallax";
import "./base.scss";
import "./tailwind-out.css";
import Mobile from "@components/mobile";

function checkIfMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}
function App(): ReactElement {
  const isMobile = checkIfMobile();

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
          {!isMobile && <RootRouter />}
          {isMobile && <Mobile />}
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
