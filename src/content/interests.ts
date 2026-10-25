import type { RawInterest } from './raw';

export const interests: RawInterest[] = [
  {
    id: 'badminton',
    title: { en: 'Badminton', nl: 'Badminton' },
    description: {
      en: 'I play badminton and enjoy tournaments: quick reactions, teamwork and a healthy dose of competition.',
      nl: 'Ik speel badminton en doe graag mee aan toernooien: snelle reacties, teamwork en een gezonde dosis competitie.',
    },
    photo: {
      file: 'badminton_tournament.webp',
      alt: {
        en: 'Bjorn with a fellow player at a badminton tournament',
        nl: 'Bjorn met een medespeler op een badmintontoernooi',
      },
    },
  },
  {
    id: 'sport-shooting',
    title: { en: 'Sport shooting', nl: 'Sportschieten' },
    description: {
      en: 'Precision shooting with pistol and revolver. It rewards a calm, methodical approach and attention to detail.',
      nl: 'Precisieschieten met pistool en revolver. Het beloont een rustige, methodische aanpak en oog voor detail.',
    },
    photo: {
      file: 'shooting_2.webp',
      alt: {
        en: 'Bjorn at the shooting range next to his target',
        nl: 'Bjorn op de schietbaan naast zijn schietschijf',
      },
    },
  },
  {
    id: 'clay-shooting',
    title: { en: 'Clay pigeon shooting', nl: 'Kleiduivenschieten' },
    description: {
      en: 'Shotgun clay shooting outdoors: fast decisions, steady focus and a lot of practice.',
      nl: 'Kleiduivenschieten met het jachtgeweer in openlucht: snelle beslissingen, standvastige focus en veel oefening.',
    },
    photo: {
      file: 'shooting_3.webp',
      alt: {
        en: 'Bjorn aiming a shotgun on a clay pigeon range',
        nl: 'Bjorn mikt met een jachtgeweer op een kleiduivenschietstand',
      },
    },
  },
  {
    id: 'hiking',
    title: { en: 'Walking', nl: 'Wandelen' },
    description: {
      en: 'Long walks outdoors are how I clear my head and recharge.',
      nl: 'Lange wandelingen in de natuur zijn mijn manier om mijn hoofd leeg te maken en op te laden.',
    },
    photo: {
      file: 'nature_2.webp',
      alt: {
        en: 'Bjorn on a rock overlooking a forested valley',
        nl: 'Bjorn op een rots met uitzicht over een beboste vallei',
      },
    },
  },
  {
    id: 'nature-photography',
    title: { en: 'Nature photography', nl: 'Natuurfotografie' },
    description: {
      en: 'While walking I capture the moments worth stopping for, like this sunrise above the mist.',
      nl: 'Tijdens het wandelen leg ik de momenten vast die het waard zijn om even stil te staan, zoals deze zonsopgang boven de mist.',
    },
    photo: {
      file: 'nature_1.webp',
      alt: {
        en: 'Sunrise over a misty valley seen through the trees',
        nl: 'Zonsopgang boven een mistige vallei tussen de bomen',
      },
    },
  },
];
