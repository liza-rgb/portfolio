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
        console.log(localStorage.lang, lang);
        break;
      case "EN":
        localStorage.lang = "EN";
        setLang("EN");
        console.log(localStorage.lang, lang);
        break;
      default:
        break;
    }
  };

  const changeLanguage = (event: any) => {
    console.log(localStorage.lang, lang);
    const translateTo = event.target.innerHTML;
    i18n.changeLanguage(translateTo.toLowerCase());
    toggleLang(translateTo);
  };

  useEffect(() => {
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
