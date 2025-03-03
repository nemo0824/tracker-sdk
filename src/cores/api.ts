import axios from 'axios';
import { tracker } from './tracker.ts';

const API_URL_BASE = process.env.API_BASE_URL;

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
    const response = await axios.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('api 요청 실패', error);
    throw error;
  }
}
