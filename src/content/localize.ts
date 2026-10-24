import type { Education, Employer, Locale, Profile, Project, Role } from '../domain';
import { pick } from '../domain';
import type { RawEducation, RawEmployer, RawProfile, RawProject, RawRole } from './raw';

export const localizeProfile = (profile: RawProfile, locale: Locale): Profile => ({
  ...profile,
  headline: pick(profile.headline, locale),
  summary: pick(profile.summary, locale),
});

const localizeRole = (role: RawRole, locale: Locale): Role => ({
  ...role,
  title: pick(role.title, locale),
  context: pick(role.context, locale),
  responsibilities: pick(role.responsibilities, locale),
  results: pick(role.results, locale),
});

export const localizeEmployer = (employer: RawEmployer, locale: Locale): Employer => ({
  ...employer,
  industry: pick(employer.industry, locale),
  roles: employer.roles.map((role) => localizeRole(role, locale)),
});

export const localizeProject = (project: RawProject, locale: Locale): Project => ({
  ...project,
  title: pick(project.title, locale),
  description: pick(project.description, locale),
});

export const localizeEducation = (item: RawEducation, locale: Locale): Education => ({
  ...item,
  title: pick(item.title, locale),
  institution: pick(item.institution, locale),
});
