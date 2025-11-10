"use client"

import { SITE_SLUGS } from "@/config/siteConfig"
import { Link } from "../../utils/Link"
import { Icon } from "../Icon"
import { MobileMenu } from "./MobileMenu"
import { MobileMenuButton } from "./MobileMenuButton"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTranslation } from "react-i18next"

export const TopBarV2: React.FC = () => {
  const { t } = useTranslation()

  const navItems = [
    { nameKey: "nav.projects", href: SITE_SLUGS.projects },
    { nameKey: "nav.about", href: SITE_SLUGS.about },
  ]

  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5 md:text-sm">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-md">
        <div className="relative flex flex-col">
          <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:py-2.5">
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap">
              <Icon name="react" height={24} width={24} fill="#61dafb" className="rounded shadow-md" />
              {t("nav.brandName")}
            </Link>

            <ul className="md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-96 hidden items-center gap-4 font-medium transition-all duration-300 ease-in-out md:flex">
              {navItems.map((item) => (
                <li key={item.nameKey} className="flex">
                  <Link href={item.href} className="bubble-hover p-1 px-2">
                    {t(item.nameKey)}
                  </Link>
                </li>
              ))}
              <li className="flex">
                <LanguageSwitcher />
              </li>
              <li className="flex">
                <Link
                  href={SITE_SLUGS.contact}
                  className="bubble-hover hidden rounded-full border border-gray-200 px-3 py-1 font-medium shadow-md duration-300 hover:translate-y-0.5 hover:border-white hover:shadow-none md:inline-block"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>

            <MobileMenuButton />
          </div>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}
