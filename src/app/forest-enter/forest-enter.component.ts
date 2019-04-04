import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PLAYERS } from '../playerInfo';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-forest-enter',
  templateUrl: './forest-enter.component.html',
  styleUrls: ['./forest-enter.component.scss'],
  providers: [PlayerService]
})
export class ForestEnterComponent implements OnInit {
 playerToDisplay: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(latestData => {
       this.playerToDisplay = new Player (latestData[latestData.length - 1].name,
                                          latestData[latestData.length - 1].playerClass,
                                          latestData[latestData.length - 1].inventory)
       console.log(this.playerToDisplay)
    if(this.playerToDisplay.playerClass !== "rogue" && !this.playerToDisplay.inventory.includes("rope")){
      this.playerToDisplay.hp--;
    }
    console.log(this.playerToDisplay)
    })
  }
}
