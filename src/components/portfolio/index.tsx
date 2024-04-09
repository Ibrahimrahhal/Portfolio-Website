import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "@components/portfolio/index.scss";
import Animation from "@components/animation";
const animationOptions = {
  loop: true,
  autoplay: true,
};
const blackImage = require("@assets/portfolio/black.jpeg");
type PortfolioSite = {
  id: string;
  title: string;
  description: string;
  desktop: {
    src: string;
  };
  mobile: {
    src: string;
  };
  scrollSpeed: number[];
};

const PortfolioSites: PortfolioSite[] = [
  {
    id: "science",
    title: "Science.org",
    description:
      "As the lead engineer on the Science.org project, I developed and maintained a website with over 2.5 million daily users using Node.js, Java, Spring, and TypeScript. I ensured the website matched the client's Figma design and was functional, efficient, and visually appealing. I successfully delivered the project on time, using my expertise in these technologies and attention to detail. My work contributed to the creation of a user-friendly and visually stunning website for scientists and the general public.",
    desktop: {
      src: require("@assets/portfolio/aaas-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/aaas-mobile.png"),
    },
    scrollSpeed: [0, -500],
  },
  {
    id: "pnas",
    title: "PNAS.org",
    description:
      "As the lead developer on the PNAS.org project, I played a crucial role in the development and maintenance of the website for a prestigious scientific journal. I successfully delivered the project on time, to a high quality standard, and in an exceptional timeframe. My work contributed to the creation of a functional, efficient, and user-friendly website providing access to high-quality scientific research.",
    desktop: {
      src: require("@assets/portfolio/pnas-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/pnas-mobile.png"),
    },
    scrollSpeed: [0, -200],
  },
  {
    id: "fy",
    title: "Find Yours",
    description:
      "As the sole developer on the 'Find Yours' web app project, I created and maintained a marketplace for automotive dealers using React, Node.js, TypeScript, MySQL, AWS, Typeorm, and Serverless. I successfully delivered the project on time, using my strong technical skills and ability to work independently. My work helped to create a functional and user-friendly platform for finding and purchasing vehicles.",
    desktop: {
      src: require("@assets/portfolio/fy-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/fy-mobile.png"),
    },
    scrollSpeed: [0, -120],
  },
  {
    id: "sydework",
    title: "Sydework",
    description:
      "Sydework is a task management platform that connects users with local service providers who can complete a wide range of tasks. Built using Angular and powered by AWS and Firebase, Sydework is easy to use and offers a variety of services, making it the go-to destination for all your task management needs. The tech stack behind Sydework includes Angular, Node.js, AWS, and Firebase, allowing for a robust and scalable platform.",
    desktop: {
      src: require("@assets/portfolio/sydework-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/sydework-mobile.png"),
    },
    scrollSpeed: [0, -500],
  },
  {
    id: "zax",
    title: "Zax Operations Bot",
    description:
      "Zax is a powerful automation assistant that can handle all your Github CI tasks and monitor your site's health with advanced AI capabilities. Streamline your release process and enjoy reliable automation with Zax.",
    desktop: {
      src: require("@assets/portfolio/zax-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/zax-mobile.png"),
    },
    scrollSpeed: [0, -500],
  },
  {
    id: "asmj",
    title: "ASMJ Journals",
    description:
      "As the lead developer on the journals.asm.org project, I was responsible for building and maintaining the platform using a tech stack that included PugJS, TypeScript, Bootstrap, GraphQL, Node.js, and Spring. journals.asm.org is a digital publication platform that hosts a wide range of scientific journals, making it an essential resource for researchers and educators. Using the latest technologies, I was able to deliver a high-quality platform that is user-friendly, reliable, and scalable.",
    desktop: {
      src: require("@assets/portfolio/asmj-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/asmj-mobile.png"),
    },
    scrollSpeed: [0, -500],
  },
  {
    id: "nrc",
    title: "Canadian Science Publishing",
    description:
      "As the lead developer on the cdnsciencepub.com project, I single-handedly (well, with the help of PugJS, TypeScript, Bootstrap, GraphQL, Node.js, and Spring) built and maintain this digital publication platform that's the go-to destination for all the top science journals. It's the perfect one-stop-shop for researchers and educators looking to keep up with the latest scientific findings - no need to flip through countless paper journals or risk paper cuts. Plus, it's user-friendly, reliable, and scalable - just like me (I like to think).",
    desktop: {
      src: require("@assets/portfolio/nrc-desktop.png"),
    },
    mobile: {
      src: require("@assets/portfolio/nrc-mobile.png"),
    },
    scrollSpeed: [0, -500],
  },
];

const generateImageClassSelector = (
  site: PortfolioSite,
  isMobile?: boolean | undefined
) => {
  if (typeof isMobile === typeof undefined)
    return `portfolio__screenshots__${site.id}`;
  return `portfolio__screenshots__${site.id}--${
    isMobile ? "mobile" : "desktop"
  }`;
};

export default () => {
  const [shouldStick, setShouldStick] = useState(false);
  const [activeSites, setActiveSites] = useState<string[]>([]);
  return (
    <div className="portfolio" id="portfolio">
      <div
        className={`portfolio__wrapper ${
          shouldStick || activeSites.length > 0
            ? "portfolio__wrapper--no-overflow"
            : ""
        }`}
      >
        <Parallax
          scale={[5, 0.5]}
          opacity={[0, 1]}
          onChange={(element) => {
            if (element.progress > 0.7) {
              setShouldStick(true);
            } else {
              setShouldStick(false);
            }
          }}
          className={`portfolio__title__wrapper ${
            activeSites.length > 0 ? "portfolio__title__wrapper--active" : ""
          }`}
        >
          <h1 className="portfolio__title">
            <span>My Portfolio</span>
          </h1>
        </Parallax>
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        ></div>
        {PortfolioSites.map((site, index) => {
          const mobileScroll = index % 2 === 0;
          return (
            <Parallax
              className={`${generateImageClassSelector(site)}`}
              onEnter={() => {
                setActiveSites([...activeSites, site.id]);
                console.log(`Site ${site.id} is loaded`);
              }}
              onExit={() => {
                setActiveSites(
                  activeSites.filter((_site) => _site !== site.id)
                );
                console.log(`Site ${site.id} is unloaded`);
              }}
            >
              <div className={`portfolio__sep portfolio__sep--enter`}></div>
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
                      <img
                        src={
                          activeSites.includes(site.id)
                            ? site.desktop.src
                            : blackImage
                        }
                        alt="Website"
                      />
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
                      <img
                        src={
                          activeSites.includes(site.id)
                            ? site.mobile.src
                            : blackImage
                        }
                        alt="Website"
                      />
                    </Parallax>
                  </Parallax>
                </div>
                <div className="portfolio__description">
                  <h1>{site.title}</h1>
                  <p>{site.description}</p>
                </div>
              </div>
              <div className={`portfolio__sep portfolio__sep--leave`}></div>
            </Parallax>
          );
        })}
      </div>
      <div className="portfolio__wave">
        <Animation options={animationOptions} animation="wave" />
      </div>
    </div>
  );
};
