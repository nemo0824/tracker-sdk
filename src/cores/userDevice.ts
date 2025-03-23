import { sendToServer } from './api';

export function sendUserDevice() {
  const data = {
    browser: getBrowser(),
    isMobile: getIsMobile(),
    os: getOs(),
    resolution: getResolution(),
  };
  sendToServer('/trackerSdk/userDevice', data);
}

function getOs() {
  const userAgentLower = navigator.userAgent.toLowerCase();
  if (userAgentLower.includes('windows')) return 'Windows';
  if (userAgentLower.includes('mac')) return 'macOS';
  if (userAgentLower.includes('android')) return 'Android';
  if (userAgentLower.includes('iphone') || userAgentLower.includes('ipad'))
    return 'iOS';
  return 'Other';
}

function getIsMobile() {
  const userAgentLower = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad/.test(userAgentLower);
}

function getResolution() {
  return `${window.screen.width}x${window.screen.height}`;
}

function getBrowser() {
  const userAgentLower = navigator.userAgent.toLowerCase();
  if (userAgentLower.includes('whale')) return 'NaverWhale';
  if (userAgentLower.includes('edg')) return 'Edge';
  if (userAgentLower.includes('chrome')) return 'Chrome';
  if (userAgentLower.includes('safari')) return 'Safari';
  if (userAgentLower.includes('firefox')) return 'Firefox';
  if (userAgentLower.includes('trident') || userAgentLower.includes('msie'))
    return 'InternetExplorer';
  return 'Other';
}
