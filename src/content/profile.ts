import type { RawProfile } from './raw';

export const profile: RawProfile = {
  name: 'Bjorn Pijpops',
  headline: 'Quality & Automation Engineer',
  email: 'pijpopsbjorn@hotmail.com',
  photo: 'personal_image.jpeg',
  summary: {
    en: [
      'Driven quality and automation engineer with over seven years of experience in test automation and software development, and a bachelor in Applied Computer Science.',
      'Has worked for Elia, Johnson & Johnson and Liberty Global, across energy, pharma and telecom. Looks beyond his own task: safeguards the quality of the whole, sets standards and keeps teams and stakeholders aligned.',
      'Enjoys taking the lead: coaches colleagues, guides teams and acts as the link between developers, analysts and business. Currently broadening his knowledge in AI and machine learning.',
    ],
    nl: [
      'Gedreven quality- en automation engineer met ruim zeven jaar ervaring in testautomatisering en softwareontwikkeling, en een bachelor in Toegepaste Informatica.',
      'Werkte voor organisaties als Elia, Johnson & Johnson en Liberty Global, in sectoren als energie, farma en telecom. Kijkt verder dan zijn eigen taak: bewaakt de kwaliteit van het geheel, stelt standaarden op en zorgt dat teams en stakeholders op één lijn zitten.',
      'Neemt graag de leiding: coacht collega’s, stuurt teams aan en fungeert als verbindingspunt tussen developers, analisten en business. Verbreedt momenteel zijn kennis op het gebied van AI en machine learning.',
    ],
  },
  links: [
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/bjorn-pijpops/' },
    { platform: 'github', label: 'GitHub', url: 'https://github.com/BjornPijpops' },
  ],
};
