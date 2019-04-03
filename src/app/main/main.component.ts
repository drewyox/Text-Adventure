import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  submitForm(newname: string, newplayerClass: string, newinventory: string[]){
    const character: Player = new Player( newname, newplayerClass, newinventory);
    console.log(character)

  }
  constructor() { }

  ngOnInit() {
  }

}
