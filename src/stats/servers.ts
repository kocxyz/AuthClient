import axios from 'axios';

export type GetServersResponse = KOCServer[];

export type KOCServer = {
  id: number;
  status: 'online' | 'offline';
  name: string;
  ip: string;
  region: 'EU' | 'NA';
  /**
   * @deprecated Use `maxPlayers` instead.
   */
  maxplayers: number;
  owner: string;
  players: number;
  maxPlayers: number;
};

export function getServers(baseUrl: string) {
  return axios.get<GetServersResponse>(`${baseUrl}/stats/servers`);
}
