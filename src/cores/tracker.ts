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
    window.addEventListener('load', sendUserInfo);
    window.addEventListener('load', sendUserDevice);
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
