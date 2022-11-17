import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import ua from "./locales/ua/ua.json";

const getLang = () => {
  if ("lang" in localStorage) {
    return localStorage.lang.toLowerCase();
  }
  return "en";
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: getLang(),
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
    debug: false,
    keySeparator: ".",
    detection: {
      order: ["queryString", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
