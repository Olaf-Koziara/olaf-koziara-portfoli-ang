import type { WithContext, CollectionPage, ProfilePage, BreadcrumbList, WebPage } from "schema-dts"
import { SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"
import { gkpge, formBuilder, iao, type ProjectData } from "../app/data/project-data"

interface ProjectItem {
  name: string
  url: string
  date: string
  description: string
  isExternal: boolean
}

interface ProjectItem {
  name: string
  url: string
  date: string
  description: string
  isExternal: boolean
}

// Project data for schema
const projectsData: ProjectItem[] = [
  {
    name: "Orbitask",
    url: externalLinks.orbitask,
    date: "2025-09-01",
    description: "Task Management Web App",
    isExternal: true,
  },
  {
    name: gkpge.hero.title as string,
    url: "/projects/gkpge",
    date: `2021-01-01/${gkpge.hero.year.replace('-', '-01-01')}`,
    description: "Created new reusable CMS theme and components for GKPGE Group",
    isExternal: false,
  },
  {
    name: formBuilder.hero.title as string,
    url: "/projects/form-builder",
    date: `2021-01-01/${formBuilder.hero.year.replace('-', '-01-01')}`,
    description: "GKPGE form builder tool for internal CMS",
    isExternal: false,
  },
  {
    name: iao.hero.title as string,
    url: "/projects/iao",
    date: `2024-01-01/${iao.hero.year}-12-31`,
    description: "Media Expert promotions landing pages",
    isExternal: false,
  },
]

export const projectsSchema: WithContext<CollectionPage> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects - Olaf Koziara",
  url: `${SITE_CONFIG.url}${SITE_SLUGS.projects}`,
  about: "Projects and case studies by Olaf Koziara (Angular, React, Next.js, TypeScript).",
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "Descending",
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: project.isExternal ? project.url : `${SITE_CONFIG.url}${project.url}`,
      name: project.name,
      description: project.description,
      dateCreated: project.date,
    })),
  },
}

export const profilePageSchema: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About - Olaf Koziara",
  url: `${SITE_CONFIG.url}/about`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#olaf`,
    name: "Olaf Koziara",
    url: SITE_CONFIG.url,
    jobTitle: "Full-Stack Engineer",
    email: SITE_NAP.email,
    sameAs: Object.values(SITE_NAP.profiles),
  },
}

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_CONFIG.url}/contact`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Hiring",
      email: SITE_NAP.email,
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
}

export const breadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_CONFIG.url}${SITE_SLUGS.projects}` },
  ],
}

// Function to generate project-specific breadcrumb schema
export const createProjectBreadcrumbSchema = (projectName: string, projectUrl: string): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_CONFIG.url}${SITE_SLUGS.projects}` },
    { "@type": "ListItem", position: 3, name: projectName, item: `${SITE_CONFIG.url}${projectUrl}` },
  ],
})

// Function to generate project page schema
export const createProjectPageSchema = (project: ProjectData, projectSlug: string): WithContext<WebPage> => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: project.hero.title as string,
  url: `${SITE_CONFIG.url}/projects/${projectSlug}`,
  description: typeof project.hero.description === 'string' ? project.hero.description : "Project description",
  mainEntity: {
    "@type": "CreativeWork",
    name: project.hero.title as string,
    description: typeof project.hero.description === 'string' ? project.hero.description : "Project description",
    creator: {
      "@type": "Person",
      name: "Olaf Koziara",
      url: SITE_CONFIG.url,
    },
    dateCreated: project.hero.year,
    about: project.hero.categories,
    url: project.hero.link || `${SITE_CONFIG.url}/projects/${projectSlug}`,
    ...(project.review && {
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: project.review.name,
        },
        reviewBody: typeof project.review.quote === 'string' ? project.review.quote : "Client review",
      },
    }),
  },
})

