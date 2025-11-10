"use client"

import clsx from "clsx"
import profilePhoto from "../images/profile.jpg"
import { Text, Typography } from "../ui/Elements"
import { MotionDiv } from "../utils/lazy-ui"
import { ImageReveal } from "./ImageReveal"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { useTranslation } from "react-i18next"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation()

  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30", className)}>
      <div className="inside-container relative z-2">
        <AnimatedH2>
          <span className="text-slate-500">{t("about.title")}</span>
          <br />
          {t("about.name")}
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          <div className="flex [flex:1_0_0px] flex-col gap-6">
            <ImageReveal src={profilePhoto} alt={t("about.name")} className="custom-shadow aspect-[4/4.5]" />

            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                {t("about.name")}
              </Text>
              <p className="text-sm text-gray-500">{t("about.role")}</p>
            </MotionDiv>
          </div>
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">{t("about.description1")}</strong> {t("about.description1Detail")}
            </p>

            <p>
              <strong className="font-semibold text-slate-900">{t("about.description2")}</strong>
            </p>
            <p>
              <strong className="font-semibold text-slate-900">{t("about.description3")}</strong>. {t("about.description3Detail")}
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
