import React, { forwardRef, ReactElement, Ref } from "react";
import "@components/header/index.scss";
import { Link } from "react-router-dom";

export default forwardRef((props, ref: Ref<HTMLElement>): ReactElement => {
  return (
    <header className="header" ref={ref}>
      <nav className="header__nav">
        <div className="header__logo">Ibrahim Rahhal</div>
        <div className="nav-menu">
          <div className="nav-menu-list">
            <a href="#skills" className="nav-menu-list__item">
              Skills Set
            </a>
            <a href="#portfolio" className="nav-menu-list__item">
              Portfolio
            </a>
            <a href="#open-source" className="nav-menu-list__item">
              Open Source
            </a>
            <Link to="./resume" className="nav-menu-list__item">
              Resume
            </Link>
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
      <a className="header__contact" href="#get-in-touch">
        Get in Touch
      </a>
    </header>
  );
});
