import axios from 'axios';

export type LinkResponse = {};

/**
 * Link a user to a server specific velan ID.
 *
 * @param baseUrl The Auth Server base URL.
 * @param authToken The token to authorise with.
 * @param serverID The ID of the server to link the user on.
 * @param velanID The Velan ID of the user on the server.
 *
 * @returns
 */
export function linkVelanId(baseUrl: string, authToken: string, serverID: string, velanID: number) {
  return axios.post<LinkResponse>(`${baseUrl}/auth/connect`, {
    authkey: authToken,
    server: serverID,
    velanID: velanID,
  });
}
