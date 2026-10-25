/** A calendar month, formatted as "YYYY-MM". */
export type YearMonth = `${number}-${string}`;

/** An open-ended period: `end` is omitted while it is still ongoing. */
export interface Period {
  start: YearMonth;
  end?: YearMonth;
}

export interface Link {
  label: string;
  url: string;
}

export type SocialPlatform = 'linkedin' | 'github';

export interface SocialLink extends Link {
  platform: SocialPlatform;
}

export interface Profile {
  name: string;
  headline: string;
  email: string;
  /** Path inside public/images/, shown on the home page when set. */
  photo?: string;
  summary: string[];
  links: SocialLink[];
}

export interface Role {
  title: string;
  period: Period;
  context: string;
  responsibilities: string[];
  results: string[];
  technologies: string[];
}

/** An employer groups consecutive roles, which makes career growth visible. */
export interface Employer {
  id: string;
  name: string;
  industry: string;
  /** Consultancy through which the work was done for this client. */
  consultancy?: Link;
  roles: Role[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Hosted version: shown as a live preview and linked as the live demo. */
  demoUrl?: string;
  sourceUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  title: string;
  institution: string;
  year: number;
  kind: 'degree' | 'certificate' | 'course';
  /** Path (sub-folders allowed) inside public/certificates/, if a copy is available. */
  certificate?: string;
}

/** Work done next to the main career (tutoring, coaching, ...). Kept apart from employment so it never counts as experience. */
export interface Activity {
  id: string;
  title: string;
  organization: string;
  /** Only the years are shown, so the month is not important. */
  period: Period;
  description: string;
  /** Optional subjects or topics, shown as tags. */
  topics?: string[];
  photo?: Photo;
}

/** A picture from public/images/ with a description for screen readers. */
export interface Photo {
  file: string;
  alt: string;
}

/** A personal interest, shown on the home page to give the career some personality. */
export interface Interest {
  id: string;
  title: string;
  description: string;
  photo: Photo;
}
