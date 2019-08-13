import { Component, OnInit } from '@angular/core';
import { PlayerDataService, GridSymbol } from '../player-data.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid: number[];
  gridSymbols: GridSymbol;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  onGameOn() {
    
  }

}
