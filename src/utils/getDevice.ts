export function getDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  const os = (() => {
    if (userAgent.indexOf('windows') === 0) {
      return 'Windows';
    } else if (userAgent.indexOf('mac') === 0) {
      return 'macOS';
    } else if (userAgent.indexOf('android') === 0) {
      return 'Android';
    } else if (
      userAgent.indexOf('ipad') === 0 ||
      userAgent.indexOf('iphone') === 0
    ) {
      return 'iOS';
    } else {
      return 'Other';
    }
  })();
  const browser = (() => {
    if (userAgent.indexOf('chrome') === 0) {
      return 'Chrome';
    } else if (userAgent.indexOf('safari') === 0) {
      return 'Safari';
    } else if (userAgent.indexOf('firefox') === 0) {
      return 'Firefox';
    } else if (userAgent.indexOf('whale') === 0) {
      return 'NaverWhale';
    } else if (userAgent.indexOf('edge') === 0) {
      return 'Edge';
    } else if (
      userAgent.indexOf('trident') !== -1 ||
      userAgent.indexOf('mise') !== -1
    ) {
      return 'InternetExplorer';
    } else {
      return 'Other';
    }
  })();
  const resolution = `${window.screen.width}x${window.screen.height}`;
  return { os, browser, resolution };
}
