import axios from 'axios';
import { KOCServerUrl } from '../types/connection';

export type GenerateSessionTokenResponse = {
  authToken: string;
};

export function generateSessionToken(baseUrl: string, username: string, authToken: string, server: KOCServerUrl) {
  return axios.post<GenerateSessionTokenResponse>(`${baseUrl}/auth/getkey/`, {
    username: username,
    authToken: authToken,
    server: server,
  });
}
