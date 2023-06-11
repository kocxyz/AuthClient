import axios from 'axios';

export type RegisterResponse = {
  username: string;
  authToken: string;
};

export function register(baseUrl: string, username: string, code: string) {
  return axios.post<RegisterResponse>(`${baseUrl}/auth/register`, {
    username: username,
    code: code,
  });
}
