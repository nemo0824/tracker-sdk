import axios from 'axios';
import { tracker } from './tracker';

export const API_URL_BASE = 'https://tracker-server.site';
export async function sendToServer<T>(endpoint: string, data: T): Promise<T> {
  try {
    const apiKey = tracker.getApiKey();
    const userId = tracker.getUserId();
    if (!apiKey) {
      throw new Error('API KEY가 설정되지 않았습니다');
    }
    const url = `${API_URL_BASE}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'x-user-id': userId,
    };
    const response = await axios.post<T>(url, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('api 요청 실패', error);
    throw error;
  }
}

export function createOrGetUserId() {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('userId', userId);
  }
  return userId;
}
