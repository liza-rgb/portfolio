import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import ArrowLink from "../../components/ArrowLink";

import { ABOUT_PAGE_ROUTE, PROJECTS_PAGE_ROUTE } from "../../config/routes";

const Home: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("pages.home");
  }, [t]);

  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <div className="bg-grey-dark bg-opacity-80 w-[600px] h-[600px] rounded-full absolute -bottom-[300px] -left-[300px] animate-appear max-sm:hidden"></div>
        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[300px] h-[300px] rounded-full absolute -bottom-[150px] -left-[150px] sm:left-[100px] lg:left-[200px] animate-appear"></div>
        <div className="bg-grey-dark bg-opacity-80 w-[200px] h-[200px] rounded-full absolute -bottom-[100px] lg:left-[400px] left-[280px] animate-appear max-md:hidden"></div>

        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[600px] h-[600px] rounded-full absolute -bottom-[300px] -right-[300px] animate-appear max-sm:hidden"></div>
        <div className="bg-grey-dark bg-opacity-80 w-[300px] h-[300px] rounded-full absolute -bottom-[150px] -right-[150px] sm:right-[100px] lg:right-[200px] animate-appear"></div>
        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[200px] h-[200px] rounded-full absolute -bottom-[100px] lg:right-[400px] right-[280px] animate-appear max-md:hidden"></div>
      </div>

      <div className="absolute top-[40%] text-center text-grey-dark dark:text-grey-light">
        <h1 className="w-screen font-press-start text-[20px] xs:text-xl animate-appear">
          <span>{t("home.hello").toUpperCase()}</span>
          <span className="max-lg: block">{t("home.name").toUpperCase()}</span>
        </h1>
        <h2 className="text-xs xs:text-sm pt-3 animate-appear">
          {t("home.about")}
        </h2>
        <div className="flex justify-center pt-5 space-x-8 text-sm animate-appear">
          <ArrowLink
            title={t("home.projects-link")}
            link={PROJECTS_PAGE_ROUTE}
            linkTitle={t("home.projects-link-title")}
          />
          <ArrowLink
            title={t("home.about-link")}
            link={ABOUT_PAGE_ROUTE}
            linkTitle={t("home.about-link-title")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
