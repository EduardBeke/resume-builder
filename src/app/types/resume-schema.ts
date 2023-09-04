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
  icon?: 'pi-database' | 'pi-code' | 'pi-server' | 'pi-cog' | 'pi-language';
  skills: string[];
}

export interface Certificate {
  name: string;
  date: string;
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
  certificates?: Certificate[];
  educations: Education[];
  skillGroups: SkillGroup[];
}
