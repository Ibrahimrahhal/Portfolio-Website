import React, { ReactElement } from "react";
import Hero from "@components/hero";
import Footer from "@components/footer";
import "@screens/home/index.scss";
import Skills from "@components/skills";
import Portfolio from "@components/portfolio";
import OpenSource from "@components/open-source";
import getInTouch from "@components/get-in-touch";

const sections = [Hero, Skills, Portfolio, OpenSource, getInTouch];
export default (): ReactElement => {
  return (
    <>
      {sections.map((S, i) => (
        <S key={i} />
      ))}
      <Footer />
    </>
  );
};
