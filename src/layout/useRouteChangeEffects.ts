import { useEffect, useRef, type RefObject } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation, scroll to the top and move focus to the page content so keyboard and
 * screen reader users start at the new page. The initial load is skipped to keep the
 * "skip to content" link usable.
 */
export function useRouteChangeEffects(content: RefObject<HTMLElement | null>) {
  const { pathname } = useLocation();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    content.current?.focus({ preventScroll: true });
  }, [pathname, content]);
}
