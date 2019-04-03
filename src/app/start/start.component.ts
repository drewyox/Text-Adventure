import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../playerInfo';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
 players = PLAYERS[0];

  constructor() { }

  ngOnInit() {
    console.log();
  }

}
