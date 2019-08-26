import { Component, OnInit } from '@angular/core';
import { PlayerDataService, StateType } from '../player-data.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  interval: any;
  playerNumber: number;
  state : StateType;
  isFirstPlayer : boolean;
  yourTurn : boolean;
  opponentsTurn : boolean;
  playerName: string;
  gridSymbol: number[];
  symbolX: string;
  symbolO: string;
  player1;
  player2;
  value: string;
  coorX: number;
  coorY: number;
  x: number;
  y: number;

  constructor(private playerService: PlayerDataService) { }

  ngOnInit() {
    this.playerNumber = this.playerService.responseData.Players.length;
    this.playerName = this.playerService.playerName;
    this.gridSymbol = this.playerService.responseData.GridSymbol;
    this.symbolX = 'X';
    this.symbolO = 'O';

    this.player1 = {name: this.playerName[0], symbol: 'X'};
    this.player2 = {name: this.playerName[1], symbol: 'O'};
    
    this.interval = setInterval(() => {
      this.playerService.state();
      this.onStateChanged();    
    }, 500);
  }

  onGridClick(x, y) {
    console.log("Clicked on x:" + x + ",y:" + y);
    this.playerService.action(x, y);
    this.coorX = x;
    this.coorY = y;
    this.updateBoard(event);
  }

  onStateChanged() {
    this.state = this.playerService.responseData.State;
    this.isFirstPlayer = this.playerService.playerName === this.playerService.responseData.Players[0];
    this.yourTurn = (this.state === StateType.Player1Turn && this.isFirstPlayer) || (this.state == StateType.Player2Turn && !this.isFirstPlayer);
    this.opponentsTurn = (this.state === StateType.Player2Turn && this.isFirstPlayer) || (this.state == StateType.Player1Turn && !this.isFirstPlayer);
  }

  updateBoard(event: any) {
    this.value = event.target.value = '';

    if (this.isFirstPlayer && StateType.Player1Turn) {
      this.value = this.player1.symbol;
    } else if (!this.isFirstPlayer && StateType.Player2Turn) {
      this.value = this.player2.symbol;
    }
  }

}
