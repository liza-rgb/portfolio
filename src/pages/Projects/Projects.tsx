import React from "react";

import Accordion from "../../components/Accordion";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

import projectData from "./projectsData";

const Projects: React.FC = () => {
  return (
    <div className="Projects pt-[110px] px-16">
      <PageTitle
        title="Take a look at what I've been working on!"
        className="text-grey-dark dark:text-grey-light animate-appear"
      />
      <Accordion data={projectData} />
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
