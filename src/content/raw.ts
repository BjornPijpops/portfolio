import type { Education, Employer, Profile, Project, Role } from '../domain';
import type { Localizable } from '../domain';

/** Same shape as `T`, but the listed keys may be provided per locale. */
type WithLocalized<T, K extends keyof T> = Omit<T, K> & { [P in K]: Localizable<T[P]> };

export type RawProfile = WithLocalized<Profile, 'headline' | 'summary'>;
export type RawRole = WithLocalized<Role, 'title' | 'context' | 'responsibilities' | 'results'>;
export type RawEmployer = Omit<WithLocalized<Employer, 'industry'>, 'roles'> & { roles: RawRole[] };
export type RawProject = WithLocalized<Project, 'title' | 'description'>;
export type RawEducation = WithLocalized<Education, 'title' | 'institution'>;
