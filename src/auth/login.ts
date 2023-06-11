import axios from 'axios';

export type LoginResponse = {
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
 * Login to an account and obtain an authToken.
 * 
 * @param baseUrl The Auth Server base URL.
 * @param code The code that was generated when authenticating with Discord.
 * 
 * @returns The login information.
 */
export function login(baseUrl: string, code: string) {
  return axios.post<LoginResponse>(`${baseUrl}/auth/login`, {
    code: code,
  });
}
