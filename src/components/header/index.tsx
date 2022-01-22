import React, { ReactElement } from "react";
import "@components/header/index.scss";

export default (): ReactElement => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">Ibrahim Rahhal</div>
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
              rel="noreferrer"
            >
              <i
                aria-hidden="true"
                title="Github account"
                className="icon-github"
              />
            </a>
          </div>
        </div>
      </nav>
      <a className="header__contact" href="./form_handle.php?type=message">
        Get in Touch
      </a>
    </header>
  );
};
