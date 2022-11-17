import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { PROJECTS_PAGE_ROUTE } from "../../config/routes";
import { RESUME_LINK } from "../../config/links";

import ArrowLink from "../../components/ArrowLink";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ArrowIcon } from "../../icons/arrow-right.svg";
import CertificateCard from "../../components/CertificateCard";
import SkillTag from "../../components/SkillTag";

import certificatesData from "./certificatesData";
import { CertificateDataProps } from "./certificatesData";
import skillsData from "./skillsData";

const About: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("pages.about");
  }, [t]);

  return (
    <div className="About text-grey-dark dark:text-grey-light">
      <div className="grid md:grid-cols-2">
        <div>
          <PageTitle title={t("about.title")} />
          <h2 className="text-md font-bold py-3 animate-appear text-blue-bright dark:text-blue-light">
            {t("about.job")}
          </h2>
          <p className="py-5 text-sm animate-appear">{t("about.content")}</p>
          <div className="animate-appear">
            <ArrowLink
              title={t("about.projects-link")}
              link={PROJECTS_PAGE_ROUTE}
              linkTitle={t("about.projects-link-title")}
            />
          </div>

          <div className="mt-5 animate-appear">
            {skillsData.map((skill, index) => {
              return <SkillTag name={skill} key={index} />;
            })}
          </div>

          <div className="mt-5 animate-appear">
            <a
              href={RESUME_LINK}
              className="font-bold border-2 border-grey-dark hover:bg-grey-dark dark:border-grey-light dark:hover:bg-grey-light px-3 py-1 rounded-lg text-grey-dark hover:text-grey-light dark:text-grey-light dark:hover:text-blue-dark transition-colors duration-300 block text-center animate-appear"
            >
              {t("about.view-resume")}
            </a>
          </div>
        </div>

        <div className="lg:px-12 xl:px-24 md:px-0 sm:px-20 max-md:my-8">
          <img
            src={require("../../assets/me.jpg")}
            alt="Yelyzaveta Stoliarchuk"
            className="rounded-full animate-appear max-md:max-h-[600px] mx-auto"
          />
        </div>
      </div>

      <div className="xl:py-10 lg:py-8">
        <p className="text-center font-bold pb-3 animate-appear">
          {t("about.certificates")}
        </p>
        <div className="animate-bounce py-3">
          <ArrowIcon className="w-[30px] h-[30px] fill-grey-light rotate-90 mx-auto bg-blue-bright dark:bg-blue-light rounded-full shadow-md" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-y-12 mb-10">
        {certificatesData
          .slice()
          .reverse()
          .map((certificate, index) => {
            return (
              <CertificateCard
                key={index}
                image={certificate.image}
                title={certificate.title}
                link={certificate.link}
                date={certificate.date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default About;
