import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LangButton = () => {
  const [lang, setLang] = useState(localStorage.lang || "en");
  const { i18n } = useTranslation();

  const toggleLang = (translateTo: string) => {
    switch (translateTo) {
      case "ua":
        localStorage.lang = "ua";
        setLang("ua");
        break;
      case "en":
        localStorage.lang = "en";
        setLang("en");
        break;
      default:
        break;
    }
  };

  const changeLanguage = (event: any) => {
    const translateTo = event.target.innerHTML.toLowerCase();
    i18n.changeLanguage(translateTo);
    toggleLang(translateTo);
  };

  return (
    <button type="button" onClick={changeLanguage}>
      {lang === "en" ? "UA" : "EN"}
    </button>
  );
};

export default LangButton;
