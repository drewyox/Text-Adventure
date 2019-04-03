import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newPlayer: Player = new Player (null, null, null);
  submitForm(){
    // this.newPlayer.name = newname;
    // this.newPlayer.playerClass = newplayerClass;
    // this.newPlayer.inventory = newinventory
    console.log(this.newPlayer)

  }
  constructor() { }

  ngOnInit() {
  }

}


// form.controls['playerClass'].value;
