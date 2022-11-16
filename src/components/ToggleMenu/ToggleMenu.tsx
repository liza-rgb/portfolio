import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import MenuLink from "./MenuLink";

import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PROJECTS_PAGE_ROUTE,
} from "../../config/routes";

const ToggleMenu = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    const toggleMenuTo = !isActive;
    setIsActive(toggleMenuTo);
  };

  const getIcon = () => {
    if (isActive) {
      return (
        <CloseIcon className="w-[30px] h-[30px] fill-grey-dark stroke-grey-dark dark:fill-grey-light dark:stroke-grey-light" />
      );
    }
    return (
      <MenuIcon className="w-[30px] h-[30px] fill-grey-dark stroke-grey-dark dark:fill-grey-light dark:stroke-grey-light" />
    );
  };

  const getVisibility = () => {
    if (!isActive) {
      return "hidden";
    }
  };

  return (
    <>
      <button type="button" onClick={toggleMenu}>
        {getIcon()}
      </button>
      <div
        className={
          "bg-grey-light dark:bg-blue-dark h-screen w-screen top-[110px] right-0 absolute z-10 " +
          getVisibility()
        }
      >
        <div className="space-y-4 text-center px-16 py-20 animate-appearTop">
          <MenuLink title={t("menu.home")} link={HOME_PAGE_ROUTE} />
          <MenuLink title={t("menu.projects")} link={PROJECTS_PAGE_ROUTE} />
          <MenuLink title={t("menu.about")} link={ABOUT_PAGE_ROUTE} />
          <MenuLink title={t("menu.contact")} link={CONTACT_PAGE_ROUTE} />
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
