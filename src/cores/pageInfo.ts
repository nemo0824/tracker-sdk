import { sendToServer } from './api.ts';

export async function sendPageReferrer() {
  const data = {
    referrer: document.referrer || 'direct',
  };
  await sendToServer('/pageInfo/referrer', data);
}

export async function sendPageInfo() {
  const loadTime = getPageLoadTime();
  const data = {
    url: window.location.href,
    loadTime: loadTime,
  };
  await sendToServer('/pageInfo', data);
}

function getPageLoadTime() {
  const [navigation] = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];
  return navigation
    ? Math.floor(navigation.loadEventEnd - navigation.startTime)
    : null;
}
