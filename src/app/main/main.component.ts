import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
// import { FormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { PLAYERS } from '../playerInfo';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PlayerService]
})
export class MainComponent implements OnInit {

  newPlayer: Player = new Player (null, null, []);
  // submitForm(){
  //   PLAYERS.push(this.newPlayer);
  //   console.log(PLAYERS[1])
  // }
  submitForm(newPlayer: Player) {
    this.playerService.addPlayer(this.newPlayer)
    console.log(this.newPlayer);
    console.log(this.playerService.getPlayer())
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}


// form.controls['playerClass'].value;
