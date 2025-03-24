import { sendToServer } from './api';

export function sendPageReferrer() {
  const referrer = document.referrer.trim();
  const data = {
    referrer: referrer === '' ? 'direct' : referrer,
  };
  sendToServer('/trackerSdk/pageInfo/referrer', data);
}

export function sendPageInfo() {
  const data = {
    url: window.location.href,
  };
  sendToServer('/trackerSdk/pageInfo', data);
}
