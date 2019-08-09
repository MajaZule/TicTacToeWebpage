import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  name: string;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    this.name = this.playerData.loginUser;
    console.log(this.name);
  }

}
