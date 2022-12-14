import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { ReactComponent as GitHubIcon } from "../../icons/github.svg";
import { ProjectDataProps } from "../../pages/Projects/projectsData";

interface AccordionProps {
  data: ProjectDataProps[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const { t } = useTranslation();

  const [opened, setOpened] = useState(-1);
  const recentProjects = data.slice().reverse();

  const getVisibility = (index: number) => {
    if (index !== opened) {
      return "hidden";
    }
  };

  const closeTab = (index: number) => {
    if (index === opened) {
      setOpened(-1);
    }
  };

  const getImage = () => {
    if (opened === -1) {
      return require("../../assets/noise.png");
    }
    return recentProjects[opened].image;
  };

  const getProjectLaunchLink = (link: string) => {
    if (link.trim().length) {
      return (
        <a href={link} className={linkStyles} target="_blank" rel="noreferrer">
          {t("projects.launch-link")}
        </a>
      );
    }
  };

  const getSourceCodeLink = (link: string) => {
    if (link.trim().length) {
      return (
        <a href={link} className={linkStyles} target="_blank" rel="noreferrer">
          <GitHubIcon className="w-[22px] h-[22px] mr-2" />
          {t("projects.source-code-link")}
        </a>
      );
    }
  };

  const iconStyles = "w-[15px] h-[15px] fill-grey-light dark:fill-blue-dark";
  const linkStyles =
    "flex px-2 py-1 mt-4 dark:bg-blue-light dark:hover:bg-blue-dark bg-blue-bright hover:bg-grey-light dark:text-blue-dark dark:hover:text-blue-light text-grey-light hover:text-blue-bright border-2 border-blue-bright dark:border-blue-light rounded-lg font-bold transition-colors duration-300 fill-grey-light dark:fill-blue-dark hover:fill-blue-bright dark:hover:fill-blue-light";

  return (
    <div className="Accordion">
      <div className="grid md:grid-cols-2">
        <div className="space-y-4 max-md:order-1">
          {recentProjects.map((project, index) => {
            return (
              <div key={index}>
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setOpened(index)}
                    className={index === opened ? "hidden" : ""}
                  >
                    <div className="dark:bg-grey-light bg-grey-dark py-2 pl-2 rounded-l-full border dark:border-grey-light border-grey-dark">
                      <PlusIcon className={iconStyles} />
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => closeTab(index)}
                    className={getVisibility(index)}
                  >
                    <div className="dark:bg-grey-light bg-grey-dark py-2 pl-2 rounded-l-full border dark:border-grey-light border-grey-dark">
                      <MinusIcon className={iconStyles} />
                    </div>
                  </button>
                  <div className="dark:bg-grey-light bg-grey-dark dark:text-blue-dark text-grey-light px-4 text-sm py-2 w-full font-bold border dark:border-grey-light border-grey-dark">
                    {project.title}
                  </div>
                </div>

                <div
                  className={
                    "ml-7 border-2 dark:border-grey-light border-grey-dark dark:text-grey-light text-grey-dark text-sm " +
                    getVisibility(index)
                  }
                >
                  <div className="px-4 py-2">
                    <div>{t(project.description)}</div>
                    <div className="flex space-x-4">
                      {getProjectLaunchLink(project.projectLink)}
                      {getSourceCodeLink(project.githubLink)}
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="mx-auto pt-3 w-full object-cover md:hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-10">
          <img
            src={getImage()}
            alt=""
            className="md:h-[330px] lg:h-[400px] xl:w-[470px] lg:w-[400px] w-screen max-h-[500px] object-cover xl:px-[45px] lg:px-[30px] pr-[90px] pl-[20px] py-[30px] max-md:hidden"
          />
          <img
            src={require("../../assets/tv.png")}
            alt=""
            className="md:h-[300px] lg:h-[370px] xl:h-[400px] w-[600px] lg:-mt-[400px] md:-mt-[324px] max-md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
