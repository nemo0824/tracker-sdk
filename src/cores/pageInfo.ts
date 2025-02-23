import { sendToServer } from './api.ts';

const API_URL = 'TEST_API';

export function sendPageInfo() {
  let pageEnterTime = 0;

  function sendPageEnter() {
    pageEnterTime = Date.now();
    const data = {
      page: window.location.href,
      pageEnterTime: Date.now(),
      event: 'PageMoveEnter',
    };
    sendToServer(API_URL, data);
  }

  function sendPageDuration() {
    if (pageEnterTime === 0) return;
    const duration = Date.now() - pageEnterTime;
    const data = {
      page: window.location.href,
      duration: duration,
      event: 'PageMoveLeave',
    };
    sendToServer(API_URL, data);
  }

  function sendPageReferrer() {
    const data = {
      page: window.location.href,
      referrerPage: document.referrer || 'direct',
      event: 'pageFirstReferrer',
    };
    sendToServer(API_URL, data);
  }

  return { sendPageEnter, sendPageDuration, sendPageReferrer };
}
