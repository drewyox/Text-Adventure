import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-defend',
  templateUrl: './defend.component.html',
  styleUrls: ['./defend.component.scss'],
  providers: [PlayerService]
})
export class DefendComponent implements OnInit {
  playerToDisplay: Player;
  indexPositionofItem;
  randomItemArray: string[] = ["potion", "rope", "10 gold", "rusty Helm", "old food", "quill and paper", "holy symbol" ];

  constructor(private playerService: PlayerService) { }


  ngOnInit() {
    this.playerService.getPlayer().subscribe(latestData => {
      this.playerToDisplay = new Player (latestData[latestData.length - 1].name,
        latestData[latestData.length - 1].playerClass,
        latestData[latestData.length - 1].inventory)
        console.log(this.playerToDisplay)
      })

    if(this.playerToDisplay.inventory.indexOf("sword") >= 0){
    this.indexPositionofItem = this.playerToDisplay.inventory.indexOf("sword");
    }
    else if (this.playerToDisplay.inventory.indexOf("bow") >= 0){
      this.indexPositionofItem = this.playerToDisplay.inventory.indexOf("bow");
    }

    if(!this.playerToDisplay.inventory.includes('sword') && !this.playerToDisplay.inventory.includes('bow')){
      this.playerToDisplay.hp--;
      console.log(this.playerToDisplay);
    }
    this.playerToDisplay.inventory.push(this.randomItemArray[Math.floor(Math.random()*this.randomItemArray.length)-1])
    console.log(this.playerToDisplay.inventory)

    
  }

}
