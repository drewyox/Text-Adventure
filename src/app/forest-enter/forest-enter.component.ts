import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PLAYERS } from '../playerInfo';

@Component({
  selector: 'app-forest-enter',
  templateUrl: './forest-enter.component.html',
  styleUrls: ['./forest-enter.component.scss']
})
export class ForestEnterComponent implements OnInit {
 player: Player = PLAYERS[1];
  constructor() { }

  ngOnInit() {
    if(this.player.playerClass !== "rogue" && !this.player.inventory.includes("rope")){
      this.player.hp--;
    }
    console.log(this.player)
  }

}
