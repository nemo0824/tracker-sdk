import { debounce } from '../utils/debounce';
import { API_URL_BASE, sendToServer } from './api';
import { tracker } from './tracker';

export const debounceScrollHandler = debounce(() => {
  sendUserScrollDepth();
}, 500);

function sendUserScrollDepth() {
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrolledPercent = Math.floor(
    ((scrollTop + windowHeight) / fullHeight) * 100
  );
  let recordScrolledPercent = 0;
  if (scrolledPercent > 0 && scrolledPercent <= 25) {
    recordScrolledPercent = 25;
  } else if (scrolledPercent > 25 && scrolledPercent <= 50) {
    recordScrolledPercent = 50;
  } else if (scrolledPercent > 50 && scrolledPercent <= 75) {
    recordScrolledPercent = 75;
  } else if (scrolledPercent > 75 && scrolledPercent <= 100) {
    recordScrolledPercent = 100;
  }
  const data = {
    url: window.location.href,
    scrollDepth: recordScrolledPercent || 0,
  };
  sendToServer('/trackerSdk/userAction/scrollDepth', data);
}

export function sendIsBounced() {
  const sendIsBounced = sessionStorage.getItem('sendIsBounced');
  if (sendIsBounced) return;
  const navEntry = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;
  if (navEntry.type === 'reload') {
    return;
  }
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) return;
  const payload = JSON.stringify({ url: window.location.href, userId, apiKey });
  navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userAction/bounceRate/beacon`,
    payload
  );
  sessionStorage.setItem('sendIsBounced', 'true');
}
