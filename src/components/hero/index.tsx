import React, { ReactElement } from "react";
import "@components/hero/index.scss";

export default (): ReactElement => {
  return (
    <div className="hero">
      <div className="hero__circle" />
      <h1 className="hero__title--primary">
        Designer,<span> Fullstack Developer and Student</span>
      </h1>
      <h3 className="hero__title--secondary">Welcome to My Website</h3>
      <div className="hero__hr" />
      <div className="hero__call-to-action">
        <h2 className="hero__call-to-action__title">
          Have an <span>Intersting</span> Project
        </h2>
        <a
          className="hero__call-to-action__btn"
          href="./form_handle.php?type=prject"
        >
          Start a Project
        </a>
      </div>
    </div>
  );
};
