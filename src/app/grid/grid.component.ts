import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  firstPlayerName: string;
  secondPlayerName: string;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    this.firstPlayerName = this.playerData.loginUserOne;
    this.secondPlayerName = this.playerData.loginUserTwo;
    console.log(this.firstPlayerName);
    console.log(this.secondPlayerName);
  }

}
