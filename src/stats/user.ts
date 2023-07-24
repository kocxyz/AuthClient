import axios from 'axios';
import type { KOCServer } from './servers';

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
