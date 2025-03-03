import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getTimeStamp } from '../utils/getTimeStamp.ts';
import { sendToServer } from './api.ts';
const API_URL = 'TEST_API';

export async function sendUserInfo() {
  const userCountry = await getUserCountry();
  const data = {
    page: window.location.href,
    userAccessTime: getTimeStamp(),
    userBrowser: getBrowser(),
    userOs: getOs(),
    userCountry,
    userIsMobile: getIsMobile(),
    userResolution: getResolution(),
    userLanguage: navigator.language,
    event: 'once',
  };
  sendToServer(API_URL, data);
}

function getOs() {
  const userAgent = navigator.userAgent.toLowerCase();
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
}

function getIsMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (
    userAgent.indexOf('android') === 0 ||
    userAgent.indexOf('ipad') === 0 ||
    userAgent.indexOf('iphone') === 0
  ) {
    return true;
  } else {
    return false;
  }
}

function getResolution() {
  return `${window.screen.width}x${window.screen.height}`;
}

function getBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
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
}

async function getUserCountry() {
  try {
    const response = axios.get('https://ipapi.co/json/');
    return (await response).data.country_name;
  } catch (error) {
    return 'unknownCountry';
  }
}

export function createUserId() {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem('userId', userId);
  }
  if (!document.cookie.includes('userId=')) {
    document.cookie = `userId=${userId}; path=/; max-age=604800; sameSite=None; Secure`;
  }
}
