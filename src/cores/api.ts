import axios from 'axios';

export async function sendToServer<T>(url: string, data: T): Promise<T> {
  try {
    const response = await axios.post<T>(url, data);
    return response.data;
  } catch (error) {
    console.error('api 요청 실패', error);
    throw error;
  }
}
