export type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
  github?: string;
};

export type Skill = {
  category: string;
  items: string[];
};
