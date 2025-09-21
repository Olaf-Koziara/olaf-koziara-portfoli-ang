import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { formBuilder } from "@/app/data/project-data"
import { SITE_SLUGS } from "@/config/siteConfig"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Olaf Koziara - Projects AutoMedics Kirkland",
  description: "How I transformed AutoMedics Kirkland's online presence with 960% traffic growth through conversion-focused web design and local SEO.",
  keywords: ["Olaf Koziara", "AutoMedics", "Kirkland", "Auto Repair", "Next.js", "Web Design", "Local SEO", "Serbyte", "Seattle"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.automedics,
  },
}

const FormBuilderPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={formBuilder} />
    </>
  )
}

export default FormBuilderPage
