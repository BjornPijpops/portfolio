import type {
  Activity,
  Education,
  Employer,
  Interest,
  Locale,
  Photo,
  Profile,
  Project,
  Role,
} from '../domain';
import { pick } from '../domain';
import type {
  RawInterest,
  RawPhoto,
  RawActivity,
  RawEducation,
  RawEmployer,
  RawProfile,
  RawProject,
  RawRole,
} from './raw';

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

const localizePhoto = (photo: RawPhoto, locale: Locale): Photo => ({
  ...photo,
  alt: pick(photo.alt, locale),
});

export const localizeActivity = (activity: RawActivity, locale: Locale): Activity => ({
  ...activity,
  title: pick(activity.title, locale),
  organization: pick(activity.organization, locale),
  description: pick(activity.description, locale),
  photo: activity.photo && localizePhoto(activity.photo, locale),
});

export const localizeInterest = (interest: RawInterest, locale: Locale): Interest => ({
  ...interest,
  title: pick(interest.title, locale),
  description: pick(interest.description, locale),
  photo: localizePhoto(interest.photo, locale),
});
