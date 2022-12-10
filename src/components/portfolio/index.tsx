import React from "react";
import { Parallax } from "react-scroll-parallax";
import "@components/portfolio/index.scss";

const PortfolioSites = [
  {
    title: "Science.org",
    description:
      "Science.org is a website that provides a platform for scientists to share their research and findings with the public. It is a community-driven website that allows scientists to post their research and findings, and for the public to comment on and discuss the research.",
    desktop: "/img/portfolio/aaas-desktop.png",
    mobile: "/img/portfolio/aaas-mobile.png",
    scrollSpeed: [0, -500],
  },
  {
    title: "PNAS.org",
    description:
      "PNAS.org is a website that provides a platform for scientists to share their research and findings with the public. It is a community-driven website that allows scientists to post their research and findings, and for the public to comment on and discuss the research.",
    desktop: "/img/portfolio/pnas-desktop.png",
    mobile: "/img/portfolio/pnas-mobile.png",
    scrollSpeed: [0, -200],
  },
  {
    title: "Find Yours",
    description:
      "Find Yours is a website that provides a platform for scientists to share their research and findings with the public. It is a community-driven website that allows scientists to post their research and findings, and for the public to comment on and discuss the research.",
    desktop: "/img/portfolio/fy-desktop.png",
    mobile: "/img/portfolio/fy-mobile.png",
    scrollSpeed: [0, -120],
  },
];
export default () => {
  return (
    <div className="portfolio">
      <div className="portfolio__wrapper">
        <Parallax
          scale={[5, 0.5]}
          opacity={[0, 1]}
          className="portfolio__title__wrapper"
        >
          <h1 className="portfolio__title">
            <span>My Portfolio</span>
          </h1>
        </Parallax>
        {PortfolioSites.map((site, index) => {
          const mobileScroll = index % 2 === 0;
          return (
            <>
              <div className="portfolio__sep"></div>
              <div className="portfolio__item">
                <div className="portfolio__screenshots">
                  <Parallax
                    translateY={mobileScroll ? undefined : [30, -10]}
                    className="portfolio__screenshots--desktop"
                  >
                    <Parallax
                      easing={"easeInSine"}
                      translateY={
                        (mobileScroll ? undefined : site.scrollSpeed) as any
                      }
                    >
                      <img src={site.desktop} alt="Website" />
                    </Parallax>
                  </Parallax>
                  <Parallax
                    className="portfolio__screenshots--mobile"
                    translateY={mobileScroll ? [30, -10] : undefined}
                  >
                    <Parallax
                      easing={"easeInSine"}
                      translateY={
                        (mobileScroll ? site.scrollSpeed : undefined) as any
                      }
                    >
                      <img src={site.mobile} alt="Website" />
                    </Parallax>
                  </Parallax>
                </div>
                <div className="portfolio__description">
                  <h1>{site.title}</h1>
                  <p>{site.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
