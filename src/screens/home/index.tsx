import React, { ReactElement } from "react";
import Hero from "@components/hero";
import Footer from "@components/footer";
import "@screens/home/index.scss";
import Skills from "@components/skills";
import Portfolio from "@components/portfolio";

const sections = [Hero, Skills, Portfolio];
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
