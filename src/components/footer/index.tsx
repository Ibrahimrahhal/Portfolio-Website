/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "@components/footer/index.scss";

const icons = [
  {
    class: "spotify",
    link: "https://open.spotify.com/user/tciyuwjpcgy4jhf",
    title: "Spotify",
  },
  {
    class: "facebook",
    link: "https://www.facebook.com/ibrahim.ra7al/",
    title: "Facebook",
  },
  {
    class: "twitter",
    link: "https://twitter.com/IbrahimRahhal18",
    title: "Twitter",
  },
  {
    class: "behance",
    link: "https://www.behance.net/ibrahimrah34c5",
    title: "Behance",
  },
  {
    class: "linkedin",
    link: "https://www.linkedin.com/in/rahhal-ibrahim/",
    title: "Linkedin",
  },
];
export default () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          className="footer__logo-img"
          src="img/hashira.svg"
          alt="hashira logo"
        />
        <h6 className="footer__logo-title">Javascript Hashira</h6>
      </div>
      <div className="footer__social-media">
        <div className="footer__social-media__icons">
          {icons.map((icon) => {
            return (
              <a
                title={icon.title}
                href={icon.link}
                key={icon.title}
                target="_blank"
                className="footer__social-media__icon"
              >
                <i aria-hidden="true" className={`icon-${icon.class}`} />
              </a>
            );
          })}
        </div>
        <h5 className="footer__social-media__title">
          Follow Me on Social Media
        </h5>
      </div>
    </footer>
  );
};
