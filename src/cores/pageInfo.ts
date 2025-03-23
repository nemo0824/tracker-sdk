import { sendToServer } from './api';

export function sendPageReferrer() {
  const referrer = document.referrer.trim();
  const data = {
    referrer: referrer === '' ? 'direct' : referrer,
  };
  sendToServer('/trackerSdk/pageInfo/referrer', data);
}

export function sendPageInfo() {
  const loadTime = getPageLoadTime();
  const data = {
    url: window.location.href,
    loadTime: loadTime,
  };
  sendToServer('/trackerSdk/pageInfo', data);
}

function getPageLoadTime() {
  const [navigation] = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];
  return navigation
    ? Math.floor(navigation.loadEventEnd - navigation.startTime)
    : null;
}
