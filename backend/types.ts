export interface PersonalInfo {
  email: string;
  phone: string;
  linkedinUrl: string;
  cvUrl: string;
  instagramUrl: string;
  githubUrl: string;
}

export interface HeroBanner {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

export interface ContentData {
  personalInfo: PersonalInfo;
  heroBanner: HeroBanner;
  projects: Project[];
}
