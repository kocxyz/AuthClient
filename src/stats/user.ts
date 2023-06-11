import axios from 'axios';
import type { KOCServer } from './servers';

export type KOCUser = {
  id: number;
  username: string;
  registeredat: string;
  lastlogin: string;
  ownedServers: KOCServer[];
};

export function getUser(baseUrl: string, userId: number) {
  return axios.get<KOCUser>(`${baseUrl}/stats/user/${userId}`);
}
