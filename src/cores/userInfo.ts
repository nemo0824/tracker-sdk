import axios from 'axios';
import { sendToServer } from './api.ts';
const API_URL = `http://localhost:3000/domains/${window.location.hostname}/userInfo`;

export async function sendUserInfo() {
  const country = await getUserCountry();
  const data = {
    country,
    language: getLanguage(),
  };
  sendToServer(API_URL, data);
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
