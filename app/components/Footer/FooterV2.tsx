"use client"

import { H2 } from "@/app/ui/Elements"
import { SITE_NAP, SITE_SLUGS } from "@/config/siteConfig"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Socials } from "../Socials"
import { TextSlider } from "./TextSlider"

export const socialLinks = [
  {
    href: SITE_NAP.profiles.linkedIn,
    icon: "linkedin",
  },

  {
    href: SITE_NAP.profiles.github,
    icon: "github",
  },
]

export const FooterV2: React.FC = () => {
  const { t } = useTranslation()

  const words: [string, string, string, string] = [
    t("footer.word1"),
    t("footer.word2"),
    t("footer.word3"),
    t("footer.word4"),
  ]

  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="xs:pb-32 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-24 text-white sm:pb-40 md:gap-16 md:px-11 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-white md:text-6xl md:leading-14">
            {t("footer.lets")}&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-gray-500">{t("footer.incredibleWorkTogether")}</span>
          </H2>
          <ul className="flex flex-col justify-between gap-5.5 border-b border-gray-500 pb-6 text-sm md:flex-row md:items-center md:gap-8">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">{t("footer.email")}</span>
              <Link href="mailto:olaf.koziara@gmail.com" className="w-fit text-sm transition-colors duration-200 hover:text-gray-300">
                olaf.koziara@gmail.com
              </Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-gray-500">{t("footer.socials")}</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>

          <div className="footer-links flex gap-4">
            <Link href={SITE_SLUGS.home} className="text-sm transition-colors duration-200 hover:text-gray-300">
              {t("footer.home")}
            </Link>
            <Link href={SITE_SLUGS.projects} className="text-sm transition-colors duration-200 hover:text-gray-300">
              {t("nav.projects")}
            </Link>
            <Link href={SITE_SLUGS.about} className="text-sm transition-colors duration-200 hover:text-gray-300">
              {t("nav.about")}
            </Link>
            <Link href={SITE_SLUGS.contact} className="text-sm transition-colors duration-200 hover:text-gray-300">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs text-nowrap md:flex-row">
          <div className="flex items-center gap-5.5 max-sm:flex-wrap">
            <h3>
              <span className="text-[#b8b8b8]">{t("footer.basedIn")} </span> Gdańsk, Poland
            </h3>
            <div className="flex gap-4">
            </div>
          </div>
          <span className="text-[#b8b8b8]">{t("footer.copyright")}</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium whitespace-nowrap text-white md:text-[180px] lg:text-[240px]">
          {t("nav.brandName")}
        </h2>
      </div>
    </footer>
  )
}
