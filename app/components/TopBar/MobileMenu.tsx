"use client"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useUI } from "@react-zero-ui/core"
import { SITE_SLUGS } from "@/config/siteConfig"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./LanguageSwitcher"

export const MobileMenu: React.FC<{ navItems: { nameKey: string; href: string }[] }> = ({ navItems }) => {
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")
  const { t } = useTranslation()

  return (
    <ul className={clsx("mobile-menu-container flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden")}>
      {navItems.map((item, index) => (
        <li
          key={item.nameKey}
          className="mobile-menu-item transform text-lg transition-all duration-300 ease-in-out"
          style={{ "--index": index } as React.CSSProperties}
        >
          <Link href={item.href} onClick={() => setMobileMenu("closed")} className="block pt-4 font-medium">
            {t(item.nameKey)}
          </Link>
        </li>
      ))}
      <li className={clsx("mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out")}>
        <Link
          href={SITE_SLUGS.contact}
          onClick={() => setMobileMenu("closed")}
          className="bubble-hover block rounded-full border border-gray-200 bg-white px-3 py-2 text-center font-medium shadow-lg duration-300 hover:border-white"
        >
          {t("nav.contact")}
        </Link>
      </li>
      <li className={clsx("mobile-menu-item transform pt-3 pb-4 transition-all duration-300 ease-in-out")}>
        <div className="flex justify-center">
          <LanguageSwitcher />
        </div>
      </li>
    </ul>
  )
}
