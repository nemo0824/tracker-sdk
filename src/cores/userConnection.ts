import { API_URL_BASE, sendToServer } from './api';
import { tracker } from './tracker';

export async function sendOnline() {
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
    console.log('[SDK] 새로고침으로 인한 offline 생략');
    return;
  }
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) {
    console.warn('[SDK] sendOffline 중단: userId 또는 apiKey 누락');
    return;
  }
  const payload = JSON.stringify({
    isOnline: false,
    userId,
    apiKey,
  });
  console.log('[SDK] sendOffline 호출됨');
  console.log('[SDK] 전송 payload:', payload);
  console.log('[SDK] URL:', `${API_URL_BASE}/trackerSdk/userConnection/beacon`);
  const result = navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userConnection/beacon`,
    payload
  );
  console.log('[SDK] sendBeacon 결과:', result);
}
