"use client"

import { useTranslation } from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language.split("-")[0]
  const isEnglish = currentLang === "en"

  const toggleLanguage = () => {
    const newLang = isEnglish ? "pl" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="bubble-hover rounded-full border border-gray-200 px-3 py-1 font-medium shadow-md duration-300 hover:translate-y-0.5 hover:border-white hover:shadow-none"
      aria-label="Toggle language"
    >
      {currentLang.toUpperCase()}
    </button>
  )
}
