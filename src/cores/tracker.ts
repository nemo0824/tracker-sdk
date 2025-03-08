import { getUserCookie } from './api.ts';
import { sendPageInfo, sendPageReferrer } from './pageInfo.ts';
import { debounceScrollHandler, sendIsBounced } from './userAction.ts';
import { sendOffline, sendOnline } from './userConnection.ts';
import { sendUserDevice } from './userDevice.ts';
import { sendUserInfo } from './userInfo.ts';
class Tracker {
  private apiKey: string | null = null;
  constructor() {}

  public async init(apiKey: string) {
    if (apiKey.trim() === '') {
      throw new Error('api key가 없습니다');
    }
    this.apiKey = apiKey;
    await getUserCookie();
    window.addEventListener('load', async () => {
      if (sessionStorage.getItem('userinfoSent')) {
        return;
      }
      await sendUserInfo();
      sessionStorage.setItem('userInfoSent', 'true');
    });
    window.addEventListener('load', async () => {
      if (sessionStorage.getItem('userDeviceSent')) {
        return;
      }
      await sendUserDevice();
      sessionStorage.setItem('userDeviceSent', 'true');
    });
    window.addEventListener('load', sendPageInfo);
    window.addEventListener('popstate', sendPageInfo);
    const originPushState = history.pushState;
    history.pushState = (...args) => {
      originPushState(...args);
      sendPageInfo();
    };
    window.addEventListener('load', async () => {
      if (sessionStorage.getItem('userPageReferrer')) {
        return;
      }
      await sendPageReferrer();
      sessionStorage.setItem('userPageReferrer', 'true');
    });
    window.addEventListener('load', sendOnline);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        sendOnline();
      } else if (document.visibilityState === 'hidden') {
        sendOffline();
      }
    });
    window.addEventListener('pagehide', sendOffline);
    window.addEventListener('beforeunload', sendIsBounced);
    window.addEventListener('scroll', debounceScrollHandler);
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
