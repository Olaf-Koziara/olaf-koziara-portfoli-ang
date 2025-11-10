"use client"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import "../i18n/config"

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLang = () => {
        document.documentElement.lang = i18n.language
      }
      updateLang()
      i18n.on("languageChanged", updateLang)
      return () => {
        i18n.off("languageChanged", updateLang)
      }
    }
  }, [i18n])

  return <>{children}</>
}

