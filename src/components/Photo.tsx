import { imageUrl } from '../content/assets';
import type { Photo as PhotoData } from '../domain';

interface PhotoProps {
  photo: PhotoData;
  className?: string;
}

/** Lazy-loaded image from public/images/. */
export function Photo({ photo, className }: PhotoProps) {
  return <img className={className} src={imageUrl(photo.file)} alt={photo.alt} loading="lazy" />;
}
