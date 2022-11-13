import React from "react";

import { useTranslation } from "react-i18next";

import Sprite from "../../components/Sprite";
import { MoveType } from "../../components/Sprite";
import ArrowLink from "../../components/ArrowLink";

import { ABOUT_PAGE_ROUTE, PROJECTS_PAGE_ROUTE } from "../../config/routes";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="absolute top-[40%] text-center text-grey-dark dark:text-grey-light z-10">
        <div className="w-screen font-press-start text-xl animate-appear">
          <span>{t("home.hello").toUpperCase()}</span>
          <span className="max-lg: block">{t("home.name").toUpperCase()}</span>
        </div>
        <div className="text-sm pt-3 animate-appear">{t("home.about")}</div>
        <div className="flex justify-center pt-5 space-x-8 text-sm animate-appear">
          <ArrowLink
            title={t("home.projects-link")}
            link={PROJECTS_PAGE_ROUTE}
          />
          <ArrowLink title={t("home.about-link")} link={ABOUT_PAGE_ROUTE} />
        </div>
      </div>

      <div className="h-screen relative overflow-hidden">
        <div className="bg-grey-dark bg-opacity-80 w-[600px] h-[600px] rounded-full absolute -bottom-[300px] -left-[300px] animate-appear"></div>
        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[300px] h-[300px] rounded-full absolute -bottom-[150px] left-[200px] animate-appear"></div>
        <div className="bg-grey-dark bg-opacity-80 w-[200px] h-[200px] rounded-full absolute -bottom-[100px] left-[400px] animate-appear"></div>

        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[600px] h-[600px] rounded-full absolute -bottom-[300px] -right-[300px] animate-appear"></div>
        <div className="bg-grey-dark bg-opacity-80 w-[300px] h-[300px] rounded-full absolute -bottom-[150px] right-[200px] animate-appear"></div>
        <div className="bg-blue-bright dark:bg-blue-light bg-opacity-80 w-[200px] h-[200px] rounded-full absolute -bottom-[100px] right-[400px] animate-appear"></div>
      </div>
    </div>
  );
};

export default Home;
