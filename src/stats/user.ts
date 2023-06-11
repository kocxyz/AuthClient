import axios from 'axios';
import type { KOCServer } from './servers';

export type KOCUser = {
  /**
   * The User Id
   */
  id: number;
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
export function getUser(baseUrl: string, userId: number) {
  return axios.get<KOCUser>(`${baseUrl}/stats/user/${userId}`);
}
