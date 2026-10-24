import type { Education, Locale } from '../domain';

export interface Messages {
  skipToContent: string;
  nav: {
    label: string;
    home: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  language: { label: string; names: Record<Locale, string> };
  socialLabel: string;
  hero: {
    experienceLine: (duration: string) => string;
    seeJourney: string;
    exploreProjects: string;
    getInTouch: string;
  };
  experience: {
    title: string;
    intro: string;
    whatIDid: string;
    results: string;
    technologies: string;
    via: string;
  };
  projects: {
    title: string;
    intro: string;
    liveDemo: string;
    sourceCode: string;
    openPreview: (title: string) => string;
    openCta: string;
    previewDisabled: string;
  };
  education: {
    title: string;
    intro: string;
    viewCertificate: string;
    kinds: Record<Education['kind'], string>;
  };
  contact: { title: string; intro: string; email: string };
  notFound: { title: string; body: string; back: string };
}

/** Both languages are required by the type, so a missing translation fails the build. */
export const messages: Record<Locale, Messages> = {
  en: {
    skipToContent: 'Skip to content',
    nav: {
      label: 'Main',
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    language: { label: 'Language', names: { en: 'English', nl: 'Nederlands' } },
    socialLabel: 'Social profiles',
    hero: {
      experienceLine: (duration) => `${duration} of professional experience`,
      seeJourney: 'See my journey',
      exploreProjects: 'Explore projects',
      getInTouch: 'Get in touch',
    },
    experience: {
      title: 'Work experience',
      intro: 'Where I have worked, what I built and what it achieved.',
      whatIDid: 'What I did',
      results: 'Results',
      technologies: 'Technologies',
      via: 'via',
    },
    projects: {
      title: 'Projects & interests',
      intro: 'Things I build and explore beyond the day job.',
      liveDemo: 'Live demo',
      sourceCode: 'Source code',
      openPreview: (title) => `Open ${title}`,
      openCta: 'Open live demo ↗',
      previewDisabled: 'Preview disabled to save data',
    },
    education: {
      title: 'Education & certifications',
      intro: 'Formal education and the training that keeps me sharp.',
      viewCertificate: 'View certificate →',
      kinds: { degree: 'Degree', certificate: 'Certificate', course: 'Course' },
    },
    contact: {
      title: 'Get in touch',
      intro:
        'Have a question, a project in mind or just want to connect? Reach out through any of these channels.',
      email: 'Email',
    },
    notFound: {
      title: 'Page not found',
      body: 'The page you are looking for does not exist.',
      back: 'Back to home',
    },
  },
  nl: {
    skipToContent: 'Ga naar inhoud',
    nav: {
      label: 'Hoofdmenu',
      home: 'Home',
      experience: 'Ervaring',
      projects: 'Projecten',
      education: 'Opleiding',
      contact: 'Contact',
    },
    language: { label: 'Taal', names: { en: 'English', nl: 'Nederlands' } },
    socialLabel: 'Sociale profielen',
    hero: {
      experienceLine: (duration) => `${duration} professionele ervaring`,
      seeJourney: 'Bekijk mijn parcours',
      exploreProjects: 'Ontdek projecten',
      getInTouch: 'Neem contact op',
    },
    experience: {
      title: 'Werkervaring',
      intro: 'Waar ik gewerkt heb, wat ik bouwde en wat het opleverde.',
      whatIDid: 'Wat ik deed',
      results: 'Resultaten',
      technologies: 'Technologieën',
      via: 'via',
    },
    projects: {
      title: 'Projecten & interesses',
      intro: 'Dingen die ik bouw en ontdek naast mijn dagelijkse werk.',
      liveDemo: 'Live demo',
      sourceCode: 'Broncode',
      openPreview: (title) => `Open ${title}`,
      openCta: 'Open live demo ↗',
      previewDisabled: 'Voorbeeld uitgeschakeld om data te besparen',
    },
    education: {
      title: 'Opleiding & certificaten',
      intro: 'Formele opleiding en de trainingen die me scherp houden.',
      viewCertificate: 'Bekijk certificaat →',
      kinds: { degree: 'Diploma', certificate: 'Certificaat', course: 'Cursus' },
    },
    contact: {
      title: 'Neem contact op',
      intro:
        'Een vraag, een project in gedachten of gewoon even connecteren? Neem contact op via een van deze kanalen.',
      email: 'E-mail',
    },
    notFound: {
      title: 'Pagina niet gevonden',
      body: 'De pagina die je zoekt bestaat niet.',
      back: 'Terug naar home',
    },
  },
};
