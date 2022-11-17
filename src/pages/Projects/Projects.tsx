import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion";
import PageTitle from "../../components/PageTitle";

import projectsData from "./projectsData";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("pages.projects");
  }, [t]);

  return (
    <div className="Projects">
      <PageTitle title={t("projects.title")} />
      <div className="mt-10">
        <Accordion data={projectsData} />
      </div>
    </div>
  );
};

export default Projects;
