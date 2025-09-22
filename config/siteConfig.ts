export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Olaf Koziara",
  description: "Portfolio of Olaf Koziara, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000",
  siteName: "Olaf Koziara",
  keywords: ["Olaf Koziara", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Olaf Koziara",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Olaf Koziara",
  email: "olaf.koziara@gmail.com",
  phone: "+48792344951",
  formattedPhone: "+48 792 344 951",
  street: "12601 NE 124th ST",
  city: "Gdańsk",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/olaf-koziara-0b7b47164/",
    github: "https://github.com/Olaf-Koziara",
  } as const,
  logo: "/assets/react-icon.svg",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/#projects-grid",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  orbitask: "https://github.com/Olaf-Koziara/orbitask-manager",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
