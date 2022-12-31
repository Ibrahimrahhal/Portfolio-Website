import React, { ReactElement } from "react";
import Hero from "@components/hero";
import Footer from "@components/footer";
import "@screens/home/index.scss";
import Skills from "@components/skills";
import Portfolio from "@components/portfolio";
import OpenSource from "@components/open-source";

const sections = [Hero, Skills, Portfolio, OpenSource];
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
