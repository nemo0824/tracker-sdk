import axios from 'axios';
import { tracker } from './tracker';

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export async function sendToServer<T>(endpoint: string, data: T): Promise<T> {
  try {
    const apiKey = tracker.getApiKey();
    if (!apiKey) {
      throw new Error('API KEY가 설정되지 않았습니다');
    }
    const url = `${API_URL_BASE}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };
    const response = await axios.post<T>(url, data, {
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('api 요청 실패', error);
    throw error;
  }
}

export async function getUserCookie() {
  try {
    const url = `${API_URL_BASE}/trackerSdk/userCookieId`;
    await axios.get(url, { withCredentials: true });
  } catch (err) {
    console.error('유저 쿠키 요청 실패 ', err);
    throw err;
  }
}
