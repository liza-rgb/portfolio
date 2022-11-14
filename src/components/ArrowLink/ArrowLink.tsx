import React from "react";
import { ReactComponent as ArrowIcon } from "../../icons/arrow-right.svg";

interface ArrowLinkProps {
  title: string;
  link: string;
  linkTitle: string;
  isTargetBlank?: boolean;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  title,
  link,
  linkTitle,
  isTargetBlank = false,
}) => {
  return (
    <a
      href={link}
      title={linkTitle}
      target={isTargetBlank ? "_blank" : "_self"}
      rel={isTargetBlank ? "noreferrer" : ""}
      className="flex space-x-1 text-blue-bright dark:text-blue-light"
    >
      <ArrowIcon className="fill-blue-bright dark:fill-blue-light animate-arrowPointer w-[24px] h-[24px]" />
      <span>{title}</span>
    </a>
  );
};

export default ArrowLink;
