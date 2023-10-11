import axios from 'axios';
import type { KOCServer } from './servers';
import type { PatreonTier, UsernameColor } from '../types';

export type KOCUser = {
  user: {
    /**
     * The User Id
     */
    id: string;
    /**
     * The username of the account associated.
     */
    username: string;
    /**
     * The registration date.
     */
    registeredat: string;
    /**
     * The last login date.
     */
    lastlogin: string;
    /**
     * The user patreon tier.
     */
    premium: PatreonTier;
    /**
     * Username color in RGB as Hex String.
     *
     * **Note** Always `undefined` if the user is not
     * a tier 3 patreon.
     */
    color: UsernameColor;
    /**
     * Total user playtime in minutes;
     */
    playtime: number;
  };
  /**
   * A list of servers that are hosted by the user.
   */
  ownedServers: KOCServer[];
};

/**
 * Get information and stats about a specific user.
 *
 * @param baseUrl The Auth Server base URL.
 * @param userId The Discord UserId of the user.
 *
 * @returns The users information.
 */
export function getUserById(baseUrl: string, userId: string) {
  return axios.get<KOCUser>(`${baseUrl}/stats/user/id/${userId}`);
}

/**
 * Get information and stats about a specific user.
 *
 * @param baseUrl The Auth Server base URL.
 * @param username The Brawler username of the user.
 *
 * @returns The users information.
 */
export function getUserByUsername(baseUrl: string, username: string) {
  return axios.get<KOCUser>(`${baseUrl}/stats/user/username/${username}`);
}

type UsernameSetColorResponse = {
  username: string;
  color: UsernameColor;
};

/**
 * Change the username color.
 *
 * @param baseUrl The Auth Server base URL.
 * @param username The Brawler username of the user.
 * @param authToken The token to authorise with.
 * @param colorIndex The color index
 *
 * @returns
 */
export function setUsernameColorByUsername(baseUrl: string, username: string, authToken: string, colorIndex: number) {
  return axios.post<UsernameSetColorResponse>(`${baseUrl}/stats/user/username/${username}/setColor`, {
    token: authToken,
    color: colorIndex,
  });
}

/**
 * Increase the users playtime by one minute.
 *
 * **Note**: Has a cooldown of once per minute.
 *
 * @param baseUrl
 * @param username
 * @param authToken
 * @returns
 */
export function increasePlaytimeByUsername(baseUrl: string, username: string, authToken: string) {
  return axios.post<{}>(`${baseUrl}/stats/user/username/${username}/playtime`, {
    token: authToken,
  });
}
