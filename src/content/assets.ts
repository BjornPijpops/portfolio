import { encodePath } from '../domain';

const publicUrl = (folder: string, file: string) =>
  `${import.meta.env.BASE_URL}${folder}/${encodePath(file)}`;

/** URL of a file inside public/images/. */
export const imageUrl = (file: string) => publicUrl('images', file);

/** URL of a file inside public/certificates/. */
export const certificateUrl = (file: string) => publicUrl('certificates', file);
