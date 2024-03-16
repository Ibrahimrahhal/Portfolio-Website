import { CardBody, CardContainer, CardItem } from "@components/3d-card";
import "@components/open-source/index.scss";
import { Icon } from "@iconify/react";
import { useCallback, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ProjectCard = ({
  project,
  isHidden,
}: {
  project: {
    name: string;
    desc: string;
    github?: string;
    npm?: string;
    link: string;
  };
  isHidden?: boolean;
}) => {
  const { name, desc, github, npm, link } = project;
  return (
    <CardContainer className="inter-var">
      <CardBody>
        <a
          className="open-source__card"
          style={{
            visibility: isHidden ? "hidden" : "visible",
          }}
          target="_blank"
          href={link}
        >
          <CardItem translateZ="50">
            <h3 className="open-source__card__title">{name}</h3>
          </CardItem>
          <CardItem translateZ="50">
            <p className="open-source__card__desc">{desc}</p>
          </CardItem>
          <CardItem
            as={"div"}
            translateZ="100"
            className="open-source__card__links w-full"
          >
            <div className="open-source__card__contributes">
              <img
                src="https://avatars.githubusercontent.com/u/24377288?v=4"
                alt="Ibrahim Rahhal"
              />
            </div>
            <div className="open-source__card__metrics">
              <div
                className="open-source__card__metric"
                style={{
                  visibility: github ? "visible" : "hidden",
                }}
              >
                <Icon icon="simple-icons:github" height={20} width={20} />
                <span>{github}</span>
              </div>
              <div
                className="open-source__card__metric"
                style={{
                  visibility: npm ? "visible" : "hidden",
                }}
              >
                <Icon icon="simple-icons:npm" height={20} width={20} />
                <span>{npm}</span>
              </div>
            </div>
          </CardItem>
        </a>
      </CardBody>
    </CardContainer>
  );
};

const projects = [
  {
    name: "react-image-curves-editor",
    desc: "React components to manipulate images curves & view it's levels like within photoshop",
    github: "10",
    npm: "300+",
    link: "https://github.com/Ibrahimrahhal/react-image-curves-editor",
  },
  {
    name: "webpack-file-inherit",
    desc: "Webpack loader that allows you to extend files & override particular block from them, similar to pug extend but for any file.",
    github: "5",
    npm: "100+",
    link: "https://github.com/Ibrahimrahhal/webpack-file-inherit",
  },
  {
    name: "babel-plugin-minify-mangle-names",
    desc: "a fork of @babel/babel-plugin-minify-mangle-names that support JSX variable names mangling",
    npm: "300+",
    link: "https://www.npmjs.com/package/@ibrahim-rahhal/babel-plugin-minify-mangle-names",
  },
  {
    name: "jordan-cities-geojson",
    desc: "GeoJSON data for all jordan cities",
    npm: "300+",
    github: "5",
    link: "https://www.npmjs.com/package/jordan-cities-geojson",
  },
  {
    name: "inject-global-sass",
    desc: "Webpack loader to inject specified sass file(s) globally to all loaded sass files",
    npm: "200+",
    link: "https://www.npmjs.com/package/inject-global-sass",
  },
  {
    name: "webpack-extend-json",
    desc: "Webpack loader that enables you to extend JSON file.",
    npm: "100+",
    link: "https://www.npmjs.com/package/webpack-extend-json",
  },
  {
    name: "webpack-loader-typescript-template",
    desc: "Github public template that includes a simple boilerplate for creating webpack loader using typescript",
    link: "https://github.com/Ibrahimrahhal/webpack-loader-typescript-template",
  },
  {
    name: "css-lens",
    desc: "Trained deep learning model to detect site with major css being missing/ broken from a screenshot",
    link: "https://hub.docker.com/repository/docker/ibrahimrahhal/site-monitor/general",
  },
  {
    name: "broken-sites-screenshots-dataset",
    desc: "a dataset of 20K images of labeled screenshot for both broken(major css missing) & working sites",
    link: "https://www.kaggle.com/datasets/ibrahimrahhal/broken-working-website-screen-shots",
  },
];

export default () => {
  const [wrapperElm, setWrapperElm] = useState(null);
  const wrapperRef = useCallback((node) => {
    setWrapperElm(node);
  }, []);
  const projectsOneRef = useRef(null);
  const projectsTwoRef = useRef(null);

  return (
    <div className="open-source__wrapper" id="open-source" ref={wrapperRef}>
      <div className="open-source">
        <h1 className="open-source__title">
          <span>Open Source Projects</span>
        </h1>
        <h4 className="open-source__desc">
          {/* I am an avid open source contributor, dedicating time to fixing issues and creating projects of my own. I believe in the power of the open source community to drive innovation and collaboration in software development. */}
          I am passionate about open source projects and love to contribute
          whenever I can. Whether it's fixing issues on other projects or
          working on my own projects, I always find time to give back to the
          community. I believe that open source is an essential part of the
          software development ecosystem, & I am proud to be a part of it.
        </h4>
        <div className="open-source__projects" ref={projectsOneRef}>
          {wrapperElm && (
            <Parallax
              onProgressChange={(progress) => {
                if (!projectsOneRef.current) return;
                const elm = projectsOneRef.current as HTMLElement;
                const maxScrollLeft = elm.scrollWidth - elm.clientWidth;
                const scrollLeft = maxScrollLeft * progress;
                elm.scrollLeft = scrollLeft;
              }}
              targetElement={wrapperElm}
            >
              <ProjectCard project={{} as any} isHidden={true} />;
              {projects
                .slice(0, Math.ceil(projects.length / 2))
                .map((project, index) => {
                  return <ProjectCard project={project} />;
                })}
              <ProjectCard project={{} as any} isHidden={true} />;
            </Parallax>
          )}
        </div>
        <div className="open-source__projects" ref={projectsTwoRef}>
          {wrapperElm && (
            <Parallax
              onProgressChange={(progress) => {
                if (!projectsTwoRef.current) return;
                const elm = projectsTwoRef.current as HTMLElement;
                const maxScrollLeft = elm.scrollWidth - elm.clientWidth;
                const scrollLeft = maxScrollLeft * (1 - progress);
                elm.scrollLeft = scrollLeft;
              }}
              targetElement={wrapperElm}
            >
              <ProjectCard project={{} as any} isHidden={true} />;
              {projects
                .slice(Math.ceil(projects.length / 2), projects.length)
                .map((project, index) => {
                  return <ProjectCard project={project} />;
                })}
              <ProjectCard project={{} as any} isHidden={true} />;
            </Parallax>
          )}
        </div>
      </div>
    </div>
  );
};
