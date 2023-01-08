import React from "react";
import { Parallax } from "react-scroll-parallax";
import "@components/portfolio/index.scss";
import Animation from "@components/animation";
const animationOptions = {
  loop: true,
  autoplay: true,
};

const PortfolioSites = [
  {
    title: "Science.org",
    description:
      "As the lead engineer on the Science.org project, I developed and maintained a website with over 2.5 million daily users using Node.js, Java, Spring, and TypeScript. I ensured the website matched the client's Figma design and was functional, efficient, and visually appealing. I successfully delivered the project on time, using my expertise in these technologies and attention to detail. My work contributed to the creation of a user-friendly and visually stunning website for scientists and the general public.",
    desktop: require("@assets/portfolio/aaas-desktop.png"),
    mobile: require("@assets/portfolio/aaas-mobile.png"),
    scrollSpeed: [0, -500],
  },
  {
    title: "PNAS.org",
    description:
      "As the lead developer on the PNAS.org project, I played a crucial role in the development and maintenance of the website for a prestigious scientific journal. I successfully delivered the project on time, to a high quality standard, and in an exceptional timeframe. My work contributed to the creation of a functional, efficient, and user-friendly website providing access to high-quality scientific research.",
    desktop: require("@assets/portfolio/pnas-desktop.png"),
    mobile: require("@assets/portfolio/pnas-mobile.png"),
    scrollSpeed: [0, -200],
  },
  {
    title: "Find Yours",
    description:
      "As the sole developer on the 'Find Yours' web app project, I created and maintained a marketplace for automotive dealers using React, Node.js, TypeScript, MySQL, AWS, Typeorm, and Serverless. I successfully delivered the project on time, using my strong technical skills and ability to work independently. My work helped to create a functional and user-friendly platform for finding and purchasing vehicles.",
    desktop: require("@assets/portfolio/fy-desktop.png"),
    mobile: require("@assets/portfolio/fy-mobile.png"),
    scrollSpeed: [0, -120],
  },
  {
    title: "Sydework",
    description:
      "Sydework is a task management platform that connects users with local service providers who can complete a wide range of tasks. Built using Angular and powered by AWS and Firebase, Sydework is easy to use and offers a variety of services, making it the go-to destination for all your task management needs. The tech stack behind Sydework includes Angular, Node.js, AWS, and Firebase, allowing for a robust and scalable platform.",
    desktop: require("@assets/portfolio/sydework-desktop.png"),
    mobile: require("@assets/portfolio/sydework-mobile.png"),
    scrollSpeed: [0, -500],
  },
  {
    title: "Zax Operations Bot",
    description:
      "Zax is a powerful automation assistant that can handle all your Github CI tasks and monitor your site's health with advanced AI capabilities. Streamline your release process and enjoy reliable automation with Zax.",
    desktop: require("@assets/portfolio/zax-desktop.png"),
    mobile: require("@assets/portfolio/zax-mobile.png"),
    scrollSpeed: [0, -500],
  },
  {
    title: "ASMJ Journals",
    description:
      "As the lead developer on the journals.asm.org project, I was responsible for building and maintaining the platform using a tech stack that included PugJS, TypeScript, Bootstrap, GraphQL, Node.js, and Spring. journals.asm.org is a digital publication platform that hosts a wide range of scientific journals, making it an essential resource for researchers and educators. Using the latest technologies, I was able to deliver a high-quality platform that is user-friendly, reliable, and scalable.",
    desktop: require("@assets/portfolio/asmj-desktop.png"),
    mobile: require("@assets/portfolio/asmj-mobile.png"),
    scrollSpeed: [0, -500],
  },
  {
    title: "Canadian Science Publishing",
    description:
      "As the lead developer on the cdnsciencepub.com project, I single-handedly (well, with the help of PugJS, TypeScript, Bootstrap, GraphQL, Node.js, and Spring) built and maintain this digital publication platform that's the go-to destination for all the top science journals. It's the perfect one-stop-shop for researchers and educators looking to keep up with the latest scientific findings - no need to flip through countless paper journals or risk paper cuts. Plus, it's user-friendly, reliable, and scalable - just like me (I like to think).",
    desktop: require("@assets/portfolio/nrc-desktop.png"),
    mobile: require("@assets/portfolio/nrc-mobile.png"),
    scrollSpeed: [0, -500],
  },
];
export default () => {
  return (
    <div className="portfolio" id="portfolio">
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
      <div className="portfolio__wave">
        <Animation options={animationOptions} animation="wave" />
      </div>
    </div>
  );
};
