
import { SITE_SLUGS } from "@/config/siteConfig"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Olaf Koziara - Projects & Case Studies",
  description: "Featured work by Olaf Koziara: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Olaf Koziara", "Projects", "Case Studies", "React Zero-UI", "Next.js", "React", "TypeScript", "Serbyte", "Seattle"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  
  return (<div className="overflow-hidden"></div>)
   
  
}

export default page
