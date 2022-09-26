import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "@components/skills/index.scss";
import Skills from "@components/skills/skills";
import { Parallax } from "react-scroll-parallax";

const skillsWidgetOptions: {
  numberOfSkillsToShowPerSlide: number;
  numberOfTransitions: number;
} = {
  numberOfSkillsToShowPerSlide: 6,
  numberOfTransitions: Skills.reduce((prev, current) => {
    return prev + Math.ceil(current.skills.length / 6);
  }, 0),
};

const buildSkillsMap = () => {
  const skillsMap: {
    [k: number]: {
      name: string;
      desc?: string;
      skills: {
        name: string;
        icon?: string;
      }[];
    };
  } = {
    0: {
      name: "Things I'm Good At",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse euismod odio at massa finibus, ac aliquet nisi
      fringilla. Sed a libero dapibus, tristique est at, vulputate
      nulla. Morbi vitae fermentum mauris.`,
      skills: Array(skillsWidgetOptions.numberOfSkillsToShowPerSlide).fill({
        name: "",
        icon: "empty",
      }),
    },
  };

  Skills.forEach((skill) => {
    function build(startIndex: number, skills: any[]) {
      let startingPoint = parseInt(Object.keys(skillsMap).reverse()[0]);
      let skillSection = skills.slice(
        startIndex,
        startIndex + skillsWidgetOptions.numberOfSkillsToShowPerSlide
      );
      if (
        skillSection.length < skillsWidgetOptions.numberOfSkillsToShowPerSlide
      )
        skillSection = skillSection.concat(
          Array(
            skillsWidgetOptions.numberOfSkillsToShowPerSlide -
              skillSection.length
          ).fill({
            name: "",
            icon: "empty",
          })
        );
      skillsMap[startingPoint + 1] = {
        name: skill.name,
        desc: skill.desc,
        skills: skillSection,
      };
      if (
        startIndex + skillsWidgetOptions.numberOfSkillsToShowPerSlide <
        skill.skills.length
      )
        build(
          startIndex + skillsWidgetOptions.numberOfSkillsToShowPerSlide,
          skills
        );
    }
    build(0, skill.skills);
  });
  return skillsMap;
};

export default (): ReactElement => {
  const skillsMap = useMemo(() => buildSkillsMap(), []);
  const [progress, setProgress] = useState(0);
  const [isSkillsTransitioning, setIsSkillsTransitioning] = useState(false);

  let activeSkillSectionKey =
    Math.round((progress * Object.keys(skillsMap).length) / 100) - 1;
  activeSkillSectionKey < 0 ? (activeSkillSectionKey = 0) : null;
  const [activeSkillSection, setActiveSkillSection] = useState(
    skillsMap[activeSkillSectionKey]
  );

  useMemo(() => {
    setIsSkillsTransitioning(true);
    setTimeout(() => {
      setIsSkillsTransitioning(false);
      setActiveSkillSection(skillsMap[activeSkillSectionKey]);
    }, 200);
  }, [activeSkillSectionKey]);
  const wrapperRef = useRef(null);
  const [targetElement, setElement] = useState();
  useEffect(() => {
    if (wrapperRef.current) setElement(wrapperRef.current);
  }, []);

  return (
    <>
      <Parallax
        onProgressChange={(progress) => {
          //cleaning scrolling noise
          let percentage = ~~((progress / 0.8) * 100);
          if (percentage > 100) percentage = 100;
          setProgress(percentage);
        }}
      >
        <div className="skills__wrapper" ref={wrapperRef}>
          <Parallax
            targetElement={targetElement}
            style={{ position: "sticky", top: 0 }}
          >
            <div className={`skills ${progress > 99 ? "skills--out" : ""}`}>
              <div className="skills__circle">
                <div className="skills__title">
                  <h1>{activeSkillSection.name}</h1>
                  <p>{activeSkillSection.desc}</p>
                </div>
                <Parallax
                  rotate={[0, 360 * 3]}
                  className="skills__border"
                  targetElement={targetElement}
                >
                  {activeSkillSection.skills.map((Skill, i) => {
                    const r = 75 / 2;
                    const theta =
                      (Math.PI * 2 * i) / activeSkillSection.skills.length;
                    const x = Math.cos(theta) * r;
                    const y = Math.sin(theta) * r;
                    return (
                      <div
                        key={i}
                        className={`skills__skill ${
                          Skill.name && !isSkillsTransitioning
                            ? "skills__skill--opened"
                            : ""
                        }`}
                        style={{
                          transform: `translate(${x}vmin, ${y}vmin)`,
                        }}
                      >
                        <Parallax
                          rotate={[360 * 3, 0]}
                          targetElement={targetElement}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <img
                            loading="lazy"
                            src={`/svgs/${Skill.icon}.svg`}
                            alt={Skill.name}
                            title={Skill.name}
                            height="60%"
                            width="60%"
                          />
                          <span>{Skill.name}</span>
                        </Parallax>
                      </div>
                    );
                  })}
                </Parallax>
              </div>
            </div>
          </Parallax>
        </div>
      </Parallax>
    </>
  );
};
