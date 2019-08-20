import { Component, OnInit } from '@angular/core';
import { PlayerDataService, State } from '../player-data.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  interval: any;
  playerNumber: number;
  // state: State;
  wait: number;
  player1turn: number;
  player2turn: number;
  player1won: number;
  player2won: number;
  draw: number;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    const xCoor = this.playerData.x;
    const yCoor = this.playerData.y; 

    // this.state = this.playerData.responseData.State;

    this.wait = this.playerData.responseData.State.Wait;
    this.player1turn = this.playerData.responseData.State.Player1Turn;
    this.player2turn = this.playerData.responseData.State.Player2Turn;
    this.player1won = this.playerData.responseData.State.Player1Won;
    this.player2won = this.playerData.responseData.State.Player2Won;
    this.draw = this.playerData.responseData.State.Draw;

    this.playerNumber = this.playerData.responseData.Players.length;
    this.interval = setInterval(() => {
      this.playerData.state();
    }, 500);
  }

  onState() {
    
  }

}
