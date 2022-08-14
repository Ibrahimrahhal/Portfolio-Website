import React, { ReactElement, useEffect, useRef } from "react";
import Animation from "@components/animation";
import "@components/skills/index.scss";
import { Section } from "@services/parallax";

const animationOptions = {
  loop: true,
  autoplay: true,
};

export default ({section}: {section: Section}): ReactElement => {
  const sectionRef = useRef(null);
  useEffect(() => {
    section.register(sectionRef, 0);
  }, []);
  return (
    <>
    <div className="hero">
      <div className="hero__circle" />
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
    <div className="home__scroll-indicator" ref={sectionRef}>
      <Animation
        height={75}
        options={animationOptions}
        animation="scroll"
        width={75}
      />
    </div>
  </>
  );
};
