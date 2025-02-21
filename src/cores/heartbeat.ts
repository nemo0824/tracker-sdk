import { Timer } from '../types/type.js';
import { getDevice, getTimeStamp } from '../utils/util.js';
import { sendToserver } from './api.js';

export function startHeartBeat() {
  const heartBeatTimer: Timer = setInterval(() => {
    sendOnline();
  }, 5000);

  window.addEventListener('load', () => {
    sendUserInfo();
  });

  window.addEventListener('beforeunload', () => {
    sendOffline(heartBeatTimer);
  });
}

function sendUserInfo() {
  const data = {
    page: window.location.href,
    userPrevPage: document.referrer,
    userAccessTime: getTimeStamp,
    userDevice: getDevice,
    userLanguage: navigator.language,
  };
  sendToserver('/user-info', data);
}

function sendOffline(heartBeatTimer: Timer) {
  clearInterval(heartBeatTimer);
  const data = {
    page: window.location.pathname,
    timestamp: getTimeStamp(),
    status: 'offline',
  };
  navigator.sendBeacon(`api/heartbeat`, JSON.stringify(data));
}

function sendOnline() {
  const data = {
    page: window.location.pathname,
    timestamp: getTimeStamp(),
    status: 'online',
  };
  sendToserver(`api/heartbeat`, data);
}
