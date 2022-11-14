import React from "react";

import ArrowLink from "../../components/ArrowLink";

interface ContactLinkProps {
  title: string;
  content: string;
  link: string;
  linkTitle: string;
  isTargetBlank?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  title,
  content,
  link,
  linkTitle,
  isTargetBlank,
}) => {
  return (
    <div className="animate-appear">
      <h3 className="font-bold text-lg text-grey-dark dark:text-grey-light pb-1">
        {title}
      </h3>
      <ArrowLink
        title={content}
        link={link}
        linkTitle={linkTitle}
        isTargetBlank={isTargetBlank}
      />
    </div>
  );
};

export default ContactLink;
