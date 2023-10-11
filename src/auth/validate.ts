import axios from 'axios';
import type { KOCServerUrl, UsernameColor } from '../types';

export type ValidateResponse = {
  /**
   * The username of the account
   */
  username: string;
  /**
   * Username color in RGB as Hex String.
   *
   * **Note** Always `undefined` if the user is not
   * a tier 3 patreon.
   */
  color?: UsernameColor;
  /**
   * The linked Velan ID for the user on the Server.
   *
   * **Note**: The ID is specific to the server the requests is sent to.
   */
  velanID?: number;
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
export function validate(
  baseUrl: string,
  server: KOCServerUrl,
  authToken: string,
  keepKey: boolean | undefined = undefined,
) {
  return axios.post<ValidateResponse>(`${baseUrl}/auth/validate`, {
    server: server,
    authkey: authToken,
    keepKey: keepKey,
  });
}
