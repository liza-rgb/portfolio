import React from "react";

import { useTranslation } from "react-i18next";

interface CertificateCardProps {
  image: any;
  title: string;
  date: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  image,
  title,
  date,
  link,
}) => {
  const { t } = useTranslation();

  const getDateString = () => {
    const day = parseInt(date.slice(0, 2));
    const month = parseInt(date.slice(3, 5));
    const year = parseInt(date.slice(6, 10));

    return `${day} ${t("months." + month)}, ${year}`;
  };

  return (
    <div className="CertificateCard">
      <img
        src={image}
        alt={title}
        className="h-[380px] rounded-[50px] mx-auto object-cover"
      />
      <a href={link} title={t("about.view-certificate")}>
        <h3 className="text-center text-md font-bold px-3 pt-5">{title}</h3>
      </a>
      <p className="text-center text-sm pt-1">{getDateString()}</p>
    </div>
  );
};

export default CertificateCard;
