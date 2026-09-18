export interface Project {
  id: string;
  title: string;
  category: 'data-analytics' | 'ai-web' | 'bi-dashboard';
  categoryLabel: string;
  shortDescription: string;
  technologies: string[];
  keyFunctionality: string[];
  findingsOrMetrics?: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  type: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  location: string;
  score: string;
  status: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  focus: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    verifiedIn: string;
  }[];
}

export interface LearningItem {
  title: string;
  status: string;
  description: string;
  keyTopics: string[];
}

export interface PersonalInfo {
  fullName: string;
  statusTitle: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  shortIntro: string;
  fullBio: string[];
}
