import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"
import { ApproachSection } from "./ApproachSection"
import { BeforeAfterSection } from "./BeforeAfterSection"
// import { MoreProjectsSection } from "./MoreProjectsSection"
import { ProjectHero } from "./ProjectHero"
import { ResultsSection } from "./ResultsSection"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <ProjectHero {...projectData.hero} />
      {projectData.beforeAfter && (
        <BeforeAfterSection
          heroBefore={projectData.beforeAfter.heroBefore}
          heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
          iframe={projectData.beforeAfter.iframe}
          heroAfter={projectData.beforeAfter.heroAfter}
          beforeAltText={projectData.beforeAfter.beforeAltText}
          beforeMobileAltText={projectData.beforeAfter.beforeMobileAltText}
          afterAltText={projectData.beforeAfter.afterAltText}
        />
      )}
      {projectData.results && <ResultsSection analyticCards={projectData.results} />}
      {projectData.phases && <ApproachSection phases={projectData.phases} />}
      {/* <LargeReview {...projectData.review} /> */}
      {/* <MoreProjectsSection /> */}
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay
