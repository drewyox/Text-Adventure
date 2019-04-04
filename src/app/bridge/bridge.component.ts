import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PLAYERS } from '../playerInfo';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss'],
  providers: [PlayerService]
})
export class BridgeComponent implements OnInit {
  playerToDisplay: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(latestData => {
       this.playerToDisplay = new Player (latestData[latestData.length - 1].name,
                                          latestData[latestData.length - 1].playerClass,
                                          latestData[latestData.length - 1].inventory)
       console.log(this.playerToDisplay)
     })
  }

}
