import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PLAYERS } from '../playerInfo';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss']
})
export class BridgeComponent implements OnInit {
  player: Player = PLAYERS[1];

  constructor() { }

  ngOnInit() {
    console.log(this.player);

    // if (this.player.playerClass === 'barbarian') {
    //   this.player.inventory.push("another sword");
    //   console.log(this.player);
    // }


  }

}
