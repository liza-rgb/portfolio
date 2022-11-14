import React from "react";

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
  const iconStyles = "w-[30px] h-[30px] p-1 fill-grey-light";
  const linkStyles =
    "w-[30px] h-[30px] rounded-full bg-blue-bright hover:bg-grey-dark transition-colors duration-300";

  return (
    <div className="Footer py-5 w-screen">
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
      <div className="pt-3 text-center text-xs">
        This website was coded by Yelyzaveta Stoliarchuk, and is{" "}
        <a
          href={GITHUB_REPO_LINK}
          title="GitHub Repository"
          className="text-blue-bright hover:text-grey-dark"
        >
          open-sourced
        </a>
        .{" "}
      </div>
    </div>
  );
};

export default Footer;
