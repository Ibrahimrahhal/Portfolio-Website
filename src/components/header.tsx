import React, { ReactElement } from "react";
import "./header.scss";

export default (): ReactElement => {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          Ibrahim Rahhal
          <div>
            <div></div>
          </div>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-list">
            <a href="#skill" className="nav-menu-list__item">
              Skills Set
            </a>
            <a href="#education" className="nav-menu-list__item">
              Education
            </a>
            <a href="#projects" className="nav-menu-list__item">
              Projects
            </a>
            <a
              href="./Resume.pdf"
              target="_blank"
              className="nav-menu-list__item"
            >
              Resume
            </a>
            <a
              href="https://github.com/Ibrahimrahhal"
              className="nav-menu-list__item "
              target="_blank"
            >
              <div className="github-icon"></div>
            </a>
          </div>
        </div>
      </nav>
      <a className="header__ contact" href="./form_handle.php?type=message">
        Get in Touch
      </a>
    </header>
  );
};
