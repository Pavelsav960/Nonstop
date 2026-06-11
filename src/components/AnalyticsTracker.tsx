import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `page_view` event on client-side route changes.
 * The gtag snippet in index.html already auto-tracks the initial page load,
 * so we skip the first render to avoid double-counting.
 */
export default function AnalyticsTracker() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
}
