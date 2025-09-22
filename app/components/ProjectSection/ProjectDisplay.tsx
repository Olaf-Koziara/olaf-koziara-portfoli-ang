import { HeaderText } from "@/app/ui/HeaderText"
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
      {
        projectData.beforeAfter &&    
        <div className="inside-container-large flex flex-col gap-12 pt-12 lg:pt-16">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
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
