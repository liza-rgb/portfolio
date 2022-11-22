import React from "react";

import { useTranslation } from "react-i18next";

import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  GITHUB_REPO_LINK,
  LINKEDIN_LINK,
} from "../../config/links";

import { ReactComponent as GithubIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../icons/facebook.svg";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const iconStyles =
    "w-[30px] h-[30px] p-1 fill-grey-light dark:fill-blue-dark";
  const linkStyles =
    "w-[30px] h-[30px] rounded-full bg-blue-bright dark:bg-blue-light hover:bg-grey-dark dark:hover:bg-grey-light";

  return (
    <div className="Footer py-8 animate-appear">
      <div className="flex justify-center space-x-10">
        <a href={GITHUB_LINK} className={linkStyles}>
          <GithubIcon className={iconStyles} />
        </a>
        <a href={LINKEDIN_LINK} className={linkStyles}>
          <LinkedinIcon className={iconStyles} />
        </a>
        <a href={FACEBOOK_LINK} className={linkStyles}>
          <FacebookIcon className={iconStyles} />
        </a>
      </div>
      <div className="pt-3 text-center text-xs text-grey-dark dark:text-grey-light px-1 pb-1">
        {t("footer.main")}
        <a
          href={GITHUB_REPO_LINK}
          title="GitHub Repository"
          className="text-blue-bright dark:text-blue-light hover:underline"
        >
          {t("footer.open-sourced")}
        </a>
        .{" "}
      </div>
    </div>
  );
};

export default Footer;
