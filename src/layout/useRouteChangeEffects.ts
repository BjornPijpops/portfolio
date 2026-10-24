import { useEffect, useRef, type RefObject } from 'react';
import { useLocation } from 'react-router-dom';
import { employerAnchorId } from '../domain';

/** Router state set by links that want to land on a specific employer of the experience page. */
export interface ScrollTargetState {
  employerId?: string;
}

/**
 * On navigation, scroll to the top (or to the employer a link asked for) and move focus to the
 * page content so keyboard and screen reader users start at the new page. The initial load is
 * skipped to keep the "skip to content" link usable.
 */
export function useRouteChangeEffects(content: RefObject<HTMLElement | null>) {
  const { pathname, state } = useLocation();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const { employerId } = (state ?? {}) as ScrollTargetState;
    const target = employerId && document.getElementById(employerAnchorId(employerId));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    content.current?.focus({ preventScroll: true });
    // Only react to page changes, not to state changes on the same page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, content]);
}
