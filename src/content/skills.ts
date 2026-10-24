import type { SkillGroup } from '../domain/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: [
      'Python',
      'Java',
      'C# .NET',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'SQL',
      'Gherkin',
      'REST',
    ],
  },
  {
    category: 'Test tools',
    skills: [
      'Playwright',
      'Robot Framework',
      'Selenium',
      'Cypress',
      'Cucumber',
      'Tosca',
      'JMeter',
      'Swagger',
    ],
  },
  {
    category: 'DevOps & platforms',
    skills: [
      'Azure DevOps',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Git',
      'Bitbucket',
      'Linux',
      'Kong Gateway',
    ],
  },
  { category: 'Databases', skills: ['SQL', 'MongoDB', 'Oracle', 'PostgreSQL'] },
  {
    category: 'Methods',
    skills: [
      'Agile / Scrum',
      'BDD/TDD/ATDD',
      'CI/CD',
      'Risk-based testing',
      'Exploratory testing',
      'Performance testing',
      'Test data management',
      'TMap / ISTQB',
    ],
  },
  {
    category: 'Strengths',
    skills: [
      'Coaching',
      'Leadership',
      'Critical thinking',
      'Stakeholder management',
      'Client focus',
      'AI in testing',
    ],
  },
];
