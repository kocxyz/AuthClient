import axios from 'axios';

export type RegisterResponse = {
  /**
   * The username of the account
   */
  username: string;
  /**
   * The authentication Token for the account.
   * This is required to e.g. generate session tokens.
   */
  authToken: string;
};

/**
 * Create a new account.
 * 
 * @param baseUrl The Auth Server base URL.
 * @param username The username for the account.
 * @param code The code that was generated when authenticating with Discord.
 * 
 * @returns The login information for the newly created account.
 */
export function register(baseUrl: string, username: string, code: string) {
  return axios.post<RegisterResponse>(`${baseUrl}/auth/register`, {
    username: username,
    code: code,
  });
}
