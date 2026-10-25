export type NavIconName = 'home' | 'experience' | 'projects' | 'education' | 'contact';

const PATHS: Record<NavIconName, string> = {
  home: 'M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10M10 19.5v-5h4v5',
  experience: 'M3.5 8h17v11h-17zM9 8V5.5h6V8M3.5 13h17',
  projects: 'M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z',
  education: 'M2.5 9.5 12 5l9.5 4.5L12 14zM6.5 11.5V16c0 1.2 2.5 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.5',
  contact: 'M3.5 6h17v12h-17zM3.5 7l8.5 6.5L20.5 7',
};

/** Decorative outline icon for the mobile tab bar. */
export function NavIcon({ name }: { name: NavIconName }) {
  return (
    <svg
      className="nav__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
