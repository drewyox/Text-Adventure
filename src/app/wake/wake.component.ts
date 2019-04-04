import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-wake',
  templateUrl: './wake.component.html',
  styleUrls: ['./wake.component.scss'],
  providers: [PlayerService]
})
export class WakeComponent implements OnInit {
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
