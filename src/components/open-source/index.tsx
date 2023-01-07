import "@components/open-source/index.scss";
import { Icon } from "@iconify/react";
import { useCallback, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ProjectCard = () => {
  return (
    <div className="open-source__card">
      <h3 className="open-source__card__title">Webpack-File-Inherit</h3>
      <p className="open-source__card__desc">
        A webpack plugin that allows you to inherit files from other
        directories.
      </p>
      <div className="open-source__card__links">
        <div className="open-source__card__contributes">
          <img
            src="https://avatars.githubusercontent.com/u/24377288?v=4"
            alt="Ibrahim Rahhal"
          />
        </div>
        <div className="open-source__card__metrics">
          <div className="open-source__card__metric">
            <Icon icon="simple-icons:github" height={20} width={20} />
            <span>1.2k</span>
          </div>
          <div className="open-source__card__metric">
            <Icon icon="simple-icons:npm" height={20} width={20} />
            <span>1.2k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
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
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </Parallax>
          )}
        </div>
      </div>
    </div>
  );
};
