import { getUserCookie } from './api.ts';
import { sendPageInfo, sendPageReferrer } from './pageInfo.ts';
import { sendIsBounced, sendUserScrollDepth } from './userAction.ts';
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
    window.addEventListener('load', async () => {
      await sendPageInfo();
    });
    window.addEventListener('popstate', async () => {
      await sendPageInfo();
    });
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
    window.addEventListener('load', async () => {
      await sendOnline();
    });
    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'visible') {
        await sendOnline();
      } else if (document.visibilityState === 'hidden') {
        await sendOffline();
      }
    });
    window.addEventListener('pagehide', async () => {
      await sendOffline();
    });
    window.addEventListener('beforeunload', async () => {
      await sendIsBounced();
    });
    window.addEventListener('load', async () => {
      await sendUserScrollDepth();
    });
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
