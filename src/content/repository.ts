import type { Education, Employer, Locale, Profile, Project, SkillGroup } from '../domain';
import { education } from './education';
import { employers } from './employment';
import { localizeEducation, localizeEmployer, localizeProfile, localizeProject } from './localize';
import { profile } from './profile';
import { projects } from './projects';
import { skillGroups } from './skills';

/**
 * Repository pattern: components depend on this abstraction, not on where the
 * content lives. Swap the static implementation for a CMS or API without
 * touching any UI code.
 */
export interface ContentRepository {
  getProfile(): Profile;
  getEmployers(): Employer[];
  getProjects(): Project[];
  getSkillGroups(): SkillGroup[];
  getEducation(): Education[];
}

/** Resolves all content for one locale up front, so repeated reads return stable references. */
export function createContentRepository(locale: Locale): ContentRepository {
  const resolved = {
    profile: localizeProfile(profile, locale),
    employers: employers.map((employer) => localizeEmployer(employer, locale)),
    projects: projects.map((project) => localizeProject(project, locale)),
    education: education.map((item) => localizeEducation(item, locale)),
  };

  return {
    getProfile: () => resolved.profile,
    getEmployers: () => resolved.employers,
    getProjects: () => resolved.projects,
    getSkillGroups: () => skillGroups,
    getEducation: () => resolved.education,
  };
}
