"use client"
import formbuilderPreview from "@/app/images/formbuilder_preview.webp"
import gkpgePreview from "@/app/images/gkpge_preview.webp"
import mediaexpertPreview from "@/app/images/mediaexpert.png"
import orbitaskPreview from "@/app/images/orbitask.png"
import { externalLinks } from "@/config/siteConfig"
import { useUI } from "@react-zero-ui/core"
import clsx from "clsx"
import { useScroll, useSpring } from "motion/react"
import { useEffect, useRef } from "react"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useOffset } from "../hooks/useOffset"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"

const ids = ["mediaexpert", "orbitask-manager", "formbuilder", "gkpge"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.9
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "orbitask-manager": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    mediaexpert: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    formbuilder: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    gkpge: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      if (!base || !base.x || !base.y) return [id, { x: 0, y: 0, rot: t.rot!, s: t.s ?? 1 }]
      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"orbitask-manager"}
          src={orbitaskPreview}
          alt={"Orbitask manager - Preview"}
          offset={offsets["orbitask-manager"]}
          gridId="orbitask-manager"
          color="#3B06D1"
          type=""
          progress={progress}
          href={externalLinks.orbitask}
          dataText="View on GitHub"
        />
        <AnimatedCard
          key="gkpge"
          src={gkpgePreview}
          alt={"Gkpge Preview"}
          offset={offsets["gkpge"]}
          gridId="gkpge"
          color="#024EFC"
          type=""
          progress={progress}
          target="_self"
          href="/projects/gkpge"
          dataText="View Case Study"
        />

        <AnimatedCard
          key="formBuilder"
          src={formbuilderPreview}
          alt={"FormBuilder Preview"}
          offset={offsets["formbuilder"]}
          gridId="formBuilder"
          color="#DA961A"
          type=""
          href="/projects/formbuilder"
          target="_self"
          progress={progress}
          dataText="View Case Study"
        />
        <AnimatedCard
          key={"mediaexpert"}
          src={mediaexpertPreview}
          alt={"Mediaexpert"}
          offset={offsets["mediaexpert"]}
          gridId="mediaexpert"
          color="#13739C"
          type=""
          href="/projects/mediaexpert"
          target="_self"
          progress={progress}
          dataText="View Case Study"
        />
      </div>
    </section>
  )
}
