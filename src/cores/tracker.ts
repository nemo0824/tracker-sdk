import { sendUserInfo } from './userInfo.ts';
class Tracker {
  private apiKey: string | null = null;
  constructor() {}

  public init(apiKey: string) {
    if (!apiKey) {
      console.error('api key가 없습니다');
      return;
    }
    this.apiKey = apiKey;
    console.log('tracker start');
    window.addEventListener('load', sendUserInfo);
  }

  public getApiKey() {
    return this.apiKey;
  }
}
export const tracker = new Tracker();
