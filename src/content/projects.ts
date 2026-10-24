import type { RawProject } from './raw';

export const projects: RawProject[] = [
  {
    id: 'countdown-alert-timer',
    title: 'Countdown Alert Timer',
    description: {
      en: 'A countdown timer with an audible alert, built for our badminton tournaments so match rounds start and end on time.',
      nl: 'Een afteltimer met hoorbaar alarm, gebouwd voor onze badmintontoernooien zodat wedstrijdrondes op tijd beginnen en eindigen.',
    },
    demoUrl: 'https://bjornpijpops.github.io/',
    sourceUrl: 'https://github.com/BjornPijpops/BjornPijpops.github.io',
  },
  {
    id: 'workout-helper',
    title: 'Workout Helper',
    description: {
      en: 'A mobile-friendly, installable web app (PWA) for use during workouts: pick a routine, watch each exercise video under its reps, or follow a guided mode with automatic timers and rests. Works offline.',
      nl: 'Een mobielvriendelijke, installeerbare webapp (PWA) voor tijdens je training: kies een routine, bekijk de video van elke oefening onder de herhalingen, of volg de begeleide modus met automatische timers en rustmomenten. Werkt offline.',
    },
    demoUrl: 'https://bjornpijpops.github.io/workout-helper/#/',
    sourceUrl: 'https://github.com/BjornPijpops/workout-helper',
  },
];
