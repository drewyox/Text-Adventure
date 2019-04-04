import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PlayerService]
})
export class MainComponent implements OnInit {
  playerToDisplay: Player;

  players: FirebaseListObservable<any[]>;

  newPlayer: Player = new Player (null, null, []);

  submitForm(newPlayer: Player) {
    this.playerService.addPlayer(this.newPlayer)
  }

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
