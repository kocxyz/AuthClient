import axios from 'axios';

export type GetServersResponse = KOCServer[];

export type KOCServer = {
  /**
   * The Id of the public server.
   */
  id: number;
  /**
   * The status of the server.
   */
  status: 'online' | 'offline';
  /**
   * The name of the server.
   */
  name: string;
  /**
   * The ip / address of the server.
   */
  ip: string;
  /**
   * The region in which the server is hosted.
   */
  region: 'EU' | 'NA';
  /**
   * The Discord Id of the owner.
   */
  owner: string;
  /**
   * The amount of players currently connected to the server.
   */
  players: number;
  /**
   * The maximum player count the server can hold.
   */
  maxPlayers: number;
};

/**
 * Get all registered public servers.
 *
 * @param baseUrl The Auth Server base URL.
 *
 * @returns The information for the public servers.
 */
export function getServers(baseUrl: string) {
  return axios.get<GetServersResponse>(`${baseUrl}/stats/servers`);
}
