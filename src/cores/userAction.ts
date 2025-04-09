import { debounce } from '../utils/debounce';
import { API_URL_BASE } from './api';
import { tracker } from './tracker';

export const debounceScrollHandler = debounce(() => {
  console.log('debounceScrollHandler 실행');
  sendUserScrollDepth();
}, 500);

function sendUserScrollDepth() {
  console.log('sendUserScrollDepth 진입');
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrolledPercent = Math.floor(
    ((scrollTop + windowHeight) / fullHeight) * 100
  );
  console.log(
    `✅ scrollTop: ${scrollTop}, windowHeight: ${windowHeight}, fullHeight: ${fullHeight}, scrolledPercent: ${scrolledPercent}`
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
  const userId = tracker.getUserId();
  const apiKey = tracker.getApiKey();
  if (!userId || !apiKey) return;

  const payload = JSON.stringify({
    url: window.location.href,
    scrollDepth: recordScrolledPercent || 0,
    userId,
    apiKey,
  });
  navigator.sendBeacon(
    `${API_URL_BASE}/trackerSdk/userAction/userScrollDepth/beacon`,
    payload
  );
  console.log('sendBeacon 호출완료');
}

export function sendIsBounced() {
  const sendIsBounced = sessionStorage.getItem('sendIsBounced');
  if (sendIsBounced) return;
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
