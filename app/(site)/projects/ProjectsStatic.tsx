"use client"

import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import IconSpritePreview from "@/app/images/zero-icon-sprite-preview.jpg"
import zeroPreview from "@/app/images/react-zero-ui-preview.jpg"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"
import { useTranslation } from "react-i18next"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  textKey: string
  href: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "react-zero-ui",
    src: zeroPreview,
    alt: "React-Zero-UI - Preview",
    color: "#3B06D1",
    type: "Zero Re-Render State Library",
    textKey: "projects.viewOnGitHub",
    href: externalLinks.zeroCore,
    isExternal: true,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "Bespoke Preview",
    color: "#024EFC",
    type: "Automotive Styling Website",
    textKey: "projects.viewCaseStudy",
    href: SITE_SLUGS.projectLinks.bespoke,
    isExternal: false,
  },

  {
    id: "zero-icon-sprite",
    src: IconSpritePreview,
    alt: "Zero-Icon-Sprite Preview",
    color: "#3B06D1A5",
    type: "SVG Build Tool",
    textKey: "projects.viewOnGitHub",
    href: externalLinks.zeroIconSprite,
    isExternal: true,
  },

  {
    id: "automedics",
    src: automedicsPreview,
    alt: "Automedics Preview",
    color: "#000000",
    type: "Automotive Repair Website",
    textKey: "projects.viewCaseStudy",
    href: SITE_SLUGS.projectLinks.automedics,
    isExternal: false,
  },

  {
    id: "iron-oak",
    src: iaoPreview,
    alt: "IAO Preview",
    color: "#13739C",
    type: "Private Security Website",
    textKey: "projects.viewCaseStudy",
    href: SITE_SLUGS.projectLinks.iao,
    isExternal: false,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "Entitled Preview",
    color: "#DA961AA5",
    type: "Event Management Web App",
    textKey: "projects.viewWebsite",
    href: externalLinks.entitled,
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const translatedText = t(project.textKey)
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": translatedText,
                  "aria-label": translatedText,
                }
              : {
                  href: project.href,
                  "data-text": translatedText,
                  "aria-label": translatedText,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={translatedText} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
