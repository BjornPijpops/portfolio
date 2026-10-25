import type {
  Activity,
  Education,
  Employer,
  Interest,
  Locale,
  Profile,
  Project,
  SkillGroup,
} from '../domain';
import { activities } from './activities';
import { education } from './education';
import { employers } from './employment';
import {
  localizeActivity,
  localizeEducation,
  localizeEmployer,
  localizeInterest,
  localizeProfile,
  localizeProject,
} from './localize';
import { interests } from './interests';
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
  getActivities(): Activity[];
  getInterests(): Interest[];
}

/** Resolves all content for one locale up front, so repeated reads return stable references. */
export function createContentRepository(locale: Locale): ContentRepository {
  const resolved = {
    profile: localizeProfile(profile, locale),
    employers: employers.map((employer) => localizeEmployer(employer, locale)),
    projects: projects.map((project) => localizeProject(project, locale)),
    education: education.map((item) => localizeEducation(item, locale)),
    activities: activities.map((item) => localizeActivity(item, locale)),
    interests: interests.map((item) => localizeInterest(item, locale)),
  };

  return {
    getProfile: () => resolved.profile,
    getEmployers: () => resolved.employers,
    getProjects: () => resolved.projects,
    getSkillGroups: () => skillGroups,
    getEducation: () => resolved.education,
    getActivities: () => resolved.activities,
    getInterests: () => resolved.interests,
  };
}
