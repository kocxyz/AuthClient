import axios from 'axios';

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
export function validate(baseUrl: string, username: string, authToken: string) {
  return axios.post<ValidateResponse>(`${baseUrl}/auth/validate`, {
    username: username,
    authkey: authToken,
  });
}
