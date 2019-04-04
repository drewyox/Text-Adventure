import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './playerInfo';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayer() {
    return PLAYERS;
  }
  addPlayer(player: Player) {
    PLAYERS.push(player);
  }
}
