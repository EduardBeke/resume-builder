export interface WorkExperience {
  from: string;
  to?: string;
  company: string;
  role: string;
  infos?: string[];
}
export interface Education {
  from: string;
  to: string;
  name: string;
  infos?: string[];
}
export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface ResumeSchema {
  firstName: string;
  lastName: string;
  mobile?: string;
  email?: string;
  address?: string;
  birthDate?: string;
  signatureAddress?: string;
  workExperiences: WorkExperience[];
  educations: Education[];
  skillGroups: SkillGroup[];
}
