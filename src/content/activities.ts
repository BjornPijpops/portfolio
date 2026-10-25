import type { RawActivity } from './raw';

export const activities: RawActivity[] = [
  {
    id: 'coach-cerios',
    title: { en: 'Coach & trainer', nl: 'Coach & trainer' },
    organization: 'Cerios',
    period: { start: '2025-05' },
    description: {
      en: 'Alongside my project work I coach colleagues and design and give trainings within Cerios, sharing what I learn in practice.',
      nl: 'Naast mijn projectwerk coach ik collega’s en ontwerp en geef ik trainingen binnen Cerios, waarbij ik deel wat ik in de praktijk leer.',
    },
    photo: {
      file: 'CPAT2.0.jpg',
      alt: {
        en: 'Bjorn giving a hands-on training session',
        nl: 'Bjorn geeft een praktische trainingssessie',
      },
    },
  },
  {
    id: 'private-tutor',
    title: { en: 'Private tutor', nl: 'Bijlesgever' },
    organization: { en: 'Own side business', nl: 'Eigen nevenactiviteit' },
    period: { start: '2018-09' },
    topics: ['Python', 'C#', 'Java', 'SQL'],
    description: {
      en: 'Private tutor in Python, C#, Java and SQL for students up to and including university level. I explain concepts step by step, so students gain real understanding and the confidence to apply it themselves.',
      nl: 'Bijlesgever in Python, C#, Java en SQL voor studenten tot en met universitair niveau. Ik leg concepten stap voor stap uit, zodat studenten echt inzicht krijgen en het zelfvertrouwen om het zelf toe te passen.',
    },
  },
];
