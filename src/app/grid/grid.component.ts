import { Component, OnInit } from '@angular/core';
import { PlayerDataService, StateType } from '../player-data.service';
import { Action } from 'rxjs/internal/scheduler/Action';
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

  constructor(private playerService: PlayerDataService) { }

  ngOnInit() {
    this.playerNumber = this.playerService.responseData.Players.length;
    this.playerName = this.playerService.playerName;
    
    this.interval = setInterval(() => {
      this.playerService.state();
      this.onStateChanged();    
    }, 500);
  }

  onGridClick(x : number, y : number)  {
    console.log("Clicked on x:" + x + ",y:" + y);
    this.playerService.action(x, y);
  }

  onStateChanged() {
    this.state = this.playerService.responseData.State;
    this.isFirstPlayer = this.playerService.playerName === this.playerService.responseData.Players[0];
    this.yourTurn = (this.state === StateType.Player1Turn && this.isFirstPlayer) || (this.state == StateType.Player2Turn && !this.isFirstPlayer);
    this.opponentsTurn = (this.state === StateType.Player2Turn && this.isFirstPlayer) || (this.state == StateType.Player1Turn && !this.isFirstPlayer);
  }

}
