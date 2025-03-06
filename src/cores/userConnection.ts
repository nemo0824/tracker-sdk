import { sendToServer } from './api.ts';

export async function sendOnline() {
  const data = {
    isOnline: true,
  };
  await sendToServer('/userConnection', data);
}

export async function sendOffline() {
  const data = {
    isOnline: false,
  };
  await navigator.sendBeacon('/userConnection', JSON.stringify(data));
}
