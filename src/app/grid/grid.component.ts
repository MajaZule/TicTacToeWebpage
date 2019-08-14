import { Component, OnInit } from '@angular/core';
import { PlayerDataService, GridSymbol, State, StateData } from '../player-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  name = '';
  cellState: State;
  cellSymbol: GridSymbol;
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    this.name = this.playerData.player; 
  }

  onCellClick() {
    this.grid = [1, 1, 1, 1, 1, 1, 1, 2, 1];
    console.log(this.grid);
    // this.playerData.playing();
  }

}
