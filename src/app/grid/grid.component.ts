import { Component, OnInit } from '@angular/core';
import { PlayerDataService, StateData } from '../player-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  interval: any;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {}

  onState() {
    console.log(this.playerData.responseData);
    const playerNumber = this.playerData.responseData.Players.length;
    console.log(playerNumber);
    
    if (playerNumber === 2) {
      this.interval = setInterval(() => {
        this.playerData.state();
      }, 500);
    }
  }

}
