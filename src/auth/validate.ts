import axios from 'axios';

export type ValidateResponse = {
  username: string;
};

export function validate(baseUrl: string, username: string, authToken: string) {
  return axios.post<ValidateResponse>(`${baseUrl}/auth/validate`, {
    username: username,
    authkey: authToken,
  });
}
