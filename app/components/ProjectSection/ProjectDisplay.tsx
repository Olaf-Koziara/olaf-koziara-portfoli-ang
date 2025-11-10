"use client"

import { HeaderText } from "@/app/ui/HeaderText"
import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"
import { useTranslation } from "react-i18next"
import { ApproachSection } from "./ApproachSection"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ProjectHero } from "./ProjectHero"
import { ResultsSection } from "./ResultsSection"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  const { t } = useTranslation()

  return (
    <main className="overflow-hidden">
      <ProjectHero {...projectData.hero} />
      {
        projectData.beforeAfter &&    
        <div className="inside-container-large flex flex-col gap-12 pt-12 lg:pt-16">
        <HeaderText
          title={t("project.beforeAndAfter")}
          titleHighlight={t("project.seeTheDifference")}
          description={t("project.beforeAfterDescription")}
        />
        </div>
      }
      {projectData.beforeAfter && projectData.beforeAfter.map((item, index) => (
        <BeforeAfterSection
          key={index}
          heroBefore={item.heroBefore}
          heroBeforeMobile={item.heroBeforeMobile}
          iframe={item.iframe}
          heroAfter={item.heroAfter}
          beforeAltText={item.beforeAltText}
          beforeMobileAltText={item.beforeMobileAltText}
          afterAltText={item.afterAltText}
        />
      ))}
      {projectData.results && <ResultsSection analyticCards={projectData.results} />}
      {projectData.phases && <ApproachSection phases={projectData.phases} />}
      {/* <LargeReview {...projectData.review} /> */}
      {/* <MoreProjectsSection /> */}
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay
