import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import heroBeforeMobileIao from "@/public/assets/iron-and-oak-before-website-design-mobile.jpg"
import heroBeforeIao from "@/public/assets/iron-and-oak-before-website-design.jpg"
import { StaticImageData } from "next/image"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"
import { LineChart } from "../components/ProjectSection/LineChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import heroBefore from "../images/gkpge_old_main.webp"
import heroAfter from "../images/gkpge_preview.webp"
import gkpgeBeforeLinks from "../images/gkpge_old_links.webp"
import gkpgeAfterLinks from "../images/gkpge_new_links.webp"

import { REVIEW_MAP, type ReviewProps } from "./review-data"

//   interface ProjectData {
//   hero: {
//     title: string
//     client: string
//     year: string
//     description: string | React.ReactNode
//     categories: string[]
//     link: string
//   }
//   beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
//   results: {
//     title: string
//     description: string
//     percentageIncrease: number
//     chart: React.ReactNode
//     dataSource: string[]
//     phases: { id: number; title: string; subtitle: string; description: string; details: string[]; icon: string; feature: React.ReactNode }[]
//     review: {
//       quote: React.ReactNode
//       name: string
//       title: string
//       img: StaticImageData
//     }
//   }
// }
export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  link?: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter?: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }[]
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
}

export const gkpge: ProjectData = {
  hero: {
    title: "Created new reusable CMS theme and components for GKPGE Group",
    client: "Grupa kapitałowa PGE",
    year: "2021-2023",

    description: (
      <>
        Developed a new, modern theme and a set of reusable components for the GKPGE Group's Content Management System (CMS). The core objective was to update
        the visual identity of the group's websites while streamlining the management and maintenance process.
      </>
    ),
    categories: ["Web Design", "Web Development"],
    link: "https://www.gkpge.pl",
  },
  beforeAfter: [{
    heroBefore: heroBefore,
    beforeAltText: "GKPGE Before",
    beforeMobileAltText: "GKPGE Before Mobile",
    heroBeforeMobile: heroBeforeMobile,
    heroAfter: heroAfter,
    afterAltText: "GKPGE After",
  },{
    heroBefore: gkpgeBeforeLinks,
    beforeAltText: "GKPGE Before",
    beforeMobileAltText: "GKPGE Before Mobile",
    heroBeforeMobile: heroBeforeMobile,
    heroAfter: gkpgeAfterLinks,
    afterAltText: "GKPGE After",
  }],
  // results: [
  //   {
  //     title: "Page Load Speed",
  //     description: "Improvement in load times and performance",
  //     percentageIncrease: 966,
  //     chart: <TrafficBarChart startValue={8} endValue={4} />,
  //     dataSource: "Measured after 30 days from launch",
  //   },
  //   {
  //     title: "Conversion Rate",
  //     description: "Online visitor conversion improvement",
  //     percentageIncrease: 45,
  //     chart: <RadialProgressRing />,
  //     dataSource: "Measured over a 60 day period",
  //   },
  //   {
  //     title: "Revenue Growth",
  //     description: "Increase post-launch",
  //     percentageIncrease: 35,
  //     chart: <LineChart />,
  //     dataSource: "Measured over a 90 day period",
  //   },
  // ],

  // phases: [
  //   {
  //     id: 1,
  //     title: "Design System",
  //     subtitle: "Beautiful High-Converting Design",
  //     description:
  //       "Created a stunning design system that showcases amazing reviews while maintaining a slightly rebellious edge through strategic use of clip paths and angular elements.",
  //     details: [
  //       "Implemented clip-path CSS for edgy, non-traditional section borders",
  //       "Designed around extensive customer reviews and testimonials",
  //       "Created a cohesive design system with rebel aesthetic touches",
  //       "Incorporated angular elements instead of traditional straight lines",
  //     ],
  //     icon: "/assets/design-black.webp",
  //     feature: <ApproachTabsImage src="/assets/brand-images.jpg" alt="Competitor Analysis" />,
  //   },
  //   {
  //     id: 2,
  //     title: "Quality Assets",
  //     subtitle: "Premium Visual Content",
  //     description:
  //       "Developed stunning HD videos and high-quality images with crystal-clear call-to-actions strategically placed throughout the entire user journey.",
  //     details: [
  //       "Professional HD video content showcasing services",
  //       "High-resolution photography of completed work",
  //       "Strategic placement of clear call-to-action buttons",
  //       "Optimized media for fast loading times",
  //       "Created visual hierarchy to guide user attention",
  //     ],
  //     icon: "/assets/assets-black-camera.webp",
  //     feature: (
  //       <video className="hero-section absolute inset-0 h-full w-full object-cover saturate-200" muted loop preload="metadata" autoPlay playsInline>
  //         <source src="/videos/clip-450.mp4" type="video/mp4" media="(max-width: 450px)" />
  //         <source src="/videos/clip-600.mp4" type="video/mp4" media="(max-width: 600px) and (min-width: 451px)" />
  //         <source src="/videos/clip-1200.mp4" type="video/mp4" media="(min-width: 601px) and (max-width: 1023px)" />
  //         <source src="/videos/clip.mp4" type="video/mp4" media="(min-width: 1024px)" />
  //         Your browser does not support the video tag.
  //       </video>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: "Competitor Analysis",
  //     subtitle: "Traffic Generation Strategy",
  //     description:
  //       "Reverse-engineered competitor content and identified high-traffic keywords to build a content strategy that dominates local search results.",
  //     details: [
  //       "Analyzed top 5 competitors in the Bellevue area",
  //       "Used advanced SEO tools to identify high-traffic keywords",
  //       "Reverse-engineered successful competitor content strategies",
  //       "Built site copy around proven keyword opportunities",
  //       "Implemented technical SEO best practices",
  //     ],
  //     icon: "/assets/search-black.webp",
  //     feature: <ApproachTabsImage src="/assets/competitor-analysis.png" alt="Competitor Analysis" />,
  //   },
  //   {
  //     id: 4,
  //     title: "Content & Blog",
  //     subtitle: "Authority Building Through Education",
  //     description:
  //       "Created comprehensive blog content focusing on Washington State tint laws - the #1 traffic driver - with legal citations and expert insights.",
  //     details: [
  //       "Researched and wrote detailed tint law articles",
  //       "Answered every possible question about WA state regulations",
  //       "Used high-quality citations from legal websites",
  //       "Created evergreen content that drives consistent traffic",
  //       "Established the business as the local authority on tinting",
  //     ],
  //     icon: "/assets/notepad-black.webp",
  //     feature: <ApproachTabsImage src="/assets/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" />,
  //   },
  //   {
  //     id: 5,
  //     title: "Interactive Tools",
  //     subtitle: "Window Tint Simulator",
  //     description: "Developed a custom window tint simulator allowing users to visualize different tint percentages in real-time - a unique engagement tool.",
  //     details: [
  //       "Built custom slider-based tint percentage simulator",
  //       "Real-time visual feedback for different tint levels",
  //       "Interactive tool increases user engagement and time on site",
  //       "Unique differentiator from competitors + SEO benefit",
  //     ],
  //     icon: "/assets/tool-black.webp",
  //     feature: <TintSimulator className="h-full w-full" />,
  //   },
  // ],
  review: REVIEW_MAP.bespoke,
}

export const formBuilder: ProjectData = {
  hero: {
    title: "GKPGE form builder tool for internal CMS",
    client: "PGE Systemy",
    year: "2021-2023",
    description:
      "I worked at PGE Systemy as a frontend developer, where I built a form builder integrated into the company’s CMS platform designed for creating websites within the corporate group. Form builder panel itself was based on React with TypeScript and integrated with a Symfony/Twig backend. The form builder allowed users to create dynamic forms using drag and drop components such as containers, columns, inputs, and selects. It also supported setting dependencies between fields as well as defining custom submit actions. Once a form was created, its structure was exported as JSON and processed by the Symfony backend, which generated the form layout. On the client side, the javascript restored all dependencies, interactivity, and dynamic behaviors defined in the builder.",
    categories: ["React", "TypeScript", "TWIG", "SCSS"],
  },

  phases: [
    {
      id: 1,
      title: "Client Requirements Gathering",
      subtitle: "Understanding Needs",
      description:
        "Initial meetings with stakeholders to understand business needs, user expectations, and technical requirements for integrating a form builder into the CMS.",
      details: [
        "Designed custom logo reflecting mechanical precision",
        "Selected color palette balancing trust and energy",
        "Created comprehensive brand guidelines document",
        "Developed consistent visual language across all touchpoints",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/meeting.webp" alt="Meetings" />,
    },
    {
      id: 2,
      title: "Architecture and Planning",
      subtitle: "Blueprint for Success",
      description:
        "Planned the architecture of the form builder, including component hierarchy, state management, and integration points with the existing CMS backend.",
      details: [
        "Data structure design for form components and properties",
        "State management strategy using Zustand for efficient updates",
        "Performance considerations for drag-and-drop interactions",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/web_architecture.webp" alt="Web Architecture" />,
    },
    {
      id: 3,
      title: "Implementation and Development",
      subtitle: "Building the Solution",
      description:
        "",
      details: [
        "Each field and layout type was developed as an independent, reusable React component with centralized form state management.",
        "Drag-and-drop logic was implemented using react-dnd to enable intuitive editing and real-time interface synchronization.",
        "Every form modification generated a consistent JSON structure, sent to the Symfony backend for rendering.",
        "On the frontend, the JavaScript restored all dependencies and interactivity defined in the builder.",
        "Extensive error handling and flexible component APIs were added to make it easy to extend the system with new field types and validation logic."
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/development.webp" alt="Software Development" />,
    },
    {
      id: 4,
      title: "Testing and Deployment",
      subtitle: "Design That Drives Business",
      description:'',
      details: [
          "Deployment into the CMS testing environment",
        "Conducting thorough QA, including cross-browser testing and validation of JSON output",
        "Training content managers on how to use the form builder effectively",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/formbuilder.webp" alt="Form Builder" />,
    },
  ],
  review: REVIEW_MAP.automedics,
}

export const iao: ProjectData = {
  hero: {
    title: <>Media Expert promotions landing pages</>,
    client: "Iron & Oak Seattle",
    year: "2024",
    description:
      "I dug into Iron & Oak Seattle's origin story-founded amid the COVID-19 disruptions-and rebuilt their website in Next.js around a clear, narrative-driven structure. I also scraped the web for press mentions and coverage to reinforce credibility. The goal was simple: increase qualified online applicants. It worked, driving a noticeable lift in submissions.",
    categories: ["Web Design", "Web Development", "SEO", "Web Accessibility", "WCAG"],
    link: "",
  },
  beforeAfter: [{
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: "https://iao-seattle.vercel.app/?src=serbyte",
    beforeAltText: "Iron & Oak Seattle Before",
    beforeMobileAltText: "Iron & Oak Seattle Before Mobile",
    afterAltText: "Iron & Oak Seattle After Website Design",
  }],
  results: [
    {
      title: "Traffic Increase",
      description: "Increase in traffic from all channels",
      percentageIncrease: 4100,
      chart: <TrafficBarChart startValue={10} endValue={410} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Online Applicants",
      description: "Increase in online job applicants",
      percentageIncrease: 290,
      chart: <RadialProgressRing percentage={290} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Hires",
      description: "Increase in new hires",
      percentageIncrease: 65,
      chart: <LineChart />,
      dataSource: "Measured over a 30 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Identity",
      subtitle: "Creating a brand that tells the story of Iron & Oak",
      description: "Started from scratch to re-brand Iron & Oak Seattle, establishing them as the trusted private security company in their market.",
      details: [
        "Designed custom logo reflecting the brand name and the company's history",
        "Created a brand story that tells the story of Iron & Oak",
        "Created a brand guidelines document",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-brand-guide-web-design.png" alt="Iron & Oak Brand Identity" />,
    },
    {
      id: 2,
      title: "Live Incident Data",
      subtitle: "Showing the world what Iron & Oak is all about",
      description: "We created a live incident data dashboard that displays incidents in real-time, connected to a live incident data API.",
      details: ["Airtable API integration for incident data", "Displays incidents in real-time"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="Iron & Oak Website Tool" className="bg-slate-800 px-2.5" />,
    },
    {
      id: 3,
      title: "Press Hub",
      subtitle: "Verified press & community coverage.",
      description: "Curated, verified media mentions centralizing third-party authority to boost trust & conversion.",
      details: [
        "Aggregated all credible third-party mentions",
        "Verified sources; removed low-value noise",
        "Structured data boosts authority signals",
        "Trust hub: social proof near conversion.",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Iron & Oak Media Coverage" className="bg-slate-200 px-2.5" />
      ),
    },
    {
      id: 4,
      title: "Talent SEO",
      subtitle: "A topical authority engine for security job seekers",
      description: "Designed a content cluster targeting Washington security guard career keywords and established Iron & Oak as the regional authority.",
      details: [
        "37 intent-mapped articles building authority",
        "Targeted WA security job & license keywords",
        "Internal links (pillar/support) speed indexation",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-content-cluster-seo.png" alt="Iron & Oak Content Cluster SEO" />,
    },
    {
      id: 5,
      title: "Applicant Portal",
      subtitle: "Multi-step validated, resume auto-fill, and applicant tracking",
      description: "Built a multi-step, validated application with autosave + resume, cutting friction and preserving in-progress candidates.",
      details: [
        "Stepper UI with clear stage + progress",
        "Client + server validation prevents bad submits",
        "Autosave each step (no data loss)",
        "Resume later via stored progress state",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Iron & Oak Applicant Portal" />,
    },
  ],
  review: REVIEW_MAP.iao,
}
