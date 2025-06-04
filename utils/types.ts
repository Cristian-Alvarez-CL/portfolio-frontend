
export interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  github: string
  demo: string
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  achievements: string[]
}

export interface Skill {
  name: string
  category: "Runtime" | "Language" | "Framework" | "Database" | "Cache" | "DevOps" | "Cloud" | "API" | "Architecture"
}