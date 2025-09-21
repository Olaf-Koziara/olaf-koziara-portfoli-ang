import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { gkpge } from "@/app/data/project-data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Olaf Koziara - Projects Gkpge",
  description: "How",
  keywords: ["Olaf Koziara", "gkpge Projects", "Tint", "PPF", "React Zero-UI", "Next.js", "React", "TypeScript", "Serbyte", "Seattle"],
  alternates: {
    // canonical: SITE_SLUGS.projectLinks.gkpge,
  },
}

const GkpgePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={gkpge} />
    </>
  )
}

export default GkpgePage
