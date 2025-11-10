"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import enTranslations from "./locales/en/common.json"
import plTranslations from "./locales/pl/common.json"

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enTranslations,
        },
        pl: {
          common: plTranslations,
        },
      },
      lng: "en",
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
    })
}

export default i18n
