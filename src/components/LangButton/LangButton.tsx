import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LangButton = () => {
  const [lang, setLang] = useState(localStorage.lang || "EN");
  const { i18n } = useTranslation();

  const toggleLang = (translateTo: string) => {
    switch (translateTo) {
      case "UA":
        localStorage.lang = "UA";
        setLang("UA");
        break;
      case "EN":
        localStorage.lang = "EN";
        setLang("EN");
        break;
      default:
        break;
    }
  };

  const changeLanguage = (event: any) => {
    const translateTo = event.target.innerHTML;
    i18n.changeLanguage(translateTo.toLowerCase());
    toggleLang(translateTo);
  };

  useEffect(() => {
    console.log(localStorage.lang);
    if (localStorage.lang) {
      i18n.changeLanguage(localStorage.lang.toLowerCase());
    }
  }, [i18n]);

  return (
    <button type="button" onClick={changeLanguage}>
      {lang === "EN" ? "UA" : "EN"}
    </button>
  );
};

export default LangButton;
