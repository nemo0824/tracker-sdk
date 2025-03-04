import { sendPageInfo, sendPageReferrer } from './pageInfo.ts';
import { sendUserDevice } from './userDevice.ts';
import { sendUserInfo } from './userInfo.ts';
class Tracker {
  private apiKey: string | null = null;
  constructor() {}

  public init(apiKey: string) {
    if (apiKey.trim() === '') {
      throw new Error('api key가 없습니다');
    }
    this.apiKey = apiKey;
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userinfoSent')) {
        return;
      }
      sendUserInfo;
      sessionStorage.setItem('userInfoSent', 'true');
    });
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userDeviceSent')) {
        return;
      }
      sendUserDevice;
      sessionStorage.setItem('userDeviceSent', 'true');
    });
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('userPageInfoSent')) {
        return;
      }
      sendPageInfo;
      sessionStorage.setItem('userPageInfoSent', 'true');
    });
    window.addEventListener('load', sendPageReferrer);
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
