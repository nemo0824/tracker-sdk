import { API_URL_BASE, sendToServer } from './api';
import { tracker } from './tracker';

export function sendOnline() {
  const data = {
    isOnline: true,
  };
  sendToServer('/trackerSdk/userConnection', data);
}

export function sendOffline() {
  const navEntry = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;
  if (navEntry.type === 'reload') {
    return;
  }
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) return;
  const payload = JSON.stringify({
    isOnline: false,
    userId,
    apiKey,
  });
  navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userConnection/beacon`,
    payload
  );
}
