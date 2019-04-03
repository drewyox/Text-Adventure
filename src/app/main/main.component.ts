import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { PLAYERS } from '../playerInfo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newPlayer: Player = new Player (null, null, null);
  submitForm(){
    PLAYERS.push(this.newPlayer);
    console.log(PLAYERS)

  }
  constructor() { }

  ngOnInit() {
  }

}


// form.controls['playerClass'].value;
