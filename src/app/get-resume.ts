import { ResumeSchema } from './types/resume-schema';

export const defaultResume: ResumeSchema = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '12/09/2001',
  mobile: '+43 111 111 11 111',
  email: 'john@doe.com',
  signatureAddress: 'Vienna',
  address: 'Street 1<br/>1001 Vienna',
  workExperiences: [
    {
      from: '12/2022',
      to: 'today',
      company: 'Company 6 GmbH',
      role: 'Junior Software Engineer',
      infos: ['- Java EE, Angular, NestJS', '- Cypress', '- Neo4j, Postgres'],
    },
    {
      from: '06/2022',
      to: '09/2022',
      company: 'Company 5 GmbH',
      role: 'Junior Software Engineer',
      infos: ['- ASP.NET & Angular', '- Event-driven Microservices, Kafka'],
    },
    {
      from: '09/2021',
      to: '05/2022',
      company: 'Company 4 GmbH',
      role: 'Civil Servant',
    },
    {
      from: '01/2021',
      to: '10/2021',
      company: 'Company 3 GmbH',
      role: 'Junior Software Engineer',
      infos: ['- ASP.NET & Angular', '- Event-driven Microservices, Kafka'],
    },
    {
      from: '08/2020',
      company: 'Company 2 GmbH',
      role: 'Software Engineer Intern',
      infos: ['- ASP.NET & Angular', '- Migrated Docker Swarm to Kubernetes'],
    },
    {
      from: '07/2019',
      company: 'Company 1 GmbH',
      role: 'Software Engineer Intern',
      infos: ['- Developed an addon for Microsoft Power BI'],
    },
  ],
  educations: [
    {
      from: '09/2016',
      to: '05/2021',
      name: 'HTL',
      infos: ['Computer Science'],
    },
    {
      from: '09/2012',
      to: '07/2016',
      name: 'Gymnasium',
    },
  ],
  skillGroups: [
    {
      name: 'Languages',
      skills: ['German', 'English'],
    },
    {
      name: 'Programming languages',
      skills: ['Java', 'C#', 'TypeScript', 'Python'],
    },
    {
      name: 'Frameworks',
      skills: [
        'Spring Boot',
        'ASP.NET',
        'NestJS',
        'React',
        'Angular',
        'Svelte',
      ],
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'MySQL', 'FireStore', 'Neo4j'],
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'K8s', 'Ansible', 'Terraform', 'Ci/CD', 'Git'],
    },
  ],
};
export const getResume = (): ResumeSchema => {
  const resumeString = localStorage.getItem('resume');
  return JSON.parse(resumeString || JSON.stringify(defaultResume));
};
export const setResume = (resume: ResumeSchema): void => {
  localStorage.setItem('resume', JSON.stringify(resume));
};
