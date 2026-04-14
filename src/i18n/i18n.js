"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ro from "../../messages/ro.json";
import en from "../../messages/en.json";

const resources = {
ro: {
    translation: ro // This tells i18n that 'ro' is the language and 'translation' is the namespace
  },
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
  