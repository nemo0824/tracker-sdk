import axios from 'axios';
import { sendToServer } from './api.ts';

export async function sendUserInfo() {
  if (sessionStorage.getItem('userinfoSent')) {
    return;
  }
  const country = await getUserCountry();
  const data = {
    country,
    language: getLanguage(),
  };
  sendToServer('/userInfo', data);
  sessionStorage.setItem('userInfoSent', 'true');
}

async function getUserCountry() {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data.country_name || 'unknownCountry';
  } catch (err) {
    console.error('country 찾기 오류', err);
    return 'unknownCountry';
  }
}

function getLanguage() {
  const windowLanguage = window.navigator.language || 'unknownLanguage';
  const language = windowLanguage.split('-')[1];
  return language;
}
