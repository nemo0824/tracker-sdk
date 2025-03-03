import { sendUserInfo } from './userInfo.ts';
class Tracker {
  constructor() {}

  public init() {
    console.log('tracker start');
    window.addEventListener('load', sendUserInfo);
  }
}

const tracker = new Tracker();
tracker.init();
