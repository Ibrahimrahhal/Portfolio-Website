import React, { ReactElement } from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/footer";
import Animation from "../../components/animation/animation";
import "./home.scss";

const animationOptions = {
  loop: true,
  autoplay: true,
};
export default (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <div className="home__scroll-indicator">
        <Animation
          height={75}
          options={animationOptions}
          animation="scroll"
          width={75}
        />
      </div>
      <Footer />
    </>
  );
};
