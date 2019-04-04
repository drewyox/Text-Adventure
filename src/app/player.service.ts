import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './playerInfo';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  testPlayer: Player;

  players: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.players = database.list('players');
 }

  getPlayer() {
    return this.players;
  }
  addPlayer(player: Player) {
    this.players.push(player);
  }

  getPlayerById(playerId: string){
    return this.database.object('/players/' + playerId);
  }

  updatePlayer(localUpdatePlayer) {
    var firebasePlayerEntry = this.getPlayerById(localUpdatePlayer.$key);
    // firebasePlayerEntry.update({name: localUpdatePlayer.name});
    console.log(firebasePlayerEntry);
  }


 //  newMethod(){
 //  this.players.subscribe(latestData => {
 //     this.testPlayer = new Player (latestData[latestData.length - 1].name,
 //                                        latestData[latestData.length - 1].playerClass,
 //                                        latestData[latestData.length - 1].inventory)
 //     console.log(this.testPlayer)
 //     return this.testPlayer;
 //     NOT SURE WHY THIS ISNT WORKING, NEEDS INVESTIGATION
 //   })
 // }
}
