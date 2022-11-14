import React from "react";

import { useTranslation } from "react-i18next";

import { PROJECTS_PAGE_ROUTE } from "../../config/routes";
import { RESUME_LINK } from "../../config/links";

import ArrowLink from "../../components/ArrowLink";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ArrowIcon } from "../../icons/arrow-right.svg";
import Footer from "../../components/Footer";
import CertificateCard from "../../components/CertificateCard";
import SkillTag from "../../components/SkillTag";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="About text-grey-dark dark:text-grey-light pt-[110px] px-16">
      <div className="grid grid-cols-2">
        <div>
          <PageTitle title={t("about.title")} className="animate-appear" />
          <h2 className="text-md font-bold py-3 animate-appear text-blue-bright dark:text-blue-light">
            {t("about.job")}
          </h2>
          <p className="py-5 text-sm animate-appear">{t("about.content")}</p>
          <ArrowLink
            title={t("about.projects-link")}
            link={PROJECTS_PAGE_ROUTE}
            linkTitle={t("about.projects-link-title")}
          />

          <div className="mt-5">
            <SkillTag name="HTML/CSS/JavaScript" />
            <SkillTag name="React.js" />
            <SkillTag name="Redux" />
            <SkillTag name="TypeScript" />
            <SkillTag name="React Native" />
            <SkillTag name="Storybook" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap 5.0" />
            <SkillTag name="Docker" />
            <SkillTag name="MySQL/Postgress" />
            <SkillTag name="MongoDB" />
            <SkillTag name="Sequelize ORM" />
            <SkillTag name="Node.js" />
            <SkillTag name="Nest.js" />
            <SkillTag name="Git" />
            <SkillTag name="REST" />
            <SkillTag name="i18next" />
            <SkillTag name="C++" />
            <SkillTag name="Python" />
          </div>

          <div className="mt-5">
            <a
              href={RESUME_LINK}
              className="font-bold border-2 border-grey-dark dark:border-grey-light px-3 py-1 rounded-lg"
            >
              {t("about.view-resume")}
            </a>
          </div>
        </div>

        <div className="px-24">
          <img
            src={require("../../assets/me.jpg")}
            alt="Yelyzaveta Stoliarchuk"
            className="rounded-full animate-appear"
          />
        </div>
      </div>

      <div className="py-10">
        <p className="text-center font-bold pb-3 animate-appear">
          {t("about.certificates")}
        </p>
        <div className="animate-bounce py-3">
          <ArrowIcon className="w-[30px] h-[30px] fill-grey-light rotate-90 mx-auto bg-blue-bright dark:bg-blue-light rounded-full shadow-md" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-12">
        <CertificateCard
          image={require("../../assets/certificates/udemy-bootcamp.jpg")}
          title="Udemy: The Web Developer Bootcamp 2022"
          date="28/08/2022"
          link="https://www.udemy.com/certificate/UC-ea6fe40f-1209-49be-84ec-f367ecad3239/"
        />
        <CertificateCard
          image={require("../../assets/certificates/shecodes-responsive.png")}
          title="SheCodes: Responsive Web Development"
          date="22/07/2022"
          link="https://www.shecodes.io/certificates/787fa521134d401bc42801d6c69e5a56"
        />
        <CertificateCard
          image={require("../../assets/certificates/shecodes-plus.png")}
          title="SheCodes: Front End Development"
          date="04/07/2022"
          link="https://www.shecodes.io/certificates/ae087a3432ca8e514f7411a059b55dac"
        />
        <CertificateCard
          image={require("../../assets/certificates/shecodes-basics.png")}
          title="SheCodes: Introduction to Coding"
          date="23/05/2022"
          link="https://www.shecodes.io/certificates/88f62bb23db2607234c249fc0f6454d1"
        />
        <CertificateCard
          image={require("../../assets/certificates/coursera-react.jpeg")}
          title="Coursera: Front-End Web Development with React"
          date="02/09/2021"
          link="https://coursera.org/share/40dd0999041b4858e447bf2fa0908794"
        />
        <CertificateCard
          image={require("../../assets/certificates/coursera-bootstrap.jpeg")}
          title="Coursera: Front-End Web UI Frameworks and Tools: Bootstrap 4"
          date="23/08/2021"
          link="https://coursera.org/share/a1ae33750e2c46affdfe3a2b72e18d17"
        />
        <CertificateCard
          image={require("../../assets/certificates/coursera-basics.jpeg")}
          title="Coursera: HTML, CSS, and Javascript for Web Developers"
          date="18/08/2021"
          link="https://coursera.org/share/6c44e177db5ed5794180c3ec0097725a"
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
