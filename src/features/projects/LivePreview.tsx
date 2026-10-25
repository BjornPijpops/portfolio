import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useDataSaver } from '../../hooks/useDataSaver';
import { useElementWidth } from '../../hooks/useElementWidth';
import { useLocale } from '../../i18n/LocaleContext';

// The site is rendered at a typical desktop size, then scaled down to fit the card.
const VIEWPORT_WIDTH = 1100;
const VIEWPORT_HEIGHT = 700;

interface LivePreviewProps {
  url: string;
  title: string;
}

/**
 * A non-interactive, scaled-down live view of a hosted site; clicking it opens the real site.
 * Visitors who enabled data saving get a static tile instead of a loaded page.
 */
export function LivePreview({ url, title }: LivePreviewProps) {
  const { messages } = useLocale();
  const dataSaver = useDataSaver();
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const { ref: cardRef, inView } = useInView<HTMLAnchorElement>();
  const [isLoaded, setIsLoaded] = useState(false);
  const scale = width / VIEWPORT_WIDTH;

  return (
    <a
      ref={cardRef}
      className="preview"
      data-loaded={isLoaded || dataSaver}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={messages.projects.openPreview(title)}
      style={{ aspectRatio: `${VIEWPORT_WIDTH} / ${VIEWPORT_HEIGHT}` }}
    >
      {dataSaver ? (
        <span className="preview__notice">{messages.projects.previewDisabled}</span>
      ) : (
        <div ref={ref} className="preview__frame" aria-hidden="true">
          {inView && (
            <iframe
              src={url}
              title={title}
              tabIndex={-1}
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIsLoaded(true)}
              style={{
                width: VIEWPORT_WIDTH,
                height: VIEWPORT_HEIGHT,
                transform: `scale(${scale})`,
              }}
            />
          )}
        </div>
      )}
      <span className="preview__cta">{messages.projects.openCta}</span>
    </a>
  );
}
