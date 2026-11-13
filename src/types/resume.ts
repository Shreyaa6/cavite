export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  metrics?: string[]
}

export interface EducationItem {
  id: string
  degree: string
  school: string
  year: string
  honors?: string
  location?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface ResumeData {
  id: string
  fullName: string
  targetTitle: string
  email: string
  phone: string
  location: string
  website: string
  github: string
  linkedin: string
  summary: string
  experiences: ExperienceItem[]
  education: EducationItem[]
  skills: SkillCategory[]
  atsScore: {
    overall: number
    breakdown: {
      actionVerbs: number
      quantifiedMetrics: number
      keywordMatch: number
      brevityAndFormatting: number
    }
  }
  templateName: string
}

