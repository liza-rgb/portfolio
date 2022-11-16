import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="text-grey-dark dark:text-grey-light animate-appear text-md md:text-xl">
      {title}
    </h1>
  );
};

export default PageTitle;
