import axios from 'axios';
import { KOCServerUrl } from '../types/connection';

export type GenerateSessionTokenResponse = {
  /**
   * The session token that can be used to authenticate
   * against the private servers auth proxy.
   * 
   * This has to be passed as username to the client
   * when launching.
   */
  authToken: string;
};

/**
 * Generate a session token for authentication again the auth proxy.
 * 
 * **Note**: The retrieved token is only valid once and expires 10 minutes.
 * 
 * @param baseUrl The Auth Server base URL.
 * @param username The username of the account.
 * @param authToken The authToken of the account.
 * @param server The server to create the session token for.
 * 
 * @returns The created session token.
 */
export function generateSessionToken(baseUrl: string, username: string, authToken: string, server: KOCServerUrl) {
  return axios.post<GenerateSessionTokenResponse>(`${baseUrl}/auth/getkey/`, {
    username: username,
    authToken: authToken,
    server: server,
  });
}
