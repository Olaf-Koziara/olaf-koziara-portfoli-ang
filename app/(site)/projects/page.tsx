import { RecruiterContact } from "@/app/components/RecruiterContact"
import { breadcrumbSchema, projectsSchema } from "@/config/schemas"
import { SITE_SLUGS } from "@/config/siteConfig"
import { Metadata } from "next"
import { ProjectsStatic } from "./ProjectsStatic"
import { WorkHero } from "./WorkHero"

export const metadata: Metadata = {
  title: "Olaf Koziara - Projects & Case Studies",
  description: "Featured work by Olaf Koziara: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Olaf Koziara", "Projects", "Case Studies", "React Zero-UI", "Next.js", "React", "TypeScript", "Serbyte", "Seattle"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectsSchema, breadcrumbSchema]),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
