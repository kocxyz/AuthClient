import axios from 'axios';
import { KOCServerUrl } from '../types/connection';

export type ValidateResponse = {
  /**
   * The username of the account
   */
  username: string;
};

/**
 * Validate a users `authToken`.
 * 
 * @param baseUrl The Auth Server base URL.
 * @param username The username of the account.
 * @param authToken The authToken to validate.
 * 
 * @returns 
 */
export function validate(baseUrl: string, server: KOCServerUrl, authToken: string) {
  return axios.post<ValidateResponse>(`${baseUrl}/auth/validate`, {
    server: server,
    authkey: authToken,
  });
}
