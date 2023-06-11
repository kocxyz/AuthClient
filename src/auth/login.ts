import axios from 'axios';

export type LoginResponse = {
  username: string;
  authToken: string;
};

export function login(baseUrl: string, code: string) {
  return axios.post<LoginResponse>(`${baseUrl}/auth/login`, {
    code: code,
  });
}
