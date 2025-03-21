import { sendToServer } from './api';

export function sendOnline() {
  const data = {
    isOnline: true,
  };
  sendToServer('/trackerSdk/userConnection', data);
}

export function sendOffline() {
  const data = {
    isOnline: false,
  };
  navigator.sendBeacon('/trackerSdk/userConnection', JSON.stringify(data));
}
