import { sendToServer } from './api.ts';

const API_URL = 'TEST_API';

export function pageInfo() {
  let pageEnterTime = 0;

  function visitPageInfo() {
    pageEnterTime = Date.now();
    const data = {
      page: window.location.href,
      pageEnterTime: Date.now(),
      event: 'PageMoveEnter',
    };
    sendToServer(API_URL, data);
  }

  function visitPageDuration() {
    if (pageEnterTime === 0) return;
    const duration = Date.now() - pageEnterTime;
    const data = {
      page: window.location.href,
      duration: duration,
      event: 'PageMoveLeave',
    };
    sendToServer(API_URL, data);
  }

  function sendReferrer() {
    const data = {
      page: window.location.href,
      referrerPage: document.referrer || 'direct',
      event: 'pageFirstReferrer',
    };
    sendToServer(API_URL, data);
  }

  return { visitPageInfo, visitPageDuration, sendReferrer };
}
