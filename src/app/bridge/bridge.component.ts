import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PLAYERS } from '../playerInfo';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss']
})
export class BridgeComponent implements OnInit {
  player: Player = PLAYERS[0];

  constructor() { }

  ngOnInit() {
    if (PLAYERS[0].playerClass === 'Cleric') {
      PLAYERS[0].hp--;
      console.log(PLAYERS[1]);
    }


  }

}
