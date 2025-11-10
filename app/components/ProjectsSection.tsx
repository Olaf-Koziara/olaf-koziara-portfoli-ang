"use client"

import React from "react"
import { AnimatedText } from "./AnimatedText"
import { ProjectsGrid } from "./ProjectsGrid"
import { useTranslation } from "react-i18next"

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="inside-container bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30">
      <div className="pointer-events-none relative z-5 mix-blend-exclusion">
        <AnimatedText
          text={t("projects.latestProjects")}
          margin={500}
          once={true}
          className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-white md:text-5xl md:leading-12 lg:text-6xl"
        />
      </div>

      <ProjectsGrid />
    </section>
  )
}
