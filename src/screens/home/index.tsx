import React, { ReactElement } from "react";
import Hero from "@components/hero";
import Footer from "@components/footer";
import "@screens/home/index.scss";
import parallax from "@services/parallax";
import Skills from "@components/skills";

const sections = [Hero, Skills];
export default (): ReactElement => {
  return (
    <>
      {sections.map((S, i) => (<S key={i} section={parallax.getSection(i)}/>))}
      <Footer />
    </>
  );
};
