import type { Education, Locale } from '../domain';

export interface Messages {
  skipToContent: string;
  nav: {
    label: string;
    openMenu: string;
    closeMenu: string;
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
  activities: { title: string; intro: string; topics: string };
  interests: { title: string; intro: string };
  career: {
    stats: {
      experience: string;
      employers: string;
      consultancies: string;
      certifications: string;
    };
    timelineTitle: string;
    timelineLabel: string;
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
    certificateShort: string;
    views: { label: string; detailed: string; compact: string };
    kinds: Record<Education['kind'], string>;
  };
  contact: { title: string; intro: string; email: string; sendEmail: string; elsewhere: string };
  notFound: { title: string; body: string; back: string };
}

/** Both languages are required by the type, so a missing translation fails the build. */
export const messages: Record<Locale, Messages> = {
  en: {
    skipToContent: 'Skip to content',
    nav: {
      label: 'Main',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
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
    interests: {
      title: 'Outside work',
      intro:
        'A bit of the person behind the work: I like activities that ask for precision and focus.',
    },
    activities: {
      topics: 'Subjects',
      title: 'Beyond the day job',
      intro:
        'Side tracks next to my career in test automation. They are not part of the timeline above, but they shape how I work.',
    },
    career: {
      stats: {
        experience: 'Years of experience',
        employers: 'Clients',
        consultancies: 'Consultancies',
        certifications: 'Certifications',
      },
      timelineTitle: 'Career at a glance',
      timelineLabel: 'Career timeline, oldest first',
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
      certificateShort: 'Certificate ↗',
      views: { label: 'View', detailed: 'Detailed', compact: 'Compact' },
      kinds: { degree: 'Degree', certificate: 'Certificate', course: 'Course' },
    },
    contact: {
      title: 'Get in touch',
      intro:
        'Have a question, a project in mind or just want to connect? I would love to hear from you.',
      email: 'Email',
      sendEmail: 'Send an email',
      elsewhere: 'Or find me on',
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
      openMenu: 'Menu openen',
      closeMenu: 'Menu sluiten',
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
      seeJourney: 'Bekijk mijn traject',
      exploreProjects: 'Mijn projecten',
      getInTouch: 'Contact',
    },
    interests: {
      title: 'Naast het werk',
      intro:
        'Een beetje van de persoon achter het werk: ik hou van activiteiten die precisie en focus vragen.',
    },
    activities: {
      topics: 'Vakken',
      title: 'Naast mijn werk',
      intro:
        'Zijpaden naast mijn loopbaan in testautomatisering. Ze horen niet bij de tijdlijn hierboven, maar bepalen wel hoe ik werk.',
    },
    career: {
      stats: {
        experience: 'Jaar ervaring',
        employers: 'Klanten',
        consultancies: 'Consultancybedrijven',
        certifications: 'Certificaten',
      },
      timelineTitle: 'Mijn loopbaan in een oogopslag',
      timelineLabel: 'Loopbaan, oudste eerst',
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
      certificateShort: 'Certificaat ↗',
      views: { label: 'Weergave', detailed: 'Uitgebreid', compact: 'Compact' },
      kinds: { degree: 'Diploma', certificate: 'Certificaat', course: 'Cursus' },
    },
    contact: {
      title: 'Neem contact op',
      intro: 'Een vraag, een project in gedachten of gewoon even connecteren? Ik hoor het graag.',
      email: 'E-mail',
      sendEmail: 'Stuur een e-mail',
      elsewhere: 'Of vind me op',
    },
    notFound: {
      title: 'Pagina niet gevonden',
      body: 'De pagina die je zoekt bestaat niet.',
      back: 'Terug naar home',
    },
  },
};
